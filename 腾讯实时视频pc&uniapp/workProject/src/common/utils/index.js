import Vue from 'vue';

let window = {};
Vue.filter('fiveMillions', function (val) {
  if (val && val !== 0) {
    let num = parseInt((val / 100) * 100) / 100;
    if (num > 0) {
      return num;
    }
    let toNum = val / 100;
    let index = 1;
    while (parseFloat(toNum.toFixed(index)) === 0) {
      index++;
    }
    toNum = toNum.toFixed(index + 1).replace(/\.?0+$/, '');
    return toNum;
    // return val
  } else {
    return val;
  }
});
Vue.filter('toFixed2', function (val) {
  let valueStr = val.toString();
  let floatNum = valueStr.split('.')[1];
  let fixedNum = 0;
  if (floatNum) {
    fixed = floatNum.length;
  }
  let value = val / 100;
  let fixed = value.toFixed(fixedNum); // 保留2位小数
  if (value === fixed) {
    return value;
  } else {
    return fixed;
  }
});
Vue.prototype.$fileUpload =
  /**
   * 通用的uni文件上传,目的是获取上传后返回的信息
   * 这里耦合高速组后台的通用上传地址
   * @param {string} filePath
   * @param {string} fieldName
   * @param {string} [other] 接口地址中的text字段
   */
  async (filePath, fieldName, other) => {
    return new Promise((ok, rej) => {
      uni.uploadFile({
        url: Vue.prototype.$config.host + 'common/upload/files.htm',
        filePath,
        name: fieldName,
        formData: {
          text: other
        },
        header: {
          sessionId: uni.getStorageSync('sessionId'),
        },
        success: res => {
          if (res.statusCode === 413) {
            rej(new Error('附件过大'));
          }
          // 我们都是json通讯的，来一下parse；
          try {
            res.data = JSON.parse(res.data);
            ok(res);
          } catch (e) {
            rej(e);
          }
        },
        fail: err => {
          rej(err);
        }
      });
    });
  };

/**
 * 用户确认操作封装
 * @param {{
 * title:string,
 * content:string,
 * showCancel:boolean,
 * cancelText:string,
 * cancelColor:string,
 * confirmText:string,
 * confirmColor:string,
 * complete:Function
 * }} object
 * @returns {Promise<{confirm:boolean,cancel:boolean}||{errMsg:string}>}
 */
