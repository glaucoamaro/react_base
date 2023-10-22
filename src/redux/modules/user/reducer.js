import userActionTypes from './action-types';

const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.SUCCESS:
      console.log('success');
      return state;
    case userActionTypes.FAIL:
      console.log('fail');
      return state;
    case userActionTypes.REQUEST:
      console.log('request');
      return state;
    default:
      return state;
  }
};

export default userReducer;
