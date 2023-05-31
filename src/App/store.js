import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authSlice from '../features/authSlice';
import { authApi } from '../AppApi/Api';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  user: authSlice,
  [authApi.reducerPath]: authApi.reducer
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [authApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, authApi.middleware),
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };