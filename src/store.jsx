// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import authReducer from './redux/slices/authslice'; // Your auth slice
import { managerApi } from './redux/api/mangerapi';
import { developerApi } from './redux/api/developerApi';
import { taskApi } from './redux/api/taskApi.jsx';
import { teamApi } from './redux/api/teamApi.jsx';

const rootReducer = combineReducers({
  auth: authReducer,
  [taskApi.reducerPath]: taskApi.reducer,
  [managerApi.reducerPath]: managerApi.reducer,
  [developerApi.reducerPath]: developerApi.reducer,
   [teamApi.reducerPath]: teamApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // persist only auth slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(managerApi.middleware, developerApi.middleware , taskApi.middleware , teamApi.middleware),
});

export const persistor = persistStore(store);
