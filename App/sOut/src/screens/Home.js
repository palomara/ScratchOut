import React, {Component} from 'react';
import {BoxShadow} from 'react-native-shadow'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
  StatusBar
} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Home extends Component<Props> {

  /* Logout não ficará aqui por isso vou deixar comentado

  logout = ()=>{
  console.warn('Saindo');
  AsyncStorage.setItem('token', '');
  this.props.navigation.navigate('Hall')

  <TouchableOpacity  style={styles.buttonEmail} onPress={() => this.logout()}></TouchableOpacity>
  };
  */
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='transparent' barStyle='dark-content'/>
        <View style={styles.fixedNav}>
          <TouchableOpacity style={styles.fixedNavArea} onPress={() => console.warn("Menu")}>
            <Image source={require('../../resources/images/icons/icon-nav_menu-green.png')}/>
          </TouchableOpacity>
          <Image source={require('../../resources/images/logos/logo-sout-nav.png')}/>
          <View style={styles.emptyView}></View>
        </View>

        <ScrollView style={styles.mainView}>

        </ScrollView>

        <View style={styles.fixedMenu}>

          <TouchableOpacity style={styles.fixedMenuArea} onPress={()=>console.warn("Indicador de Performance")}>
            <Image source={require('../../resources/images/icons/icon-sout.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fixedMenuArea} onPress={()=>console.warn("Tarefas")}>
            <Image source={require('../../resources/images/icons/icon-tasks.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fixedMenuArea} onPress={()=>console.warn("Criar Nova Tarefa")}>
            <Image source={require('../../resources/images/icons/icon-new_task.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fixedMenuArea} onPress={()=>console.warn("Influenciadores")}>
            <Image source={require('../../resources/images/icons/icon-influences.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fixedMenuArea} onPress={()=>console.warn("Perfil e Configurações")}>
            <Image source={require('../../resources/images/icons/icon-profile.png')}/>
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

  fixedNav: {
    flexDirection: 'row',
    height: height * 0.1,
    width: width,
    alignItems:'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    marginBottom: 20,
    elevation: 3,
    position: 'relative'
  },

  fixedNavArea: {
    height: height * 0.08,
    width: width * 0.15,
    alignItems:'center',
    justifyContent: 'center',
  },

  emptyView:{
    height: height * 0.08,
    width: width * 0.15,
    alignItems:'center',
    justifyContent: 'center',
  },

  mainView:{
    height: height * 0.6,
    width: width,
  },

  fixedMenu: {
    height: height * 0.085,
    width: width,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
  },

  fixedMenuArea: {
    flex: 1,
    height: height * 0.085,
    alignItems:'center',
    justifyContent: 'center',
  }
});
