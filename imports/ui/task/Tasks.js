import React, { Fragment, useState } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { List, Button, TextField } from '@material-ui/core';
import Input, { InputLabel, InputAdornment } from '@material-ui/core/Input';
import { FormControl } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import { Task } from './Task';
import { getLoggedUserContext } from '../../user/userContext';
import { updateAppTitle } from '../components/uis';
import { Image } from '../components/Image';
import { Loading } from '../components/Loading';


export const Tasks = props => {

  const [search, setSearch ] = useState("");


  const { data } = this.props;
  const { loading = false, tasks = []  } = data || {};

  if (loading) {
    return ( <Loading /> );
  }

  if (tasks.length === 0) {
    return ( <Image pathImage="img/beach1.png" text="Nothing to do =)" /> );
  }

  return (
      <Fragment>
        {updateAppTitle('Tasks')}

        <FormControl>
          <InputLabel htmlFor="input-with-icon-adornment">Search</InputLabel>
          <Input
              id="input-with-icon-adornment"
              name="search"
              onChange={() => setSearch(event.target.value.toLowerCase())}
              value={search}
          />
        </FormControl>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {/*<Button*/}
              {/*className="form-action"*/}
              {/*color="primary"*/}
              {/*onClick={this.handleRemoveCheckedTasks({ ...this.props })}*/}
          {/*>*/}
            {/*<DeleteForever />*/}
            {/*Delete all tasks checked*/}
          {/*</Button>*/}
        </div>
        <div className="block-tasks">
          <List>
            {tasks
                .filter(task =>
                    task.description.toLowerCase().includes(search)
                )
                .map(item => <Task key={item._id} item={item} {props} />)}
          </List>
        </div>
      </Fragment>
  );
}



