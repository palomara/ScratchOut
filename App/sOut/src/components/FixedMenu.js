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
    StatusBar, TextInput
} from 'react-native';

import Modal from "react-native-modal";
import {login} from "./func";

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

            <Modal isVisible={this.state.isModalVisible}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Nova tarefa</Text>
                    <Text style={styles.taskTitle}>Título</Text>
                    <View style={styles.inputFieldPass} >
                        <TextInput style={styles.input} />
                        <TouchableOpacity style={styles.addTaskIcon}>
                            <Image source={require('../../resources/images/icons/icon-new_task.png')}/>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={this._toggleModal}>
                        <Text>Fechar</Text>
                    </TouchableOpacity>

                    <View style={styles.Create}>
                        <TouchableOpacity style={styles.createTouch}>
                            <Text style={styles.createText}>Criar</Text>
                        </TouchableOpacity>
                    </View>

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
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderColor: 'rgba(0, 0, 0, 0.1)'
    },

    title:{
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#00ED74',
        alignItems: 'center',
        justifyContent: 'center',
    },
    taskTitle: {
      marginTop: 10,
      marginRight: 280,
      fontSize: 16,
      alignItems: 'center'
    },
    input: {
        fontFamily: 'Roboto Light',
        fontSize: 20,
        color: '#00ED74',
        flex: 1
    },
    addTaskIcon: {
        width: 20,
        height: 20,
        marginRight: width * 0.1
    },
    inputFieldPass:{
        borderBottomWidth: 2,
        borderColor: '#00ED74',
        alignItems:'center',
        flexDirection: 'row',
        marginBottom: 8,

    },
    Create : {
      width: width * 0.88,
        height: height / 12.8,
        backgroundColor: "#00ED74",
        borderRadius: 40,
        marginTop: height / 50
  },
    createTouch: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    createText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#fff',
        alignItems: 'center'
    }


});
