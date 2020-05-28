import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProductRoutes } from '../../constants';
import { makeStyles } from '@material-ui/styles';
import Theme from '../../themes';

const useStyles = makeStyles({
  header: {
    width: '100%',
    height: '47px',
    display: 'flex',
    borderBottom: `1px solid ${Theme.colors.lightGray}`
  },
  navLink: {
    padding: '16px 40px',
    font: Theme.type.header,
    color: Theme.colors.text,
    textDecoration: 'none',
    textTransform: 'uppercase',
    borderWidth: '0px 1px',
    border: `solid ${Theme.colors.lightGray}`,
    boxSizing: 'border-box',
    '&:hover': {
      opacity: '0.6'
    }
  }
});

export default function ProductNav() {
  const classes = useStyles();
  return (
    <>
      <header className={classes.header}>
        {Object.values(ProductRoutes).map((route, index) => {
          return (
            <NavLink className={classes.navLink} to={route.route} exact={route.exact} key={index}>
              {route.label}
            </NavLink>
          );
        })}
      </header>
    </>
  );
}
