import React from 'react';
import { Card, CardText, CardHeader, CardActions } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import EmailIcon from 'material-ui/svg-icons/communication/email';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';
import { Grid, Row, Col } from 'react-flexbox-grid';
import CalendarIcon from 'material-ui/svg-icons/action/event';
import MessageIcon from 'material-ui/svg-icons/communication/message';

import Calendar from './calendarComponent';
import SendSMS from './sendSMS';

const PersonCard = ({ person, onSend }) => (
  <Grid fluid>
    <Row>
      <Col md={4}>
        <Card style={{ minHeight: '100vh' }}>
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
          <CardText style={{ width: '100%', maxWidth: '100%', overflow: 'wrap' }}>
            <List>
              <ListItem leftIcon={<EmailIcon />} style={{ overflow: 'wrap' }}>
                {`${person.name.split(' ')[0].toLowerCase()}@ehackuate.tech`}
              </ListItem>
              <ListItem leftIcon={<PhoneIcon />}>
                {person.number}
              </ListItem>
            </List>
          </CardText>
          <Divider />
        </Card>
      </Col>
      <Col md={4}>
        <Card style={{ minHeight: '100vh', width: '100%', overflow: 'wrap' }}>
          <CardHeader
            title="Communication Log"
            avatar={<MessageIcon />}
          />
          <CardText style={{ padding: '0.5em' }}>
            {person.chain && person.chain.map((message, i) => (
              <div
                key={i}
                style={(message.type === 'from') ?
                  {
                    maxWidth: '200px',
                    overflowWrap: 'break-word',
                    backgroundColor: '#eee',
                    padding: '0.75em',
                    borderRadius: '20px',
                    marginTop: '10px',
                    order: 1,
                  } : {
                    marginLeft: '60%',
                    textAlign: 'right',
                    maxWidth: '300px',
                    overflowWrap: 'break-word',
                    backgroundColor: '#eee',
                    padding: '0.75em',
                    borderRadius: '20px',
                    marginTop: '10px',
                    order: 1,
                  }
                }
              >
                {message.text}
              </div>
            ))}
          </CardText>
          <Divider />
          <CardActions>
            <SendSMS onSend={msg => onSend(person.number, msg)} />
          </CardActions>
        </Card>
      </Col>
      <Col md={4}>
        <Card style={{ minHeight: '100vh', width: '100%' }}>
          <CardHeader
            title="Known Calendar Events"
            avatar={<CalendarIcon />}
          />
          <CardText>
            <Calendar />
          </CardText>
          <Divider />
        </Card>

      </Col>
    </Row>
  </Grid>
);

export default PersonCard;
