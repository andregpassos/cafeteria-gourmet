import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../../types/types';
import {styles} from '../../styles/styles';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Register'>;

const TEXTO = 'TELA DE REGISTRO';

export default function Register({navigation}: NavigationProps) {
  const navigateLogin = () => navigation.navigate('Login');

  return (
    <View style={styles.View}>
      <Text style={styles.Text}>{TEXTO}</Text>
      <Text style={styles.Text}>{TEXTO}</Text>
      <Text style={styles.Text}>{TEXTO}</Text>
      <Text style={styles.Text}>{TEXTO}</Text>
      <Text style={styles.Text}>{TEXTO}</Text>
    </View>
  );
}
