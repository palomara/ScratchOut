/** @format */

import {AppRegistry} from 'react-native';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import Hall from './src/screens/Hall';
import RegisterFirst from "./src/screens/RegisterFirst";
import TasksList from './src/screens/TasksList';
import App from './src/App'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => Home);
//AppRegistry.registerComponent(appName, () => Login);
//AppRegistry.registerComponent(appName, () => Hall);
//AppRegistry.registerComponent(appName, () => Profile);
//AppRegistry.registerComponent(appName, () => RegisterFirst);
//AppRegistry.registerComponent(appName, () => TasksList);

