import { createSlice } from '@reduxjs/toolkit';
import coachesData from '../../assets/coaches.json';
import { CoachesState } from '../types/coach';

const initialState: CoachesState = {
  teams: coachesData,
};

const coachesSlice = createSlice({
  name: 'coaches',
  initialState,
  reducers: {},
});

export default coachesSlice.reducer;