/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect, useState } from 'react';
import Home from './home'
import Pass from './pass'
import Uploader from './uploader'
import Icon from 'react-native-vector-icons/Entypo';

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, ImageSourcePropType } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App(): React.JSX.Element {

  function HomeStack() {
    const screenOptions = {
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: 'white' },
      headerBackImage: () => (
        <Icon name="rocket" size={30} color="#900" />
      ),
    };

    const options = {
      headerBackTitle: 'Back', 
      headerTitle: 'Scan Card',
      headerTintColor: 'black',
      headerBackTitleStyle: {
        fontSize: 16,
        fontFamily: 'Arial'
      },
      headerBackImage: () => (
        <Icon name="chevron-small-left" size={22} color="black" />
      ),
    }

    return (
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="HomePage" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Pass" component={Pass}
          options={options}/>
      </Stack.Navigator>
    );
  }

  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="Accounts" 
          component={Pass} 
          options={{title: 'Scan Card'}}/>
          <Tab.Screen name="Order" 
          component={Pass} />
          <Tab.Screen name="Rewards" 
          component={Pass} />
          <Tab.Screen name="more" 
          component={Uploader} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}


export default App;