Vue.prototype.$confirm = async object => {
  return await new Promise((ok, rej) => {
    const obj = Object.assign({}, object);
    obj.success = res => {
      if (res.confirm) {
        ok(res);
      } else {
        rej(res);
      }
    };
    obj.fail = error => {
      rej(error);
    };
    uni.showModal(obj);
  });
};
Vue.prototype.duration = function (val, type) {
  if (type) {
    val = parseInt(val);
    if (val >= 60 * 60 * 24) {
      let d = parseInt(val / 60 / 60 / 24);
      let h = val % (60 * 60 * 24);
      let m = h % (60 * 60);
      if (d) {
        return '' + d + '天' + parseInt(h / 60 / 60) + '小时' + parseInt(m / 60) + '分';
      } else {
        return '' + parseInt(h / 60 / 60) + '小时' + parseInt(m / 60) + '分' + (m % 60) + '秒';
      }
    } else if (val >= 60 * 60) {
      let h = parseInt(val / 60 / 60);
      let m = val % (60 * 60);
      if (h) {
        return '' + h + '小时' + parseInt(m / 60) + '分' + (m % 60) + '秒';
      } else {
        return '' + parseInt(m / 60) + '分' + (m % 60) + '秒';
      }
    } else if (val >= 60) {
      return '' + parseInt(val / 60) + '分' + (val % 60) + '秒';
    } else {
      return '' + val + '秒';
    }
  } else {
    val = parseInt(val);
    if (val >= 60) {
      return '' + parseInt(val / 60) + '时' + val % 60 + '分';
    } else {
      return '' + val + '分';
    }
  }
};
let wsOnMessage = [];
let wsOnOpen = [];
let wsStatus = [];
Vue.prototype.$window = {};
Vue.prototype.$window.utils = {
  /**
   *
   * @param saId 服务区ID
   */
  checkDuty: saId => {
    let result = false;
    if(!saId){
      result = false;
    }
    const dutyMap = uni.getStorageSync('sa_duty_map') || {};
    if(dutyMap[saId] && dutyMap[saId].isDuty){
      result = true;
    }
    if(!result){
      uni.showToast({
        title:'您未在对应服务区上岗，请先上岗后操作',
        icon: 'none',
      });
    }
    return result;
  },
  sameObj: function sameObj(o1, o2) {
    if (o1 === o2) { return true; }
    let keys1 = o1 && Object.keys(o1).sort();
    let keys2 = o2 && Object.keys(o2).sort();
    if (JSON.stringify(keys1) !== JSON.stringify(keys2)) {
      // console.log('不一样的属性: ' + JSON.stringify(keys1), JSON.stringify(keys2))
      return false;
    }
    let isSame = true;
    let len = keys1.length;
    for (let i = 0; i < len; i++) {
      let key = keys1[i];
      let item1 = o1[key];
      let item2 = o2[key];
      if (typeof item1 !== typeof item2) {
        // console.log('不一样的属性: ' + key, item1, item2)
        isSame = false;
        break;
      }
      if (isSame && typeof item1 === 'object') {
        isSame = sameObj(item1, item2);
        if (isSame) {
          continue;
        } else {
          // console.log('不一样的属性: ' + key, item1, item2)
          break;
        }
      }
      if (item1 !== item2) {
        isSame = false;
        // console.log('不一样的属性: ' + key, item1, item2)
        break;
      }
    }
    return isSame;
  },
  // 字典类型存储转换
  // 使用方法
  // util.dict.get('car_no_colour',{
  //  dictionaries_name:<想搜索的名字>
  // }).dictionaries_value;
  dict: {
    /**
     * 根据(字典类型)、(字典值或字典名)获取(字典名或字典值)
     *
     * @param type {string} 字典类型
     * @param obj {object}  字典名的对象{dictionaries_name:<想搜索的字典名>}，或字典值的对象{dictionaries_value:<想搜索的字典值>}，或者回调函数
     * @param callback {function}  回调函数
     * @returns
     */
    get(type, obj, callback) {
      let data = this.data;
      if (!obj) { return data[type] || []; }
      if (!data[type]) { return []; }
      if (obj.dictName !== undefined) {
        return data[type].find(o => o.dictName === obj.dictName) || [];
      }
      if (obj.dictValue !== undefined) {
        return data[type].find(o => o.dictValue === obj.dictValue) || [];
      }
      return [];
    },
    init(data) {
      // 初始化字典
      let result = {};
      data.forEach(item => {
        let key = item.dictKey = item.dictionariesKey;
        if (result[key]) {
          result[key] = result[key].concat(item.dictList);
        } else {
          result[key] = item.dictList;
        }
      });
      for (let key in result) {
        let item = result[key];

        // 给 item 排序，未知的都放最后
        item.forEach(i => {
          i.dictName = i.dictionariesName;
          i.dictValue = i.dictionariesValue;
          i.dictKey = i.dictionariesKey;
        });
        let unknown = item.find(o => o.dictName === '未知');
        if (!unknown) { continue; }
        item.splice(item.indexOf(unknown), 1);
        item.push(unknown);
      }
      this.data = result;
      return result;
    },

    data: []
  },
  /**
   * 使用方法
   * 1、连接某个 websocket
   */
  websocket: {
    instance: undefined,
    async open(url) {
      // if (window.utils.websocket.instance) return
      window.utils.websocket.instance = new WebSocket(url);
      window.utils.websocket.instance.addEventListener('open', e => {
        window.utils.websocket.instance.send(`{
            "sessionId": "${localStorage.sessionId}",
            "id": "${localStorage.sessionId}",
            "command": "WS.LOGIN",
            "params": {}
          }`);
        wsOnOpen.forEach(item => {
          item.callback(window.utils.websocket.instance);
        });
      });
      window.utils.websocket.instance.addEventListener('message', e => {
        if (!e.data) { return; }
        let data = JSON.parse(e.data);
        if (!data.data) { return; }
        wsOnMessage.forEach(item => {
          if (data.data.cmd === item.cmd) {
            item.callback(data.data, window.utils.websocket.instance);
          }
        });
      });
      window.utils.websocket.instance.addEventListener('close', WSClose);

      // 断线重连
      function WSClose(e) {
        console.log(
          '%c websocket %c 断线了',
          'background:#35495e;padding:1px;border-radius:3px 0 0 3px;color:#FFF',
          'background:#41b883;padding:1px;border-radius:0 3px 3px 0;color:#FFF'
        );
        if (!window.utils.websocket.instance || window.utils.websocket.instance.notReOpen) { return; }
        window.utils.websocket.instance.close();
        window.utils.websocket.instance = undefined;
        setTimeout(() => {
          console.log('试图重连', url);
          window.utils.websocket.open(url);
        }, 2000);
      }
    },
    onMessage(cmd, callback) {
      let hasSame = wsOnMessage.find(item => item.callback === callback);
      if (hasSame) { return; } // 不许重复绑定事件监听
      wsOnMessage.push({
        cmd: cmd,
        callback: callback
      });
    },
    offMessage(cmd, callback) {
      if (callback) {
        let that = wsOnMessage.find(item => item.callback === callback && item.cmd === cmd);
        if (!that) { return; }
        let index = wsOnMessage.indexOf(that);
        wsOnMessage.splice(index, 1);
      } else {
        let those = wsOnMessage.filter(item => item.cmd === cmd);
        those.forEach(item => {
          let index = wsOnMessage.indexOf(item);
          wsOnMessage.splice(index, 1);
        });
      }
    },
    onOpen(cmd, callback) {
      let hasSame = wsOnOpen.find(item => item.callback === callback);
      if (hasSame) { return; } // 不许重复绑定事件监听
      wsOnOpen.push({
        cmd: cmd,
        callback: callback
      });
    },
    offOpen(cmd, callback) {
      if (callback) {
        let that = wsOnOpen.find(item => item.callback === callback && item.cmd === cmd);
        if (!that) { return; }
        let index = wsOnOpen.indexOf(that);
        wsOnOpen.splice(index, 1);
      } else {
        let those = wsOnOpen.filter(item => item.cmd === cmd);
        those.forEach(item => {
          let index = wsOnOpen.indexOf(item);
          wsOnOpen.splice(index, 1);
        });
      }
    },
    close() {
      if (!window.utils.websocket.instance) { return; }
      window.utils.websocket.instance.notReOpen = true;
      window.utils.websocket.instance.close();
    }
  },
  setDuration(m) {
    var r = '';
    var h = 60;
    var d = 60 * 24;
    if (m > d) {
      r += parseInt(m / d) + '天';
      m = m % d;
    }
    if (m > h) {
      r += parseInt(m / h) + '小时';
      m = m % h;
    }

    if (m) {
      r += m + '分';
    }
    return r;
  },

  // 计算结束时间
  computedOverTime(type, val) {
    let overtime;
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDate();
    let h = 23;
    let m = 59;
    let s = 59;
    switch (type) {
      case 'month':
        overtime = new Date(new Date().setMonth(new Date().getMonth() - val));
        break;
      case 'day':
        overtime = new Date(new Date().setDate(new Date().getDate() - val));
        break;
      default:
        overtime = new Date(new Date(year, month, day, h, m, s).getTime());
    }
    return overtime;
  },
  // 计算时间
  computedTime(dateType, date, operationType, val, format) {
    let time;
    let now = new Date(date);
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDate();
    let h = date ? now.getHours() : 23;
    let m = date ? now.getMinutes() : 59;
    let s = date ? now.getSeconds() : 59;
    switch (dateType) {
      case 'month':
        if (operationType === '+') {
          time = new Date(now.setMonth(now.getMonth() + val)).format(format ? format : 'yyyy-MM-dd hh:mm:ss');
        } else {
          time = new Date(now.setMonth(now.getMonth() - val)).format(format ? format : 'yyyy-MM-dd hh:mm:ss');
        }
        break;
      case 'day':
        if (operationType === '+') {
          time = new Date(now.setDate(now.getDate() + val)).format(format ? format : 'yyyy-MM-dd hh:mm:ss');
        } else {
          time = new Date(now.setDate(now.getDate() - val)).format(format ? format : 'yyyy-MM-dd hh:mm:ss');
        }
        break;
      case 'hours':
        if (operationType === '+') {
          time = new Date(now.setHours(now.getHours() + val)).format(format ? format : 'yyyy-MM-dd hh:mm:ss');
        } else {
          time = new Date(now.setHours(now.getHours() - val)).format(format ? format : 'yyyy-MM-dd hh:mm:ss');
        }
        break;
      default:
        time = new Date(new Date(year, month, day, h, m, s).getTime()).format(format ? format : 'yyyy-MM-dd hh:mm:ss');
    }
    return time;
  },
  deepClone: function deepClone(obj) {
    const rootObj = {}; // 记录新的对象
    const cache = [obj]; // 引用对象数组
    const cacheNewValues = [rootObj]; // 记录对应引用的新值

    const assign = innerObj => {
      const newObj = innerObj === obj ? rootObj : {};
      Object.keys(innerObj).forEach(key => {
        const value = innerObj[key];
        const index = cache.indexOf(value);
        // 未缓存
        if (index === -1) {
          const type = Object.prototype.toString.call(value);
          if (typeof type === 'object') {
            newObj[key] = assign(value);
            // 记录引用的对象以及对应引用的新值
            cache.push(value);
            cacheNewValues.push(newObj[key]);
          } else {
            newObj[key] = value;
          }
        } else {
          // 已缓存，取对应缓存的新值
          newObj[key] = cacheNewValues[index];
        }
      });

      return newObj;
    };

    return assign(obj);
  },
  //用于生成uuid
  UUID() {
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    function guid() {
      return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
    }

    return 'cms' + guid();
  }
  // arrImages：[{fileUrl:'图片地址',renameFileName:'图片名'}]
};
// 给字典方法和工具建立一个快捷方式
Vue.prototype.$dict = Vue.prototype.$window.utils.dict;
Vue.prototype.$utils = Vue.prototype.$window.utils;

// 时间格式化
// let time1 = new Date().format("yyyy-MM-dd")
// let time2 = new Date().format("yyyy-MM-dd hh:mm:ss")
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

/**
 * 日期获取星期文字
 * @param {string} [fmt='ww'] 格式，支持'ww':周日 , 'www'：星期日
 * @returns {string}
 */
Date.prototype.getWeekDay = function (fmt) {
  const ww = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  const www = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  let f = ww;
  if (fmt === 'www') {
    f = www;
  }
  return f[this.getDay()];
};
