import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '@mui/material/Slider';
import { RootState, AppDispatch } from '../store/store';
import { setSelectedDate, setActiveCoaches } from '../store/slices/timelineSlice';
import { generateMarks } from '../utils/timelineUtils';
import { categorizeCoachesByDays } from '../utils/dateUtils';
import CoachesList from './CoachesList';
import { findCoachesForDate } from '@/store/selectors/timelineSelectors';

const TimelineComponent = () => {
  const dispatch: AppDispatch = useDispatch();

  const { teams } = useSelector((state: RootState) => state.coaches);
  const { selectedDate, activeCoaches } = useSelector((state: RootState) => state.timeline);

  const marks = generateMarks();

  const handleChange = (event: Event, value: number) => {
    dispatch(setSelectedDate(value));
  };

  useEffect(() => {
    const activeCoaches = findCoachesForDate(teams, selectedDate);
    dispatch(setActiveCoaches(activeCoaches));
  }, [selectedDate, teams, dispatch]);

  const categories = categorizeCoachesByDays(activeCoaches, selectedDate);

  const formattedDate = new Date(selectedDate).toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className='timeline'>
      <div className='timeline__header'>
      <Slider
        className='timeline__header__slider'
        defaultValue={marks[marks.length - 1].value}
        step={null}
        marks={marks}
        min={marks[0].value}
        max={marks[marks.length - 1].value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => {
          const date = new Date(value);
          return `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
        }}
      />
      </div>

      <h1 className='timeline__title'>{formattedDate}</h1>

      <CoachesList categories={categories} />
    </div>
  );
};

export default TimelineComponent;