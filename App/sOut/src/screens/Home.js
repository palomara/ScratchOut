import React, {Component} from 'react';
<<<<<<< HEAD
import {Dimensions, Platform, StyleSheet, ImageBackground, Image, Text, View} from 'react-native';
import { StackNavigator, TabNavigator } from "react-navigation";



const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
=======
import {Platform, StyleSheet, Text, View} from 'react-native';
>>>>>>> e5975c3293aee06f8b5efd7daee8a9a3250994bc


export default class Home extends Component<Props> {

  render() {
    return (
<<<<<<< HEAD
        <View style={{ flex: 1, width: 360, height: 60 }}>
            <ImageBackground source={require('../../resources/images/green-galaxy.png')} style={styles.background} opacity={0.16}>

            <View style={styles.container}>

            </View>
                <View>

                </View>
            </ImageBackground>
        </View>



=======
      <View style={styles.container}>
        <Text>Login Efetuado!</Text>
      </View>
>>>>>>> e5975c3293aee06f8b5efd7daee8a9a3250994bc
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    }

})
