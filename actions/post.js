import { GET_POSTS, GET_POST, ERRORS } from './actionTypes';

import api from '../api/api';

export const getPosts = () => async dispatch => {
  try {
    const response = await api.get('/post');

    dispatch({
      type: GET_POSTS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERRORS,
      payload: err.response.data,
    });
  }
};

export const getPost = id => async dispatch => {
  try {
    const response = await api.get(`/post/${id}`);

    dispatch({
      type: GET_POST,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERRORS,
      payload: err.response.data,
    });
  }
};

export const postPost = data => async dispatch => {
  try {
    await api.post('/post/', data);
    dispatch(getPosts());
  } catch (err) {
    dispatch({
      type: ERRORS,
      payload: err.response.data,
    });
  }
};

export const likePost = id => async dispatch => {
  try {
    await api.post(`/post/like/${id}`);
    dispatch(getPosts());
  } catch (err) {
    dispatch({
      type: ERRORS,
      payload: err.response.data,
    });
  }
};

export const likeSinglePost = id => async dispatch => {
  try {
    await api.post(`/post/like/${id}`);
    dispatch(getPost(id));
  } catch (err) {
    dispatch({
      type: ERRORS,
      payload: err.response.data,
    });
  }
};

export const postComment = (id, data) => async dispatch => {
  try {
    await api.post(`/post/comment/${id}`, data);
    dispatch(getPost(id));
  } catch (err) {
    dispatch({
      type: ERRORS,
      payload: err.response.data,
    });
  }
};

export const deleteComment = (id, commentId, history) => async dispatch => {
  if (window.confirm('Do you want to delete this comment? ')) {
    try {
      await api.delete(`/post/comment/${id}/${commentId}`);

      dispatch(getPost(id));
    } catch (err) {
      dispatch({
        type: ERRORS,
        payload: err.response.data,
      });
    }
  }
};

export const deletePost = id => async dispatch => {
  if (window.confirm('Do you want to delete this post? ')) {
    try {
      await api.delete(`/post/${id}`);

      dispatch(getPosts());
    } catch (err) {
      dispatch({
        type: ERRORS,
        payload: err.response.data,
      });
    }
  }
};

export const deleteSinglePost = (id, history) => async dispatch => {
  if (window.confirm('Do you want to delete this post? ')) {
    try {
      await api.delete(`/post/${id}`);

      dispatch(getPost(id));
      history.push('/');
    } catch (err) {
      dispatch({
        type: ERRORS,
        payload: err.response.data,
      });
    }
  }
};
