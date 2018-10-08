import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Image,
  KeyboardAvoidingView,
} from 'react-native'
import FixedNav from '../components/FixedNav'
import RadiusButton from '../components/RadiusButton'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class RegisterFirst extends Component<Props> {
  render () {
    return (
      <ImageBackground source={require('../../resources/images/green-galaxy.png')} style={styles.container} blurRadius={20}>
        <View style={styles.statusBar}>
          <StatusBar translucent={true} backgroundColor={'transparent'}/>
        </View>
        <View style={styles.container}>

          <View style={styles.fixedNav}>
            <TouchableOpacity style={styles.fixedNavArea} onPress={() => this.props.navigation.goBack()}>
              <Image source={require('../../resources/images/icons/icon-nav_back-white.png')}/>
            </TouchableOpacity>
          </View>

          <KeyboardAvoidingView behavior="padding" style={styles.form}>
            <View style={styles.form}>

              <View style={styles.highlightText}>
                <Text style={styles.highlightText}>Antes de tudo,</Text>
              </View>

              <Text style={styles.questionText}>Como devemos te chamar?</Text>
              <View style={styles.inputField} >
                <TextInput style={styles.input}
                  placeholder= "nome" placeholderTextColor="#FFF"
                  onChangeText={texto => this.setState({nome: texto})}
                  autoCapitalize="none"/>
              </View>

              <View style={styles.questionField}>
                <Text style={styles.questionText}>E como se identifica?</Text>
              </View>

              <View style={styles.nextField}>

                <RadiusButton/>

                <View style={styles.nextButton}>
                  <TouchableOpacity style={styles.nextButtonTouch} activeOpacity={0.5}>
                    <Image source={require('../../resources/images/icons/icon-nav_go-green.png')}/>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  /*Provisório*/

  //Reutilizar o componente FixedNav.js
  fixedNav: {
    flexDirection: 'row',
    height: height * 0.1,
    width: width,
    alignItems:'center',
    justifyContent: 'space-between',
  },

  //Reutilizar o componente FixedNav.js
  fixedNavArea: {
    height: height * 0.08,
    width: width * 0.15,
    alignItems:'center',
    justifyContent: 'center',
  },

  //Reutilizar o componente StatusBarSout.js
  statusBar:{
    height: height * 0.03,
    alignItems:'center',
    justifyContent: 'center',
  },

  /*Provisório*/

  container: {
    flex: 1,
    alignItems:'center',
    width: width,
    height: height,
  },

  form:{
    width: width * 0.88,
  },

  highlightText: {
    height: height / 16,
    fontFamily: 'Roboto Bold',
    fontSize: 26,
    color: '#FFFFFF',
  },

  questionField: {
    height: height / 14,
    justifyContent: 'flex-end',
  },

  questionText:{
    fontFamily: 'Roboto Regular',
    fontSize: 16,
    color: '#FFFFFF',
  },

  inputField:{
    height: height / 13,
    justifyContent: 'flex-end',
    borderBottomWidth: 2,
    borderColor: '#FFF',
  },

  input: {
    fontFamily: 'Roboto Light',
    fontSize: 22,
    color: '#FFF',
  },

  nextField:{
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  nextButton:{
    height: 70,
    width: 70,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: "#fff",
  },

  nextButtonTouch:{

  },

  radiusField:{

  },
})
