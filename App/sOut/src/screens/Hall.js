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


/*var FBLoginButton = require('../components/FBLoginButton');

  Dentro do método Render()

  <View style={styles.buttonField}>
    <FBLoginButton style={styles.buttonFbG} />
  </View>
*/


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
      <ImageBackground source={require('../../resources/images/green-galaxy.png')} style={styles.container}>
        <StatusBar translucent={true} backgroundColor={'transparent'}/>
        <View style={styles.emptyView}></View>
        <View style={styles.logoField}>
          <Image style={styles.logo} source={require('../../resources/images/logos/logo-sout-white.png')}/>
        </View>

        <View>
          <Text style={styles.textInfo}>Aumente sua produtividade!</Text>
        </View>

        <View style={styles.dots}>
          <Image source={require('../../resources/images/drawables/draw-dot.png')}/>
          <Image source={require('../../resources/images/drawables/draw-dot.png')}/>
          <Image source={require('../../resources/images/drawables/draw-dot.png')}/>
        </View>

        <View style={styles.withSocial}>
          <TouchableOpacity style={styles.withSocialGoogle} onPress={() => console.warn("Login com Google")}>
            <View style={styles.SocialGoogleArea}>
              <Image style={styles.SocialGoogle} source={require('../../resources/images/drawables/draw-g_google.png')}/>
            </View>
            <Text style={styles.withSocialGoogleText}>Entre com Google</Text>
            <View style={styles.emptyView}></View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.warn("Login com Facebook")}>
            <View style={styles.withSocialFacebook}>
              <Image style={styles.SocialFacebook} source={require('../../resources/images/drawables/draw-f_facebook.png')}/>
            </View>
          </TouchableOpacity>
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
          <Text style={styles.textNewAccount}
            onPress={() => console.warn("Fui tocado!")}>
            Ainda não possui uma conta?
            <Text style={styles.textNewAccountBold}
              onPress={() => console.warn("Fui tocado!")}> Crie uma agora!
            </Text>
          </Text>
        </View>

        <View style={styles.fieldTermos}>
          <Text style={styles.textTermos} onPress={()=>console.warn("Link Para os Termos de Uso")}>ao continuar você aceita os nossos
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
    alignItems:'center',
    justifyContent: 'space-between',
    width: width,
    height: height
  },

  dots:{
    width: width * 0.08,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  logoField:{
    alignItems:'center',
    justifyContent: 'center',
    width: width,
    height: height / 3
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
    color: '#fff'
  },

  textNewAccountBold:{
    fontFamily: 'Roboto Bold',
    fontSize: 14,
    color: '#fff'
  },

  text:{
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#fff'
  },

  textInfo:{
    fontFamily: 'Roboto Light',
    fontSize: 18,
    color: '#fff',
    alignItems: 'center'
  },

  withEmail: {
    width: width * 0.9,
    height: height / 12.8,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
    borderRadius: 40,
    marginBottom: height / 60
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
    alignItems: 'center'
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
    height: 80,
    width: 80,
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
    justifyContent: 'center',
  },

  textTermos:{
    fontFamily: 'Roboto',
    fontSize: 11,
    color: '#fff',
    alignItems: 'center'
  },

  textTermosBold:{
    fontFamily: 'Roboto Bold',
    fontSize: 11,
    color: '#fff',
    alignItems: 'center',
    textDecorationLine:'underline'
  }
})
