/* @flow */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image, Dimensions,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from 'react-native-modal-datetime-picker';

import MyBackButton from "../components/MyBackButton";
import FixedMenu from "../components/FixedMenu";
import Humor from './Humor'


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Influences extends Component {

    state = {
        showHumorOptions: false,
    }

    //TODO: Mostrar o TimePicker - _handleDatePicked pega a data/hora selecionada

    state = {
        isDateTimePickerVisible: false,
    };
    
    /*aqui define o state de visibilidade */

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (time) => {
        console.log('A date has been picked: ', time);
        this._hideDateTimePicker();
    };

    render() {


        return (
            <View style={styles.container}>
                <Humor isVisible={this.state.showHumorOptions}
                       onSave={this.addTask}
                       onCancel={() => this.setState({ showHumorOptions: false })} />
                <StatusBar backgroundColor='transparent' barStyle='dark-content'/>
                <View style={styles.fixedNav}>
                    <MyBackButton style={styles.fixedNavArea}/>
                    <Text style={styles.title}>Influências</Text>
                    <View style={styles.emptyView}></View>
                </View>

                <View style={styles.Entry}>
                    <TouchableOpacity style={styles.newEntry} onPress={() => { this.setState({ showHumorOptions: true }) }}>
                        <View style={styles.icon}>
                        <Image source={require('../../resources/images/icons/icon-more-white.png')}/>
                        </View>

                        <Text style={styles.newEntryText}>Como você está se sentindo
                            <Text style={styles.newEntryTextBold}> agora</Text>?
                        </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.mainView}>


                </ScrollView>

                <View style={styles.Entry}>
                <TouchableOpacity style={styles.newEntry} onPress={this._showDateTimePicker}>
                    <View style={styles.icon}>
                    <Image source={require('../../resources/images/icons/icon-more-white.png')}/>
                    </View>

                    <Text style={styles.newEntryText}>Insira uma
                    <Text style={styles.newEntryTextBold}> nova entrada </Text>
                    </Text>
                </TouchableOpacity>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                    />
                </View>

                <FixedMenu/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    fixedNav: {
        flexDirection: 'row',
        height: height * 0.1,
        width: width,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        marginBottom: 20,
        elevation: 3,
        position: 'relative'
    },

    fixedNavArea: {
        height: height * 0.08,
        width: width * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    emptyView: {
        height: height * 0.08,
        width: width * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#00ED74',
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    actionBtn: {
        position: 'absolute',
        bottom: 50,
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
        flex: 1,
        height: height * 0.085,
        alignItems:'center',
        justifyContent: 'center',

    },
    influenceText: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#00ED74',
        marginLeft: width * 0.2,
        marginBottom: 10,
    },
    Entry: {
        width: width * 0.97,
        height: height / 12.8,
        backgroundColor: "#00ED74",
        marginTop: height / 50,
        borderRadius: 3,

    },
    newEntry: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    newEntryText: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#fff',
    },
    newEntryTextBold: {
        fontFamily: 'Roboto Bold',
        fontSize: 18,
        color: '#fff'
    },
    icon: {
        justifyContent: 'space-evenly',
        paddingRight: 20
    }

});
