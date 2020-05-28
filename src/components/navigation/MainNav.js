import React, { useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import * as Pages from '../../pages';
import { MainRoutes, HomeRoute } from '../../constants';
import { makeStyles } from '@material-ui/styles';
import Theme from '../../themes';
import CoachLogo from '../../assets/ifit-coach-logo.svg';
import { useBreakpoint } from '../../utils';
import Hamburger from '../../assets/icon-hamburger.svg';

const useStyles = makeStyles({
  hamburger: {
    display: props => (props.breakpoints.md || props.breakpoints.sm ? 'unset' : 'none'),
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    marginRight: 'auto',
    '&:hover': {
      opacity: '0.6'
    }
  },
  header: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    borderBottom: `1px solid ${Theme.colors.lightGray}`,
    flexDirection: props => (props.breakpoints.md || props.breakpoints.sm ? 'column' : 'row'),
    minHeight: '73px'
  },
  logo: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexGrow: '1',
    display: 'flex',
    height: '73px',
    margin: '0px 40px'
  },
  signUp: {
    justifyContent: 'flex-end',
    flexGrow: '1',
    display: props => (props.breakpoints.md || props.breakpoints.sm ? (props.open ? 'flex' : 'none') : 'flex'),
    padding: props => (props.breakpoints.md || props.breakpoints.sm ? '15px' : '0px'),
    marginRight: props => (props.breakpoints.md || props.breakpoints.sm ? '0px' : '23px')
  },
  links: {
    alignItems: 'center',
    margin: '0px',
    padding: '0px',
    flexDirection: props => (props.breakpoints.md || props.breakpoints.sm ? 'column' : 'row'),
    display: props => (props.breakpoints.md || props.breakpoints.sm ? (props.open ? 'flex' : 'none') : 'flex')
  },
  home: {
    '&:hover': {
      opacity: '0.6'
    }
  },
  signUpButton: {
    backgroundColor: Theme.colors.primary,
    border: 'none',
    borderRadius: '4px',
    boxShadow: Theme.colors.boxShadow,
    color: Theme.colors.white,
    cursor: 'pointer',
    font: Theme.type.header,
    padding: '10px 14px',
    textTransform: 'uppercase',
    '&:hover': {
      opacity: '0.6'
    }
  },
  navLink: {
    color: Theme.colors.text,
    font: Theme.type.header,
    padding: '29px 20px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    '&:hover': {
      opacity: '0.6'
    }
  }
});

export default function MainNav() {
  const [open, setOpen] = useState(false);
  const breakpoints = useBreakpoint();
  const classes = useStyles({ breakpoints: breakpoints, open: open });

  return (
    <>
      <header className={classes.header}>
        <span className={classes.logo}>
          <button className={classes.hamburger} onClick={() => setOpen(!open)}>
            <img src={Hamburger} alt='show more' />
          </button>
          <NavLink className={classes.home} exact to={HomeRoute.route}>
            <img src={CoachLogo} alt='logo' />
          </NavLink>
        </span>
        <span className={classes.links}>
          {Object.values(MainRoutes).map((route, index) => {
            return (
              <NavLink className={classes.navLink} to={route.route} key={index}>
                {route.label}
              </NavLink>
            );
          })}
        </span>
        <span className={classes.signUp}>
          <button className={classes.signUpButton}>sign up</button>
        </span>
      </header>
      <div id='body'>
        <Route path={HomeRoute.route} exact component={Pages.Home} />
      </div>
    </>
  );
}
