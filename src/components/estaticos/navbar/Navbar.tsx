import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography,Box,Button, Tabs, Tab, SvgIcon } from '@material-ui/core';
import LogoutIcon from '@material-ui/icons';
import { Grid } from '@mui/material';


class Nav extends React.Component {
  render() {
    return (
      <>
      <AppBar title="My App" position="static" color="default">
      <Tabs>
        <Tab label="Blog Pessoal" />
      
        <Tab label="home" />
        <Tab label="postagens" />
        <Tab label="temas"/>
        <Tab label="cadastrar temas" />
        <Tab label="logout" />
      </Tabs>
    </AppBar>
</>
)
}
}


export default Nav;