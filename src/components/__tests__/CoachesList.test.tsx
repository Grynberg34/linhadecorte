import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CoachesList from '../CoachesList';
import { CoachesListProps } from '@/store/types/coach';

jest.mock('../CoachesItem', () => jest.fn(() => <div data-testid="coaches-item">Mocked Coach Item</div>));

describe('CoachesList Component', () => {
  const mockCategories: CoachesListProps['categories'] = {
    lessThan90: [
      { coach: { name: 'Coach A', startDate: '2023-01-01', endDate: '2023-03-01', team: 'Team A' }, days: 60 },
    ],
    between90And180: [
      { coach: { name: 'Coach B', startDate: '2022-01-01', endDate: '2022-06-01', team: 'Team B' }, days: 120 },
    ],
    between180And365: [
      { coach: { name: 'Coach C', startDate: '2021-01-01', endDate: '2021-12-31', team: 'Team C' }, days: 300 },
    ],
    between365And730: [
      { coach: { name: 'Coach D', startDate: '2020-01-01', endDate: '2021-12-31', team: 'Team D' }, days: 700 },
    ],
    moreThan730: [
      { coach: { name: 'Coach E', startDate: '2018-01-01', endDate: '2020-12-31', team: 'Team E' }, days: 1000 },
    ],
  };

  it('renders all categories with their respective coaches', () => {
    render(<CoachesList categories={mockCategories} />);

    expect(screen.getByText('mais de 2 anos no cargo')).toBeInTheDocument();
    expect(screen.getByText('mais de 1 ano no cargo')).toBeInTheDocument();
    expect(screen.getByText('mais de 6 meses no cargo')).toBeInTheDocument();
    expect(screen.getByText('mais de 3 meses no cargo')).toBeInTheDocument();

    expect(screen.getAllByTestId('coaches-item')).toHaveLength(5);
  });

  it('renders an empty state when no coaches are provided', () => {
    const emptyCategories: CoachesListProps['categories'] = {
      lessThan90: [],
      between90And180: [],
      between180And365: [],
      between365And730: [],
      moreThan730: [],
    };

    render(<CoachesList categories={emptyCategories} />);

    expect(screen.queryByTestId('coaches-item')).not.toBeInTheDocument();
  });
});