import React from 'react';
import { TunnelPlaceholder } from 'react-tunnels';
import { AppBar, Toolbar, IconButton, Menu as MenuIcon, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../../core/reduxCore/store';

const enhance = connect(null, mapDispatchToProps);

export const ToolbarComponent = enhance(({ toggleMenu }) => (
  <AppBar>
    <Toolbar>
      <IconButton
        color="secondary"
        aria-label="Menu"
        onClick={toggleMenu(false)}
      >
        <MenuIcon />
      </IconButton>
      <Typography type="headline" color="inherit">
        <TunnelPlaceholder id="app-title" />
      </Typography>
    </Toolbar>
  </AppBar>
));
