import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

class AddTaskButton extends React.Component {
    render() {
        return <TouchableOpacity onPress={() => { this.props.navigation.navigate('AddTask')}}>
            <Image source={require('../../resources/images/icons/icon-new_task.png')}/>
        </TouchableOpacity>;
    }

}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(AddTaskButton);