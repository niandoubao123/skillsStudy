import Vue from 'vue';
if (process.env.NODE_ENV !== 'development') {
  require('./mockApi/index.js');
}
require('./http/index.js');
// Vue.prototype.http = Vue.prototype.httpMock
