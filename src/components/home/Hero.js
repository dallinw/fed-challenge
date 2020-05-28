import React from 'react';
import { makeStyles } from '@material-ui/styles';
import HeroImage from '../../assets/hero/gmapsinworkout.png';
import Theme from '../../themes';
import { useBreakpoint } from '../../utils';

const useStyles = makeStyles({
  parent: {
    backgroundImage: `url(${HeroImage})`,
    padding: '340px 100px',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  mask: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    left: '0px',
    position: 'absolute',
    top: '0px',
    width: '100%',
    backgroundColor: Theme.colors.blackMask
  },
  '@keyframes animateText': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-40px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  },
  text: {
    color: Theme.colors.white,
    font: props => (props.breakpoints.md || props.breakpoints.sm ? Theme.type.h2 : Theme.type.h1),
    textAlign: 'center',
    maxWidth: '984px',
    animation: `$animateText 2s`
  },
  button: {
    backgroundColor: Theme.colors.primary,
    borderRadius: '4px',
    boxShadow: Theme.colors.boxShadowSecondary,
    border: 'none',
    color: Theme.colors.white,
    cursor: 'pointer',
    font: Theme.type.header,
    padding: '21px 82px',
    textTransform: 'uppercase'
  }
});

export default function Hero() {
  const breakpoints = useBreakpoint();
  const classes = useStyles({ breakpoints: breakpoints });
  return (
    <div className={classes.parent}>
      <div className={classes.mask}>
        <h1 className={classes.text}>The best personal training, right in your own home</h1>
        <button className={classes.button}>join fit coach</button>
      </div>
    </div>
  );
}
