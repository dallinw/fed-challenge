import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Theme from '../../../themes';

const useStyles = makeStyles({
  card: {
    alignItems: 'center',
    backgroundColor: Theme.colors.white,
    borderRadius: '4px',
    boxShadow: Theme.colors.boxShadow,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '24px',
    maxWidth: '440px',
    padding: '40px 48px'
  },
  iconContainer: {
    margin: '0px',
    maxWidth: '108px',
    padding: '0px'
  },
  text: {
    display: '-webkit-box',
    font: Theme.type.body,
    marginBottom: '2px',
    overflow: 'hidden',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    width: '280px'
  }
});

const ReviewCard = React.forwardRef(({ icon, text }, ref) => {
  const classes = useStyles();
  return (
    <li className={classes.card} ref={ref}>
      <div className={classes.iconContainer}>
        <img src={icon} alt={text} />
      </div>
      <p className={classes.text}>{text}</p>
    </li>
  );
});

export default ReviewCard;
