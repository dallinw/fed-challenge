import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Theme from '../../../themes';
import Select from 'react-select';

const useStyles = makeStyles({
  footer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px'
  },
  legalFooter: {
    display: 'flex'
  },
  legalText: {
    color: Theme.colors.white,
    marginRight: '8px',
    font: Theme.type.body
  },
  legalLink: {
    color: Theme.colors.white,
    font: Theme.type.bodySemibold,
    marginRight: '8px',
    textDecoration: 'none',
    '&:hover': {
      opacity: '0.6'
    }
  },
  select: {
    position: 'absolute',
    backgroundColor: `${Theme.colors.text} !important`,
    width: '150px',
    color: Theme.colors.white,
    font: Theme.type.bodyBold,
    border: 'none !important',
    boxShadow: Theme.colors.boxShadowLight,
    '& div': {
      color: 'inherit',
      backgroundColor: 'inherit',
      border: 'inherit'
    }
  },
  flexFiller: {
    width: '150px'
  }
});

const languageOptions = [
  { value: 'English', label: 'English' },
  { value: 'Spanish', label: 'Spanish' },
  { value: 'French', label: 'French' },
  { value: 'German', label: 'German' },
  { value: 'Chinese (Mandarin)', label: 'Chinese (Mandarin)' },
  { value: 'Russian', label: 'Russian' }
];

export default function Footer() {
  const [language, setLanguage] = useState(languageOptions[0]);
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Select
        className={classes.select}
        classNamePrefix={classes.select}
        menuPlacement='top'
        value={language}
        options={languageOptions}
        onChange={e => setLanguage(e)}
      />
      <span className={classes.legalFooter}>
        <span className={classes.legalText}>© iFit.com. All Rights Reserved.</span>
        <a href='/' className={classes.legalLink}>
          Privacy Policy
        </a>
        <a href='/' className={classes.legalLink}>
          Terms of Use
        </a>
      </span>
      <span className={classes.flexFiller} />
    </div>
  );
}
