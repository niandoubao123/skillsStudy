/**
 * 将一个 output 数据，按照一定的规律拓展它，让它变成一个有规律随机的模拟数据
 * @param output
 */
let id = 0;
export default function (output, input) {
  let result;
  id = 0;
  if (output instanceof Array) {
    result = [];
    expandArray(output, result, input);
  } else {
    result = {};
    expandObj(output, result, input);
  }
  if (result.hasOwnProperty('total') && result.hasOwnProperty('rows')) {
    result.total = result.rows.length * parseInt(Math.random() * 100);
  }
  return result;
}
function expandObj(obj, result, input = {}) {
  Object.keys(obj).forEach(key => {
    let item = obj[key];
    if (item instanceof Array) {
      result[key] = [];
      expandArray(item, result[key], input);
    } else if (typeof item === 'object') {
      result[key] = {};
      expandObj(item, result[key]);
    } else {
      result[key] = mock(key, item);
    }
  });
}
function expandArray(arr, result, input = {}) {
  let length = input.pSize || parseInt(Math.random() * 15);
  arr.forEach(item => {
    for (let i = 0; i < length; i++) {
      if (item instanceof Array) {
        let resultItem = [];
        result.push(resultItem);
        expandArray(item, resultItem);
      } else if (typeof item === 'object') {
        let resultItem = {};
        result.push(resultItem);
        expandObj(item, resultItem);
      } else {
        result.push(mock(null, item));
      }
    }
  });
}
function mock(key, value) {
  let Enum = window.utils.dict.data[key.charAt(0).toUpperCase() + key.slice(1)];
  if (Enum) {
    return Enum[parseInt(Enum.length * Math.random())].dictValue;
  }
  if (/^(?:on|off)$/.test(value)) {
    return value;
  }
  if (/plateNumber/.test(key)) {
    return '桂A' + parseInt(Math.random() * 999999);
  }
  if (/Id$/.test(key)) {
    id++;
    return 'Id-' + id;
  }
  if (/Code$/.test(key)) {
    id++;
    return 'Code-' + id;
  }
  if (/Key$/.test(key)) {
    id++;
    return 'Key-' + id;
  }
  if (/Time$/.test(key) && value.includes(':')) {
    return new Date(new Date().getTime() - parseInt(Math.random() * 1000 * 60 * 60 * 24)).format('yyyy-MM-dd hh:mm:ss');
  }
  if (/Ip$/.test(key)) {
    return `${parseInt(Math.random() * 100)}.${parseInt(Math.random() * 100)}.${parseInt(Math.random() * 100)}.${parseInt(Math.random() * 100)}`;
  }
  if (/Name$/.test(key)) {
    return randomText(2) + '-' + value;
  }
  if (/Phone$/.test(key)) {
    return '1887895' + (999 + parseInt(Math.random() * 9000));
  }
  if (typeof value === 'string') {
    if (/\d/.test(value)) {
      return value.replace(/\d/g, function () {
        return parseInt(Math.random() * 10);
      });
    }
    return value + randomText(1);
  }
  if (typeof value === 'number') {
    return parseInt(Math.random() * Math.pow(10, value.toString().length));
  }
}
function randomText(len) {
  let i = 0;
  let str = '';
  let base = 20000;
  let range = 1000;
  while (i < len) {
    i++;
    let lower = parseInt(Math.random() * range);
    str += String.fromCharCode(base + lower);
  }
  return str;
}