import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/nav';
import Home from './routes/home';
import Hello from './routes/hello';
import Team from './routes/team';
import Admin from './routes/admin';
import './app.css';

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path="/" component={Team} />
            <Route path="/admin" component={Admin} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
