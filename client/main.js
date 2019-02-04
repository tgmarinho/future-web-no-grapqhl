import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { TunnelProvider } from 'react-tunnels';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from '../imports/ui/AppContainer';
import { store } from '../imports/core/reduxCore/store';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';

import '../imports/startup/client/';

const theme = createMuiTheme();

Meteor.startup(() => {
  render(
    <Fragment>
      <Provider store={store}>
          <MuiThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <TunnelProvider>
              <BrowserRouter>
                <AppContainer />
              </BrowserRouter>
            </TunnelProvider>
            </MuiPickersUtilsProvider>
          </MuiThemeProvider>
      </Provider>
    </Fragment>,
    document.getElementById('app')
  );
});
