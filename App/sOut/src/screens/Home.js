import React, {Component} from 'react';
import {
  AsyncStorage,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View} from 'react-native';


export default class Home extends Component<Props> {

  logout = ()=>{
      console.warn('Saindo');
      AsyncStorage.setItem('token', '');
      this.props.navigation.navigate('Hall')
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Login Efetuado!</Text>
          <View>
              <TouchableOpacity  style={styles.buttonEmail} onPress={() => this.logout()}>
                  <Text style={styles.textButtonEmail}>Logout</Text>
              </TouchableOpacity>
          </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    textButtonEmail: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#00E075'
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

});
