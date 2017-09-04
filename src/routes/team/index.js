import React from 'react';
import io from 'socket.io-client';
import { Switch, Route } from 'react-router-dom';
import PeopleCard from "../../components/employee";

class Team extends React.Component {
  state = { people: [] };

  componentWillMount() {
    this.socket = io('http://app.erfan.space');
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

  render() {
    const { people } = this.state;

    return (
      <Switch>
        <Route exact path="/" component={() => (
          <div>
            <h1>My Team</h1>
            {people.map((person) => (
              <PeopleCard data={person} key={person.id} />
            ))}
          </div>
        )} />
        <Route exact path="/:id" component={({ match: { params: { id } } }) => {
          if (people[Number(id)]) {
            return <p>info for {people[Number(id)].name}</p>;
          }
          return <p>not found</p>;
        }} />
      </Switch>
    );
  }
}

export default Team;
