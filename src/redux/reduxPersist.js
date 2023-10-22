import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistReducers = persistReducer(
    {
      key: 'Name_App',
      storage,
      whitelist: ['userReducer'],
    },
    reducers
  );
  return persistReducers;
};
