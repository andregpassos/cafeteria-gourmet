import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Alert, Image, TextInput, View} from 'react-native';
import {ClearButton, DefaultButton} from '../../components/Button';
import {colors, styles} from '../../styles/styles';
import {RootStackParamList} from '../../types/types';
import {READ} from '../../services/CRUD';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({navigation}: NavigationProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigateHome = () => navigation.navigate('Home');
  const navigateRegister = () => navigation.navigate('Register');

  function clearInputs() {
    setEmail('');
    setPassword('');
  }

  function handleLogin() {
    if (
      email == undefined ||
      email == '' ||
      password == undefined ||
      password == ''
    ) {
      Alert.alert('Erro', 'O e-mail ou senha não podem ser vazios.');
      clearInputs();
      return;
    }

    READ('email', '==', email).then(querySnapshot => {
      if (querySnapshot.empty) {
        Alert.alert('Erro', 'E-mail ou senha incorretos!');
        return;
      }

      let user;
      querySnapshot.forEach(doc => {
        user = doc.data();
      });

      console.log('user = ', user);

      if (user!.password === password) navigateHome();
      else Alert.alert('Erro', 'E-mail ou senha incorretos!');

      setEmail('');
      setPassword('');
    });
  }

  return (
    <View style={{...styles.View, justifyContent: 'space-between'}}>
      <Image
        style={styles.ImageLogoLoginScreen}
        source={require('../../images/logo-cafeteria.png')}
      />
      <View style={styles.View}>
        <TextInput
          style={styles.Input}
          onChangeText={setEmail}
          value={email}
          placeholder="E-mail"
          placeholderTextColor={colors.Gray}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.Input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          placeholderTextColor={colors.Gray}
          secureTextEntry={true}
          keyboardType="numeric"
        />
        <DefaultButton onPress={handleLogin} title={'Login'} loading={false} />
        <ClearButton onPress={navigateRegister} title={'Criar conta'} />
      </View>
    </View>
  );
}
