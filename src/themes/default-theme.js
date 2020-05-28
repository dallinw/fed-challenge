const primaryFont = 'Open Sans';

const Theme = {
  colors: {
    text: 'rgba(46, 49, 52, 0.8)', // #2e3134 80%
    darkText: 'rgba(46, 49, 52, 1.0)', // #2e3134 100%
    primary: 'rgba(0, 105, 210, 1.0)', // #0069d2 100%
    white: 'rgba(255, 255, 255, 1.0)', // #ffffff 100%
    offWhite: 'rgba(242, 242, 242, 1.0)', // #f2f2f2 100%
    offWhite32: 'rgba(244, 245, 247, 0.32)', // #f4f5f7 32%
    gray: 'rgba(52, 56, 60, 1.0)', // #34383c 100%
    lightGray: 'rgba(213, 214, 214, 1.0)', // #d5d6d6 100%
    mediumGray: 'rgba(151, 151, 151, 1.0)', // #979797 100%
    slateGray: 'rgba(88, 90, 93, 1.0)', // #585a5d 100%
    darkGray: 'rgba(0, 12, 40, 1.0)', // #000c28 100%
    overlayGray: 'rgba(0, 12, 40, 0.543025)', // #000c28 54%
    blackMask: 'rgba(0, 0, 0, 0.4)',
    highlightGreen: 'rgba(40, 225, 166, 1.0)', // #28e1a6 100%
    boxShadow: '0px 1px 2px rgba(46, 49, 52, 0.4)',
    boxShadowSecondary: '0px 1px 1px rgba(0, 0, 0, 0.24), 0px 0px 1px rgba(0, 0, 0, 0.12)',
    boxShadowHeavy: '0px 7px 12px rgba(46, 49, 52, 0.3)',
    boxShadowFooter: '0px 2px 5px rgba(0, 0, 0, 0.05)'
  },
  type: {
    fontFamily: primaryFont,
    h1: `600 72px/90px ${primaryFont}`,
    h2: `600 50px/60px ${primaryFont}`,
    h3: `600 28px/30px ${primaryFont}`,
    h4: `600 24px/28px ${primaryFont}`,
    h5: `700 16px/18px ${primaryFont}`,
    header: `600 14px/14px ${primaryFont}`,
    body: `400 16px/24px ${primaryFont}`,
    bodySemibold: `600 16px/24px ${primaryFont}`,
    bodyBold: `700 14px/16px ${primaryFont}`,
    bodyXS: `700 10px/12px ${primaryFont}`
  }
};

export default Theme;
