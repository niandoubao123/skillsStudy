export default {
  readOnlyProxy(target, msg, force = false) {
    if (window.noProxy) { return target; }
    let self = this;
    if (target && typeof target === 'object') {
      return new Proxy(target, {
        get(target, name) {
          return self.readOnlyProxy(target[name], msg, force);
        },
        set(target, name, value) {
          if (force || (target.L && target.W && target.C)) {
            // 只限制我们的业务代码, 第三方代码限制之后可能无法正常运行
            throw new Error(msg || '不允许修改只读数据');
          }
          target[name] = value;
          return true;
        }
      });
    }
    return target;
  },
  //深度克隆
  deepClone(obj) {
    if (typeof obj === 'function') {
      return obj;
    }
    let result = {};
    if (obj instanceof Array) {
      result = [];
      obj.forEach((item, index) => {
        if (item && typeof item === 'object') {
          result[index] = this.deepClone(item);
        } else {
          result[index] = item;
        }
      });
    } else if (obj && typeof obj === 'object') {
      Object.keys(obj).forEach(key => {
        let item = obj[key];
        if (item && typeof item === 'object') {
          result[key] = this.deepClone(item);
        } else {
          result[key] = item;
        }
      });
    }
    return result;
  }
};
