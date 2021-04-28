import { GET_ALL_PROFILES, GET_PROFILE_HANDLE, ERRORS } from './actionTypes';
import api from '../api/api';

export const getAllProfiles = () => async dispatch => {
  try {
    const response = await api.get('/profile/all');
    dispatch({
      type: GET_ALL_PROFILES,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERRORS,
      payload: err.response.data,
    });
  }
};

export const getProfileByHandle = handle => async dispatch => {
  try {
    const response = await api.get(`/profile/handle/${handle}`);
    dispatch({
      type: GET_PROFILE_HANDLE,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERRORS,
      payload: err.response.data,
    });
  }
};
