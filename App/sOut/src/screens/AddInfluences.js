import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image, Dimensions, FlatList,
} from 'react-native';

import { CheckBox } from 'react-native-elements'
import DateTimePicker from 'react-native-modal-datetime-picker';
import MyBackButton from "../components/MyBackButton";
import Task from "../components/Task";
import FixedMenu from "../components/FixedMenu";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

//TODO: Corrigir checkbuttons, estão sendo todos selecionados quando seleciona-se um, e adicionar o TimePicker

export default class AddInfluences extends Component {

    state = {
        checked: false,
    };

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
                <StatusBar backgroundColor='transparent' barStyle='dark-content'/>
                <View style={styles.fixedNav}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Influences')}} style={styles.backButtonStyle}>
                        <Image source={require('../../resources/images/icons/icon-nav_back-white.png')}/>
                    </TouchableOpacity>
                    <View style={styles.emptyView}></View>
                </View>

                <ScrollView>
                    <View style={styles.healthView}>
                        <Text style={styles.title}>Sintomas </Text>
                        <CheckBox
                            title="Dor de cabeça"
                            checked={this.state.checked}
                            onPress={() => this.setState({ checked: !this.state.checked })}
                        />
                        <CheckBox
                            title="Dor nas costas"
                            checked={this.state.checked}
                            onPress={() => this.setState({ checked: !this.state.checked })}
                        />
                        <CheckBox
                            title="Dor de barriga"
                            checked={this.state.checked}
                            onPress={() => this.setState({ checked: !this.state.checked })}
                        />
                        <CheckBox
                            title="Febre"
                            checked={this.state.checked}
                            onPress={() => this.setState({ checked: !this.state.checked })}
                        />
                        <CheckBox
                            title="Insonia"
                            checked={this.state.checked}
                            onPress={() => this.setState({ checked: !this.state.checked })}
                        />
                        <CheckBox
                            title="Fadiga"
                            checked={this.state.checked}
                            onPress={() => this.setState({ checked: !this.state.checked })}
                        />
                    </View>
                </ScrollView>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },

    fixedNav: {
        flexDirection: 'row',
        height: height * 0.1,
        width: width,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#00ED74',
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
    healthView: {
        marginRight: 200
    },
    backButtonStyle: {
        marginLeft: 20
    }

})