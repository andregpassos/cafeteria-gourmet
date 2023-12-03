import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../../types/types';
import {styles} from '../../styles/styles';
import {DefaultButton, LightButton} from '../../components/Button';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const welcomeText = 'Olá, Sicrano! Seja bem-vindo à Cafeteria Gourmet!';

export default function Home({navigation}: NavigationProps) {
  const navigateCoffeeMenu = () => navigation.navigate('CoffeeMenu');

  return (
    <View style={{...styles.View, justifyContent: 'space-between'}}>
      <Text style={styles.Text}>{welcomeText}</Text>
      <View style={{paddingBottom: 60}}>
        <DefaultButton
          onPress={navigateCoffeeMenu}
          title={'Cardápio'}
          loading={false}
        />
        <LightButton onPress={() => {}} title={'Contato'} loading={false} />
      </View>
    </View>
  );
}
