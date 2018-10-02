import React, {Component} from 'react'
import{
    Text,
    View,
} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import Login from './screens/Login'
import Home from './screens/Home'
import Hall from './screens/Hall'

const Application = createStackNavigator({
  Hall: { screen: Hall},
  Login: { screen: Login},
  Home: {screen: Home}
    },{
    headerMode: 'none'
});


export default class App extends Component{
    render(){
        return(
            <Application/>
        );
    }
}
