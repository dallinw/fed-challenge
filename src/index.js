import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BreakpointProvider, ScrollProvider } from './utils';

const queries = {
  sm: '(max-width: 400px)',
  md: '(max-width: 850px)'
};

ReactDOM.render(
  <BreakpointProvider queries={queries}>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </BreakpointProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
