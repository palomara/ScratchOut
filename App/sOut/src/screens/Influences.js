/* @flow */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image, Dimensions,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import MyBackButton from "../components/MyBackButton";
import FixedMenu from "../components/FixedMenu";
import Humor from './Humor'


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Influences extends Component {

    state = {
        showHumorOptions: false,
    }

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

                <ScrollView style={styles.mainView}>


                </ScrollView>

                <ActionButton buttonColor={'#00ED74'} style={styles.actionBtn}>
                    <ActionButton.Item buttonColor='#9b59b6' title="Humor" onPress={() => { this.setState({ showHumorOptions: true }) }}>
                        <Icon name="ios-happy" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Exercícios" onPress={() => {}}>
                        <Icon name="md-fitness" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Saúde" onPress={() => {}}>
                        <Icon name="ios-medkit" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>

                <View></View>

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
    }
});
