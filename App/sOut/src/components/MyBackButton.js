import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

class MyBackButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
        <Image source={require('../../resources/images/icons/icon-nav_back-green.png')}/>
      </TouchableOpacity>
    );
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(MyBackButton);
