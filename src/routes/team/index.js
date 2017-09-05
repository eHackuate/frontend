import React from 'react';
import io from 'socket.io-client';
import { Switch, Route } from 'react-router-dom';
import PeopleCard from "../../components/employee";
import Chip from "material-ui/Chip"
import { Card, CardText, CardHeader } from 'material-ui/Card';
import {List, ListItem} from "material-ui/List"
import Divider from "material-ui/Divider"
import EmailIcon from "material-ui/svg-icons/communication/email"
import PhoneIcon from "material-ui/svg-icons/communication/phone"
import { Grid, Row, Col } from 'react-flexbox-grid';
import CalendarIcon from 'material-ui/svg-icons/action/event';
import MessageIcon from 'material-ui/svg-icons/communication/message';

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
  
  renderProfile(person){
    const personSplit = person.name.split(" ")
    console.log(person.chain)
    return(
      <Grid fluid>
      <Row>
        <Col md={3}>
          <Card style={{minHeight: "100vh"}}>
                  <CardHeader
                  title={person.name}
                  subtitle={
                      <div>
                          <div><b>Job Title:</b> {person.role}</div>
                          <div><b>Last Seen:</b> {person.lastSeen}</div>
                          {/* testing only */}
                      </div>
                  }
                  avatar={person.avatar}
                  />
                  <CardText style={{width: "100%", maxWidth: "100%", overflow: "wrap"}}>
                      <List>
                          <ListItem leftIcon={<EmailIcon />} style={{overflow: "wrap"}}>
                              {personSplit[0] + "." + personSplit[1] + "@company.com.au"}
                          </ListItem>
                          <ListItem leftIcon={<PhoneIcon />}>
                              {person.number}
                          </ListItem>
                      </List>
                  </CardText>
                  <Divider />
            </Card>
        </Col>
        <Col md={3}>
          <Card style={{minHeight: "100vh", width: "100%", overflow: "wrap"}}>
              <CardHeader
              title="Communication Log"
              avatar={<MessageIcon />}
              />
              <CardText>
                  {person.chain ? person.chain.map((message) => 
                    <Chip style={message.type === "from" ? {left: 0} : {marginLeft: "100%"}}>{message.text}</Chip>) :
                    "No Messages Currently"}
              </CardText>
              <Divider />
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{minHeight: "100vh", width: "100%"}}>
              <CardHeader
              title="Known Calendar Events"
              avatar={<CalendarIcon />}
              />
              <CardText>
                  
              </CardText>
              <Divider />
          </Card>
        </Col>
      </Row>
    </Grid>);
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
          console.log((id))
          if (people[Number(id)]) {
            return this.renderProfile(people[Number(id)]);
          }
          return <p>not found</p>;
        }} />
      </Switch>
    );
  }
}

export default Team;
