/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';



export default class StatusBarSout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='transparent' barStyle='dark-content'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    height: height * 0.03,
    width: width * 0.15,
    alignItems:'center',
    justifyContent: 'center',
  },
});
