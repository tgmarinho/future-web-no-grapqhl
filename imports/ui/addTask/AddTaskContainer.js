import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { AddTask } from './AddTask';


export const AddTaskContainer = compose(
  withRouter,
)(AddTask);
