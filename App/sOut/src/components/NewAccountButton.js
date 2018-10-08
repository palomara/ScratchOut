/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class NewAccountButton extends Component {
  render() {
    return (
      <View style={styles.fieldNewAccount}>
        <Text style={styles.textNewAccount}
          onPress={() => this.props.navigation.navigate('RegisterOne')}>
          Ainda não possui uma conta?
          <Text style={styles.textNewAccountBold}> Crie uma agora!</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textNewAccount:{
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#fff'
  },

  textNewAccountBold:{
    fontFamily: 'Roboto Bold',
    fontSize: 14,
    color: '#fff'
  },

  fieldNewAccount:{
    alignItems:'center',
    marginBottom: height / 200
  },
});
