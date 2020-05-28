import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Theme from '../../../themes';
import { StaticFooterSocials } from '../../../static';

const useStyles = makeStyles({
  footerSocials: {
    borderWidth: '2px 0px',
    border: `solid ${Theme.colors.slateGray}`,
    boxSizing: 'borderBox',
    padding: '16px 0px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconBacking: {
    width: '40px',
    height: '40px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    margin: '0px 16px',
    position: 'relative',
    background: `linear-gradient(135deg, ${Theme.colors.primary} 0%, ${Theme.colors.highlightGreen} 100%)`,
    '&:hover': {
      opacity: '0.6'
    }
  },
  iconInner: {
    position: 'absolute',
    top: '2px',
    left: '2px',
    height: '36px',
    width: '36px',
    borderRadius: '18px',
    backgroundColor: Theme.colors.darkText,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: '24px'
  }
});

const IconBar = () => {
  const classes = useStyles();
  return (
    <>
      {StaticFooterSocials.map((social, index) => {
        return (
          <button className={classes.iconBacking} key={index}>
            <div className={classes.iconInner}>
              <img src={social.icon} alt={social.alt} />
            </div>
          </button>
        );
      })}
    </>
  );
};

export default function FooterSocials() {
  const classes = useStyles();
  return (
    <div className={classes.footerSocials}>
      <IconBar />
    </div>
  );
}
