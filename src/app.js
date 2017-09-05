import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/nav';
import Team from './routes/team';
import Admin from './routes/admin';
import Incident from './routes/incidents';
import './app.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        <Route path="/incidents" component={Incident} />
        <Route path="/admin" component={Admin} />
        {/* last resort render root */}
        <Route path="/" component={Team} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
