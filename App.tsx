import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Platform, StatusBar} from 'react-native';
import Home from './app/scenes/home/Home';
import Login from './app/scenes/login/Login';
import type {RootStackParamList} from './app/types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  StatusBar.setBarStyle('light-content');
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor('rgba(0,0,0,0)');
    StatusBar.setTranslucent(true);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
