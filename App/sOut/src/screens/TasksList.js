import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions,
} from 'react-native';


import FixedMenu from "../components/FixedMenu";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class TasksList extends Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='transparent' barStyle='dark-content'/>
          <View style={styles.fixedNav}>
              <TouchableOpacity style={styles.fixedNavArea} onPress={() => console.warn("Back to Home")}>
                  <Image source={require('../../resources/images/icons/icon-nav_back-green.png')}/>
              </TouchableOpacity>
              <Text style={styles.title}>Tarefas</Text>
              <View style={styles.emptyView}></View>
          </View>
          <View style={styles.flatList}></View>
          <FixedMenu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    fixedNav: {
        flexDirection: 'row',
        height: height * 0.1,
        width: width,
        alignItems:'center',
        justifyContent: 'space-between',
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        marginBottom: 20,
        elevation: 3,
        position: 'relative'
    },

    fixedNavArea: {
        height: height * 0.08,
        width: width * 0.15,
        alignItems:'center',
        justifyContent: 'center',
    },

    emptyView:{
        height: height * 0.08,
        width: width * 0.15,
        alignItems:'center',
        justifyContent: 'center',
    },

    title:{
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#00ED74',
        alignItems: 'center',
        justifyContent: 'center'
    },

    flatList:{
      flex: 1,
    }
});
