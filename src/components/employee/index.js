import React from 'react';
import { Card, CardHeader,CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import { red300, green300 } from 'material-ui/styles/colors';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';
import AlertIcon from 'material-ui/svg-icons/alert/error';
import CheckIcon from 'material-ui/svg-icons/action/check-circle';
import CalendarIcon from 'material-ui/svg-icons/action/event';


class EmployeeCard extends React.Component {
  render() {
    const { data } = this.props;
    // some stuff isn't gonna be used... here for future refernce
    const { id, name, avatar, number, role, lastSeen, status, chain } = data;

    return (
      <Card>
        <CardHeader
          title={name}
          subtitle={
            <div>
              <div><b>Job Title:</b> {role}</div>
              <div><b>Last Seen:</b> {lastSeen}</div>
              {/* testing only */}
              <div>{chain.map(({ text }) => <p>{text}</p>)}</div>
            </div>
          }
          avatar={avatar}
        />
        <CardActions>
          <IconButton>
            <PhoneIcon />
          </IconButton>
          <IconButton>
            <CalendarIcon />
          </IconButton>
          <IconButton>
          {status === 'okay' ? (
            <CheckIcon color={green300}/>
          ) : (
            <AlertIcon color={red300}/>
          )}
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default EmployeeCard;
