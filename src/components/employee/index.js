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
    return (
      <Card>
        <CardHeader
          title={this.props.name}
          subtitle={
            <div>
              <div><b>Job Title:</b> {this.props.jobTitle}</div>
              <div><b>Last Seen:</b> {this.props.lastSeen}</div>
            </div>
          }
          avatar={this.props.avatar}
        />
        <CardActions>
          <IconButton>
            <PhoneIcon />
          </IconButton>
          <IconButton>
            <CalendarIcon />
          </IconButton>
          <IconButton>
          {this.props.status ? (
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
