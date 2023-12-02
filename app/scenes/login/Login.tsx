import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, TextInput, View} from 'react-native';
import {ClearButton, DefaultButton} from '../../components/Button';
import {colors, styles} from '../../styles/styles';
import {RootStackParamList} from '../../types/types';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({navigation}: NavigationProps) {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const navigateHome = () => navigation.navigate('Home');
  const navigateRegister = () => navigation.navigate('Register');

  return (
    <View style={{...styles.View, justifyContent: 'space-between'}}>
      <Image
        style={styles.ImageLogoLoginScreen}
        source={require('../../images/logo-cafeteria.png')}
      />
      <View style={styles.View}>
        <TextInput
          style={styles.Input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="E-mail"
          placeholderTextColor={colors.Gray}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.Input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          placeholderTextColor={colors.Gray}
          secureTextEntry={true}
          keyboardType="numeric"
        />
        <DefaultButton onPress={navigateHome} title={'Login'} loading={false} />
        <ClearButton onPress={navigateRegister} title={'Criar conta'} />
      </View>
    </View>
  );
}
