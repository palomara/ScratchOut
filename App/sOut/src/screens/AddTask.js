import React, { Component } from 'react'
import {
    Modal,
    View,
    Text,
    TextInput,
    DatePickerIOS,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert,
    DatePickerAndroid,
    Platform, Image, Dimensions
} from 'react-native'
import moment from 'moment'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const initialState = { title: '', date: new Date() }

export default class AddTask extends Component {
    state = { ...initialState }

    save = () => {
        if (!this.state.title.trim()) {
            Alert.alert('Dados incompletos', 'Insira o título e o prazo da tarefa.')
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
            if (e.action !== DatePickerAndroid.dismissedAction) {
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
            <Modal onRequestClose={() => {}}
                   visible={this.props.isVisible}>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View></View>
                </TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                    <Text style={styles.titleModal}>Nova tarefa</Text>
                    <Text style={styles.taskTitle}>Título</Text>
                    <View style={styles.newTaskArea}>
                        <View style={styles.inputFieldPass} >
                            <TextInput style={styles.input} onChangeText={title => this.setState({ title })}
                                       value={this.state.title} />
                        </View>

                        <TouchableOpacity style={styles.addTaskIcon}>
                            <Image source={require('../../resources/images/icons/icon-new_task.png')}/>
                        </TouchableOpacity>
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
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

var styles = StyleSheet.create({
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderColor: 'rgba(0, 0, 0, 0.1)'
    },

    titleModal:{
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
    },

    date: {
        fontSize: 20,
        marginLeft: 10,
        marginTop: 10,
        textAlign: 'center',
    }

})