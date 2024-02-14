/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import Home from './home'
import Pass from './pass'
import Uploader from './uploader'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { NativeBaseProvider, Box } from "native-base";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App(): React.JSX.Element {

  function HomeStack() {
    const screenOptions = {
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: 'white' },
    };

    const options = {
      headerBackTitle: 'Back', 
      headerTitle: 'Scan Card',
      headerTintColor: 'black',
      headerBackTitleStyle: {
        fontSize: 16,
      },
      headerTitleStyle: {
        fontSize: 19,
        fontFamily: 'EuphemiaUCAS-Bold'
      },
      headerBackImage: () => (
        <EntypoIcon name="chevron-small-left" size={22} color="black" />
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

  const col = '#175792'
  const col_uf = 'gray'
  const sz = 22

  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{tabBarActiveBackgroundColor: '#e9f3fb'}}>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{ 
              headerShown: false, 
              tabBarIcon: ({focused, color, size=sz}) => (!focused ? <Ionicon name = "home-outline" size = {sz} color ={col_uf} />  : <Ionicon name = "home-sharp" size = {sz} color = {col}/>),
              tabBarItemStyle: {borderTopWidth:2, borderColor: '#0077db'}
            }}
          />
          <Tab.Screen name="Accounts" 
            component={Pass} 
            options={{
              tabBarIcon: ({focused, color, size=sz}) => (!focused ? <Ionicon name = "bag-outline" size = {sz} color = {col_uf}/> : <Ionicon name = "bag" size = {sz} color = {col}/>)
            }}
          />
          <Tab.Screen name="Settings" 
            component={Pass}
            options={{
              tabBarIcon: ({focused, color, size=sz}) => (!focused ? <Ionicon name = "settings-outline" size = {sz} color = {col_uf}/> : <Ionicon name = "settings-sharp" size = {sz} color = {col}/>)            }}
          />
          <Tab.Screen name="Rewards" 
            component={Pass} 
            options={{
              tabBarIcon: ({focused, color, size=sz}) => (!focused ? <Ionicon name = "trophy-outline" size = {sz} color = {col_uf}/> : <Ionicon name = "trophy" size = {sz} color = {col}/>)
            }}
          />
          <Tab.Screen name="more" 
            component={Uploader} 
            options={{
              tabBarIcon: ({focused, color, size=sz}) => {return <Octicons name = "three-bars" size = {sz} color = {col_uf}/>}
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}


export default App;
