import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CoachesItem from '../CoachesItem';
import { Coach } from '@/store/types/coach';

describe('CoachesItem Component', () => {
  const mockCoach: Coach = {
    name: 'Coach A',
    startDate: '2023-01-01',
    endDate: '2023-03-01',
    team: 'Team A',
  };

  it('renders the coach name and days correctly', () => {
    render(<CoachesItem coach={mockCoach} days={60} />);

    expect(screen.getByText('Coach A')).toBeInTheDocument();

    expect(screen.getByText('60 dias')).toBeInTheDocument();
  });

  it('renders "menos de um dia" when days is less than 1', () => {
    render(<CoachesItem coach={mockCoach} days={0} />);

    expect(screen.getByText('menos de um dia')).toBeInTheDocument();
  });
});