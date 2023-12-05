import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {RootStackParamList} from '../../types/types';
import {colors, styles} from '../../styles/styles';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {DefaultButton} from '../../components/Button';
import {RadioButton} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import {CREATE, READ} from '../../services/CRUD';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Register'>;
export type FormProps = {
  name: string;
  nickname: string;
  CPF: string;
  phone: string;
  whatsapp: string;
  CEP: string;
  email: string;
  password?: string;
};

export default function Register({navigation}: NavigationProps) {
  const fieldValidationSchema = yup.object().shape({
    name: yup.string().required('O nome não pode ser vazio'),
  });

  const navigateLogin = () => navigation.navigate('Login');
  //@ts-ignore
  const {register, setValue, handleSubmit} = useForm({
    //@ts-ignore
    validationSchema: fieldValidationSchema,
  });

  useEffect(() => {
    register('name');
    register('nickname');
    register('CPF');
    register('phone');
    register('whatsapp');
    register('CEP');
    register('email');
    register('password');
  }, [register]);

  const handleTextChange = (
    text: string,
    typeValue: string,
    setFunction: Function,
  ) => {
    setValue(typeValue, text);
    setFunction();
  };

  const onSubmit = (data: any) => {
    let shouldStopSubmit = false;

    Object.keys(data).every(key => {
      if (data[key] == undefined || data[key] == '') {
        Alert.alert('Erro', 'Preencha todos os campos para criar sua conta!');
        shouldStopSubmit = true;
        return false;
      }
      return true;
    });

    if (shouldStopSubmit) return;

    CREATE(data);
    setName('');
    setNickname('');
    setCPF('');
    setPhone('');
    setWhatsapp('');
    setCEP('');
    setEmail('');
    setPassword('');
    navigateLogin();
  };

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [CPF, setCPF] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [CEP, setCEP] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState('first');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [birthDate, setBirthDate] = useState('23/09/1993');

  return (
    <SafeAreaView style={styles.View}>
      <ScrollView>
        <TextInput
          style={styles.Input}
          onChangeText={text =>
            handleTextChange(text, 'name', () => setName(text))
          }
          value={name}
          placeholder="Nome Completo"
          placeholderTextColor={colors.Gray}
          keyboardType="default"
        />
        <TextInput
          style={styles.Input}
          onChangeText={text =>
            handleTextChange(text, 'nickname', () => setNickname(text))
          }
          placeholder="Apelido"
          value={nickname}
          placeholderTextColor={colors.Gray}
          keyboardType="default"
        />
        <TextInput
          style={styles.Input}
          onChangeText={text =>
            handleTextChange(text, 'CPF', () => setCPF(text))
          }
          placeholder="CPF"
          value={CPF}
          placeholderTextColor={colors.Gray}
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
          onChangeText={text =>
            handleTextChange(text, 'phone', () => setPhone(text))
          }
          placeholder="Telefone"
          value={phone}
          placeholderTextColor={colors.Gray}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.Input}
          onChangeText={text =>
            handleTextChange(text, 'whatsapp', () => setWhatsapp(text))
          }
          placeholder="Whatsapp"
          value={whatsapp}
          placeholderTextColor={colors.Gray}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.Input}
          onChangeText={text =>
            handleTextChange(text, 'CEP', () => setCEP(text))
          }
          placeholder="CEP"
          value={CEP}
          placeholderTextColor={colors.Gray}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.Input}
          onChangeText={text =>
            handleTextChange(text, 'email', () => setEmail(text))
          }
          placeholder="E-mail"
          value={email}
          placeholderTextColor={colors.Gray}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.Input}
          onChangeText={text =>
            handleTextChange(text, 'password', () => setPassword(text))
          }
          placeholder="Senha"
          value={password}
          placeholderTextColor={colors.Gray}
          secureTextEntry={true}
          keyboardType="numeric"
        />
        <DefaultButton onPress={handleSubmit(onSubmit)} title={'Criar conta'} />
      </ScrollView>
    </SafeAreaView>
  );
}
