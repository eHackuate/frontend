import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import io from 'socket.io-client';

class Admin extends Component {
  componentWillMount() {
    this.socket = io('https://app.erfan.space');
  }

  componentWillUnmount() {
    this.socket.close();
  }

  handleCal = () => {
    this.socket.emit('calendar');
  }

  createIncident = () => {
    this.socket.emit('incident');
  }

  render() {
    return (
      <div>
        <RaisedButton label="Calendar" onClick={this.handleCal} />
        <RaisedButton label="🚨 Incident" onClick={this.createIncident} />
      </div>
    );
  }

}

export default Admin;
