export interface CoachesState {
    teams: Team[];
}

export interface Coach {
    name: string;
    startDate: string;
    endDate: string | null;
    team?: string;
}
  
export interface Team {
    name: string;
    coaches: Coach[];
}

export interface CoachesListProps {
  categories: {
    lessThan90: { coach: Coach; days: number }[];
    between90And180: { coach: Coach; days: number }[];
    between180And365: { coach: Coach; days: number }[];
    between365And730: { coach: Coach; days: number }[];
    moreThan730: { coach: Coach; days: number }[];
  };
}
