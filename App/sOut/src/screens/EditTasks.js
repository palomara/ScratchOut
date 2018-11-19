import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions, FlatList, TextInput
} from 'react-native';

//'#00ED74'

import Task from '../components/Task';
import axios from "axios";
import {server, showError} from "../components/common";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class EditTasks extends Component {

    toggleTask = async id => {
        try{
            await axios.put(`${server}/tasks/${id}/toggle`);
            await this.loadTask();
        }catch (err) {
            showError(err)
        }
    };

    render () {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='transparent' barStyle='dark-content'/>
                <View style={styles.fixedNav}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('TasksList')}} style={styles.backButtonStyle}>
                        <Image source={require('../../resources/images/icons/icon-nav_back-white.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.editTaskView}>
                    <Text style={styles.taskTitle}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) =>
                        <Task {...item} onToggleTask={this.toggleTask}
                               />} >
                    </Text>
                </View>


                <Text style={styles.textTitle}>DESCRIÇÃO</Text>
                <View style={styles.editTaskDescription}>
                    <View style={styles.viewInput}>
                        <TextInput style={styles.inputDescription}></TextInput>
                    </View>
                </View>

                <View style={styles.otherDetails}>
                    <Text style={styles.textTitle}>OUTROS DETALHES</Text>
                    <View style={styles.otherDetailsOptions}>
                        <TouchableOpacity style={styles.optionDetail}>
                            <Image source={require('../../resources/images/icons/icon-tag.png')}/>
                            <Text style={styles.optionDetailText}>Etiquetas...</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionDetail}>
                            <Image source={require('../../resources/images/icons/icon-due_date.png')}/>
                            <Text style={styles.optionDetailText}>Prazo estimado...</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionDetail}>
                            <Image source={require('../../resources/images/icons/icon-method.png')}/>
                            <Text style={styles.optionDetailText}>Metodologia...</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionDetail}>
                            <Image source={require('../../resources/images/icons/icon-attachment.png')}/>
                            <Text style={styles.optionDetailText}>Anexo...</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionDetail}>
                            <Image source={require('../../resources/images/icons/icon-task-checked.png')}/>
                            <Text style={styles.optionDetailText}>Checklist...</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.editTaskView}>
                    <Text style={styles.lastTimeEdit}>Última vez editado</Text>
                    <View style={styles.feelAboutTaskButtonArea}>
                    <TouchableOpacity style={styles.feelAboutTaskButton}>
                        <View style={styles.iconPlus}>
                            <Image source={require('../../resources/images/icons/icon-more-white.png')}/>
                        </View>
                        <Text style={styles.feelAboutTaskText}>O que sente sobre essa
                            <Text style={styles.feelAboutTaskTextBold}> tarefa</Text>?</Text>
                    </TouchableOpacity>
                    </View>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },

    fixedNav: {
        flexDirection: 'row',
        height: height * 0.1,
        width: width,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#00ce67",
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        marginBottom: 20,
        elevation: 3,
        position: 'relative'
    },

    fixedNavArea: {
        height: height * 0.08,
        width: width * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButtonStyle: {
        marginLeft: 10
    },
    editTaskView: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: height * 0.1,
        width: width,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        elevation: 3,
        position: 'relative'
    },
    taskTitle: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: "#00ce67",
        marginTop: 20,
        right: 280,
        position: 'absolute',
    },
    editTasksDescription: {
        width: width * 0.60,
        height: height / 2
    },
    viewInput: {
        flexDirection: 'row',
    },
    inputDescription: {
        fontFamily: 'Roboto Light',
        fontSize: 14,
        color: '#000',
        flex: 1
    },
    textTitle: {
       fontFamily: 'Roboto',
       fontSize: 10,
       marginTop: 8,
       marginBottom: 5,
       right: 130,
       alignItems: 'center',
       justifyContent: 'center'
    },
    otherDetailsOptions: {
       right: 140,
       justifyContent: 'space-between',
       marginBottom: 30
    },
    optionDetail: {
       flexDirection: 'row',
       marginTop: 5
    },
    optionDetailText: {
       fontFamily: 'Roboto',
       color: '#000',
       fontSize: 14,
       marginLeft: 2
    },
    lastTimeEdit: {
      marginTop: 8,
      fontFamily: 'Roboto',
      color: "#00ce67",
      fontSize: 14
    },
    feelAboutTaskButtonArea: {
        width: width * 0.97,
        height: height / 12.8,
        backgroundColor: "#00ce67",
        marginTop: height / 50,
        borderRadius: 4,
        marginBottom: 10,

    },
    feelAboutTaskButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    iconPlus: {
        justifyContent: 'space-evenly',
        paddingRight: 40
    },
    feelAboutTaskText: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#fff',
    },
    feelAboutTaskTextBold: {
        fontFamily: 'Roboto Bold',
        fontSize: 18,
        color: '#fff',
    }
})