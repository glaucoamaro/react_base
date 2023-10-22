import { all } from 'redux-saga/effects';

import example from './modules/user/sagas';

export default function* rootSaga() {
  return yield all([example]);
}
