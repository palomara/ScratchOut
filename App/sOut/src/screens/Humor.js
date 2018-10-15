import React, { Component } from 'react'
import {
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert,
    Platform, Image, Dimensions, TextInput
} from 'react-native'


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const initialState = { humor: ''}

export default class Humor extends Component {

    state = { ...initialState }

    render () {
        return (
            <Modal onRequestClose={this.props.onCancel}
                   visible={this.props.isVisible}
                   animationType='slide' transparent={true}>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.offset}></View>
                </TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                    <Text style={styles.titleModal}>Como se sente?</Text>
                    <View style={styles.humorArea}>
                        <TouchableOpacity style={styles.buttonHumor}>
                            <Image source={require('../../resources/images/icons/icon-5.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonHumor}>
                            <Image source={require('../../resources/images/icons/icon-4.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonHumor}>
                            <Image source={require('../../resources/images/icons/icon-3.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonHumor}>
                            <Image source={require('../../resources/images/icons/icon-2.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonHumor}>
                            <Image source={require('../../resources/images/icons/icon-1.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View>

                    </View>
                    <View style={styles.concludeButtonArea}>
                        <TouchableOpacity style={styles.concludeTouch} onPress={this.save}>
                            <Text style={styles.concludeText}>OK</Text>
                        </TouchableOpacity>
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
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderColor: 'rgba(0, 0, 0, 0.1)'
    },
    titleModal: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#00ED74',
        alignItems: 'center',
        justifyContent: 'center',
    },
    humorArea: {
        height: height * 0.085,
        width: width,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        elevation: 2,
    },
    buttonHumor: {
        alignItems:'center',
        justifyContent: 'center',

    },
    concludeButtonArea: {
        width: width * 0.88,
        height: height / 12.8,
        backgroundColor: "#00ED74",
        borderRadius: 40,
        marginTop: height / 50
    },
    concludeTouch: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    concludeText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#fff',
        alignItems: 'center'
    }
})