import React from 'react';
import io from 'socket.io-client';
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
      <div>
        <h1>My Team</h1>
        {people.map((person) => (
          <PeopleCard data={person} key={person.id} />
        ))}
      </div>
    );
  }
}

export default Team;
