import React, {Component} from 'react'
import axios from 'axios'
import {
    View,
    ActivityIndicator,
    StyleSheet,
    AsyncStorage,
    StatusBar,
    Image,
    Text,
    TouchableOpacity,
    Linking,
    ImageBackground,
    Dimensions
} from 'react-native'
import Carousel from "../components/Carousel";
import Icon from "react-native-vector-icons/FontAwesome";
import TimerMixin from 'react-timer-mixin';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default class AuthOrApp extends Component {

    verif = async () => {
        const json = await AsyncStorage.getItem('userData');
        const userData = JSON.parse(json) || {};

        if (userData.token) {
            axios.defaults.headers.common['Authorization'] = `bearer ${userData.token}`;
            this.props.navigation.navigate('Home', userData)
        } else {
            this.props.navigation.navigate('Hall')
        }
    };

    componentWillMount = () => {
        setTimeout(() =>{
            this.verif()
        }, 5000);
    };

    render() {
        return (
            <ImageBackground source={require('../../resources/images/green-galaxy.png')} style={styles.container} blurRadius={4}>
                <StatusBar translucent={true} backgroundColor={'transparent'}/>
                <View style={styles.emptyView}></View>
                <View style={styles.logoField}>
                    <Image style={styles.logo} source={require('../../resources/images/logos/logo-sout-white.png')}/>
                </View>
                <View>
                    <ActivityIndicator size='large'/>
                    <Text style={styles.textInfo}>Aumente sua produtividade!</Text>
                </View>
                <View></View>
                <View>

                </View>


            </ImageBackground>


        )
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'space-between',
        width: width,
        height: height,
    },

    logoField:{
        alignItems:'center',
        justifyContent: 'center',
        width: width,
        height: height / 2.5,
    },

    logo:{
        width: width * 0.78,
    },

    fieldNewAccount:{
        alignItems:'center',
        justifyContent: 'center',
        width: width * 0.9,
        marginBottom: height / 60,
    },

    textNewAccount:{
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#fff',
    },

    textNewAccountBold:{
        fontFamily: 'Roboto Bold',
        fontSize: 14,
        color: '#fff',
    },

    text:{
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#fff',
    },

    textInfo:{
        fontFamily: 'Roboto Light',
        fontSize: 18,
        color: '#fff',
        alignItems: 'center',
    },

    withEmail: {
        width: width * 0.9,
        height: height / 12.8,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: "#fff",
        borderRadius: 40,
        marginBottom: height / 60,
    },

    withEmailTouch:{
        flex: 1,
        width: width * 0.9,
        alignItems:'center',
        justifyContent: 'center',
    },

    withEmailText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#00ED74',
        alignItems: 'center'
    },

    withSocial: {
        width: width * 0.9,
        height: height / 12.8,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        backgroundColor: "#518EF8",
        borderRadius: 40,
        marginTop: height / 30,
        marginBottom: height / 30,
    },

    withSocialGoogle: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },

    withSocialGoogleText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#fff',
        alignItems: 'center',
    },

    SocialGoogle:{
        width: height / 15,
        height: height / 15,
    },

    SocialGoogleArea:{
        width: height / 12.8,
        height: height / 12.8,
        alignItems:'center',
        justifyContent: 'center',
    },

    withSocialFacebook:{
        backgroundColor: "#3B5999",
        borderRadius: 40,
        height: 70,
        width: 70,
        alignItems:'center',
        justifyContent: 'center',
    },

    SocialFacebook:{
        width: height / 20,
        height: height / 20,
    },

    fieldTermos:{
        width: width,
        height: height / 20,
        alignItems:'center',
    },

    textTermos:{
        fontFamily: 'Roboto',
        fontSize: 11,
        color: '#fff',
        alignItems: 'center',
    },

    textTermosBold:{
        fontFamily: 'Roboto Bold',
        fontSize: 11,
        color: '#fff',
        alignItems: 'center',
        textDecorationLine:'underline',
    }
});