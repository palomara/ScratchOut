import React, {Component} from 'react';
import {ImageBackground, View, Image, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const margin = 40;

export default class Hall extends Component<Props> {
 render () {
     return (
         <ImageBackground source={require('../../resources/images/green-galaxy.png')} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.logoField}>
                    <Image
                        style={styles.logo}
                        source={require('../../resources/images/logo-login-w.png')}/>
                </View>

                <View style={styles.buttonField}>
                    <TouchableOpacity  style={styles.buttonEmail}>
                        <Text style={styles.textButtonEmail}>Entre com e-mail</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.texto}>Aumente sua produtividade!</Text>
                </View>
            </View>
         </ImageBackground>
     );
 }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    },
    logoField:{
        alignItems:'center',
        justifyContent: 'center',
        marginBottom: height / 7
    },

    logo:{
        width: width * 0.9
    },

    texto: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#fff'
    },
    textButtonEmail: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#00E075'
    },
    background:{
        width: width,
        height: height
    },
    buttonEmail:{
        width: width * 0.88,
        borderRadius: 600,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        height: margin,
        zIndex: 100,
    },
    buttonField:{
        marginBottom: height / 26,
    }
})