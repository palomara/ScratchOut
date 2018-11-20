import React, {Component} from 'react'
import {
    createStackNavigator,
    createDrawerNavigator
} from 'react-navigation'
import Hall from './screens/Hall'
import Login from './screens/Login'
import Register from './screens/Register'

import Home from './screens/Home'
import Config from './screens/Config'
import Influences from './screens/Influences'
import Profile from './screens/Profile'
import TaskList from './screens/TasksList'
import AuthOrApp from './screens/AuthOrApp'
import PerformanceIndicator from './screens/PerformanceIndicator'
import AddInfluences from './screens/AddInfluences'
import EditTasks from './screens/EditTasks'
import SideMenu from './components/SideMenu'
import CalendarsList from './components/calendarList'


const LoginStack = createStackNavigator({
        Hall: {screen: Hall},
        Login: {screen: Login},
        Register: {screen: Register},

    },
    {headerMode: 'none'}
);
const HomehallStack = createDrawerNavigator({
        Home: {screen: Home},
        Config: {screen: Config},
        Influences: {screen: Influences},
        Profile: {screen: Profile},
        TasksList: {screen: TaskList},
        PerformanceIndicator: {screen: PerformanceIndicator},
        AddInfluences: {screen: AddInfluences},
        EditTasks: {screen: EditTasks},
        CalendarsList: {screen: CalendarsList}


    },
    {
        headerMode: 'none',
        //TODO: fazer o componente do side menu e colocar depois dos dois pontos
        contentComponent: SideMenu,
        drawerWidth: 300
    }
);

const Application = createStackNavigator(
    {
        
        Splash: {screen: AuthOrApp},
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
