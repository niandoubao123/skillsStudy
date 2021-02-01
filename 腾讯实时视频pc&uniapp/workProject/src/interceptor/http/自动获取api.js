const http = require('http');
const fs = require('fs');
const path = require('path');
let resultStr = '';
const request = http.request({
  host: 'wx.hobairiku.site',
  port: '7001',
  path: '/server/index.php?s=/api/item/info',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}, function (res) {
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    //响应内容
    resultStr += chunk;
  });
  res.on('end', function () {
    let content = 'export default ' + updateApis(JSON.parse(resultStr));
    fs.writeFileSync(path.resolve(__dirname, './apis.js'), content);
  });
});
request.write('item_id=30&keyword=&default_page_id=2130');
request.end();
/**
 * 从 api 管理平台上获取原始菜单数据，打印出以上 api 数据
 * @param source
 */
function updateApis(source) {
  let apis = {};
  let pages = [];
  getPage(source.data.menu);
  function getPage (target) {
    target.pages.forEach(item => {
      pages.push(item);
      if (item.catalogs) {
        item.catalogs.forEach(item => {
          getPage(item);
        });
      }
    });
    if (target.catalogs) {
      target.catalogs.forEach(item => {
        getPage(item);
      });
    }
  }
  pages.forEach(item => {
    let uri = item.page_uri.replace(/^.+\s/, '')
      .replace(/\/$/, '')
      .replace(/\s/g, '')
      .replace(/\.htm$/, '');
    let type = item.page_uri.match(/^(.+)\s/);
    if (!type) {
      // if (item.page_uri) {
      //   throw new Error('uri中无法匹配出请求的类型，请检查：' + item.page_uri)
      // }
      // return
      type = ['', 'POST']; // 这里高速的项目全部都是POST的，默认POST
    }
    type = type[1].replace(/\s/g, '');
    // 这里改一下直接用uri就好；
    let name = uri;
    // let name = type + uri.replace(/\{\w+\}/g, '')
    //   .replace(/\s/g, '')
    //   .replace(/\/\//g, '/')
    //   .replace(/\/$/, '')
    //   .replace(/\.htm$/, '').replace(/\/\w/g, function (match) {
    //   return match.replace('\/', '').toUpperCase()
    // })

    // 有一些相同的接口 ，会分布在不同的目录里，这种情况会存在有 uri，但是却没有 input和 output 的情况
    if (apis[name]) {
      apis[name].pageId = [apis[name].pageId, item.page_id];
      let time = new Date(parseInt(item.addtime + '000'));
      if (time.getTime() > new Date(apis[name].updateTime).getTime()) {
        apis[name].pageId.updateTime = time.format('yyyy/MM/dd hh:mm:ss');
      }
    } else {
      apis[name] = {
        uri: uri,
        pageId: item.page_id,
        page_uri: item.page_uri,
        title: item.page_title,
        type: type,
        // updateTime: new Date(parseInt(item.addtime + '000')).format('yyyy/MM/dd hh:mm:ss')
      };
    }
  });
  return JSON.stringify(apis, null, 2);
}
Date.prototype.format = function (fmt) {
  let o = {
    'M+': this.getMonth() + 1,                      // 月份
    'd+': this.getDate(),                           // 日
    'h+': this.getHours(),                          // 小时
    'm+': this.getMinutes(),                        // 分
    's+': this.getSeconds(),                        // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3),    // 季度
    'S': this.getMilliseconds()                     // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return fmt;
};
