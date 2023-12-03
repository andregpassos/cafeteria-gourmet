import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import {RootStackParamList} from '../../types/types';
import {styles} from '../../styles/styles';
import CardMenu from '../../components/Card';
import {Card} from 'react-native-paper';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'CoffeeMenu'>;

export default function CoffeeMenu({navigation}: NavigationProps) {
  const navigateLogin = () => navigation.navigate('Login');
  const contentCapuccino =
    'É um excelente café, vindo diretamente das montanhas do Himalaia. ' +
    'Possui um delicioso sabor terroso. ' +
    'Harmoniza com carnes macias, como filé mignon e alcatra.';

  const contentExpresso =
    'Forte e potente, parece que esse café deu um soco no seu estômago! ' +
    'Apenas para os que realmente são "raiz"!!' +
    'Vindo diretamente da zona rural de Cabradapestinas, só toma quem se garante!';

  const contentMacchiato =
    'Semelhante ao Latte original, porém com um toque especial. ' +
    'O café expresso é adicionado por cima do leite, "manchando-o" (daí o nome Macchiato).';

  const contentLatte =
    'Café de origem italiana. Feito com café expresso e ' +
    'leite vaporizado, com uma quantidade generosa de espuma de leite no topo.';

  return (
    <View style={styles.CoffeMenuView}>
      <ScrollView contentContainerStyle={{padding: 20}}>
        <CardMenu
          source={require('../../images/capuccino.png')}
          title={'Capuccino'}
          content={contentCapuccino}
          onPress={() => Alert.alert('Adicionado ao carrinho!')}
        />
        <CardMenu
          source={require('../../images/expresso.png')}
          title={'Expresso'}
          content={contentExpresso}
          onPress={() => Alert.alert('Adicionado ao carrinho!')}
        />
        <CardMenu
          source={require('../../images/latte.png')}
          title={'Latte'}
          content={contentLatte}
          onPress={() => Alert.alert('Adicionado ao carrinho!')}
        />
        <CardMenu
          source={require('../../images/macchiato.png')}
          title={'Latte Macchiato'}
          content={contentMacchiato}
          onPress={() => Alert.alert('Adicionado ao carrinho!')}
        />
      </ScrollView>
    </View>
  );
}
