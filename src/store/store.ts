import { configureStore } from '@reduxjs/toolkit';
import coachesReducer from './slices/coachesSlice';
import timelineReducer from './slices/timelineSlice';

export const store = configureStore({
  reducer: {
    coaches: coachesReducer,
    timeline: timelineReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;