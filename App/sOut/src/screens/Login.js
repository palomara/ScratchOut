import React, {Component} from 'react';
import {login} from "../components/func";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Login extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      usuario: "",
      senha: "",
        textoresult: "",
    }
  }

  componentDidMount(){
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('token');
    if(value !== null){
      this.props.navigation.navigate('Home')
    }
  };

  render() {
    return (
      <ImageBackground source={require('../../resources/images/green-galaxy.png')} style={styles.container} blurRadius={8}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <StatusBar translucent={true} backgroundColor={'transparent'}/>
          <View style={styles.logoField}>
            <Image style={styles.logo} source={require('../../resources/images/logos/logo-sout-white.png')}/>
          </View>
          <View style={styles.form}>
            <View style={styles.inputFieldEmail}>
              <TextInput style={styles.input}
                placeholder= "email ou usuario"
                placeholderTextColor="#fff"
                returnKeyType="next"
                keyboardType="email-address"
                autoCorrect={false}
                onSubmitEditing={()=> this.senhaInput.focus()}
                onChangeText={(usuario) => this.setState({usuario})}
                autoCapitalize="none"/>
              <Image style={styles.icon} source={require('../../resources/images/icons/icon-mail-white.png' /*caso seja invalido'../../resources/images/icons/icon-mail-turquoise.png'*/)}/>
            </View>

            <View style={styles.inputFieldPass} >
              <TextInput style={styles.input}
                placeholder= "senha" placeholderTextColor="#fff"
                onChangeText={(senha) => this.setState({senha})}
                secureTextEntry={true}
                returnKeytype="go"
                ref={(input) => this.senhaInput = input}/>
              <Image style={styles.icon}
                source={require('../../resources/images/icons/icon-pass-white.png' /*caso seja invalido'../../resources/images/icons/icon-pass-turquoise.png'*/)}/>
            </View>
            <View style={styles.inputError}>
              <Text style={styles.inputErrorText}>{this.state.textoresult}</Text>
            </View>

            <View style={styles.dataField}>
              <Text style={styles.textLink} onPress={() => console.warn("Ir para a tela esqueci minha senha!")}> Não consegue entrar? </Text>
            </View>

            <View style={styles.Login}>
              <TouchableOpacity style={styles.LoginTouch} onPress={login()}>
                <Text style={styles.LoginText}>Começar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.textLinkCadastro}>
              <Text style={styles.textLink} onPress={() => console.warn("Ir para seção de Cadastro")}>
                Ainda não possui uma conta?
                <Text style={styles.textLinkBold}> Crie uma agora!</Text>
              </Text>
            </View>

          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    width: width,
    height: height
  },

  input: {
    fontFamily: 'Roboto Light',
    fontSize: 20,
    color: '#fff',
    flex: 1
  },

  form:{
    width: width * 0.9,
  },

  logo:{
    width: width * 0.78
  },

  logoField:{
    height: height / 3,
    alignItems:'center',
    justifyContent: 'center',
  },

  icon:{
    width: 20,
    height: 20,
    marginRight: width * 0.009
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

  textLinkCadastro:{
    alignItems:'center',
    marginBottom: height / 200
  },

  inputFieldEmail:{
    borderBottomWidth: 2,
    borderColor: '#fff',
    alignItems:'center',
    flexDirection: 'row',
    marginBottom: 16
  },

  inputFieldPass:{
    borderBottomWidth: 2,
    borderColor: '#fff',
    alignItems:'center',
    flexDirection: 'row',
    marginBottom: 8
  },



  dataField:{
    marginBottom: height / 20
  },

  Login: {
    width: width * 0.88,
    height: height / 12.8,
    backgroundColor: "#fff",
    borderRadius: 40,
    marginBottom: height / 15
  },

  LoginTouch:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
  },

  LoginText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#00ED74',
    alignItems: 'center'
  },

  inputErrorText:{
    fontFamily: 'Roboto',
    fontSize: 11,
    color: '#006F77',
  },

  inputError:{
    marginBottom: 16
  },

})
