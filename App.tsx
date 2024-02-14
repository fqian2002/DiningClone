/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './home'
import Pass from './pass'

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pass" component={Pass} />
    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
        />
        <Tab.Screen name="Accounts" 
        component={Pass} 
        options={{title: 'Scan Card'}}/>
        <Tab.Screen name="Order" 
        component={Pass} />
        <Tab.Screen name="Rewards" 
        component={Pass} />
        <Tab.Screen name="more" 
        component={Pass} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;
