// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './src/screenA';
import ScreenB from './src/screenB'
import ScreenC from './src/screenC'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenA">
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen name="ScreenB" component={ScreenB} />
        <Stack.Screen name="ScreenC" component={ScreenC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;