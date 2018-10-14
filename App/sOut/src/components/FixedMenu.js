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
    StatusBar, TextInput
} from 'react-native';
import MyInfluenceButton from './InfluencesButton'
import MyTaskListButton from './TasksListButton'
import MyProfileButton from './ProfileButton'
import MyPerformceButton from './PerformanceButton'

import Modal from "react-native-modal";
import AddTaskButton from "./AddTaskButton";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class FixedMenu extends Component {



    render() {
    return (
        <View style={styles.fixedMenu}>

          <MyPerformceButton style={styles.fixedMenuArea}/>

          <MyTaskListButton style={styles.fixedMenuArea}/>

          <AddTaskButton style={styles.fixedMenuArea}/>

           <MyInfluenceButton style={styles.fixedMenuArea}/>

          <MyProfileButton style={styles.fixedMenuArea}/>


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
