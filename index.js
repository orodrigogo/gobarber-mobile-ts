/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

// Desabilita os alertas.
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
