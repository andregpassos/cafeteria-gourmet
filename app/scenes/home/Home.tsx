import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../../types/types';
import {styles} from '../../styles/styles';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: NavigationProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.Text}>HOME SCREEN</Text>
      <Text style={styles.Text}>HOME SCREEN</Text>
      <Text style={styles.Text}>HOME SCREEN</Text>
      <Text style={styles.Text}>HOME SCREEN</Text>
      <Text style={styles.Text}>HOME SCREEN</Text>
      <Text style={styles.Text}>HOME SCREEN</Text>
    </View>
  );
}
