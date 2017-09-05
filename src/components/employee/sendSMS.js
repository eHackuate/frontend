import React, { Component } from 'react';

import SendMessageIcon from 'material-ui/svg-icons/content/send';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';

export default class SendSMS extends Component {
  state = { text: '' }

  render() {
    const { text } = this.state;
    const { onSend } = this.props;

    return (
      <div>
        <TextField
          value={text}
          onChange={(_, value) => this.setState({ text: value })}
          hintText="Enter Message (100 characters)"
          floatingLabelText="Send Message"
          multiLine
          rows={1}
        />
        <IconButton style={{ display: 'inline-block' }} onClick={() => onSend(text)}>
          <SendMessageIcon />
        </IconButton>
      </div>
    );
  }
}
