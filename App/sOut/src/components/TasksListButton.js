import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import { withNavigation } from 'react-navigation';

class TasksListButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('TasksList')}}>
        <Image source={require('../../resources/images/icons/icon-tasks.png')}/>
      </TouchableOpacity>
    );
  }
}
export default withNavigation(TasksListButton);

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
