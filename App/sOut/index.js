import {AppRegistry} from 'react-native';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import Hall from './src/screens/Hall';
import Register from "./src/screens/Register";
import CreateTaskButton from "./src/components/CreateTaskButton";
import App from './src/App'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => Home);
//AppRegistry.registerComponent(appName, () => Login);
//AppRegistry.registerComponent(appName, () => Hall);
//AppRegistry.registerComponent(appName, () => Profile);
//AppRegistry.registerComponent(appName, () => Register);
//AppRegistry.registerComponent(appName, () => CreateTaskButton);
