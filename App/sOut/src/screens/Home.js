import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, ImageBackground, Image, Text, View} from 'react-native';
import { StackNavigator, TabNavigator } from "react-navigation";



const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default class Home extends Component<Props> {

  render() {
    return (
        <View style={{ flex: 1, width: 360, height: 60 }}>
            <ImageBackground source={require('../../resources/images/green-galaxy.png')} style={styles.background} opacity={0.16}>

            <View style={styles.container}>

            </View>
                <View>

                </View>
            </ImageBackground>
        </View>



    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    background:{
        width: width,
        height: height
    },


})
