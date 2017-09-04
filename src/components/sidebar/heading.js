import React from "react";
import { Link } from "react-router-dom";

const FutureYouHeading = ({ style, onTouchTap }) =>
        <span onTouchTap={onTouchTap} style={{fontSize: "32px", textAlign: "center", marginTop: "24px"}}>
               <img src="./images/logo.png" width="100%"/>
        </span>;

export default FutureYouHeading;
