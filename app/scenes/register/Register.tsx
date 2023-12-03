import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {RootStackParamList} from '../../types/types';
import {colors, styles} from '../../styles/styles';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {DefaultButton} from '../../components/Button';
import {RadioButton} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Register'>;

const TEXTO = 'TELA DE REGISTRO';

type Data = {
  email: string;
  password: string;
};

export default function Register({navigation}: NavigationProps) {
  const fieldValidationSchema = yup.object().shape({
    email: yup
      .string()
      .required('O email não pode ser vazio')
      .email('Digite um email válido'),
    password: yup
      .string()
      .required('A senha não pode ser vazia')
      .min(6, 'A senha deve conter pelo menos 6 dígitos'),
  });

  const navigateLogin = () => navigation.navigate('Login');
  //@ts-ignore
  const {register, setValue, handleSubmit} = useForm({
    //@ts-ignore
    validationSchema: fieldValidationSchema,
  });

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  const alertCreateAccount = (email: string) => {
    Alert.alert('Conta Criada!', 'Dados da conta\n\n' + `Email: ${email}`);
  };

  const handleTextChange = (text: string, typeValue: string) => {
    setValue(typeValue, text);
    if (typeValue === 'email') setEmail(text);
    if (typeValue === 'password') setPassword(text);
  };

  const onSubmit = (data: any) => {
    alertCreateAccount(data.email);
    setEmail('');
    setPassword('');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState('first');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [birthDate, setBirthDate] = useState('23/09/1993');

  return (
    <View style={styles.View}>
      <TextInput
        style={styles.Input}
        onChangeText={text => handleTextChange(text, 'name')}
        value={email}
        placeholder="Nome Completo"
        placeholderTextColor={colors.Gray}
        keyboardType="default"
      />
      <TextInput
        style={styles.Input}
        onChangeText={text => handleTextChange(text, 'nickname')}
        placeholder="Apelido"
        value={password}
        placeholderTextColor={colors.Gray}
        secureTextEntry={true}
        keyboardType="default"
      />
      <TextInput
        style={styles.Input}
        onChangeText={text => handleTextChange(text, 'cpf')}
        placeholder="CPF"
        value={password}
        placeholderTextColor={colors.Gray}
        secureTextEntry={true}
        keyboardType="numeric"
      />
      <Text style={styles.BigGrayText}>Sexo</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 100,
        }}>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
        <Text style={styles.LitteText}>masculino</Text>
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
        <Text style={styles.LitteText}>feminino</Text>
      </View>
      <Text style={styles.BigGrayText}>Data de nascimento</Text>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...styles.Input,
              marginBottom: 0,
              width: 230,
              textAlignVertical: 'center',
              color: colors.Gray,
            }}>
            {birthDate}
          </Text>
          <Image
            style={{height: 70, width: 70}}
            source={require('../../images/calendar-icon.jpg')}
          />
        </View>
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          setBirthDate(date.toLocaleDateString('pt-BR'));
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <TextInput
        style={styles.Input}
        onChangeText={text => handleTextChange(text, 'cpf')}
        placeholder="CPF"
        value={password}
        placeholderTextColor={colors.Gray}
        secureTextEntry={true}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.Input}
        onChangeText={text => handleTextChange(text, 'cpf')}
        placeholder="CPF"
        value={password}
        placeholderTextColor={colors.Gray}
        secureTextEntry={true}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.Input}
        onChangeText={text => handleTextChange(text, 'cpf')}
        placeholder="CPF"
        value={password}
        placeholderTextColor={colors.Gray}
        secureTextEntry={true}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.Input}
        onChangeText={text => handleTextChange(text, 'cpf')}
        placeholder="CPF"
        value={password}
        placeholderTextColor={colors.Gray}
        secureTextEntry={true}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.Input}
        onChangeText={text => handleTextChange(text, 'cpf')}
        placeholder="CPF"
        value={password}
        placeholderTextColor={colors.Gray}
        secureTextEntry={true}
        keyboardType="numeric"
      />
      <DefaultButton onPress={handleSubmit(onSubmit)} title={'Criar conta'} />
    </View>
  );
}
