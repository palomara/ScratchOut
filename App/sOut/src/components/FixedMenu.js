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
  StatusBar
} from 'react-native';

import Modal from "react-native-modal";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;



export default class FixedMenu extends Component {
    state = {
        isModalVisible: false
    };

    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });


    render() {
    return (
        <View style={styles.fixedMenu}>

          <TouchableOpacity style={styles.fixedMenuArea} onPress={()=>console.warn("Indicador de Performance")}>
            <Image source={require('../../resources/images/icons/icon-sout.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fixedMenuArea} onPress={()=>console.warn("Tarefas")}>
            <Image source={require('../../resources/images/icons/icon-tasks.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fixedMenuArea} onPress={this._toggleModal}>
            <Image source={require('../../resources/images/icons/icon-new_task.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fixedMenuArea} onPress={()=>console.warn("Influenciadores")}>
            <Image source={require('../../resources/images/icons/icon-influences.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fixedMenuArea} onPress={()=>console.warn("Perfil e Configurações")}>
            <Image source={require('../../resources/images/icons/icon-profile.png')}/>
          </TouchableOpacity>

            <Modal isVisible={this.state.isModalVisible} style={styles.modalContent}>
                <View style={{ flex: 1 }}>
                    <Text>Conteudo</Text>
                    <TouchableOpacity onPress={this._toggleModal}>
                        <Text>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

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
  },

  fixedMenuArea: {
    flex: 1,
    height: height * 0.085,
    alignItems:'center',
    justifyContent: 'center',
  },

    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)'
    }

});
