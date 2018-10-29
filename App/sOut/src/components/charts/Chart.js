import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Dimensions, LayoutAnimation, ScrollView } from 'react-native';

import Pie from 'react-native-pie';

export default class Chart extends Component {

    render() {
        return (
            <View style={styles.container}>
                    <View>
                        <Text> Título </Text>
                        <Pie
                            radius={100}
                            series={[10, 20, 30, 40]}
                            colors={['#88ff6e', '#15c3bf', '#faca19', '#FF2452']} />
                        <Text>Legenda</Text>
                    </View>
                    <View style={styles.pieHealthChart}>
                        <Text> Título </Text>
                        <Pie
                            radius={100}
                            innerRadius={60}
                            series={[10, 20, 30, 40]}
                            colors={['#88ff6e', '#989c80', '#54f29e', '#15c3bf']} />
                        <Text>Legenda</Text>
                    </View>
                <View style={styles.progressChart}>
                    <Pie
                        radius={50}
                        innerRadius={45}
                        series={[60]}
                        colors={['#f00']}
                        backgroundColor='#ddd' />
                    <View style={styles.gauge}>
                        <Text style={styles.gaugeText}>60%</Text>
                    </View>
                    <Text>Legenda</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    gauge: {
        position: 'absolute',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 24,
    },
    pieHealthChart: {
        paddingTop: 20,
    },
    progressChart: {
        alignItems: 'center',
        justifyContent:'center',
        paddingTop: 20
    }
})