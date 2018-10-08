/* @flow */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet, Dimensions, StatusBar, Image, TouchableOpacity, ScrollView
} from 'react-native';
import FixedMenu from '../components/FixedMenu';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Profile extends Component {
  render() {
      return (
          <View style={styles.container}>
              <StatusBar backgroundColor='transparent' barStyle='dark-content'/>
              <View style={styles.fixedNav}>
                  <TouchableOpacity style={styles.fixedNavArea} onPress={() => console.warn("Back to Home")}>
                      <Image source={require('../../resources/images/icons/icon-nav_back-green.png')}/>
                  </TouchableOpacity>
                  <Text style={styles.title}>Perfil</Text>
                  <View style={styles.emptyView}></View>
              </View>

              <ScrollView style={styles.mainView}>
                  <View style={styles.editView}>
                      <TouchableOpacity style={styles.editView} onPress={() => console.warn("Edit User")}>
                          <Image source={require('../../resources/images/icons/icon-edit-green.png')}/>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.editView} onPress={() => console.warn("Go to Settings")}>
                          <Image source={require('../../resources/images/icons/icon-settings-green.png')}/>
                      </TouchableOpacity>

                  </View>

                  <View>
                      <Text style={styles.title}>E-mail</Text>
                      <Text style={styles.title}>Plano</Text>
                      <Text style={styles.title}>Indicador de Performance</Text>
                  </View>
              </ScrollView>

              <FixedMenu />
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },

    fixedNav: {
        flexDirection: 'row',
        height: height * 0.1,
        width: width,
        alignItems:'flex-start',
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
        fontSize: 28,
        color: '#00ED74',
        alignItems: 'center'
    },

    mainView:{
        height: height * 0.6,
        width: width,
    },

    editView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',
        position: 'relative'
    }

});