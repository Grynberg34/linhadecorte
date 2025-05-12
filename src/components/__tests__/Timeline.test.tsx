import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import TimelineComponent from '../Timeline';
import { setSelectedDate, setActiveCoaches } from '@/store/slices/timelineSlice';
import { generateMarks } from '@/utils/timelineUtils';
import { findCoachesForDate } from '@/store/selectors/timelineSelectors';

jest.mock('@/utils/timelineUtils', () => ({
  generateMarks: jest.fn(() => [
    { value: 1609459200000, label: 'Jan 2021' },
    { value: 1640995200000, label: 'Jan 2022' },
  ]),
}));

jest.mock('@/store/selectors/timelineSelectors', () => ({
  findCoachesForDate: jest.fn(() => []),
}));

describe('TimelineComponent', () => {
  let mockState: { timeline: { selectedDate: number; activeCoaches: [] }; coaches: { teams: [] } };
  let mockDispatch: jest.Mock;

  beforeEach(() => {
    mockState = {
      timeline: { selectedDate: 1640995200000, activeCoaches: [] },
      coaches: { teams: [] },
    };

    mockDispatch = jest.fn();
  });

  const renderWithProvider = (component: React.ReactNode, state: typeof mockState) => {
    const mockStore = {
      getState: () => state,
      subscribe: jest.fn(),
      dispatch: mockDispatch,
    };

    return render(<Provider store={mockStore as unknown as Store}>{component}</Provider>);
  };

  it('renders the timeline component correctly', () => {
    renderWithProvider(<TimelineComponent />, mockState);

    expect(screen.getByRole('slider')).toBeInTheDocument();

    expect(screen.getByText('Jan 2022')).toBeInTheDocument();

  });

  it('dispatches setSelectedDate when the slider value changes', () => {
    renderWithProvider(<TimelineComponent />, mockState);

    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: 1609459200000 } });

    expect(mockDispatch).toHaveBeenCalledWith(setSelectedDate(1609459200000));
  });

  it('dispatches setActiveCoaches when selectedDate or teams change', () => {
    renderWithProvider(<TimelineComponent />, mockState);

    expect(findCoachesForDate).toHaveBeenCalledWith([], 1640995200000);
    expect(mockDispatch).toHaveBeenCalledWith(setActiveCoaches([]));
  });

  it('updates the slider marks based on screen size', () => {
    renderWithProvider(<TimelineComponent />, mockState);

    expect(generateMarks).toHaveBeenCalledWith(false);
  });

  it('formats the slider value correctly', () => {
    renderWithProvider(<TimelineComponent />, mockState);

    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: 1609459200000 } });

    expect(screen.getByText('Jan 2021')).toBeInTheDocument();
  });
});