import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Theme from '../../../themes';
import { StaticEquipmentData } from '../../../static';
import EquipmentCard from './EquipmentCard';
import { useScroll } from '../../../utils';

const useStyles = makeStyles({
  equipment: {
    padding: '50px 0px'
  },
  heading: {
    font: Theme.type.h4,
    color: Theme.colors.text,
    textAlign: 'center'
  },
  equipmentCards: {
    padding: '0px',
    margin: '0px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '0.0',
    transform: 'translate(0px, -20px)',
    transition: 'opacity 1.0s ease, transform 1.5s'
  },
  showCards: {
    opacity: '1.0',
    transform: 'translate(0px, 0px)'
  }
});

export default function Equipment() {
  const [shouldShowCards, setShouldShowCards] = useState(false);
  const classes = useStyles();
  const scroll = useScroll();
  const areaRef = React.createRef();

  /**
   * Show cards once the parent is in view
   */
  useEffect(() => {
    if (areaRef.current && areaRef.current.getBoundingClientRect().top - 300 < 0) {
      setShouldShowCards(true);
    }
  }, [areaRef, scroll]);

  return (
    <section className={classes.equipment} ref={areaRef}>
      <h4 className={classes.heading}>{StaticEquipmentData.heading}</h4>
      <ul className={`${classes.equipmentCards} ${shouldShowCards && classes.showCards}`}>
        {StaticEquipmentData.body.map((equipmentCard, index) => {
          return <EquipmentCard {...equipmentCard} key={index} />;
        })}
      </ul>
    </section>
  );
}
