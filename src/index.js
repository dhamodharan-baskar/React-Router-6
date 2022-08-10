import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <HistoryRouter history={history}>
    <App />
  </HistoryRouter>
);

