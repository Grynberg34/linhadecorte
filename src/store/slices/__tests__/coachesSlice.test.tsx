import reducer from '../coachesSlice';
import coachesData from '@/assets/coaches.json';
import { CoachesState } from '@/store/types/coach';

describe('coachesSlice', () => {
  let initialState: CoachesState;

  beforeEach(() => {
    initialState = {
      teams: coachesData,
    };
  });

  it('should handle initial state', () => {
    const state = reducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  it('should have the correct number of teams', () => {
    const state = reducer(undefined, { type: '@@INIT' });
    expect(state.teams.length).toBe(coachesData.length);
  });

  it('should have the correct structure for each team', () => {
    const state = reducer(undefined, { type: '@@INIT' });

    state.teams.forEach((team, index) => {
      expect(team).toHaveProperty('name');
      expect(team).toHaveProperty('coaches');
      expect(team.name).toBe(coachesData[index].name);
      expect(Array.isArray(team.coaches)).toBe(true);
    });
  });

  it('should have the correct structure for each coach', () => {
    const state = reducer(undefined, { type: '@@INIT' });

    state.teams.forEach((team, teamIndex) => {
      team.coaches.forEach((coach, coachIndex) => {
        expect(coach).toHaveProperty('name');
        expect(coach).toHaveProperty('startDate');
        expect(coach).toHaveProperty('endDate');
        expect(coach.name).toBe(coachesData[teamIndex].coaches[coachIndex].name);
        expect(coach.startDate).toBe(coachesData[teamIndex].coaches[coachIndex].startDate);
        expect(coach.endDate).toBe(coachesData[teamIndex].coaches[coachIndex].endDate);
      });
    });
  });
});