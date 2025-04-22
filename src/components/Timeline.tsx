import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '@mui/material/Slider';
import { RootState, AppDispatch } from '../store/store';
import { setSelectedDate, setActiveCoaches } from '../store/slices/timelineSlice';
import { generateMarks } from '../utils/timelineUtils';
import { findCoachesForDate } from '../store/selectors/timelineSelectors';

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

  return (
    <div>
      <Slider
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
      <div>
        {activeCoaches.length > 0 ? (
          <ul>
            {activeCoaches.map((coach, index) => (
              <li key={index}>
                <strong>{coach.name}</strong> (Team: {coach.team}, Start: {coach.startDate}, End: {coach.endDate || 'Present'})
              </li>
            ))}
          </ul>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default TimelineComponent;