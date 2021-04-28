import {
  GET_PROFILE,
  GET_PROFILE_ID,
  DELETE_PROFILE,
  DELETE_EDUCATION,
  DELETE_EXPERIENCE,
  ERRORS,
} from './actionTypes';
import api from '../api/api';

export const getProfile = () => async dispatch => {
  try {
    const response = await api.get('/profile');
    dispatch({
      type: GET_PROFILE,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERRORS,
      payload: err.response.data,
    });
  }
};

export const getProfileById = id => async dispatch => {
  try {
    const response = await api.get(`/profile/user/${id}`);
    dispatch({
      type: GET_PROFILE_ID,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERRORS,
      payload: err.response.data,
    });
  }
};

export const postProfile = (data, history) => async (dispatch, getState) => {
  try {
    await api.post('/profile', data);
    getState().error = {};
    history.push('/');
  } catch (err) {
    dispatch({
      type: ERRORS,
      payload: err.response.data,
    });
  }
};

export const postExperience = (data, history) => async dispatch => {
  try {
    await api.post('/profile/experience', data);
    history.push('/dashboard');
  } catch (err) {
    dispatch({
      type: ERRORS,
      payload: err.response.data,
    });
  }
};

export const postEducation = (data, history) => async dispatch => {
  try {
    await api.post('/profile/education', data);
    history.push('/dashboard');
  } catch (err) {
    dispatch({
      type: ERRORS,
      payload: err.response.data,
    });
  }
};

export const deleteProfile = () => async (dispatch, getState) => {
  if (
    window.confirm(
      'This will delete your account permanently. This cannot be undone!!! '
    )
  ) {
    try {
      await api.delete('/profile');
      dispatch({ type: DELETE_PROFILE });
      getState().profile = {};
    } catch (err) {
      dispatch({
        type: ERRORS,
        payload: err.response.data,
      });
    }
  }
};

export const deleteExperience = id => async dispatch => {
  if (window.confirm('Do you want to delete this record?')) {
    try {
      const response = await api.delete(`/profile/experience/${id}`);
      dispatch({
        type: DELETE_EXPERIENCE,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: ERRORS,
        payload: err.response.data,
      });
    }
  }
};

export const deleteEducation = id => async dispatch => {
  if (window.confirm('Do you want to delete this record?')) {
    try {
      const response = await api.delete(`/profile/education/${id}`);
      dispatch({
        type: DELETE_EDUCATION,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: ERRORS,
        payload: err.response.data,
      });
    }
  }
};
