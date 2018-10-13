import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

class InfluencesButton extends React.Component {
  render() {
    return <TouchableOpacity onPress={() => { this.props.navigation.navigate('Influences')}}>
      <Image source={require('../../resources/images/icons/icon-influences.png')}/>
    </TouchableOpacity>;
  }
}


// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(InfluencesButton);
