import { withContext, withState, compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { App } from '../ui/App';
// import { loggedUserQuery } from '../core/user/userQueries';
import { displayLoadingState } from '../ui/components/displayLoadingState';

// const data = loggedUserQuery;

export const AppContainer = compose(
    withState('appState', 'setAppState', { open: false }),
    withRouter)(App);
