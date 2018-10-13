/* @flow */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import MyInfluenceButtom from './Influencesbuttom'
import MyTaskListButtom from './Tasklistbuttom'
import MyProfileButtom from './Profilebuttom'
import MyPerformceButtom from './PerformceButton'

import AddTask from '../screens/AddTask'
import Task from './Task'
import moment from 'moment'


import AddTaskButton from "./AddTaskButton";


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default class FixedMenu extends Component {

    render() {

        return (
        <View style={styles.fixedMenu}>




          <TouchableOpacity style={styles.fixedMenuArea} onPress={()=>console.warn("Indicador de Performance")}>
            <Image source={require('../../resources/images/icons/icon-sout.png')}/>
          </TouchableOpacity>

          <MyPerformceButtom style={styles.fixedMenu}/>


          <MyTaskListButtom style={styles.fixedMenu}/>

            <AddTaskButton style={styles.fixedMenu}/>

           <MyInfluenceButtom style={styles.fixedMenuArea}/>

          <MyProfileButtom style={styles.fixedMenu}/>


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
