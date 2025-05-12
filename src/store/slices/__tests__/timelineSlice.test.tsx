import reducer, { setSelectedDate, setActiveCoaches } from '../timelineSlice';
import { Coach } from '@/store/types/coach';

describe('timelineSlice', () => {
  let initialState: { selectedDate: number; activeCoaches: Coach[] };

  beforeEach(() => {
    initialState = {
      selectedDate: Date.now(),
      activeCoaches: [],
    };
  });

  it('should handle initial state', () => {
    const state = reducer(undefined, { type: '@@INIT' });
    expect(state.selectedDate).toBeDefined();
    expect(state.activeCoaches).toEqual([]);
  });

  describe('setSelectedDate', () => {
    it('should update the selectedDate in the state', () => {
      const newDate = 1640995200000;
      const action = setSelectedDate(newDate);
      const state = reducer(initialState, action);

      expect(state.selectedDate).toBe(newDate);
    });
  });

  describe('setActiveCoaches', () => {
    it('should update the activeCoaches in the state', () => {
      const mockCoaches: Coach[] = [
        { name: 'Coach A', startDate: '2021-01-01', endDate: '2022-01-01', team: 'Team A' },
        { name: 'Coach B', startDate: '2020-01-01', endDate: '2021-01-01', team: 'Team B' },
      ];

      const action = setActiveCoaches(mockCoaches);
      const state = reducer(initialState, action);

      expect(state.activeCoaches).toEqual(mockCoaches);
    });

    it('should handle an empty array of activeCoaches', () => {
      const action = setActiveCoaches([]);
      const state = reducer(initialState, action);

      expect(state.activeCoaches).toEqual([]);
    });
  });
});