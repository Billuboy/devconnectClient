import { GET_ALL_PROFILES, GET_PROFILE_HANDLE } from '../actions/actionTypes';

export const devsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_ALL_PROFILES:
      return { ...state, data: payload };
    case GET_PROFILE_HANDLE:
      return { ...state, profile: payload };
    default:
      return state;
  }
};
