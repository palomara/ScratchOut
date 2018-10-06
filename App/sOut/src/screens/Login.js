import React, {Component} from 'react';
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

  login = () => {
    // posteriormente sera substituido por um link web
    fetch('http://10.0.2.2:3000/users', {
      method: 'POST',
      headers: {
        /*Accept: 'application/json'*/
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "usuario": this.state.usuario,
        "senha": this.state.senha,
      }),
    })

    .then((response) => response.json())
    .then((res) =>{

      if(res.success === true){
        console.warn(res.usuario);
        AsyncStorage.setItem('token', '1');
        this.props.navigation.navigate('Home')

      }else{
        alert(res.message)
      }
    })
    .done()

  };

  render() {
    return (
      <ImageBackground source={require('../../resources/images/green-galaxy.png')} style={styles.background} blurRadius={8}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <StatusBar backgroundColor="#00E075"/>
          <View style={styles.form}>

            <View style={styles.logoField}>
              <Image style={styles.logo} source={require('../../resources/images/logos/logo-sout-white.png')}/>
            </View>

            <View style={styles.inputField}>
              <TextInput style={styles.input}
                placeholder= "email ou usuario"
                placeholderTextColor="#fff"
                returnKeyType="next"
                keyboardType="email-address"
                autoCorrect={false}
                onSubmitEditing={()=> this.senhaInput.focus()}
                onChangeText={(usuario) => this.setState({usuario})}
                autoCapitalize="none"/>
              <Image style={styles.icon} source={require('../../resources/images/icons/icon-mail-white.png')}/>
            </View>

            <View style={styles.inputField} >
              <TextInput style={styles.input}
                placeholder= "senha" placeholderTextColor="#fff"
                onChangeText={(senha) => this.setState({senha})}
                secureTextEntry={true}
                returnKeytype="go"
                ref={(input) => this.senhaInput = input}/>
              <Image style={styles.icon} source={require('../../resources/images/icons/icon-pass-white.png')}/>
            </View>

            <View style={styles.dataField}>
              <Text style={styles.textLink} onPress={() => console.warn("Fui tocado!")}> Não consegue entrar? </Text>
            </View>

            <View style={styles.buttonField}>
              <TouchableOpacity onPress={this.login}>
                <Image style={styles.button} source={require('../../resources/images/drawables/draw-login-invalid.png')}/>
              </TouchableOpacity>
            </View>

            <View style={styles.textLinkCadastro}>
              <Text style={styles.textLink} onPress={() => console.warn("Fui tocado!")}>
                Ainda não possui uma conta?
                <Text style={styles.textLinkBold} onPress={() => console.warn("Fui tocado!")}> Crie uma agora!</Text>
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
    justifyContent: 'center'
  },

  input: {
    fontFamily: 'Roboto Light',
    fontSize: 20,
    color: '#fff',
    flex: 1
  },

  form:{
    width: width * 0.88,
  },

  button:{
    width: width * 0.88,
    borderRadius: 600,
  },

  logo:{
    width: width * 0.78
  },

  icon:{
    width: 20,
    height: 20,
    marginRight: width * 0.009
  },

  background:{
    width: width,
    height: height
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
    marginBottom: height / 26
  },

  inputField:{
    borderBottomWidth: 2,
    borderColor: '#fff',
    marginBottom: 16,
    alignItems:'center',
    flexDirection: 'row'
  },

  logoField:{
    alignItems:'center',
    justifyContent: 'center',
    marginBottom: height / 7
  },

  dataField:{
    marginBottom: height / 16
  },

  buttonField:{
    marginBottom: height / 26,
  }
})
