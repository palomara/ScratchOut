import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions, FlatList, AsyncStorage, Platform, ScrollView
} from 'react-native';
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons';


import FixedMenu from "../components/FixedMenu";
import MyBackButton from '../components/MyBackButton'
import Task from '../components/Task';
import AddTask from './AddTask'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class TasksList extends Component {

    state = {
        tasks: [],
        visibleTasks: [],
        showDoneTasks: true,
        showAddTask: false,
    }
    addTask = task => {
        const tasks = [...this.state.tasks]
        tasks.push({
            id: Math.random(),
            title: task.title,
            estimateAt: task.date,
            doneAt: null
        })
        this.setState({ tasks, showAddTask: false }
            , this.filterTasks)
    }
    deleteTask = id => {
        const tasks = this.state.tasks.filter(task => task.id !== id)
        this.setState({ tasks }, this.filterTasks)
    }
    filterTasks = () => {
        let visibleTasks = null
        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        } else {
            const pending = task => task.doneAt === null
            visibleTasks = this.state.tasks.filter(pending)
        }
        this.setState({ visibleTasks })
        AsyncStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }
    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }
            , this.filterTasks)
    }
    componentDidMount = async () => {
        const data = await AsyncStorage.getItem('tasks')
        const tasks = JSON.parse(data) || []
        this.setState({ tasks }, this.filterTasks)
    }
    toggleTask = id => {
        const tasks = this.state.tasks.map(task => {
            if (task.id === id) {
                task = {...task}
                task.doneAt = task.doneAt ? null : new Date()
            }
            return task
        })
        this.setState({ tasks }, this.filterTasks)
    }

    render() {
        return (
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask}
                         onSave={this.addTask}
                         onCancel={() => this.setState({ showAddTask: false })} />
                <StatusBar backgroundColor='transparent' barStyle='dark-content'/>
                <View style={styles.fixedNav}>
                    <MyBackButton style={styles.fixedNavArea}/>
                    <Text style={styles.title}>Tarefas</Text>
                    <View style={styles.emptyView}></View>
                </View>
                <ScrollView style={styles.mainView}>
                    <View style={styles.flatList}>
                        <FlatList data={this.state.visibleTasks}
                                  keyExtractor={item => `${item.id}`}
                                  renderItem={({ item }) =>
                                      <Task {...item} onToggleTask={this.toggleTask}
                                            onDelete={this.deleteTask} />} />
                    </View>

                </ScrollView>
                <ActionButton buttonColor={'#00ED74'}  style={styles.actionBtn}
                              onPress={() => { this.setState({ showAddTask: true }) }} />
                <View>
                </View>
                <FixedMenu/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fixedNav: {
        flexDirection: 'row',
        height: height * 0.1,
        width: width,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        marginBottom: 20,
        elevation: 3,
        position: 'relative'
    },
    actionBtn: {
        position: 'absolute',
        bottom: 50,
        right: 150,
    },
    fixedNavArea: {
        height: height * 0.08,
        width: width * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    emptyView: {
        height: height * 0.08,
        width: width * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#00ED74',
        alignItems: 'center',
        justifyContent: 'center'
    },

    flatList: {
        flex: 1,
    },

});
