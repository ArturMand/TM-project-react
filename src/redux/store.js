import { configureStore, combineReducers } from '@reduxjs/toolkit';
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
import CurrencySlice from './Currency/slice/CurrencySlice';
import storage from 'redux-persist/lib/storage';
import authReducer from './Auth/authSlice';
import transactionsSlice from './Transactions/transactionsSlice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token', 'currency'],
};

// const rootReducer = combineReducers({token: authReducer, currency: CurrencySlice})

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    transactions: transactionsSlice,
    currency: CurrencySlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
