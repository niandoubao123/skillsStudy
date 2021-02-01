export default function JsonFormat(soure, type, prop) {
  this.prop = prop || []; // 默认有 type description两个属性，可以添加更多属性，比如require
  this.alert = function (msg) {
    window.alert(msg);
  };
  switch (type) {
    case 'exampleJson': // exampleJson 的所包含的信息是最少的、缺失的
      this.setExampleJson(soure);
      break;
    case 'commentString': // commentString 是字符串类型的, 增删节点比较困难
      this.setCommentString(soure);
      break;
    case 'commentJson': // commentJson 转化为其他两种形式都比较方便
      this.setCommentJson(soure);
  }
}
/**
 * 设置 commentJson
 * @param {string, object} commentJson
 */
JsonFormat.prototype.setCommentJson = function (commentJson) {
  if (typeof commentJson === 'string') {
    try {
      commentJson = JSON.parse(commentJson);
    } catch (e) {
      console.error('commentJson的格式错误, 再检查看看?');
      return;
    }
  }
  this.commentJson = commentJson;
  this.exampleJson = this.commentJson2exampleJson(this.commentJson);
  this.commentString = this.commentJson2commentString(this.commentJson, this.exampleJson);
};
/**
 * 设置 commentString
 * @param {string} commentString
 */
JsonFormat.prototype.setCommentString = function (commentString) {
  let oldExampleJson = this.exampleJson;
  let commentJson;
  try {
    this.exampleJson = this.commentString2exampleJson(commentString);
    commentJson = this.commentString2commentJson(commentString, this.exampleJson);
  } catch (e) {
    console.log(e);
    this.exampleJson = oldExampleJson;
    if (e.message !== '数据类型不匹配') {
      this.alert('格式错误');
    }
  }
  if (commentJson) {
    this.commentJson = commentJson;
    this.commentString = commentString;
  }
};
/**
 * 设置 exampleJson
 * @param {object, string} exampleJson
 */
JsonFormat.prototype.setExampleJson = function (exampleJson) {
  if (typeof exampleJson === 'string') {
    try {
      exampleJson = eval('(' + exampleJson + ')');
    } catch (e) {
      console.error('exampleJson的格式错误, 再检查看看?');
      return;
    }
  }
  this.exampleJson = exampleJson;
  // 这里要考虑一种情况: 假如原来 commentJson 是有值的, 设置 exampleJson 之后, commentJson 的值可能会丢失
  // 为了避免 commentJson 丢失, 我们应该对比 exampleJson 的新旧值之间的差异, 选择性地更新 commentJson
  if (this.commentJson) {
    let oldExampleJson = this.commentJson2exampleJson(this.commentJson);
    let oldPath = this.getPath(oldExampleJson);
    let newPath = this.getPath(exampleJson);
    let samePath = [];
    // 更新原有节点的值, 并获取新旧路径的交集
    oldPath.forEach(item => {
      let sameItem = newPath.find(sameItem => sameItem === item);
      if (sameItem) {
        samePath.push(item);
        let pathArray = item.split('.');
        let num = pathArray.length;
        let key = pathArray[num - 1];
        if (/^\d+$/.test(key)) { return; }
        let valueObj = this.getItemFromCommentJson(this.commentJson, pathArray) || {};
        if (valueObj.type.toLowerCase() === 'array') {
          let exampleJsonValue = this.getItemByPath(exampleJson, pathArray);
          if (exampleJsonValue[0] && typeof exampleJsonValue[0] !== 'object') {
            valueObj.value = exampleJsonValue;
          }
        } else if (valueObj.type.toLowerCase() !== 'object' && valueObj.type.toLowerCase() !== 'string') {
          let exampleJsonValue = +this.getItemByPath(exampleJson, pathArray);
          if (!isNaN(exampleJsonValue)) {
            valueObj.value = exampleJsonValue;
          }
        }
        this.createCommentJsonItem(this.commentJson, pathArray, valueObj);
      }
    });
    // 根据交集, 能知道删除了哪些节点, 把已删除的节点从 commentJson 中移除
    oldPath.forEach(item => {
      if (samePath.includes(item)) { return; }
      this.deleteCommentJsonItem(this.commentJson, item.split('.'));
    });
    // 根据交集, 能知道添加了哪些节点, 把新添加的节点插入 commentJson 中
    newPath.forEach(item => {
      if (samePath.includes(item)) { return; }
      let pathArray = item.split('.');
      let key = pathArray[pathArray.length - 1];
      if (/^\d+$/.test(key)) { return; }
      let value = this.getItemByPath(exampleJson, pathArray);
      let type = typeof value;
      type = value instanceof Array ? 'array' : type;
      type = value === null ? 'null' : type;
      let valueObj = {
        type: type,
        description: key + ': ' + (typeof value === 'object' ? (type === 'array' ? '数组' : '对象') : value),
      };
      this.prop.forEach(prop => {
        valueObj[prop.name] = prop.value;
      });
      switch (type) {
        case 'object':
          valueObj.items = {};
          break;
        case 'array':
          valueObj.items = [];
          break;
        default:
          valueObj.value = value;
      }
      this.createCommentJsonItem(this.commentJson, pathArray, valueObj);
    });
    this.commentString = this.commentJson2commentString(this.commentJson, this.exampleJson);
  } else {
    this.commentString = this.exampleJson2commentString(this.exampleJson);
    this.commentJson = this.commentString2commentJson(this.commentString, this.exampleJson);
  }
};
/**
 * 根据 exampleJson 生成一个默认的 commentString
 * @param {object} exampleJson
 */
JsonFormat.prototype.exampleJson2commentString = function (exampleJson) {
  let path = this.getPath(exampleJson);
  let commentString = this.toString(exampleJson);
  path.forEach(item => {
    let pathArray = item.split('.');
    let num = pathArray.length;
    let key = pathArray[num - 1];
    if (/\d+/.test(key)) { return; }
    let reg = new RegExp('([^\\/])(\\n(\\s{' + num * 2 + '})"' + key + '")');
    let value = this.getItemByPath(exampleJson, pathArray);
    let type = typeof value;
    type = value instanceof Array ? 'array' : type;
    commentString = commentString.replace(reg, '$1\n' + '$3' + `/**
$3  * @type ${type}
$3  * @description ${key}: ${typeof value === 'object' ? (type === 'array' ? '数组' : '对象') : value}${(function(){
  let otherStr = '';
  this.prop.forEach(prop => {
    otherStr += `
$3  * @${prop.name} ${prop.value}`;
  });
  return otherStr;
}.bind(this))()}
$3  */$2`);
  });
  return commentString;
};
/**
 * 根据路径数组从某个对象里获取数据
 * @param {object} soure
 * @param {array} pathArray 要从哪个路径获取
 */
JsonFormat.prototype.getItemByPath = function (soure, pathArray) {
  let target = soure;
  pathArray.forEach(key => {
    target = target[key];
  });
  return target;
};
/**
 * 将 commentString 转化为 commentJson
 * @param {string} commentString
 * @param {object} exampleJson
 */
