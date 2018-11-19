import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  Modal,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Dimensions,
  DatePickerAndroid,
  DatePickerIOS,
  Platform
} from 'react-native'

import moment from 'moment'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const initialState = { title: '', textResult: '', date: new Date() }

export default class AddTask extends Component {
  state = { ...initialState }

  save = () => {
    if (!this.state.title.trim()) {
      this.setState({textResult: "insira título e prazo"})
      return
    }

    const data = { ...this.state }
    this.props.onSave(data)
    this.setState({ ...initialState })
  }

    handleDateAndroidChanged = () => {
        DatePickerAndroid.open({
            date: this.state.date
        }).then(e => {
            if (e.action !==
                DatePickerAndroid.dismissedAction) {
                const momentDate = moment(this.state.date)
                momentDate.date(e.day)
                momentDate.month(e.month)
                momentDate.year(e.year)
                this.setState({ date: momentDate.toDate() })
            }
        })
    }



  render() {

      let datePicker = null
      if (Platform.OS === 'ios') {
          datePicker = <DatePickerIOS mode='date' date={this.state.date}
                                      onDateChange={date => this.setState({ date })} />
      } else {
      datePicker = (
          <TouchableOpacity onPress={this.handleDateAndroidChanged}>
              <Text style={styles.date}>
                  {moment(this.state.date).format('ddd, D [de] MMMM [de] YYYY')}
              </Text>
          </TouchableOpacity>
      )
      }

    return (
      <Modal
        onRequestClose={this.props.onCancel}
        visible={this.props.isVisible}
        animationType='fade'
        transparent={true}>

        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.offset}></View>
        </TouchableWithoutFeedback>

        <View style={styles.modalArea}>
          <View style={styles.modalContent}>

            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>Nova tarefa</Text>
            </View>

            <View style={styles.newTask}>
              <Text style={styles.newTaskTitle}>TÍTULO</Text>
              <View style={styles.newTaskInputField}>
                <View style={styles.inputTitleBorder} >
                  <TextInput
                    style={styles.inputTitleText}
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}/>
                </View>
              </View>
            </View>
            <View style={styles.modalText}>
              <Text style={styles.modalText}>{this.state.textResult}</Text>
            </View>
              <View>
                  {datePicker}
              </View>
            <View style={styles.Create}>
              <TouchableOpacity style={styles.createTouch} onPress={this.save}>
                <Text style={styles.createText}>Criar</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.offset}></View>
        </TouchableWithoutFeedback>

      </Modal>
    )
  }
}

var styles = StyleSheet.create({
  offset: {
    flex: 1,
    backgroundColor: '#000',
    opacity: 0.1
  },

  modalArea: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: height / 150,
  },

  modalContent: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    padding: height / 150,
    width: width * 0.9,
  },

  titleModal:{
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#00ce67',
    alignItems: 'center',
    justifyContent: 'center',
  },

  taskTitle: {
    marginTop: 10,
    marginRight: 280,
    alignItems: 'center',
    fontSize: 11,
    fontFamily: 'Roboto Bold',
    justifyContent: 'center',
  },
  input: {
    fontFamily: 'Roboto Light',
    fontSize: 20,
    color: '#00ce67',
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
    borderColor: '#00ce67',
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

  Create : {
    width: width * 0.88,
    height: height / 12.8,
    backgroundColor: "#00ce67",
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
  },

  date: {
    fontFamily: 'Roboto',
    color: "#00ce67",
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
    textAlign: 'center',
  },

  modalText:{
    fontFamily: 'Roboto',
    fontSize: 9,
    color: '#FF103E',
    height: height / 36,
    width: width * 0.80,
  },

  button: {
    flex: 1,
    height: height * 0.085,
    alignItems:'center',
    justifyContent: 'center',
  },



  modalHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
      height: height / 14,
      width: width * 0.30
  },

  modalHeaderText:{
    fontFamily: 'Roboto',
    fontSize: 18,
    color: '#00ED74',
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

})
