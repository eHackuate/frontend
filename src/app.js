import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/nav';
import Team from './routes/team';
import Admin from './routes/admin';
import Incident from './routes/incidents';
import './app.css';

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
