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
    ImageBackground,
    Dimensions
} from 'react-native'



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
            setTimeout(() =>{
                this.props.navigation.navigate('Hall')
            }, 5000);

        }
    };

    componentWillMount = () => {
        this.verif()
    };

    render() {
        return (
                <View style={styles.container}>
                <StatusBar translucent={true} backgroundColor={'transparent'}/>
                <View style={styles.logoField}>
                    <Image style={styles.logo} source={require('../../resources/images/logos/logo-sout.png')}/>
                </View>
                <View>
                    <ActivityIndicator size='large'/>
                </View>

                </View>





        )
    }
}


var styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },

    logoField:{
        alignItems:'center',
        justifyContent: 'center',
        width: width,
        height: height,

    },

    logo:{
        width: width * 0.78,
        marginBottom: 60
    },


});