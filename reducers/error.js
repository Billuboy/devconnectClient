import { ERRORS } from '../actions/actionTypes';

export const errorReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ERRORS:
      return { ...state, data: payload };
    default:
      return state;
  }
};
