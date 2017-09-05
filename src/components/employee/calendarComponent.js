import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';

import GroupIcon from 'material-ui/svg-icons/social/group';
import BuildingIcon from 'material-ui/svg-icons/social/domain';
import CityIcon from 'material-ui/svg-icons/social/location-city';

export default class Calendar extends React.Component {
  chooseIcon = (meetingType) => {
    switch (meetingType) {
      case 'Meeting':
        return <GroupIcon />;

      case 'Conference':
        return <CityIcon />;

      default:
        return <BuildingIcon />;
    }
  }
  render() {
    const events = [
      {
        type: 'Meeting',
        date: '5th September 2017',
        from: 1000,
        to: 1200,
        location: 'Room 12.01, 242 Exhibition Street, Melbourne, VIC 3000',
      },
      {
        type: 'Team Lunch',
        date: '5th September 2017',
        from: 1200,
        to: 1300,
        location: 'External',
      },
      {
        type: 'Conference',
        date: '5th September 2017',
        from: 1300,
        to: 1400,
        location: 'Room 12.144, 242 Exhibition Street, Melbourne, VIC 3000',
      },
    ];
    return (
      <div>
        {events.map(({ type, location, date, from, to }, i) => (
          <Card key={i}>
            <CardHeader
              title={`${type} @ ${date} ${from}-${to}`}
              subtitle={location}
              avatar={this.chooseIcon(type)}
            />
          </Card>
        ))}
      </div>
    );
  }
}
