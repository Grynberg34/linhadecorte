import React from 'react';
import { Coach } from '../store/types/coach';


interface CoachesItemProps {
  coach: Coach;
  days: number;
}

const CoachesList: React.FC<CoachesItemProps> = ({ coach, days }) => {
  
  return (
    <div className={`coaches__list__section__item ${coach.team}`}>

      <img className='coaches__list__section__item__img' src={`/times/${coach.team}.png`} alt="" />
      <h1 className='coaches__list__section__item__title'>{coach.name}</h1>
      <h2 className='coaches__list__section__item__subtitle'>{days < 1 ? 'menos de um dia' : `${days} ${days === 1 ? 'dia' : 'dias'}`}</h2>

    </div>
  );
};

export default CoachesList;