import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Theme from '../../../themes';
import { Icons } from '../../../assets/grid';

const useStyles = makeStyles({
  card: {
    borderRadius: '4px',
    boxShadow: Theme.colors.boxShadowHeavy,
    display: 'flex',
    flexDirection: 'column',
    margin: '12px',
    transition: 'transform 0.5s, box-shadow 1s',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.02, 1.02)',
      boxShadow: Theme.colors.boxShadowFooter
    }
  },
  banner: {
    borderRadius: '4px 4px 0px 0px'
  },
  h5: {
    color: Theme.colors.darkText,
    font: Theme.type.h5,
    margin: '0px',
    padding: '0px',
    maxWidth: '220px'
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px'
  },
  spacedRow: {
    marginTop: '16px',
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between'
  },
  smallRow: {
    margin: '8px 0px 12px 0px',
    display: 'flex',
    flexWrap: 'nowrap'
  },
  avatar: {
    width: '28px',
    height: '28px',
    borderRadius: '4px'
  },
  stats: {
    marginRight: '8px',
    font: Theme.type.bodyXS,
    color: Theme.colors.darkText,
    display: 'flex',
    alignItems: 'center'
  },
  statIcon: {
    marginRight: '4px'
  },
  details: {
    font: Theme.type.bodyBold,
    color: Theme.colors.primary,
    textTransform: 'uppercase',
    textDecoration: 'none'
  },
  imageGroup: {
    position: 'relative',
    height: '164px',
    width: '288px',
    borderRadius: '4px 4px 0px 0px'
  },
  overlay: {
    borderRadius: '0px 4px 0px 0px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    right: '0px',
    top: '0px',
    width: '38%',
    height: '100%',
    backgroundColor: Theme.colors.overlayGray
  },
  numberLabel: {
    font: Theme.type.h3,
    color: Theme.colors.white,
    margin: '0px'
  },
  workoutLabel: {
    font: Theme.type.bodyXS,
    color: Theme.colors.white,
    textTransform: 'uppercase',
    margin: '8px 0px'
  }
});

export default function GridCard({ banner, avatar, title, type, to }) {
  const classes = useStyles();

  const WorkoutOverlay = ({ number }) => {
    return (
      <div className={classes.overlay}>
        <span className={classes.numberLabel}>{number}</span>
        <span className={classes.workoutLabel}>workouts</span>
        <img src={Icons.Playlist} alt='play' />
      </div>
    );
  };

  return (
    <div className={classes.card}>
      <span className={classes.imageGroup}>
        <img className={classes.banner} src={banner} alt='banner' />
        {type.type === 'workout' && <WorkoutOverlay number={type.number} />}
      </span>
      <div className={classes.cardBody}>
        <span className={classes.spacedRow}>
          <h5 className={classes.h5}>{title}</h5>
          <img className={classes.avatar} src={avatar} alt='avatar'></img>
        </span>
        {type.type === 'record' && (
          <span className={classes.smallRow}>
            <span className={classes.stats}>
              <img src={Icons.Clock} className={classes.statIcon} alt='clock' /> {type.time}
            </span>
            <span className={classes.stats}>
              <img src={Icons.Distance} className={classes.statIcon} alt='distance' /> {type.distance}
            </span>
          </span>
        )}
        {to && (
          <a href={to} className={classes.details}>
            view details
          </a>
        )}
      </div>
    </div>
  );
}
