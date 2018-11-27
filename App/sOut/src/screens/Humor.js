import React, { Component } from 'react'
import {
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert,
    Platform, Image, Dimensions, TextInput, AsyncStorage
} from 'react-native'
import toast from 'react-native-simple-toast'
import moment from 'moment'
import 'moment/locale/pt-br'
import Icon from "react-native-vector-icons/FontAwesome";
import axios from 'axios'
import { server, showError } from '../components/common'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const radianteSelect = require('../../resources/images/icons/icon-5.png');
const readianteUnSelect = require('../../resources/images/icons/icon-5-outliine.png');
const felizSelect = require('../../resources/images/icons/icon-4.png');
const felizUnSelect = require('../../resources/images/icons/icon-4-outliine.png');
const normalSelect = require('../../resources/images/icons/icon-3.png');
const normalUnselect = require('../../resources/images/icons/icon-3-outliine.png');
const tristeSelect = require('../../resources/images/icons/icon-2.png');
const tristeUnSelect = require('../../resources/images/icons/icon-2-outliine.png');
const horrivelSelect = require('../../resources/images/icons/icon-1.png');
const horrivelUnSelect = require('../../resources/images/icons/icon-1-outliine.png');


const initialState = { humor: '', date: new Date() }
const datatime = moment().endOf('day').format('YYYY-MM-DD');


export default class Humor extends Component {

    state = { ...initialState }



    constructor(props) {
        super(props);
        this.state = {
            humor: '',
            radianteS: false,
            felisS: false,
            normalS: false,
            tristeS: false,
            horrivelS: false,
        }
    }

    onRadiante = () => {

        this.setState({ radianteS: !this.state.radianteS })
        this.state = { uri: require('../../resources/images/icons/icon-5.png') }
    }
    onFeliz = () => {
        this.setState({ felisS: !this.state.felisS })
        this.state = { uri: require('../../resources/images/icons/icon-4.png') }
    }
    onNormal = () => {
        this.setState({ normalS: !this.state.normalS })
        this.state = { uri: require('../../resources/images/icons/icon-3.png') }
    }
    onTriste = () => {
        this.setState({ tristeS: !this.state.tristeS })
        this.state = { uri: require('../../resources/images/icons/icon-2.png') }
    }
    onHorrivel = () => {
        this.setState({ horrivelS: !this.state.horrivelS })
        this.state = { uri: require('../../resources/images/icons/icon-1.png') }
    }
    onSave = async () => {
        if (this.state.radianteS) {
            await axios.post(`${server}/humor`, {
                title: 'radiante',
                scale: '5',
                dtIncluded: datatime
            })   
        }
        if (this.state.felisS) {
            await axios.post(`${server}/humor`, {
                title: 'feliz',
                scale: '4',
                dtIncluded: datatime
            })
        }
        if (this.state.normalS) {
            await axios.post(`${server}/humor`, {
                title: 'normal',
                scale: '3',
                dtIncluded: datatime
            })
        }
        if (this.state.tristeS) {
            await axios.post(`${server}/humor`, {
                title: 'triste',
                scale: '2',
                dtIncluded: datatime
            })
        }
        if (this.state.horrivelS) {
            await axios.post(`${server}/humor`, {
                title: 'horrivel',
                scale: '1',
                dtIncluded: datatime
            })
        }
       
        toast.show('Humor registrado!', toast.LONG )
        this.props.onCancel()
    }

    render() {

        let iconRadiante = this.state.radianteS ? radianteSelect : readianteUnSelect;
        let iconFeliz = this.state.felisS ? felizSelect : felizUnSelect;
        let iconNormal = this.state.normalS ? normalSelect : normalUnselect;
        let iconTriste = this.state.tristeS ? tristeSelect : tristeUnSelect;
        let iconHorrivel = this.state.horrivelS ? horrivelSelect : horrivelUnSelect;

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
                            <TouchableOpacity style={styles.buttonHumor} onPress={() => { this.setState({ humor: 'radiante' }, this.onRadiante) }}>
                                <Image source={iconRadiante} />
                                <Text style={styles.iconText} sytle={{ color: this.state.disabl === '1' ? '#88ff6e' : '#949494' }}>Radiante</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonHumor} onPress={() => { this.setState({ humor: 'feliz' }, this.onFeliz) }}>
                                <Image source={iconFeliz} />
                                <Text style={styles.iconText} style={{ color: '#15c3bf' }}>Feliz</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonHumor} onPress={() => { this.setState({ humor: 'normal' }, this.onNormal) }}>
                                <Image source={iconNormal} />
                                <Text style={styles.iconText} style={{ color: '#faca19' }}>Normal</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonHumor} onPress={() => { this.setState({ humor: 'triste' }, this.onTriste) }}>
                                <Image source={iconTriste} />
                                <Text style={styles.iconText} style={{ color: '#FF2452' }}>Triste</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonHumor} onPress={() => { this.setState({ humor: 'horrivel' }, this.onHorrivel) }}>
                                <Image source={iconHorrivel} />
                                <Text style={styles.iconText} style={{ color: '#5D5D5D' }}>Horrível</Text>
                            </TouchableOpacity>
                        </View>
                        <View>

                        </View>
                        <View style={styles.concludeButtonArea}>
                            <TouchableOpacity style={styles.concludeTouch} onPress={this.onSave}>
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
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: height / 14,
        width: width * 0.8,
    },
    titleModal: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#00ce67',
        alignItems: 'center',
        justifyContent: 'center',
    },
    humorArea: {
        padding: height / 150,
        width: width * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        marginLeft: 2

    },
    buttonHumor: {
        alignItems: 'center',
        justifyContent: 'center',


    },
    concludeButtonArea: {
        width: width * 0.88,
        height: height / 12.8,
        backgroundColor: "#00ce67",
        borderRadius: 40,
        marginTop: height / 50
    },
    concludeTouch: {
        flex: 1,
        alignItems: 'center',
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