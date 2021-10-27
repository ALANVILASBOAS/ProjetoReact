import * as React from 'react';
import Appbar from '@material-ui/core/Button';
import { AppBar, Tabs, Tab } from '@material-ui/core';

class Nav extends React.Component {
    render() {
      return (
        <AppBar title="My App">
          <Tabs>
            <Tab label="Item 1" />
            <Tab label="Item 2" />
            <Tab label="Item 3" />
            <Tab label="Item 4" />
          </Tabs>
        </AppBar>
      )
    }
  }

export default Nav;