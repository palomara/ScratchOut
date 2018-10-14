import React, {Component} from 'react'
import {
    createStackNavigator,
} from 'react-navigation'
import Hall from './screens/Hall'
import Login from './screens/Login'

import Home from './screens/Home'
import Config from './screens/Config'
import Influences from './screens/Influences'
import Profile from './screens/Profile'
import TaskList from './screens/TasksList'
import Register from './screens/Register'

const LoginStack = createStackNavigator({
        Hall: {screen: Hall},
        Login: {screen: Login},
        Register: {screen: Register},

    },
    {headerMode: 'none'}
);
const HomehallStack = createStackNavigator({
        Home: {screen: Home},
        Config: {screen: Config},
        Influences: {screen: Influences},
        Profile: {screen: Profile},
        TasksList: {screen: TaskList}
    },
    {headerMode: 'none'}
);

const Application = createStackNavigator(
    {
        Hall: LoginStack,
        Home: HomehallStack

    }, {headerMode: 'none'}
);

export default class App extends Component {
    render() {
        return (
            <Application/>
        );
    }
}
