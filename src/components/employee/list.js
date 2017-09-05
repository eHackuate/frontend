import React from 'react';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import { red300, green300, orange300 } from 'material-ui/styles/colors';

import IconButton from 'material-ui/IconButton';
import AlertIcon from 'material-ui/svg-icons/alert/error';
import CheckIcon from 'material-ui/svg-icons/action/check-circle';
import UnknownIcon from 'material-ui/svg-icons/action/help';
import CalendarIcon from 'material-ui/svg-icons/action/event';

const getIcon = (status) => {
  switch (status) {
    case 'okay':
      return <CheckIcon color={green300} />;

    case 'bad':
      return <AlertIcon color={red300} />;

    case 'idk':
    default:
      return <UnknownIcon color={orange300} />;
  }
};

const PeopleCard = ({ data }) => {
  // some stuff isn't gonna be used... here for future refernce
  const { name, avatar, role, lastSeen, status, chain } = data;
  return (
    <Card>
      <CardHeader
        title={name}
        subtitle={(
          <div>
            <div><b>Job Title:</b> {role}</div>
            <div><b>Last Seen:</b> {lastSeen}</div>
            {/* testing only */}
            <h3>Latest Messages</h3>
            {chain.map((message, id) => (
              <Chip
                key={id}
                style={message.type === 'from' ? { left: 0 } : { marginLeft: '100%' }}
              >
                {message.text}
              </Chip>
            ))}
          </div>
        )}
        avatar={avatar}
      />
      <CardActions>
        <IconButton>
          <CalendarIcon />
        </IconButton>
        <IconButton>
          {getIcon(status)}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PeopleCard;
