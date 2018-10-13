import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

class MyPerformceButtom extends React.Component {
    // não esquecer de alterar o performece no navigate props
    render() {
        return <TouchableOpacity onPress={() => { this.props.navigation.navigate('Influences')}}>
            <Image source={require('../../resources/images/icons/icon-sout.png')}/>
        </TouchableOpacity>;
    }
}


// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(MyPerformceButtom);