// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import PhoneDetail1 from '../screens/PhoneDetail1';
import PhoneDetail2 from '../screens/PhoneDetail2';
import PhoneDetail3 from '../screens/PhoneDetail3';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PhoneDetail1" component={PhoneDetail1} />
        <Stack.Screen name="PhoneDetail2" component={PhoneDetail2} />
        <Stack.Screen name="PhoneDetail3" component={PhoneDetail3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;