/**
 * Track the window's scroll position and store it on the context.
 */

import React, { useState, useEffect, createContext, useContext } from 'react';
import _ from 'lodash';

const defaultValue = 0;

const ScrollContext = createContext(defaultValue);

const ScrollProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState();

  useEffect(() => {
    const handler = _.throttle(() => setScrollPosition(window.scrollY), 300);
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return <ScrollContext.Provider value={scrollPosition}>{children}</ScrollContext.Provider>;
};

function useScroll() {
  const context = useContext(ScrollContext);
  return context;
}
export { useScroll, ScrollProvider };
