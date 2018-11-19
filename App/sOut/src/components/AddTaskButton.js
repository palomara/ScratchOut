import React from 'react';
import {Image, TouchableOpacity, ToastAndroid} from 'react-native';
import {withNavigation} from 'react-navigation';
import axios from "axios";
import {server, showError} from "./common";
import moment from "moment";
import AddTask from "../screens/AddTask";
import toast from 'react-native-simple-toast'

class AddTaskButton extends React.Component {

    state = {
        tasks: [],
        visibleTasks: [],
        showDoneTasks: true,
        showAddTask: false,
    };

    addTask = async task => {
        const data = moment(task.date).locale('pt-br').format('YYYY-MM-DD')
        //console.warn(data)
       try {
            await axios.post(`${server}/tasks`, {
                title: task.title,
                estimateAt: data
            });
            this.setState({showAddTask: false}, this.loadTask)
            toast.show('Tarefa salva!', toast.SHORT)
            
        } catch (err) {
            showError(err)
        }
    };
    filterTasks = () => {
        let visibleTasks = null;
        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        } else {
            const pending = task => task.doneAt === null;
            visibleTasks = this.state.tasks.filter(pending)
        }
        this.setState({visibleTasks})
    };
    toggleFilter = () => {
        this.setState({showDoneTasks: !this.state.showDoneTasks}
            , this.filterTasks)
    };
    componentDidMount = async () => {
        this.loadTask()
    };
    toggleTask = async id => {
        try {
            await axios.put(`${server}/tasks/${id}/toggle`);
            await this.loadTask();
        } catch (err) {
            showError(err)
        }
    };

    loadTask = async () => {
        try {
            const maxDate = '2999-12-31 23:59';
            const res = await axios.get(`${server}/tasks?date=${maxDate}`);
            this.setState({tasks: res.data}, this.filterTasks)
        } catch (err) {
            showError(err)
        }
    };

    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.setState({showAddTask: true})
            }}>
                <Image source={require('../../resources/images/icons/icon-new_task.png')}/>
                <AddTask isVisible={this.state.showAddTask}
                         onSave={this.addTask}
                         onCancel={() => this.setState({showAddTask: false})}/>
            </TouchableOpacity>
        );
    }

}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(AddTaskButton);
