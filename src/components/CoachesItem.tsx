import React, { useEffect, useState } from 'react';
import { Coach } from '../store/types/coach';


interface CoachesItemProps {
  coach: Coach;
  days: number;
  zoom: number;
}

const CoachesList: React.FC<CoachesItemProps> = ({ coach, days, zoom }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className={`coaches__list__section__item ${coach.team}`}                 
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = `scale(${1 / zoom})`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = `scale(1)`;
    }}
    >
      <h1 className='coaches__list__section__item__title'>{coach.name}</h1>

      <img className='coaches__list__section__item__img' src={`/times/${coach.team}.png`} alt="" />

      <h2 className='coaches__list__section__item__subtitle'>{days < 1 ? 'menos de um dia' : `${days} ${days === 1 ? 'dia' : 'dias'}`}</h2>

      <h3 className='coaches__list__section__item__text'>desde {coach.startDate}</h3>
      
    </div>
  );
};

export default CoachesList;