import React from 'react';
import { Card, CardHeader,CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Chip from 'material-ui/Chip';
import { red300, green300, orange300 } from 'material-ui/styles/colors';

import MessageIcon from 'material-ui/svg-icons/communication/message';
import AlertIcon from 'material-ui/svg-icons/alert/error';
import CheckIcon from 'material-ui/svg-icons/action/check-circle';
import UnknownIcon from 'material-ui/svg-icons/action/help';
import CalendarIcon from 'material-ui/svg-icons/action/event';

import ContactModal from '../contact';

class EmployeeCard extends React.Component {
  render() {
    const { data } = this.props;
    // some stuff isn't gonna be used... here for future refernce
    const { id, name, avatar, number, role, lastSeen, status, chain } = data;
    console.log(chain)
    return (
      <Card>
        <CardHeader
          title={name}
          subtitle={
            <div>
              <div><b>Job Title:</b> {role}</div>
              <div><b>Last Seen:</b> {lastSeen}</div>
              {/* testing only */}
              <h3>Latest Messages</h3>
                  {chain.map((message) => 
                  <Chip style={message.type == "from" ? {left: 0} : {marginLeft: "100%"}}>{message.text}</Chip>)}
            </div>
          }
          avatar={avatar}
        />
        <CardActions>
          <ContactModal data={data}/>
          <IconButton>
            <CalendarIcon />
          </IconButton>
          <IconButton>
            {status == "okay" ? 
                <CheckIcon color={green300}/> : 
                status == "idk" ? <UnknownIcon color={orange300} /> : 
                <AlertIcon color={red300}/>}
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default EmployeeCard;
