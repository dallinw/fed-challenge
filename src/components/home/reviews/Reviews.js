import React from 'react';
import ReviewCard from './ReviewCard';
import ReviewScrollButtons from './ReviewScrollButtons';
import { makeStyles } from '@material-ui/styles';
import { StaticReviewData } from '../../../static';
import Theme from '../../../themes';

const useStyles = makeStyles({
  reviews: {
    position: 'relative'
  },
  carousel: {
    backgroundColor: Theme.colors.offWhite32,
    borderRadius: '2px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    margin: '0px',
    maxWidth: '100%',
    maxHeight: '232px',
    overflow: 'hidden',
    padding: '0px',
    scrollBehavior: 'smooth'
  }
});

export default function Reviews() {
  const classes = useStyles();
  const containerRef = React.createRef(); // ref for reviews parent
  const cardRefs = [];

  /********************************
   * Handlers
   ********************************/

  const handleScroll = shouldScrollRight => {
    if (containerRef.current) {
      const cardToScrollTo = shouldScrollRight
        ? cardRefs.find(card => card.current.getBoundingClientRect().right > window.innerWidth)
        : cardRefs.find(
            card =>
              card.current.getBoundingClientRect().left < 0 && card.current.getBoundingClientRect().left > 0 - window.innerWidth
          );
      if (cardToScrollTo) {
        containerRef.current.scrollLeft += cardToScrollTo.current.getBoundingClientRect().left;
      } else {
        containerRef.current.scrollLeft = shouldScrollRight
          ? 0
          : cardRefs[cardRefs.length - 1].current.getBoundingClientRect().right;
      }
    }
  };

  return (
    <section className={classes.reviews}>
      <ul className={classes.carousel} ref={containerRef}>
        {StaticReviewData.map((review, index) => {
          const ref = React.createRef();
          cardRefs.push(ref);
          return <ReviewCard ref={cardRefs[index]} {...review} key={index} />;
        })}
      </ul>
      <ReviewScrollButtons handler={handleScroll} />
    </section>
  );
}
