import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Toggle from 'material-ui/Toggle';

import PhoneIcon from 'material-ui/svg-icons/communication/phone';

class EmployeeCard extends React.Component {
    constructor(props){
        super(props);
    }

      
    render(){
        return(
            <Card>
                <CardHeader
                    title={
                        <div>
                            {this.props.name} 
                            

                            <div style={{right: 0, position: "fixed"}}>
                                <IconButton>
                                    <PhoneIcon />
                                </IconButton>
                            </div>
                        </div> 
                    }
                    subtitle={
                        <div>
                            {this.props.jobTitle} <br/> 
                            {this.props.lastseen}
                        </div>
                    }
                    avatar={this.props.avatar}
                    />
          </Card>
        );
    }
}

export default EmployeeCard;
