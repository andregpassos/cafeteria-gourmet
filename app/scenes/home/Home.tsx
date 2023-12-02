import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../../types/types';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: NavigationProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HOME SCREEN</Text>
      <Text>HOME SCREEN</Text>
      <Text>HOME SCREEN</Text>
      <Text>HOME SCREEN</Text>
    </View>
  );
}
