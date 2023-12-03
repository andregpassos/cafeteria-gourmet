import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-paper';
import {styles} from '../../styles/styles';
import {RootStackParamList} from '../../types/types';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Contact'>;

const phoneText = 'Telefone:';
const whatsappText = 'Whatsapp:';
const emailText = 'E-mail:';
const phoneNumber = '83 99667-1440';
const phoneNumberWithCountryCode = '+55 83 99667-1440';
const email = 'andre.gomes.passos@gmail.com';

export default function Contact({navigation}: NavigationProps) {
  const navigateCoffeeMenu = () => navigation.navigate('CoffeeMenu');

  function ContactButton({title, content, onPress, icon, color}: any) {
    return (
      <View
        style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 20}}>
        <Text style={{...styles.PhoneText, color: 'black'}}>{title}</Text>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => onPress()}>
          <Text style={styles.PhoneText}>{content || phoneNumber}</Text>
          <Icon source={icon} color={color} size={30} />
        </TouchableOpacity>
      </View>
    );
  }

  const phoneLink = `tel:${phoneNumber}`;
  const mensagemWhatsapp =
    'Olá! Quero entrar em contato com a Cafeteria Gourmet.';
  const whatsappLink = `whatsapp://send?text=${mensagemWhatsapp}&phone=${phoneNumberWithCountryCode}`;
  const titleEmail = 'Entrando em contato via app';
  const emailLink = `mailto:${email}?subject=${titleEmail}`;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'center',
      }}>
      <Text style={styles.TextContact}>Clique nos contatos para interagir</Text>
      <ContactButton
        title={phoneText}
        onPress={() => Linking.openURL(phoneLink)}
        icon="phone-in-talk"
        color="black"
      />
      <ContactButton
        title={whatsappText}
        onPress={() => Linking.openURL(whatsappLink)}
        icon="whatsapp"
        color="green"
      />
      <ContactButton
        title={emailText}
        onPress={() => Linking.openURL(emailLink)}
        icon="email"
        color="red"
        content={email}
      />
    </View>
  );
}
