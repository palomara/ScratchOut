import React, {Component} from 'react';
import {
    ImageBackground,
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';


var FBLoginButton = require('../components/FBLoginButton');


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;



export default class Hall extends Component<Props> {

    componentDidMount(){
        this._loadInitialState ().done();
    }

    _loadInitialState  = async () => {

        var value = await AsyncStorage.getItem('token');
        if(value !== null){
            this.props.navigation.navigate('Home')
        }
    };



    render () {
     return (
         <ImageBackground source={require('../../resources/images/green-galaxy.png')} style={styles.background}>
            <View style={styles.container}>
                <StatusBar backgroundColor="#00E075"/>
                <View style={styles.logoField}>
                    <Image
                        style={styles.logo}
                        source={require('../../resources/images/logo-login-w.png')}/>
                </View>

                <View>
                    <Text style={styles.texto}>Aumente sua produtividade!</Text>
                </View>

                <View style={styles.buttonField}>
                  <FBLoginButton style={styles.buttonFbG} />
                </View>

                <View style={styles.textLinkCadastro}>
                  <Text style={styles.textLink}>
                    Já possui uma conta S.Out?
                  </Text>
                </View>

                <View style={styles.buttonField}>
                    <TouchableOpacity  style={styles.buttonEmail}
                                       onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.textButtonEmail}>Entre com e-mail</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.textLinkCadastro}>
                  <Text style={styles.textLink}
                    onPress={() => console.warn("Fui tocado!")}>
                    Ainda não possui uma conta?
                    <Text style={styles.textLinkBold}
                      onPress={() => console.warn("Fui tocado!")}> Crie uma agora!
                    </Text>
                  </Text>
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
        justifyContent: 'center',
    },
    logoField:{
        alignItems:'center',
        justifyContent: 'center',
        marginBottom: height / 4

    },

    logo:{
        width: width * 0.9
    },

    texto: {
        fontFamily: 'Roboto Light',
        fontSize: 18,
        color: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textLink:{
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#fff'
    },

    textLinkBold:{
        fontFamily: 'Roboto Bold',
        fontSize: 14,
        color: '#fff'
    },
    textButtonEmail: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#00E075'
    },
    textButtonFbG: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#FFFFFF'
    },
    buttonFbG: {
        width: 400,
        borderRadius: 600,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#518EF8',
        height: 200,
        zIndex: 100,
        margin: 5,
        marginBottom: 10
    },
    background:{
        width: width,
        height: height
    },
    buttonEmail:{
        width: 300,
        borderRadius: 600,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        height: 50,
        zIndex: 100,
    },
    buttonField:{
        marginBottom: height / 26,
    }
})
