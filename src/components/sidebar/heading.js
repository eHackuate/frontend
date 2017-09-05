import React from 'react';

const FutureYouHeading = ({ style, onTouchTap }) => (
  <span onTouchTap={onTouchTap} style={{ fontSize: '32px', textAlign: 'center', marginTop: '24px' }}>
    <img src="./images/logo.png" style={{ width: '100%' }} alt="logo" />
  </span>
);

export default FutureYouHeading;
