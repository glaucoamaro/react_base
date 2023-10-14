import { combineReducers } from 'redux';
import userReducer from './modules/user/reducer';

const rootReducer = combineReducers({ userReducer });

export default rootReducer;
