// import reducer from './rootReducer';
import { logger } from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REGISTER,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import favoriteDogReducer from './favorites/favoritesReducer'
import dogReducer from './dog/dogReducer';
import likeDogs from './likesDogReducer/likesDogReducer'
// const contactsPersistConfig = {
//   key: 'dog',
//   storage,
// };
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE],
    },
  }),
  logger,
];
// const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//     contactReducer: reducer,
//     error,
//     loading
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });
const store = configureStore({
  reducer: {
    dog: dogReducer,

    favorite: favoriteDogReducer,
    likes: likeDogs
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);
export default store;
