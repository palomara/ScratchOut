import React from 'react'
import {CircularProgress} from 'react-native-svg-circular-progress';
import { Text, View, TouchableHighlight, StyleSheet, Dimensions, LayoutAnimation, ScrollView } from 'react-native';

const CircleChart = (props) => {
    const percentage = props.progresso
    return <View style={styles.container}>
        <CircularProgress percentage={percentage} progressWidth={80} size={230} donutColor={ percentage <= 50 ? "#ed2f2a" : "#00ED74"}>
            <View>
                <Text style={styles.fontPercentage}>{percentage}%</Text>
            </View>
        </CircularProgress>
        <View>
        </View>
    </View>
}

export default CircleChart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 40,
    },
    fontPercentage: {
        fontFamily: 'Roboto',
        fontSize: 25,
    }
})