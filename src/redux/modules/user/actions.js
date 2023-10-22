import userActionTypes from './action-types';

export const userRequest = (payload) => ({
  type: userActionTypes.REQUEST,
  payload,
});

export const userFail = () => ({
  type: userActionTypes.FAIL,
});
export const userSuccess = (payload) => ({
  type: userActionTypes.SUCCESS,
  payload,
});
