/* @flow */
import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  Text,
  View,
} from 'react-native';

import Modal from "react-native-modal";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class CreateTaskButton extends Component {
  state = {
    isModalVisible: false
  };

  _toggleModal = () =>
  this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this._toggleModal}>
          <Image source={require('../../resources/images/icons/icon-new_task.png')}/>
        </TouchableOpacity>

        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Nova tarefa</Text>
            <Text style={styles.taskTitle}>Título</Text>
            <View style={styles.newTaskArea}>
              <View style={styles.inputFieldPass} >
                <TextInput style={styles.inputText} />
              </View>
              <TouchableOpacity style={styles.addTaskIcon}>
                <Image source={require('../../resources/images/icons/icon-new_task.png')}/>
              </TouchableOpacity>
            </View>

            <View style={styles.createButton}>
              <TouchableOpacity style={styles.createButtonTouch} onPress={this._toggleModal}>
                <Text style={styles.createButtonText}>Criar</Text>
              </TouchableOpacity>
            </View>

          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    flex: 1,
    height: height * 0.085,
    alignItems:'center',
    justifyContent: 'center',
  },

  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'space-between',
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
  inputText: {
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
    flex: 1,
    borderBottomWidth: 2,
    borderColor: '#00ED74',
    alignItems:'center',
    flexDirection: 'row',
    marginBottom: 8,
    height: 40,
  },

  newTaskArea:{
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  createButton : {
    width: width * 0.88,
    height: height / 12.8,
    backgroundColor: "#00ED74",
    borderRadius: 40,
    marginTop: height / 50
  },

  createButtonTouch: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
  },

  createButtonText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#fff',
    alignItems: 'center'
  },
});
