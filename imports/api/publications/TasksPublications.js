import { Meteor } from 'meteor/meteor'
import {TasksCollection} from "../collections/TasksCollection";

if(Meteor.isServer) {
    Meteor.publish('tasks', function tasksPublication(){
        return TasksCollection.find({}).fetch();
    })
}