JsonFormat.prototype.commentString2commentJson = function (commentString, exampleJson) {
  commentString = commentString.replace(/\r/g, '\n').replace(/\n+/g, '\n');
  let path = this.getPath(exampleJson);
  let commentJson = {};
  // data.trackGeometryList.0.trackGeometry.0
  path.forEach(item => {
    let pathArray = item.split('.');
    let num = pathArray.length;
    let key = pathArray[num - 1];
    let value;
    if (/\d+/.test(key)) {
      let exampleJsonValue = this.getItemByPath(this.exampleJson, pathArray);
      if (typeof exampleJsonValue !== 'object' || (exampleJsonValue[0] && typeof exampleJsonValue[0] !== 'object')) {
        return;
      }
      value = {};
    } else {
      value = getItemFromCommentString.call(this, num, key, pathArray);
      let type = value.type && value.type.toLowerCase();
      if (type && type !== 'array' && type !== 'object' && type !== 'string') {
        if (!isNaN(+value.value)) {
          value.value = +value.value;
        }
      }
    }
    if (typeof value.value === 'object' && value.value !== null) {
      if (value.type.toLowerCase() !== 'object' && value.type.toLowerCase() !== 'array') {
        this.alert(value.description + ': 数据类型不匹配');
        throw new Error('数据类型不匹配');
      }
    }
    let type = value.type && value.type.toLowerCase();
    switch (type) {
      case 'object':
        value.items = {};
        break;
      case 'array':
        value.items = [];
        break;
      case 'number':
      case 'int':
      case 'float':
      case 'double':
        if (typeof value.value !== 'number') {
          this.alert(value.description + ': 数据类型不匹配');
          throw new Error('数据类型不匹配');
        }
        break;
      case undefined:
        value = value.value || null;
    }
    this.createCommentJsonItem(commentJson, pathArray, value);
  });
  return commentJson;
  /**
   * 依次从 commentString 中获取某个属性
   * @param {int} num 哪一个层级的属性
   * @param {string} key 属性名
   */
  function getItemFromCommentString(num, key, pathArray) {
    let reg = new RegExp(`(\\/\\*\\*((?!\\*\\/)[\\s\\S])*\\*\\/\\n+)(\\s*"${key}":\\s*([^\\n]+)\\n+)`);
    let match = commentString.match(reg);
    if (!match) {
      this.alert('匹配' + pathArray.join('.') + '时出错');
      return;
    }
    commentString = commentString.replace(reg, '$3');
    let target = match[1] || '';
    let value = (match[4] || '').replace(/,$/, '');
    let uncertaintyValue = target.match(/@value([^\n]+)\n/);
    let type = target.match(/@type([^\n]+)\n/);
    let description = target.match(/@description([^\n]+)\n/);
    let result = {
      type: type && type[1].replace(/^\s*/, ''),
      description: description && description[1].replace(/^\s*/, ''),
      value: uncertaintyValue ? uncertaintyValue[1] : value.replace(/^\s*/, '')
    };
    this.prop.forEach(prop => {
      let reg = new RegExp(`@${prop.name}([^\\n]+)\\n`);
      let value = target.match(reg);
      value = value && value[1].replace(/^\s+/, '');
      try {
        value = eval(value);
      } catch (e) {}
      if (value !== '') {
        result[prop.name] = value;
      } else {
        result[prop.name] = prop.value;
      }
    });
    if (result.type.toLowerCase() !== 'string' && /^\d+$/.test(result.value)) {
      result.value = +result.value;
    } else if (result.type.toLowerCase() === 'string') {
      try {
        result.value = eval(result.value);
      } catch (e) {}
    }
    if (result.value === 'null') {
      result.value = null;
    }
    if (!result.type) {
      result = this.getItemByPath(this.exampleJson, pathArray);
    }
    return result;
  }
};
/**
 * 向 commentJson 中添加一个节点
 * @param {object} commentJson
 * @param {array} pathArray 要添加的节点路径
 * @param {object} value 要添加的节点
 */
JsonFormat.prototype.createCommentJsonItem = function (commentJson, pathArray, value) {
  commentJson[pathArray[0]] = commentJson[pathArray[0]] || {};
  let target = commentJson[pathArray[0]],
    type = value && value.type.toLowerCase();
  pathArray.forEach((item, index) => {
    if (index === 0) { return; }
    if (!type && index === pathArray.length - 1) { return; }
    target.items = target.items || {};
    if (/\d+/.test(item)) {
      target.items[item] = target.items[item] || {};
      target = target.items[item];
    } else {
      target.items[item] = target.items[item] || {};
      target = target.items[item];
    }
  });
  if (type) {
    Object.assign(target, value);
    if (type === 'array') {
      let exampleJsonValue = this.getItemByPath(this.exampleJson, pathArray);
      if (exampleJsonValue[0] && typeof exampleJsonValue[0] !== 'object') {
        target.value = exampleJsonValue;
        delete target.items;
      }
    }
  } else {
    if (!target.type) {
      return;
    }
    if (target.type.toLowerCase() === 'array') {
      target.items = target.items || [];
      target.items.push(value);
    }
  }
  if (target.value === '') {
    delete target.value;
  }
};
/**
 * 删除 commentJson 中的一个节点
 * @param {object} commentJson
 * @param {array} pathArray 要删除的节点路径
 */
JsonFormat.prototype.deleteCommentJsonItem = function (commentJson, pathArray) {
  commentJson[pathArray[0]] = commentJson[pathArray[0]] || {};
  let target = commentJson[pathArray[0]];
  pathArray.forEach((item, index) => {
    if (index === 0) { return; }
    if (index === pathArray.length - 1) { return; }
    target = target && target.items[item];
  });
  if (target) {
    let key = pathArray[pathArray.length - 1];
    if (target.items instanceof Array && /\d+/.test(key)) {
      target.items.splice(key, 1);
    } else if (target.items) {
      delete target.items[key];
    }
  }
};
/**
 * 将 commentJson 转化为 commentString
 * @param {object} commentJson
 * @param {object} exampleJson
 */
