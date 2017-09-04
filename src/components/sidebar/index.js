import React from 'react';
import {withRouter} from "react-router-dom";
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from "material-ui/List";
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import { white } from 'material-ui/styles/colors';
import TeamIcon from 'material-ui/svg-icons/social/people';
import EventIcon from 'material-ui/svg-icons/action/event';
import Heading from './heading.js';

class Nav extends React.Component {
  state = {
    open: false
  };

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <IconButton
          label="Open Drawer"
          onClick={this.handleToggle}>
          <MenuIcon color={white} />
        </IconButton>
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Heading />
          <List
            style={{
              padding: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexGrow: 1
            }}
          >
            <ListItem primaryText="My Team Members" leftIcon={<TeamIcon />} onTouchTap={()=> this.props.history.push('/team')}/>
            <ListItem primaryText="Current Incidents" leftIcon={<EventIcon />} />
          </List>
        </Drawer>
      </div>
    );
  }
}

export default withRouter(Nav);
