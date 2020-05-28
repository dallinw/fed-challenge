import * as Icons from '../assets/socials';

const StaticFooterColumns = [
  ['Company', 'About', 'Contact Us', 'Careers'],
  ['Account', 'Log in', 'Create Account'],
  ['Support', 'Help Center', 'Accessibility']
];

const StaticFooterSocials = [
  {
    alt: 'Youtube',
    icon: Icons.Youtube,
    to: 'https://youtube.com'
  },
  {
    alt: 'Pinterest',
    icon: Icons.Pinterest,
    to: 'https://pinterest.com'
  },
  {
    alt: 'Facebook',
    icon: Icons.Facebook,
    to: 'https://facebook.com'
  },
  {
    alt: 'Twitter',
    icon: Icons.Twitter,
    to: 'https://twitter.com'
  },
  {
    alt: 'Instagram',
    icon: Icons.Instagram,
    to: 'https://instagram.com'
  }
];

export { StaticFooterColumns, StaticFooterSocials };
