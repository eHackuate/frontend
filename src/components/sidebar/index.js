import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import { white } from 'material-ui/styles/colors';
import TeamIcon from 'material-ui/svg-icons/social/people';

import Heading from "./heading.js";
import {List, ListItem} from "material-ui/List";
import Divider from 'material-ui/Divider';

import ContentInbox from 'material-ui/svg-icons/content/inbox';
import EventIcon from 'material-ui/svg-icons/action/event';


class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        };
    }
    
    handleToggle = () => this.setState({open: !this.state.open});
    
    handleClose = () => this.setState({open: false});

      
    render(){
        return(
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
                    <Divider />
                    <List
                            style={{
                                padding: "none",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                flexGrow: 1
                            }}
                           >
                           <ListItem primaryText="My Team Members" leftIcon={<TeamIcon />} />
                           <ListItem primaryText="Current Incidents" leftIcon={<EventIcon />} />
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default Nav;
