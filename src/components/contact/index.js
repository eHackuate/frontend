import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import MessageIcon from 'material-ui/svg-icons/communication/message';

import TextField from 'material-ui/TextField'
/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class DialogExampleSimple extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    
    const { data } = this.props;
    // some stuff isn't gonna be used... here for future refernce
    const { name, avatar, number, role, lastSeen, status, chain } = data;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Send Message"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div style={{display: "inline-block"}}>
        <IconButton onTouchTap={this.handleOpen}>
            <MessageIcon />
        </IconButton>
        <Dialog
          title={"Attempt to contact " + name + "?"}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {name.split(" ")[0]} was last declared {status == "okay" ? "safe" : status == "idk" ? "hasn't responded" : "not safe"}
          <br />
        <TextField
            hintText="Enter Message (100 characters)"
            floatingLabelText="Send Message"
            multiLine={true}
            rows={1}
            fullWidth={true}
            />
        </Dialog>
      </div>
    );
  }
}