JsonFormat.prototype.commentJson2commentString = function (commentJson, exampleJson) {
  let path = this.getPath(exampleJson);
  let commentString = this.toString(exampleJson);
  path.forEach(item => {
    let pathArray = item.split('.');
    let num = pathArray.length;
    let key = pathArray[num - 1];
    if (/\d+/.test(key)) { return; }
    let reg = new RegExp('([^\\/])(\\n(\\s{' + num * 2 + '})"' + key + '")');
    let target = this.getItemFromCommentJson(commentJson, pathArray);
    commentString = commentString.replace(reg, '$1\n' + '$3' + `/**
$3  * @type ${target.type}
$3  * @description ${target.description}${(function(){
  let otherStr = '';
  this.prop.forEach(prop => {
    otherStr += `
$3  * @${prop.name} ${target.hasOwnProperty(prop.name) ? target[prop.name] : prop.value}`;
  });
  return otherStr;
}.bind(this))()}
$3  */$2`);
  });
  return commentString;
};
/**
 * 从 commentJson 中获取某个属性
 * @param {object} commentJson
 * @param {array} pathArray
 */
JsonFormat.prototype.getItemFromCommentJson = function (commentJson, pathArray) {
  let target = commentJson;
  pathArray.forEach((item, index) => {
    // 最顶级数据、数组的元素
    if (!target.type || typeof target.type !== 'string') {
      target = target[item] || (target.items && target.items[item]) || target.value;
    } else if (target.type.toLowerCase() === 'array' || target.items instanceof Array) {
      if (target.type.toLowerCase() !== 'array') {
        target.type = 'Array';
      }
      if (target.items && !(target.items instanceof Array)) {
        target.items = [{
          items: target.items
        }];
        target = target.items[item].items;
      } else if (!target.items) {
        target = target.value || null;
      } else {
        target = target.items[item].items;
      }
    } else {
      target = (target.items && target.items[item]) || target.value || null;
    }
  });
  return target;
};
/**
 * 将 commentJson 转化为 exampleJson
 * @param {object} commentJson
 */
JsonFormat.prototype.commentJson2exampleJson = function (commentJson) {
  let exampleJson = {};
  getExampleJson(commentJson, exampleJson);
  return exampleJson;
  function getExampleJson(currentCommentJson, currentExampleJson) {
    for (let key in currentCommentJson) {
      let item = currentCommentJson[key];
      switch (item.type) {
        case 'Object':
        case 'object':
          currentExampleJson[key] = {};
          getExampleJson(item.items, currentExampleJson[key]);
          break;
        case 'Array':
        case 'array':
          if (item.items instanceof Array) {
            let itemsLen = item.items.length;
            let currentNode = currentExampleJson[key] = [];
            item.items.forEach(item => {
              currentNode.push({});
              getExampleJson(item.items, currentNode[currentNode.length - 1]);
            });
          } else if (item.items) {
            // 旧数据中array的items仍然是object
            currentExampleJson[key] = [{}];
            getExampleJson(item.items, currentExampleJson[key][0]);
          } else {
            currentExampleJson[key] = item.value || null;
          }
          break;
        default:
          currentExampleJson[key] = item.value;
      }
    }
  }
};
/**
 * 将 commentString 转化为 exampleJson
 * @param {string} commentString
 */
JsonFormat.prototype.commentString2exampleJson = function (commentString) {
  return eval('(' + commentString + ')');
};
/**
 * 获取对象的所有属性路径
 * 比如对象 {a: {b: 1}, c: [{d: 1}]} 所有属性路径为 ['a', 'a.b', 'c', 'c.0', 'c.0.d']
 * @param {object} obj
 */
JsonFormat.prototype.getPath = function (obj) {
  let path = [];
  getPath(obj, '', path);
  function getPath(obj, prefix, path) {
    for (let key in obj) {
      let currentPath = (prefix + '.' + key).replace(/^\./, '');
      path.push(currentPath);
      let item = obj[key];
      if (item && typeof item === 'object') {
        getPath(item, currentPath, path);
      }
    }
  }
  return path;
};
/**
 * 转化为格式化好了的Json字符串
 * @param {string, object} soure
 */
JsonFormat.prototype.toString = function (soure) {
  try {
    if (typeof soure === 'string') {
      return JSON.stringify(JSON.parse(soure), null, 2);
    } else {
      return JSON.stringify(soure, null, 2);
    }
  } catch (e) {
    return soure;
  }
};