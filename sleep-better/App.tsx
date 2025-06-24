import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import SleepRegisterScreen from './screens/SleepRegisterScreen';
import SleepChartScreen from './screens/SleepChartScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        
        <Stack.Screen name="SleepRegister" component={SleepRegisterScreen} />
        <Stack.Screen name="SleepChart" component={SleepChartScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


//    _____                                            .___
//   / ___ \  _________________  ________    ____    __| _/
//  / / ._\ \/  ___/\___   /\  \/  /\__  \  /    \  / __ | 
// <  \_____/\___ \  /    /  >    <  / __ \|   |  \/ /_/ | 
//  \_____\ /____  >/_____ \/__/\_ \(____  /___|  /\____ | 
//               \/       \/      \/     \/     \/      \/ 