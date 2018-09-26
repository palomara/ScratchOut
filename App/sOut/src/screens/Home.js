import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Home extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <Text>Login Efetuado!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    }

})
