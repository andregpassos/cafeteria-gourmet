import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from '@rneui/themed';
import React from 'react';
import {TextInput, View, Image} from 'react-native';
import {colors, styles} from '../../styles/styles';
import {RootStackParamList} from '../../types/types';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({navigation}: NavigationProps) {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

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
        <Button
          title="Login"
          loading={false}
          loadingProps={{size: 'small', color: 'white'}}
          buttonStyle={styles.ButtonDefault}
          titleStyle={styles.ButtonDefaultText}
          containerStyle={styles.ButtonDefaultContainer}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}
