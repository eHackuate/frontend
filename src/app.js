import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/nav';
import Home from './routes/home';
import Hello from './routes/hello';
import './app.css';

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/hello" component={Hello} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
