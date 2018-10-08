/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Carousel extends Component {
  render() {
    return (
      <View style={styles.dots}>
        <Image source={require('../../resources/images/drawables/draw-dot.png')}/>
        <Image source={require('../../resources/images/drawables/draw-dot.png')}/>
        <Image source={require('../../resources/images/drawables/draw-dot.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dots:{
    width: width * 0.08,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
