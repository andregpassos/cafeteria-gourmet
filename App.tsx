import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import Home from './app/scenes/home/Home';
import Login from './app/scenes/login/Login';
import type {RootStackParamList} from './app/types/types';
import {colors} from './app/styles/styles';
import Register from './app/scenes/register/Register';
import CoffeeMenu from './app/scenes/coffeemenu/CoffeeMenu';
import Contact from './app/scenes/contact/Contact';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  StatusBar.setBarStyle('light-content');
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor('rgba(0,0,0,0)');
    StatusBar.setTranslucent(true);
  }

  const optionsStackScreen: any = {
    headerTintColor: colors.Brown,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitleAlign: 'center',
  };

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
          options={optionsStackScreen}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Criar conta',
            ...optionsStackScreen,
          }}
        />
        <Stack.Screen
          name="CoffeeMenu"
          component={CoffeeMenu}
          options={{
            title: 'Cardápio',
            ...optionsStackScreen,
          }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            title: 'Contato',
            ...optionsStackScreen,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
