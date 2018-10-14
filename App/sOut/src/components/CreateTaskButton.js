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

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textResult: "",
    }
  }
  state = {
    isModalVisible: false,
    textResult: "",
    title: "",
  };

  _toggleModal = () =>
  this.setState({ isModalVisible: !this.state.isModalVisible, textResult: "", title: ""});

  render() {

    if(this.state.title !== ''){
      createButton = <View style={styles.createButton}>
        <TouchableOpacity style={styles.createButtonTouch} onPress={this._toggleModal}>
          <Text style={styles.createButtonText}>Criar</Text>
        </TouchableOpacity>
      </View>
    }else{
      createButton = <View style={styles.createButton}>
        <TouchableOpacity style={styles.createButtonTouch}
          onPress={() => this.setState({textResult: "insira um título"})}>
          <Text style={styles.createButtonText}>Criar</Text>
        </TouchableOpacity>
      </View>
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this._toggleModal}>
          <Image source={require('../../resources/images/icons/icon-new_task.png')}/>
        </TouchableOpacity>

        <Modal isVisible={this.state.isModalVisible} onRequestClose={this._toggleModal}>
          <View style={styles.modalContent}>

            <View style={styles.modalHeader}>
              <View style={styles.closeView}></View>
              <Text style={styles.modalHeaderText}>Nova tarefa</Text>
              <TouchableOpacity style={styles.closeView} onPress={this._toggleModal}>
                <Image source={require('../../resources/images/icons/icon-nav_close-grey.png')}/>
              </TouchableOpacity>
            </View>

            <View style={styles.newTask}>
              <Text style={styles.newTaskTitle}>TÍTULO</Text>
              <View style={styles.newTaskInputField}>
                <View style={styles.inputTitleBorder} >
                    <TextInput
                      style={styles.inputTitleText}
                      onChangeText={(title) => this.setState({title})}
                      />
                </View>
              </View>
            </View>

            <View style={styles.modalText}>
              <Text style={styles.modalText}>{this.state.textResult}</Text>
            </View>

            {createButton}

          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: height * 0.085,
    alignItems:'center',
    justifyContent: 'center',
  },

  closeView: {
    height: height / 14,
    width: height / 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalContent: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    padding: height / 150,
  },
  modalHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: height / 14,
    width: width * 0.88,
  },

  modalHeaderText:{
    fontFamily: 'Roboto',
    fontSize: 18,
    color: '#00ED74',
  },

  modalText:{
    fontFamily: 'Roboto',
    fontSize: 9,
    color: '#FF103E',
    height: height / 36,
    width: width * 0.80,
  },

  newTask:{
    width: width * 0.80,
  },

  newTaskTitle: {
    fontSize: 8,
    fontFamily: 'Roboto Bold',
    justifyContent: 'center',
  },

  newTaskInputField:{
    flexDirection: 'row',
    height: height / 14,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  inputTitleBorder:{
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#00ED74',
    marginBottom: 10,
  },
  inputTitleText: {
    flex: 1,
    fontFamily: 'Roboto Light',
    fontSize: 20,
    color: '#00ED74',
    height: height / 14,
  },

  addMoreIcon: {
    width: width * 0.08,
    height: width * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
  },



  createButton : {
    width: width * 0.88,
    height: height / 12.8,
    backgroundColor: "#00ED74",
    borderRadius: 40,
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
