/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Navigation } from "react-native-navigation";

Navigation.registerComponent("Home", () => App)
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "Home"
            }
        }
    });
});
