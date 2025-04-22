import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Coach } from '../types/coach';

interface TimelineState {
  selectedDate: number;
  activeCoaches: Coach[];
}

const initialState: TimelineState = {
  selectedDate: Date.now(),
  activeCoaches: [],
};

const timelineSlice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {
    setSelectedDate(state, action: PayloadAction<number>) {
      state.selectedDate = action.payload;
    },
    setActiveCoaches(state, action: PayloadAction<Coach[]>) {
      state.activeCoaches = action.payload;
    },
  },
});

export const { setSelectedDate, setActiveCoaches } = timelineSlice.actions;
export default timelineSlice.reducer;