import api from './api';

export default function header(token) {
  if (token) {
    api.defaults.headers['Authorization'] = token;
  } else {
    delete api.defaults.headers['Authorization'];
  }
}
