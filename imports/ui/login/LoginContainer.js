import { compose } from 'recompose';
import { Login } from './Login';
import { loggedUserQuery } from '../../core/user/userQueries';

export const LoginContainer = compose()(Login);
