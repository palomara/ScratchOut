import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

class MyBackButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={() => {this.props.navigation.navigate('Home')}}>
        <Image source={require('../../resources/images/icons/icon-nav_back-green.png')}/>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 5,
        marginLeft: 20
    },
});
// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(MyBackButton);
