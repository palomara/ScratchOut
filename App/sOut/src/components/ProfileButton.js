import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import { withNavigation } from 'react-navigation';

class ProfileButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('Profile')}}>
        <Image source={require('../../resources/images/icons/icon-profile.png')}/>
      </TouchableOpacity>
    );
  }
}
export default withNavigation(ProfileButton);

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: height * 0.085,
    alignItems:'center',
    justifyContent: 'center',
  },
});
