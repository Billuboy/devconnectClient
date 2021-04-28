import { GET_POSTS, GET_POST } from '../actions/actionTypes';

export const postReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return { ...state, data: payload };
    case GET_POST:
      return { ...state, singlePost: payload };
    default:
      return state;
  }
};
