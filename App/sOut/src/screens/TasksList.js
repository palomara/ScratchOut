import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Dimensions,
    FlatList,
    ScrollView,
    RefreshControl, Image, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements'
import FixedMenu from "../components/FixedMenu";
import MyBackButton from '../components/MyBackButton'
import Task from '../components/Task';

import moment from 'moment'
import 'moment/locale/pt-br'
import {server, showError} from "../components/common";
import axios from 'axios'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

//TODO: Adicionar métodos para pesquisa de tarefas, estilizar a lista de tarefas, arrumar as opções de fitlro, e adicionar edição de tarefas

export default class TasksList extends Component {

    state = {
        tasks: [],
        visibleTasks: [],
        showDoneTasks: true,
        showSearchTask: true,
        showAddTask: false,
        refreshing: false,
        searchText: ''
    };

    deleteTask =  async id => {
        try {
            await axios.delete(`${server}/tasks/${id}`);
            await this.loadTask()
        }catch (err) {
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
        this.setState({ visibleTasks })
    };
    filtersearchTasks = () =>{
        let visibleTasks = null;
        if (this.state.showSearchTask) {
            visibleTasks = [...this.state.tasks]
        } else {
            const pending = task => task.title === this.state.searchText;
            visibleTasks = this.state.tasks.filter(pending)
        }
        this.setState({ visibleTasks })
    }
    searchTasks = () =>{
        this.setState({showSearchTask: !this.state.showSearchTask}, this.filtersearchTasks)
    }
    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }
            , this.filterTasks)
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
            const maxDate = '2999-12-31 23:59'
            const res = await axios.get(`${server}/tasks?date=${maxDate}`);
            this.setState({tasks: res.data}, this.filterTasks)
        }catch (err) {
            showError(err)
        }
    };
    _refreshControl(){
        return (
            <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={()=>this._refreshListView()} />
        )
    }
    _refreshListView(){
        //Start Rendering Spinner
        this.setState({refreshing:true})
        //Updating the dataSource with new data
        this.loadTask()
        this.setState({refreshing:false}) //Stop Rendering Spinner
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='transparent' barStyle='dark-content'/>
                <View style={styles.fixedNav}>
                    <MyBackButton style={styles.fixedNavArea}/>
                    <Text style={styles.title}>Tarefas</Text>
                    <View style={styles.emptyView}></View>
                </View>

                <SearchBar
                    lightTheme={true}
                    round
                    inputContainerStyle={{ backgroundColor: '#fff' }}
                    containerStyle={{ backgroundColor: '#F8F8F8' }}
                    showLoading={true}
                    searchIcon={{ size: 24 }}
                    onSubmitEditing={() => this.searchTasks()}
                    onChangeText={(text) => this.setState({searchText: text})}
                    placeholder=' Procurar' />

                <View style={styles.barOptions}>

                <TouchableOpacity style={styles.iconArea} onPress={() => { this.props.navigation.navigate('EditTasks')}}>
                    <Image source={require('../../resources/images/icons/icon-archives-grey.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconArea} onPress={this.toggleFilter}>
                    <Image source={require('../../resources/images/icons/icon-filter_completed-grey.png')}/>
                </TouchableOpacity>
                 <TouchableOpacity style={styles.iconArea}>
                     <Image source={require('../../resources/images/icons/icon-sort_by-c.png')}/>
                 </TouchableOpacity>
                </View>

                <ScrollView style={styles.mainView}
                            refreshControl={this._refreshControl()}>

                    <View style={styles.flatList}>
                        <FlatList data={this.state.visibleTasks}
                                  keyExtractor={item => `${item.id}`}
                                  renderItem={({ item }) =>
                                      <Task {...item} onToggleTask={this.toggleTask}
                                            onDelete={this.deleteTask} />} />
                    </View>

                </ScrollView>
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
        backgroundColor: '#fff'
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
        flexDirection: 'row',
    },

    title: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#00ED74',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },

    flatList: {
        flex: 1,
    },
    barOptions: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: height * 0.06,
        width: width,
        backgroundColor: '#F8F8F8',

    },
    iconArea: {
        flex: 1,
        height: height * 0.010,
        alignItems:'center',
        justifyContent: 'center',
    },
    mainView: {
        height: height * 0.6,
        width: width,
    }

});
