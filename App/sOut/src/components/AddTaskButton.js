import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import axios from "axios";
import {server, showError} from "./common";
import moment from "moment";
import Task from '../components/Task';
import AddTask from "../screens/AddTask";

class AddTaskButton extends React.Component {

    state = {
        tasks: [],
        visibleTasks: [],
        showDoneTasks: true,
        showAddTask: false,
    };

    addTask = async task => {
        try {
            await axios.post(`${server}/tasks`, {
                title: task.title,
                estimateAt: "2018-10-10 23:59"
            });
            this.setState({showAddTask: false}, this.loadTask)
        }catch (err) {
            showError(err)
        }
    };

    componentDidMount = async () => {
        this.loadTask()
    };
    toggleTask = async id => {
        try{
            await axios.put(`${server}/tasks/${id}/toggle`);
            await this.loadTask();
        }catch (err) {
            showError(err)
        }
    };

    loadTask = async () =>{
        try{
            const maxDate = moment().format('YYYY-MM-DD 23:59');
            const res = await axios.get(`${server}/tasks?date=${maxDate}`);
            this.setState({tasks: res.data}, this.filterTasks)
        }catch (err) {
            showError(err)
        }
    };

  render() {
    return (
      <TouchableOpacity onPress={() => { this.setState({ showAddTask: true }) }}>
        <Image source={require('../../resources/images/icons/icon-new_task.png')}/>
          <AddTask isVisible={this.state.showAddTask}
                   onSave={this.addTask}
                   onCancel={() => this.setState({ showAddTask: false })} />
      </TouchableOpacity>
    );
  }

}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(AddTaskButton);
