import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import types from './action-types';

export const req = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

export function* exReq() {
  try {
    yield call(req);
    yield put(actions.userSuccess());
  } catch {
    toast.error('error');
    yield put(actions.userFail());
  }
}

export default all([takeLatest(types.REQUEST, exReq)]);
