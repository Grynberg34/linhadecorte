import { Coach } from '../store/types/coach';


export const calculateDaysInCharge = (startDate: string, selectedDate: number): number => {
  const start = new Date(startDate.split('/').reverse().join('-'));
  const selected = new Date(selectedDate);

  const diffTime = Math.abs(selected.getTime() - start.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const categorizeCoachesByDays = (coaches: Coach[], selectedDate: number) => {
  const categories = {
    lessThan90: [] as { coach: Coach; days: number }[],
    between90And180: [] as { coach: Coach; days: number }[],
    between180And365: [] as { coach: Coach; days: number }[],
    between365And730: [] as { coach: Coach; days: number }[],
    moreThan730: [] as { coach: Coach; days: number }[],
  };

  const selectedDateObj = new Date(selectedDate);

  coaches.forEach((coach) => {
    if (coach.endDate) {
      const endDateObj = new Date(coach.endDate.split('/').reverse().join('-'));
      if (
        endDateObj.getFullYear() === selectedDateObj.getFullYear() &&
        endDateObj.getMonth() === selectedDateObj.getMonth()
      ) {
        return;
      }
    }

    const daysInCharge = calculateDaysInCharge(coach.startDate, selectedDate);
    const coachWithDays = { coach, days: daysInCharge };

    if (daysInCharge < 90) {
      categories.lessThan90.push(coachWithDays);
    } else if (daysInCharge >= 90 && daysInCharge < 180) {
      categories.between90And180.push(coachWithDays);
    } else if (daysInCharge >= 180 && daysInCharge < 365) {
      categories.between180And365.push(coachWithDays);
    } else if (daysInCharge >= 365 && daysInCharge < 730) {
      categories.between365And730.push(coachWithDays);
    } else {
      categories.moreThan730.push(coachWithDays);
    }
  });

  return categories;
};