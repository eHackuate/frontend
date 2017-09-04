import React from 'react';
import AppBar from "material-ui/AppBar";
import Sidebar from "../sidebar";


const Nav = () => (
  <AppBar
    title="eHackuate"
    iconElementLeft={<Sidebar />}
    style={{backgroundColor: "#FF5C5C"}}
  />
);

export default Nav;
