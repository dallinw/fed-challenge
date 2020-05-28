import React from 'react';
import { makeStyles } from '@material-ui/styles';
import FooterLegal from './FooterLegal';
import FooterSiteMap from './FooterSiteMap';
import FooterSocials from './FooterSocials';
import Theme from '../../../themes';

const useStyles = makeStyles({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Theme.colors.darkText,
    boxShadow: Theme.colors.boxShadowFooter
  }
});

export default function Footer() {
  const classes = useStyles();
  return (
    <section className={classes.footer}>
      <FooterSiteMap />
      <FooterSocials />
      <FooterLegal />
    </section>
  );
}
