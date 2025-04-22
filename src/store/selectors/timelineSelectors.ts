import { Coach, Team } from '../types/coach';

export const findCoachesForDate = (teams: Team[], timestamp: number): Coach[] => {
  const selectedDate = new Date(timestamp);
  const activeCoaches: Coach[] = [];

  teams.forEach((team: Team) => {
    team.coaches.forEach((coach: Coach) => {
      const startDate = new Date(coach.startDate.split('/').reverse().join('-'));
      const endDate = coach.endDate
        ? new Date(coach.endDate.split('/').reverse().join('-'))
        : new Date();

      if (selectedDate >= startDate && selectedDate <= endDate) {
        activeCoaches.push({ ...coach, team: team.name });
      }
    });
  });

  activeCoaches.sort((a, b) => {
    const dateA = new Date(a.startDate.split('/').reverse().join('-')).getTime();
    const dateB = new Date(b.startDate.split('/').reverse().join('-')).getTime();
    return dateA - dateB;
  });

  return activeCoaches;
};