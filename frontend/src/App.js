import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {useRoutes} from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

function App() {
  const routes = useRoutes();
  return (
    <Router>
      {routes}
    </Router>
  );
}

export default App;
