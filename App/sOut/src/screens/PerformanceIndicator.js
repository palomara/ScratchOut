import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView } from "react-native";
import FixedMenu from "../components/FixedMenu";
import MyBackButton from '../components/MyBackButton'
import ProgressCircleChart from '../components/charts/ProgressCircleChart'



const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;



export default class PerformanceIndicator extends Component {


    render() {

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='transparent' barStyle='dark-content'/>
                <View style={styles.fixedNav}>
                    <MyBackButton style={styles.fixedNav}/>
                    <Text style={styles.title}>Indicador de Performance</Text>
                    <View style={styles.emptyView}></View>
                </View>

                <ScrollView>
                    <View >

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

})