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
import CalendarStrip from "react-native-calendar-strip";
import ProgressCircleHome from '../components/charts/progress-gauge'
import axios from "axios";


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

let datesWhitelist = [{
    start: moment(),
    end: moment().add(3, 'days')  // total 4 days enabled
}];
let datesBlacklist = [ moment().add(1, 'days') ]; // 1 day disabled

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

                <CalendarStrip
                    calendarAnimation={{type: 'sequence', duration: 30}}
                    daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'black'}}
                    style={{height: 100, width: width, paddingTop: 10, paddingBottom: 10}}
                    calendarHeaderStyle={{color: '#000', marginBottom: 10}}
                    calendarColor={'#fff'}
                    dateNumberStyle={{color: '#000'}}
                    dateNameStyle={{color: '#000'}}
                    highlightDateNumberStyle={{color: '#006F77'}}
                    highlightDateNameStyle={{color: '#006F77'}}
                    iconContainer={{flex: 0.1}}
                />

                <ScrollView style={styles.mainView}>

                    <View style={styles.historicalView}>
                        <View>
                            <Text> </Text>
                            <CircleChart/>
                        </View>

                        <View style={styles.chartArea}>
                            <ProgressCircleHome/>
                        </View>
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
        backgroundColor: '#fff'
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
    historicalView:{

    },
    chartArea: {
        marginTop: 20
    }
});
