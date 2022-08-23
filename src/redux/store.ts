import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import xoxReducer from './xoxSlice';

export const store = configureStore({
  reducer: {
    xox: xoxReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
