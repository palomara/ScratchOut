import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

class ProfileButton extends React.Component {
  render() {
    return <TouchableOpacity onPress={() => { this.props.navigation.navigate('Profile')}}>
      <Image source={require('../../resources/images/icons/icon-profile.png')}/>
    </TouchableOpacity>;
  }
}


// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(ProfileButton);
