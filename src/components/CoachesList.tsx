import React, { useState } from 'react';
import { CoachesListProps } from '../store/types/coach';
import Grid from "@mui/material/Grid";
import CoachesItem from "@/components/CoachesItem";

const CoachesList: React.FC<CoachesListProps> = ({ categories }) => {

  const [zoom, setZoom] = useState(0.5);

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.1, 1));
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.2));
  };

  return (
    <div className='coaches'>


      <div className="coaches__zoom">
        <button className='coaches__zoom__button' onClick={handleZoomOut}>-</button>
        <span className='coaches__zoom__text'>ZOOM</span>
        <button className='coaches__zoom__button' onClick={handleZoomIn}>+</button>
      </div>

      <div className='coaches'
        style={{
        transform: `scale(${zoom})`,
        transformOrigin: 'top left',
        transition: 'transform 0.2s ease-in-out',
      }}>
        <div className='coaches__list__section'>
          <Grid container spacing={4}>

            {categories.moreThan730.map(({ coach, days }, index) => (
              <Grid size={{ xs: 3, sm: 2 }} key={index}>
                <CoachesItem coach={coach} days={days} />
              </Grid>
            ))}

          </Grid>

          <h3 className='coaches__list__section__text'>2 anos no cargo</h3>

        </div>

        <div className='coaches__list__section'>

          <Grid container spacing={4}>

            {categories.between365And730.map(({ coach, days }, index) => (
              <Grid size={{ xs: 3, sm: 2 }} key={index}>
                <CoachesItem coach={coach} days={days} />
              </Grid>
            ))}

          </Grid>

          <h3 className='coaches__list__section__text'>1 ano no cargo</h3>

        </div>

        <div className='coaches__list__section'>

          <Grid container spacing={4}>

            {categories.between180And365.map(({ coach, days }, index) => (
              <Grid size={{ xs: 3, sm: 2 }} key={index}>
                <CoachesItem coach={coach} days={days} />
              </Grid>
            ))}

          </Grid>

          <h3 className='coaches__list__section__text'>6 meses no cargo</h3>

        </div>

        <div className='coaches__list__section'>

          <Grid container spacing={4}>

            {categories.between90And180.map(({ coach, days }, index) => (
              <Grid size={{ xs: 3, sm: 2 }} key={index}>
                <CoachesItem coach={coach} days={days} />
              </Grid>
            ))}

          </Grid>

          <h3 className='coaches__list__section__text'>3 meses no cargo</h3>

        </div>

        <div className='coaches__list__section'>

          <Grid container spacing={4}>

            {categories.lessThan90.map(({ coach, days }, index) => (
              <Grid size={{ xs: 3, sm: 2 }} key={index}>
                <CoachesItem coach={coach} days={days} />
              </Grid>
            ))}

          </Grid>
        </div>
      </div>

    </div>
  );
};

export default CoachesList;