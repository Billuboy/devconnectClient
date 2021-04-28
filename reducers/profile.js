import {
  GET_PROFILE,
  GET_PROFILE_ID,
  DELETE_PROFILE,
  DELETE_EDUCATION,
  DELETE_EXPERIENCE,
} from '../actions/actionTypes';

export const profileReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_PROFILE:
      return { ...state, data: payload };
    case GET_PROFILE_ID:
      return { ...state, profile: payload };
    case DELETE_EDUCATION:
      return { ...state, data: payload };
    case DELETE_EXPERIENCE:
      return { ...state, data: payload };
    case DELETE_PROFILE:
      return { ...state, data: {} };
    default:
      return state;
  }
};
