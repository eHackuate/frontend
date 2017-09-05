import React from 'react';
import io from 'socket.io-client';
import { Switch, Route } from 'react-router-dom';

import PeopleCard from '../../components/employee/list';
import PersonCard from '../../components/employee/single';

class Team extends React.Component {
  state = { people: [] }

  componentWillMount() {
    this.socket = io('http://app.erfan.space');
    // this.socket = io('http://backend.ehackuate.tech');
    // this.socket = io('http://localhost:8080');
    this.socket.on('connect', () => {
      this.socket.emit('imfrontend');
    });
    this.socket.on('update', (people) => {
      this.setState({ people });
    });
  }

  componentWillUnmount() {
    this.socket.close();
  }

  handleSendSMS = (number, msg) => {
    if (msg.length > 0) {
      this.socket.emit('imfrontend');
      this.socket.emit('reply', number, msg);
    }
  }

  render() {
    const { people } = this.state;

    return (
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <div>
              <h1>My Team</h1>
              {people.map((person, i) => (
                <div role="button" tabIndex="0" onClick={() => this.props.history.push(`/${person.id}`)} key={i}>
                  <PeopleCard data={person} key={person.id} />
                </div>
              ))}
            </div>
          )}
        />
        <Route
          exact
          path="/:id"
          component={({ match: { params: { id } } }) => {
            if (people[Number(id)]) {
              return <PersonCard person={people[Number(id)]} onSend={this.handleSendSMS} />;
            }
            return <p>Not found!</p>;
          }}
        />
      </Switch>
    );
  }
}

export default Team;
