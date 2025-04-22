import React from 'react';
import { CoachesListProps } from '../store/types/coach';

const CoachesList: React.FC<CoachesListProps> = ({ categories }) => {
  return (
    <div>
      <div>
        <ul>
          {categories.moreThan730.map(({ coach, days }, index) => (
            <li key={index}>
              <strong>{coach.name}</strong> ({coach.team} - desde {coach.startDate}) -{' '}
              {days < 1 ? 'menos de um dia' : `${days} ${days === 1 ? 'dia' : 'dias'}`}
            </li>
          ))}
        </ul>
        <h3>2 anos</h3>
      </div>

      <div>
        <ul>
          {categories.between365And730.map(({ coach, days }, index) => (
            <li key={index}>
              <strong>{coach.name}</strong> ({coach.team} - desde {coach.startDate}) -{' '}
              {days < 1 ? 'menos de um dia' : `${days} ${days === 1 ? 'dia' : 'dias'}`}
            </li>
          ))}
        </ul>
        <h3>1 anos</h3>
      </div>

      <div>
        <ul>
          {categories.between180And365.map(({ coach, days }, index) => (
            <li key={index}>
              <strong>{coach.name}</strong> ({coach.team} - desde {coach.startDate}) -{' '}
              {days < 1 ? 'menos de um dia' : `${days} ${days === 1 ? 'dia' : 'dias'}`}
            </li>
          ))}
        </ul>
        <h3>6 meses</h3>
      </div>

      <div>
        <ul>
          {categories.between90And180.map(({ coach, days }, index) => (
            <li key={index}>
              <strong>{coach.name}</strong> ({coach.team} - desde {coach.startDate}) -{' '}
              {days < 1 ? 'menos de um dia' : `${days} ${days === 1 ? 'dia' : 'dias'}`}
            </li>
          ))}
        </ul>
        <h3>3 meses</h3>
      </div>

      <div>
        <ul>
          {categories.lessThan90.map(({ coach, days }, index) => (
            <li key={index}>
              <strong>{coach.name}</strong> ({coach.team} - desde {coach.startDate}) -{' '}
              {days < 1 ? 'menos de um dia' : `${days} ${days === 1 ? 'dia' : 'dias'}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoachesList;