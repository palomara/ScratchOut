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
  StatusBar,
  Modal,
  TouchableHighlight,
} from 'react-native';

import FixedMenu from '../components/FixedMenu';
import StatusBarSout from '../components/StatusBarSout';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Home extends Component<Props> {

  state =  {
    modalVisible: true,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

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
        <StatusBarSout/>
        <View style={styles.fixedNav}>
          <TouchableOpacity style={styles.fixedNavArea} onPress={() => console.warn("Menu")}>
            <Image source={require('../../resources/images/icons/icon-nav_menu-green.png')}/>
          </TouchableOpacity>
          <Image source={require('../../resources/images/logos/logo-sout-nav.png')}/>
          <View style={styles.emptyView}></View>
        </View>

        <ScrollView style={styles.mainView}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
              <View>
                <Text>Hello World!</Text>

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </ScrollView>

        <FixedMenu />

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
});
