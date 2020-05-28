import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { StaticFooterColumns } from '../../../static';
import Theme from '../../../themes';

const useStyles = makeStyles({
  siteMap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    padding: '48px 0px'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  topItem: {
    color: Theme.colors.white,
    font: Theme.type.bodyBold,
    textDecoration: 'none',
    marginBottom: '16px'
  },
  item: {
    color: Theme.colors.white,
    font: Theme.type.body,
    textDecoration: 'none'
  }
});

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.siteMap}>
      {StaticFooterColumns.map((column, i) => {
        return (
          <ul className={classes.column} key={i}>
            {column.map((link, j) => {
              return (
                <a href='/' className={j === 0 ? classes.topItem : classes.item} key={j}>
                  {link}
                </a>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}
