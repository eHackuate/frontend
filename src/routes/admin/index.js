import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import io from 'socket.io-client';

class Admin extends Component {
  componentWillMount() {
    this.socket = io('http://localhost:8080');
  }

  componentWillUnmount() {
    this.socket.close();
  }

  handleCal = () => {
    this.socket.emit('calendar');
  }

  render() {
    return (
      <RaisedButton label="Calendar" onClick={this.handleCal} />
    );
  }

}

export default Admin;
