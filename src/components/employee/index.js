import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Toggle from 'material-ui/Toggle';
import { red300, green300 } from 'material-ui/styles/colors';

import PhoneIcon from 'material-ui/svg-icons/communication/phone';
import AlertIcon from 'material-ui/svg-icons/alert/error';
import CheckIcon from 'material-ui/svg-icons/action/check-circle';
import CalendarIcon from 'material-ui/svg-icons/action/event';

class EmployeeCard extends React.Component {      
    render(){
        return(
            <Card>
                <CardHeader
                    title={
                        <div>
                            <div style={{float: "left", flex: 0, order: 0}}>
                                {this.props.name}
                            </div>
                            

                            <div style={{float: "right", flex: 0, order: 1}}>
                                <IconButton>
                                    <PhoneIcon />
                                </IconButton>
                                <IconButton>
                                    <CalendarIcon />
                                </IconButton>
                                <IconButton>
                                    {
                                        this.props.status ?
                                        <IconButton>
                                            <CheckIcon color={green300}/>
                                        </IconButton> :
                                        <IconButton>
                                            <AlertIcon color={red300}/>
                                        </IconButton>
                                        
                                    }
                                </IconButton>
                            </div>
                        </div> 
                    }
                    subtitle={
                        <div style={{flex: 1, order: 1}}>
                            {this.props.jobTitle} <br />
                            <b>Last Seen:</b> {this.props.lastSeen}
                        </div>
                    }
                    avatar={this.props.avatar}
                    />
          </Card>
        );
    }
}

export default EmployeeCard;
