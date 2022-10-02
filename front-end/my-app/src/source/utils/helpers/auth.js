import _ from 'lodash';
import Promise from 'bluebird';
import { request } from 'helpers/request';

export default class Auth {

  static deauthenticateUser() {
    localStorage.removeItem('token');
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  static setToken(token) {
    localStorage.setItem('token', token);
  }

  static setAuthorization(authorizations) {
    localStorage.setItem('authorization', JSON.stringify(authorizations));
  }

  static checkOperationCodeExists(operationCode) {

    // let authorizations = JSON.parse(localStorage.getItem('authorization'));
    // if (Array.isArray(operationCode)) {
    //   let isAuthorized = false;
    //   operationCode.forEach((i) => {
    //     if (!isAuthorized) {
    //       isAuthorized = this.checkOperationCodeExists(i)
    //     }
    //   });
    //   return isAuthorized;
    // } else {
    //   let objOperationCode = _.find(authorizations, (i) => { return i.OperationCode == operationCode })
    //   return objOperationCode ? true : false;
    // }

    return new Promise((resolve, reject) => {

      request("hr/auth/checkAuthorized", {
        method: "POST",
        body: JSON.stringify({
          'OperationCode': operationCode
        }),
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then((response) => {

        if (response.completed && response.data.success) {

          resolve(response.data.payload.isAuthorized);
        } else {

          resolve(false);
        }
      });
    });
  }

  static checkUserAuthorized(operationCode, callback, component) {

    if (!operationCode || (Array.isArray(operationCode) && operationCode.length == 0)) {

      callback(null, component);

    } else {

      this.checkOperationCodeExists(operationCode).then((isAuthorized) => {

        if (isAuthorized) {

          callback(null, component);

        } else {

          window.location.replace("/#/notauthorized")
        }
      })
    }
  }

  static isAuthorized(operationCode) {

    return new Promise((resolve, reject) => {

      this.checkOperationCodeExists(operationCode).then((isAuthorized) => {

        resolve(isAuthorized);
      })
    })
  }

  static getAuthorizedInfo(operationCodes) {

    return new Promise((resolve, reject) => {

      request("hr/auth/getAuthorizeInfo", {
        method: "POST",
        body: JSON.stringify({
          'OperationCode': operationCodes
        }),
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then((response) => {

        if (response.completed && response.data.success) {

          resolve(response.data.payload.authorizeInfo);

        } else {

          resolve(false);
        }
      });

    })
  }

  static isUserAuthenticated() {

    return this.getToken() != null;
  }

  static checkAuthorizedFromArray(authorizedArray, operationCode) {

    let authorize = _.find(authorizedArray, (i) => { return i.operationCode == operationCode && i.isAuthorized });
    if (authorize)
      return true;
    return false
  }
}