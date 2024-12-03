import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/SplashScreen';
import Home from './src/screens/Home';
import Detail1 from './src/screens/Detail1';
import Detail2 from './src/screens/Detail2';
import Detail3 from './src/screens/Detail3';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: true,
          animation: 'fade',
          gestureEnabled: false
        }}
      >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Detail1"
          component={Detail1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Detail2"
          component={Detail2}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Detail3"
          component={Detail3}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;