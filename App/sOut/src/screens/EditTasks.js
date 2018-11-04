import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions,
} from 'react-native';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class EditTasks extends Component {

    render () {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='transparent' barStyle='dark-content'/>
                <View style={styles.fixedNav}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('TasksList')}} style={styles.backButtonStyle}>
                        <Image source={require('../../resources/images/icons/icon-nav_back-white.png')}/>
                    </TouchableOpacity>
                    <View style={styles.emptyView}></View>
                </View>

                <View style={styles.editTaskTitleView}>
                    <Text style={styles.taskTitle}> Task Title </Text>
                </View>



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
    backButtonStyle: {
        marginLeft: 10
    },
    editTaskTitleView: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: height * 0.1,
        width: width,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        elevation: 3,
        position: 'relative'
    },
    taskTitle: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#00ED74',
        marginTop: 20,
        right: 280,
        position: 'absolute',


    }
})