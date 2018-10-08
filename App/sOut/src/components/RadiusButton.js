/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


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
          radio_props={genre}
          initial={-1}
          onPress={(value) => console.warn()}
          buttonSize={30}
          buttonOuterSize={30}
          buttonColor={'#fff'}
          borderWidth={0.5}
          selectedButtonColor={'#fff'}
          selectedLabelColor={'#fff'}
          labelStyle={styles.radiusButtons}
          animation={false}
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

  }

});
