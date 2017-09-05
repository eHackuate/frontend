import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import io from 'socket.io-client';

class Admin extends Component {
  componentWillMount() {
    this.socket = io('http://app.erfan.space');
    // this.socket = io('http://backend.ehackuate.tech');
    // this.socket = io('http://localhost:8080');
  }

  componentWillUnmount() {
    this.socket.close();
  }

  createIncident = () => {
    this.socket.emit('incident', 'Are you okay? (Yes/No)');
  }

  render() {
    return (
      <div>
        <RaisedButton label="🚨 Incident" onClick={this.createIncident} />
      </div>
    );
  }
}

export default Admin;
