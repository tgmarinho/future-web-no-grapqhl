import { Meteor } from 'meteor/meteor';
import {TasksCollection} from "../collections/TasksCollection";


Meteor.methods({
        'findTaskByUserId'(userId) {
            return TasksCollection.find({ userId }, { sort: { dueDate: 1 } }).fetch();
        },
        'tasks.insertOrUpdate'(task, userId) {
            //task.dueDate.setHours(0, 0, 0, 0);
            if (task._id) {
                TasksCollection.update(task._id, { $set: { ...task } });
                return TasksCollection.findOne(task._id);
            }
            return TasksCollection.findOne(TasksCollection.insert({ userId, ...task }));
        },
        'flipTask'(_id) {
            const task = TasksCollection.findOne(_id);
            TasksCollection.update({ _id }, { $set: { done: !task.done } });
            return task;
        },
        'removeCheckedTask'() {
            const tasks = TasksCollection.find({ done: true });
            tasks.forEach(task => TasksCollection.remove({ _id: task._id }));
        },
});