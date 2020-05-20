import React from "react";
import HistoryScreen from "../screens/HistoryScreen";
import Home from "../screens/Home";
import SettingsScreen from "../screens/SettingsScreen";
import TimerScreen from '../screens/TimerScreen'
import {createStackNavigator,createAppContainer,} from "react-navigation";


const Stack = createStackNavigator({
    HomeS: Home,
    Timer: TimerScreen,
    History: HistoryScreen,
    Settings: SettingsScreen
}

);

export default createAppContainer( Stack);
