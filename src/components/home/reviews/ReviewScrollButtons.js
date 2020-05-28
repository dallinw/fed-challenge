import React from 'react';
import IconChevron from '../../../assets/icon-chevron.svg';
import { makeStyles } from '@material-ui/styles';
import Theme from '../../../themes';

const useStyles = makeStyles({
  mask: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%'
  },
  button: {
    backgroundColor: Theme.colors.text,
    border: `1px solid ${Theme.colors.offWhite32}`,
    borderRadius: '20px',
    boxShadow: Theme.colors.boxShadowHeavy,
    boxSizing: 'border-box',
    cursor: 'pointer',
    height: '40px',
    width: '40px',
    margin: '16px',
    '&:hover': {
      opacity: '0.6'
    }
  },
  scrollButtonRight: {
    transform: 'matrix(-1, 0, 0, 1, 0, 0)'
  }
});

export default function ReviewScrollButtons({ handler }) {
  const classes = useStyles();

  const ScrollButton = ({ isRight }) => {
    return (
      <button className={`${classes.button} ${isRight && classes.scrollButtonRight}`} onClick={() => handler(isRight)}>
        <img src={IconChevron} alt='scroll' />
      </button>
    );
  };
  return (
    <div className={classes.mask}>
      <ScrollButton />
      <ScrollButton isRight />
    </div>
  );
}
