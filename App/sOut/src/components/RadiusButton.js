/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ToastAndroid,
  Dimensions,
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

var genre = [
  {label: 'Homem', value: 0 },
  {label: 'Mulher', value: 1 }
];

var radiusButtons = radiusButtons;

export default class RadiusButtons extends Component {
  render() {
    return (
      <View style={styles.radiusField}>
        <RadioForm
          radioItems={genre}
          onPress={(value) => ToastAndroid.show(value == 0  ? 'Homem' : 'Mulher' , ToastAndroid.SHORT)}
          buttonSize={height/32}
          buttonOuterSize={height/32}
          labelStyle={styles.radiusButtons}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  radiusField:{
    justifyContent: 'space-between',
    marginTop: 15,
  },

  radiusButtons:{
    fontFamily: 'Roboto Light',
    fontSize: 20,
    color: "#fff",
  },

});
