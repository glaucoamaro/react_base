import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import persistedReducers from './reduxPersist';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const composedEnhancer = applyMiddleware(thunk, sagaMiddleware, logger);

const store = createStore(persistedReducers(rootReducer), composedEnhancer);

sagaMiddleware.run(rootSaga);

export const persister = persistStore(store);
export default store;
