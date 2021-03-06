import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TasksContainer } from '../task/TasksContainer';
import { AddTask } from '../task/AddTask';
import { LoginContainer } from '../login/LoginContainer';
// import { loggedUserQuery } from '../../core/user/userQueries';
import { HomeContainer } from '../home/HomeContainer';

// const enhance = loggedUserQuery;
const PrivateRoute = (
  ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
         <Component {...props} />
      }
    />
  )
);

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={TasksContainer} />
    <Route path="/home" component={HomeContainer} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/add" component={AddTask} />
    <Route path="/edit/:_id" component={AddTask} />
  </Switch>
);
