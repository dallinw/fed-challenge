import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Theme from '../../../themes';

const useStyles = makeStyles({
  equipmentCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '330px',
    position: 'relative',
    width: '330px'
  },
  label: {
    position: 'absolute',
    bottom: '24px',
    font: Theme.type.h4,
    color: Theme.colors.text,
    margin: '0px',
    padding: '0px'
  }
});

export default function EquipmentCard({ label, image }) {
  const classes = useStyles();
  return (
    <div className={classes.equipmentCard}>
      <img src={image} alt={label} />
      <h4 className={classes.label}>{label}</h4>
    </div>
  );
}
