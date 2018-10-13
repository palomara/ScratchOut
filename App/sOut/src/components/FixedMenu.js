/* @flow */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    AsyncStorage,
    ScrollView,
    StatusBar,
    TextInput,
    TouchableWithoutFeedback,
    Alert,
    DatePickerAndroid,
    DatePickerIOS
} from 'react-native';

import AddTask from '../screens/AddTask'
import Task from './Task'
import {login} from "./func";
import moment from 'moment'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default class FixedMenu extends Component {

    state = {
        tasks: [],
        visibleTasks: [],
        showDoneTasks: true,
        showAddTask: false,
    }



    render() {

        return (
        <View style={styles.fixedMenu}>



          <TouchableOpacity style={styles.fixedMenuArea} onPress={()=>console.warn("Indicador de Performance")}>
            <Image source={require('../../resources/images/icons/icon-sout.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fixedMenuArea} onPress={()=>console.warn("Tarefas")}>
            <Image source={require('../../resources/images/icons/icon-tasks.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fixedMenuArea} onPress={() => { this.setState({ showAddTask: true }) }}>
            <Image source={require('../../resources/images/icons/icon-new_task.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fixedMenuArea} onPress={()=>console.warn("Influenciadores")}>
            <Image source={require('../../resources/images/icons/icon-influences.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fixedMenuArea} onPress={()=>console.warn("Perfil e Configurações")}>
            <Image source={require('../../resources/images/icons/icon-profile.png')}/>
          </TouchableOpacity>


        </View>
    );
  }
}

const styles = StyleSheet.create({

  fixedMenu: {
    height: height * 0.085,
    width: width,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
  },

  fixedMenuArea: {
    flex: 1,
    height: height * 0.085,
    alignItems:'center',
    justifyContent: 'center',
  },


});
