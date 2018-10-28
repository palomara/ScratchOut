import React, {Component} from 'react';
import {BoxShadow} from 'react-native-shadow'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    AsyncStorage,
    ScrollView,
    StatusBar,
    Modal,
    TouchableHighlight,
} from 'react-native';
import moment from 'moment'

import FixedMenu from '../components/FixedMenu';
import StatusBarSout from '../components/StatusBarSout';
import CircleChart from '../components/charts/ProgressCircleChart';
import axios from "axios";


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Home extends Component<Props> {

    logout = () => {
        delete axios.defaults.headers.common['Authorization'];
        AsyncStorage.removeItem('userData')
        this.props.navigation.navigate('Hall')
    };

    render() {
        return (
            <View style={styles.container}>
              <StatusBar translucent={false} backgroundColor={'transparent'} barStyle='dark-content'/>
                <View style={styles.fixedNav}>
                    <TouchableOpacity style={styles.fixedNavArea} onPress={() => this.props.navigation.openDrawer()}>
                        <Image source={require('../../resources/images/icons/icon-nav_menu-green.png')}/>
                    </TouchableOpacity>
                    <Image source={require('../../resources/images/logos/logo-sout-nav.png')}/>
                    <View style={styles.emptyView}></View>
                </View>

                <ScrollView style={styles.mainView}>

                    <TouchableOpacity onPress={() => this.logout()}>
                        <Text>Logout</Text>
                    </TouchableOpacity>

                    <View>
                        <CircleChart/>
                    </View>

                </ScrollView>

                <FixedMenu/>

            </View>
        )
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

    mainView: {
        height: height * 0.6,
        width: width,
    },
});
