import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { StaticGridData } from '../../../static';
import GridCard from './GridCard';
import { useBreakpoint } from '../../../utils';

const useStyles = makeStyles({
  grid: {
    padding: props => (props.breakpoints.md || props.breakpoints.sm ? '26px 10px' : '26px 84px')
  },
  gridCards: {
    justifyContent: 'center',
    margin: '0px',
    padding: '0px',
    display: 'flex',
    maxWidth: '100%',
    overflow: 'hidden',
    flexWrap: 'wrap'
  }
});

export default function Grid() {
  const breakpoints = useBreakpoint();
  const classes = useStyles({ breakpoints: breakpoints });
  return (
    <section className={classes.grid}>
      <ul className={classes.gridCards}>
        {StaticGridData.map((cardInfo, index) => {
          return <GridCard {...cardInfo} key={index} />;
        })}
      </ul>
    </section>
  );
}
