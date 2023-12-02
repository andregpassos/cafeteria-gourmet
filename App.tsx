import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import Home from './app/scenes/home/Home';
import Login from './app/scenes/login/Login';
import type {RootStackParamList} from './app/types/types';
import {colors} from './app/styles/styles';
import Register from './app/scenes/register/Register';

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
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTintColor: colors.Brown,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Criar conta',
            headerTintColor: colors.Brown,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
