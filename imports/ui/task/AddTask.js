import React, {Fragment, useState} from 'react';
import {Meteor} from 'meteor/meteor';
import {Button, TextField} from '@material-ui/core';
import {Save} from '@material-ui/icons';
import {DatePicker} from 'material-ui-pickers';
import {updateAppTitle} from '../components/uis';


const defaultValues = {
    description: '',
    details: '',
    done: false,
    dueDate: new Date(),
}

export const AddTask = props => {

    console.log(props);

    const [task, setTask] = useState(defaultValues);

    const handleChange = name => event => {
        setTask({...task, [name]: event.target.value})
    }

    // eslint-disable-next-line no-undef
    const handleDueDateChange = dueDate => {

        console.log(dueDate)
        try {
            setTask({...task, dueDate: dueDate._d.getTime()})

        } catch (error) {
            throw new Error(error.toString());
        }

    };

    // eslint-disable-next-line no-undef
    const handleSubmitTaks = () => !!task.description.trim();

    // eslint-disable-next-line no-undef
    const addTaskAndGo = () => {
        if (handleSubmitTaks()) {
            console.log('preparar para salvar')

            try {
                Meteor.call('tasks.insertOrUpdate', task, 1)
                setTask(defaultValues);
                // TODO show alert success - ver no material ui algum compoenente bacana
                history.push('/');
            } catch (e) {
                // TODO show alert error -  ver no material ui algum compoenente bacana
                throw new Error('Ocorreu algum erro para salvar', e)
            }



            // const {addTask, history, client} = this.props;
            //
            // console.log(this.state.dueDate);
            // addTask({
            //     variables: {
            //         task: {
            //             _id: this.state._id,
            //             description: this.state.description,
            //             details: this.state.details,
            //             dueDate: this.state.dueDate,
            //             done: this.state.done,
            //         },
            //     },
            // })
            //     .then(() => {
            //         // TODO when we have the cache working correctly after an update we can remove this
            //         // https://github.com/CodeFTW/meteor-react-latest/issues/34
            //         client.resetStore();
            //         showAlert('Task added');
            //         history.push('/');
            //     })
            //     .catch(error => {
            //         // eslint-disable-next-line no-console
            //         console.log(error);
            //     });
        } else {
            //showAlert('The field Description is required');
        }
    };

    return (
        <Fragment>
            {/*{updateAppTitle(*/}
            {/*this.state.description*/}
            {/*? `${this.state._id ? 'Editing' : 'Adding'} the task ${*/}
            {/*this.state.description*/}
            {/*}`*/}
            {/*: 'Add Task'*/}
            {/*)}*/}
            <form className="form">
                <TextField
                    name="description"
                    label="Description"
                    value={task.description}
                    onChange={handleChange('description')}
                    fullWidth
                    autoFocus
                    required
                />
                <TextField
                    name="details"
                    label="Details"
                    value={task.details}
                    onChange={handleChange('details')}
                    fullWidth
                />
                <DatePicker
                    name="dueDate"
                    value={task.dueDate}
                    onChange={handleDueDateChange}
                    mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
                    format="DD/MM/YYYY"
                    keyboard
                />
                <Button
                    className="form-action"
                    variant="raised"
                    color="primary"
                    onClick={addTaskAndGo}
                >
                    <Save/>
                </Button>
            </form>
        </Fragment>
    );
}
