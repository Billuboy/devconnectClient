import jwt_decode from 'jwt-decode';

import api from '../api/api';
import apiConfig from '../api/axiosConfig';
import { SIGN_IN, SIGN_OUT, REGISTER_USER, ERRORS } from './actionTypes';

export const loginAction = (data, history) => async dispatch => {
  try {
    const response = await api.post('/user/login', data);
    const { token } = response.data;

    localStorage.setItem('jwtToken', token);
    apiConfig(token);
    const tokenInfo = jwt_decode(token);

    dispatch({
      type: SIGN_IN,
      payload: tokenInfo,
    });
    history.push('/dashboard');
  } catch (err) {
    dispatch({
      type: ERRORS,
      payload: err.response.data,
    });
  }
};

export const logoutAction = () => (dispatch, getState) => {
  localStorage.removeItem('jwtToken');
  apiConfig(undefined);
  getState().profile = {};
  getState().error = {};
  dispatch({
    type: SIGN_OUT,
  });
};

export const registerUser = (data, history) => async dispatch => {
  try {
    await api.post('/user/register', data);
    history.push('/login');
  } catch (err) {
    dispatch({
      type: ERRORS,
      payload: err.response.data,
    });
  }
};
