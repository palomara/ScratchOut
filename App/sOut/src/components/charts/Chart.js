import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Dimensions, LayoutAnimation, ScrollView } from 'react-native';

import Pie from 'react-native-pie';

export default class Chart extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Pie
                            radius={100}
                            series={[10, 20, 30, 40]}
                            colors={['red', 'lime', 'blue', 'yellow']} />
                    </View>
                    <View>
                        <Pie
                            radius={100}
                            innerRadius={60}
                            series={[10, 20, 30, 40]}
                            colors={['#f00', '#0f0', '#00f', '#ff0']} />
                    </View>
                <View style={{ alignItems: 'center', justifyContent:'center' }}>
                    <Pie
                        radius={50}
                        innerRadius={45}
                        series={[60]}
                        colors={['#f00']}
                        backgroundColor='#ddd' />
                    <View style={styles.gauge}>
                        <Text style={styles.gaugeText}>60%</Text>
                    </View>
                </View>
                </ScrollView>
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
})