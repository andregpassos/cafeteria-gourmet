import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View, Linking, TouchableOpacity, Alert} from 'react-native';
import {RootStackParamList} from '../../types/types';
import {colors, styles} from '../../styles/styles';
import {Icon} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';

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

  function copyToClipboard() {
    Clipboard.setString(email);
    Alert.alert('E-mail copiado!');
  }

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
        onPress={copyToClipboard}
        icon="email"
        color="red"
        content={email}
      />
    </View>
  );
}
