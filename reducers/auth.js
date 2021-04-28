import { SIGN_IN, SIGN_OUT, REGISTER_USER } from '../actions/actionTypes';

export const authReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return { ...state, isAuthorized: true, user: payload };
    case SIGN_OUT:
      return { ...state, isAuthorized: false, user: {} };
    case REGISTER_USER:
      return { ...state, user: {} };
    default:
      return state;
  }
};
