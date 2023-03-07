import { postLocalStorage, getLocalStorage } from 'lib/api';

const authenticationService = {
  logIn: function (params = {}) {
    return getLocalStorage(params);
  },
  logOut: function (params = {}) {
    return postLocalStorage(params);
  },
  signUp: function (params = {}) {
    return postLocalStorage(params);
  },
  checkAuth: function (params = {}) {
    return getLocalStorage(params);
  }
}

export default authenticationService;
