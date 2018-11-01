import React, { Component } from 'react'
import {
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert,
    Platform, Image, Dimensions, TextInput,  AsyncStorage
} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import Icon from "react-native-vector-icons/FontAwesome";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const initialState = { humor: '', date: new Date() }


export default class Humor extends Component {

    state = { ...initialState }


    constructor (props) {
        super(props);
        this.state = {
            humor: '',
            date: new Date()
        }
    }

    onRadiante =  () => {
        console.warn(this.state.humor)
        this.state = { uri: require('../../resources/images/icons/icon-5.png') }
    }

    onFeliz =  () => {
        console.warn(this.state.humor)
        this.state = { uri: require('../../resources/images/icons/icon-4.png') }
    }

    onNormal =  () => {
        console.warn(this.state.humor)
        this.state = { uri: require('../../resources/images/icons/icon-3.png') }
    }


    onTriste =  () => {
        console.warn(this.state.humor)
        this.state = { uri: require('../../resources/images/icons/icon-2.png') }
    }

    onHorrivel =  () => {
        console.warn(this.state.humor)
        this.state = { uri: require('../../resources/images/icons/icon-1.png') }
    }



    render () {
        return (
            <Modal onRequestClose={this.props.onCancel}
                   visible={this.props.isVisible}
                   animationType='fade' transparent={true}>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.offset}></View>
                </TouchableWithoutFeedback>
                <View style={styles.modalArea}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.titleModal}>Como se sente?</Text>
                    </View>
                    <View style={styles.humorArea}>
                        <TouchableOpacity style={styles.buttonHumor} onPress={() => {this.setState({humor: 'radiante'}, this.onRadiante)}}>
                            <Image source={require('../../resources/images/icons/icon-5-outliine.png')}/>
                            <Text style={styles.iconText} sytle={{color: '#88ff6e'}}>Radiante</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonHumor} onPress={() => {this.setState({humor: 'feliz'}, this.onFeliz)}}>
                            <Image source={require('../../resources/images/icons/icon-4-outliine.png')}/>
                            <Text style={styles.iconText} style={{color: '#15c3bf'}}>Feliz</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonHumor} onPress={() => {this.setState({humor: 'normal'}, this.onNormal)}}>
                            <Image source={require('../../resources/images/icons/icon-3-outliine.png')}/>
                            <Text style={styles.iconText} style={{color: '#faca19'}}>Normal</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonHumor} onPress={() => {this.setState({humor: 'triste'}, this.onTriste)}}>
                            <Image source={require('../../resources/images/icons/icon-2-outliine.png')}/>
                            <Text style={styles.iconText} style={{color: '#FF2452'}}>Triste</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonHumor} onPress={() => {this.setState({humor: 'horrivel'}, this.onHorrivel)}}>
                            <Image source={require('../../resources/images/icons/icon-1-outliine.png')}/>
                            <Text style={styles.iconText} style={{color: '#5D5D5D'}}>Horrível</Text>
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
    modalHeader:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: height / 14,
        width: width * 0.8,
    },
    titleModal: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#00ED74',
        alignItems: 'center',
        justifyContent: 'center',
    },
    humorArea: {
        padding: height / 150,
        width: width * 0.9,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        marginLeft: 2

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
    },
    iconText: {
        fontFamily: 'Roboto',
        alignItems: 'center',
        justifyContent: 'center',

    }
})