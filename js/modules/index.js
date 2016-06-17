'use strict';
import { combineReducers } from 'redux';
import config from './config';
// let config = require('./config'); 为啥这个就有问题呢  哎
console.log(config);
export default combineReducers({
  config
});
