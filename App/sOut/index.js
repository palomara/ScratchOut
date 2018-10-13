import {AppRegistry} from 'react-native';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import Hall from './src/screens/Hall';
import RegisterOne from "./src/screens/RegisterOne";
import RegisterTwo from "./src/screens/RegisterTwo";
import App from './src/App'

import {name as appName} from './app.json';

<<<<<<< HEAD
//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Home);
=======
AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => Home);
>>>>>>> c0fa4bc8289f50f0d3782f39b8aa0da969478a58
//AppRegistry.registerComponent(appName, () => Login);
//AppRegistry.registerComponent(appName, () => Hall);
//AppRegistry.registerComponent(appName, () => Profile);
//AppRegistry.registerComponent(appName, () => RegisterOne);
//AppRegistry.registerComponent(appName, () => RegisterTwo);
