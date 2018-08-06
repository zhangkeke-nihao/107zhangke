import axios from 'axios';
import { normalize } from 'normalizr';
import * as Schema from '../schema'

const API_DOMAIN = 'http://xly-wkop.xiaoniangao.cn';

const callServerApi = (endpoint, params) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: API_DOMAIN + endpoint,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: params
    }).then(res => {
      if (res.data.ret === 1) {
        return resolve(res);
      }
      return reject({ errMsg: res.data.errMsg });
    }).catch(err => {
      return reject({ errMsg: JSON.stringify(err) });
    });
  });
}

export default store => next => action => {
  if (!action.SERVER_API) {
    return next(action);
  }
  const {
    type,
    endpoint,
    params,
    normailzerFun
  } = action.SERVER_API;

  if (typeof type !== 'string') {
    throw new Error('type shoudle be a string');
  }
  if (typeof endpoint !== 'string') {
    throw new Error('endpoint shoudle be a string');
  }
  if (typeof params !== 'object') {
    throw new Error('params shoudle be a object');
  }
   const { SERVER_API, ...otherParams } = action;
  next({
    type: `${type}_REQ`,
    ...otherParams
  });

  return callServerApi(endpoint, params)
    .then(res => {
      const response = typeof (normailzerFun) !== 'undefined' ? normailzerFun(res.data) : res.data;      
      next({
        type: `${type}_SUC`,
        ...otherParams,
        response: response
      });
    }).catch(err => {
      next({
        type: `${type}_FAI`,
        ...otherParams,
        errMsg: err.errMsg
      });
    });
};
