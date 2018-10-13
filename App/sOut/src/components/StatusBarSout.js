/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class StatusBarSout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    height: height * 0.03,
    alignItems:'center',
    justifyContent: 'center',
  },
});
