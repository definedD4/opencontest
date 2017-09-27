import api from './api';

export {
  login,
  logout,
  user,
  err,
  fetchAuth
};

var state = {
  user: null,
  err: null,
};

function login(email, password) {
  return api.user.login(email, password)
    .then(res => {
      return api.user.current();
    })
    .then(user => ({ user: user, err: null }))
    .catch(err => ({ user: null, err: err }))
    .then(newState => {
      state = newState;
      return newState;
    });
}

function logout() {
  return api.user.logout()
    .then(() => ({ user: null, err: null }))
    .catch(err => ({ user: null, err: err }))
    .then(newState => {
      state = newState;
      return newState;
    });
}

function user() {
  return state.user;
}

function err() {
  return state.err;
}

function fetchAuth() {
  return api.user.current()
    .then(user => ({ user: user, err: null }))
    .catch(err => ({ user: null, err: err }))
    .then(newState => {
      state = newState;
      return newState;
    });
}

fetchAuth();