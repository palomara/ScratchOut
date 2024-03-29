import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  AsyncStorage,
  Linking
} from 'react-native';

import { LoginManager, AccessToken } from 'react-native-fbsdk'
import Carousel from '../components/Carousel'
import { server, showError } from "../components/common";
import axios from 'axios'

import Icon from 'react-native-vector-icons/FontAwesome';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Hall extends Component<Props> {


  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    }
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {

    var value = await AsyncStorage.getItem('token');
    if (value !== null) {
      this.props.navigation.navigate('Home')
    }
  };

  handleFacebookLogin = async () => {
    await LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {
        }
      },
      function (error) {
        console.warn('Login fail with error: ' + error)
      }
    )
    AccessToken.getCurrentAccessToken().then(
      async (data) => {
        console.log(data.accessToken.toString())
        const baseUrl = `https://graph.facebook.com/me?access_token=${data.accessToken}`
        const fields = '&fields=email,first_name,last_name,birthday';
        const userdata = await fetch(`${baseUrl}${fields}`)
        let response = await userdata.json()
        console.warn(response.first_name)
        await this.singun(response)
        await this.login(response)
      }
    )
  }

  login = async (res) => {
    try {
        const user = await axios.post(`${server}/signin`, {
            email: res.email,
            password: res.email
        });

        axios.defaults.headers.common['Authorization'] = `bearer ${user.data.token}`;
        AsyncStorage.setItem('userData', JSON.stringify(user.data));
        this.props.navigation.navigate('Home')

    } catch(e) {
       
    }
};

   
  singun = async (res) => {
        try{
            await axios.post(`${server}/signup`,{
                name: `${res.first_name}`,
                email: res.email,
                password: res.email,
            });
        }catch (err) {
            showError(err)
        }
    
};

  render() {
    return (
      <ImageBackground source={require('../../resources/images/green-galaxy.png')} style={styles.container} blurRadius={4}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <View style={styles.emptyView}></View>
        <View style={styles.logoField}>
          <Image style={styles.logo} source={require('../../resources/images/logos/logo-sout-white.png')} />
        </View>

        <View>
          <Text style={styles.textInfo}>Aumente sua produtividade!</Text>
        </View>

        <Carousel />

        <View style={styles.withSocial}>
          <TouchableOpacity style={styles.withSocialGoogle} onPress={() => console.warn("Login com Google")}>
            <View style={styles.SocialGoogleArea}>
              <Image style={styles.SocialGoogle} source={require('../../resources/images/drawables/draw-g_google.png')} />
            </View>
            <Text style={styles.withSocialGoogleText}>Entre com Facebook</Text>
            <View style={styles.emptyView}></View>
          </TouchableOpacity>
          <View style={styles.withSocialFacebook}>
            <TouchableOpacity onPress={this.handleFacebookLogin}>
              <Icon name="facebook-f" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.text}>Já possui uma conta ScratchOut?</Text>
        </View>

        <View style={styles.withEmail}>
          <TouchableOpacity style={styles.withEmailTouch} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.withEmailText}>Entre com e-mail</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fieldNewAccount}>
          <Text style={styles.textNewAccount} onPress={() => this.props.navigation.navigate('Register')}>
            Ainda não possui uma conta?
            <Text style={styles.textNewAccountBold}> Crie uma agora!</Text>
          </Text>
        </View>

        <View style={styles.fieldTermos}>
          <Text style={styles.textTermos} onPress={() => { Linking.openURL('https://drive.google.com/file/d/1sahDnIODUgOErsdBtiK6z0NX_27CNsO9/view?usp=sharing') }}>Ao continuar você aceita os nossos
            <Text> <Text style={styles.textTermosBold}>Termos de Uso</Text></Text>
          </Text>
        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width,
    height: height,
  },

  logoField: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height / 2.5,
  },

  logo: {
    width: width * 0.90,
  },

  fieldNewAccount: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    marginBottom: height / 60,
  },

  textNewAccount: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#fff',
  },

  textNewAccountBold: {
    fontFamily: 'Roboto Bold',
    fontSize: 14,
    color: '#fff',
  },

  text: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#fff',
  },

  textInfo: {
    fontFamily: 'Roboto Light',
    fontSize: 18,
    color: '#fff',
    alignItems: 'center',
  },

  withEmail: {
    width: width * 0.9,
    height: height / 12.8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
    borderRadius: 40,
    marginBottom: height / 60,
  },

  withEmailTouch: {
    flex: 1,
    width: width * 0.9,
    alignItems: 'center',
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
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#518EF8",
    borderRadius: 40,
    marginTop: height / 30,
    marginBottom: height / 30,
  },

  withSocialGoogle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  withSocialGoogleText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#fff',
    alignItems: 'center',
  },

  SocialGoogle: {
    width: height / 15,
    height: height / 15,
  },

  SocialGoogleArea: {
    width: height / 12.8,
    height: height / 12.8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  withSocialFacebook: {
    backgroundColor: "#3B5999",
    borderRadius: 40,
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

  SocialFacebook: {
    width: height / 20,
    height: height / 20,
  },

  fieldTermos: {
    width: width,
    height: height / 20,
    alignItems: 'center',
  },

  textTermos: {
    fontFamily: 'Roboto',
    fontSize: 11,
    color: '#fff',
    alignItems: 'center',
  },

  textTermosBold: {
    fontFamily: 'Roboto Bold',
    fontSize: 11,
    color: '#fff',
    alignItems: 'center',
    textDecorationLine: 'underline',
  }
})
