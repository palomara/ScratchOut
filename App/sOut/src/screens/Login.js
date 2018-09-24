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
  TouchableOpacity
} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Login extends Component<Props> {

  render() {
    return (
      <ImageBackground source={require('../../resources/images/green-galaxy.png')} style={styles.background} blurRadius={8}>
        <View style={styles.container}>
          <View style={styles.form}>

            <View style={styles.logoField}>
              <Image
              style={styles.logo}
              source={require('../../resources/images/logo-login-w.png')}/>
            </View>

            <View style={styles.inputField} >
              <TextInput style={styles.input}
                placeholder= "email" placeholderTextColor="#fff"
                onChangeText={texto => this.setState({usuario: texto})}
                autoCapitalize="none"/>
              <Image
                style={styles.icon}
                source={require('../../resources/images/icons/icon-mail-login.png')}/>
            </View>

            <View style={styles.inputField} >
              <TextInput style={styles.input}
                placeholder= "senha" placeholderTextColor="#fff"
                onChangeText={texto => this.setState({senha: texto})}
                secureTextEntry={true}/>
              <Image
                style={styles.icon}
                source={require('../../resources/images/icons/icon-locker-login.png')}/>
            </View>

            <View style={styles.dataField} >
              <Text style={styles.textLink}
                onPress={() => console.warn("Fui tocado!")}>
                Não consegue entrar?
              </Text>
            </View>

            <View style={styles.buttonField}>
              <TouchableOpacity onPress={this._onPressButton}>
                <Image
                style={styles.button}
                source={require('../../resources/images/drawables/btn-login-valid.png')}/>
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
    width: width * 0.9
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
