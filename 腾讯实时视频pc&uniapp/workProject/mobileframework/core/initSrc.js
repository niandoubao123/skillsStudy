// 这个模块用于移动源码目录src到框架运行空间的src中，

const fs = require('fs-extra');
const path = require('path');

try {
  console.log('初始化src目录至框架目录...');
  fs.copySync(path.resolve(__dirname, '../../src/'), path.resolve(__dirname, '../src/'));
  console.log('完成src目录拷贝。');
  // 拷贝src只是为了让uni-build 能够继续运行，后续src内的文件交由框架逻辑进行管理
} catch (error) {
  console.error('初始化src目录至框架目录出错：', error);
}
