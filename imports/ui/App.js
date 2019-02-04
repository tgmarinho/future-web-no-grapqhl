import React, { Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';
import { MenuContainer } from './menu/MenuContainer';
import { Routes } from './routes/Routes';
import { NavigationBarContainer } from './navigation/NavigationBarContainer';
import { ToolbarComponent } from './menu/toolbar/ToolbarComponent';

export const App = () => (
  <div className="app">
      <Fragment>
        <CssBaseline />
        <ToolbarComponent />
        <MenuContainer />
      </Fragment>
    <div className="content" style={{ marginTop: 60 }}>
      <Routes />
    </div>
     <NavigationBarContainer />}
  </div>
);
