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
} from 'react-native';

import InfluencesButton from './InfluencesButton';
import TasksListButton from './TasksListButton';
import ProfileButton from './ProfileButton';
import PerformanceButton from './PerformanceButton';


import {login} from "./data";
import AddTaskButton from "./AddTaskButton";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class FixedMenu extends Component {
  render() {
    return (
      <View>
        <View style={styles.fixedMenu}>
          <PerformanceButton/>
          <TasksListButton/>
          <AddTaskButton/>
          <InfluencesButton/>
          <ProfileButton/>
        </View>
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
    backgroundColor: "#F8F8F8",
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    position: 'relative'
  },
});
