import React, {Component} from 'react'
import {
    createStackNavigator,
    createDrawerNavigator
} from 'react-navigation'
import OneSignal from 'react-native-onesignal'

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
    constructor(properties) {
        super(properties);
        OneSignal.init("800362b5-d2d6-42c8-9318-e3897e73d508");
    
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds);
      }
    
      componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds);
      }
    
      onReceived(notification) {
        console.log("Notification received: ", notification);
      }
    
      onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
      }
    
      onIds(device) {
        console.log('Device info: ', device);
      }
    render() {
        return (
            <Application/>
        );
    }
}
