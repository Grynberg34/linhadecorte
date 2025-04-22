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