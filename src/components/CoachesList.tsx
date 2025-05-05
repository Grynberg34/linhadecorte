import React from 'react';
import { CoachesListProps } from '../store/types/coach';
import Grid from "@mui/material/Grid";
import CoachesItem from "@/components/CoachesItem";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const CoachesList: React.FC<CoachesListProps> = ({ categories }) => {

  return (
    <div className='coaches'>

      <div className='coaches__list'>
        <div className='coaches__list__section'>
          <Grid container spacing={2}>

            {categories.moreThan730.map(({ coach, days }, index) => (
              <Grid size={{ xs: 12, sm:3 }} key={index}>
                <CoachesItem coach={coach} days={days} />
              </Grid>
            ))}

          </Grid>

          <h3 className='coaches__list__section__text'><KeyboardDoubleArrowUpIcon className='coaches__list__section__text--icon' /> mais de 2 anos no cargo</h3>

        </div>

        <div className='coaches__list__section'>

          <Grid container spacing={2}>

            {categories.between365And730.map(({ coach, days }, index) => (
              <Grid size={{ xs: 12, sm:3 }} key={index}>
                <CoachesItem coach={coach} days={days}  />
              </Grid>
            ))}

          </Grid>

          <h3 className='coaches__list__section__text'><KeyboardDoubleArrowUpIcon className='coaches__list__section__text--icon' /> mais de 1 ano no cargo</h3>

        </div>

        <div className='coaches__list__section'>

          <Grid container spacing={2}>

            {categories.between180And365.map(({ coach, days }, index) => (
              <Grid size={{ xs: 12, sm:3 }} key={index}>
                <CoachesItem coach={coach} days={days} />
              </Grid>
            ))}

          </Grid>

          <h3 className='coaches__list__section__text'><KeyboardDoubleArrowUpIcon className='coaches__list__section__text--icon' /> mais de 6 meses no cargo</h3>

        </div>

        <div className='coaches__list__section'>

          <Grid container spacing={2}>

            {categories.between90And180.map(({ coach, days }, index) => (
              <Grid size={{ xs: 12, sm:3 }} key={index}>
                <CoachesItem coach={coach} days={days}  />
              </Grid>
            ))}

          </Grid>

          <h3 className='coaches__list__section__text'><KeyboardDoubleArrowUpIcon className='coaches__list__section__text--icon' /> mais de 3 meses no cargo</h3>

        </div>

        <div className='coaches__list__section'>

          <Grid container spacing={2}>

            {categories.lessThan90.map(({ coach, days }, index) => (
              <Grid size={{ xs: 12, sm:3 }} key={index}>
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