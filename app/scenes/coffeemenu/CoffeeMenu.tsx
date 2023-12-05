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

  const contentMocha =
    'Essencialmente, "mocha" significa um tipo de café feito ' +
    'de um grão de café específico originalmente cultivado apenas em Mocha, Iêmen. ' +
    'Uma mistura de café e calda de chocolate.';

  const contentIrish =
    'É uma das bebidas mais tradicionais da Irlanda. ' +
    'Foi inventada depois da Segunda Guerra Mundial e é um café para os fortes. ' +
    'A receita leva, além do café, um shot de uísque e creme de leite fresco batido.';

  return (
    <View style={styles.CoffeMenuView}>
      <ScrollView contentContainerStyle={{padding: 20}}>
        <CardMenu
          source={require('../../images/capuccino.png')}
          title={'Capuccino'}
          content={contentCapuccino}
          onPress={() => Alert.alert('Adicionado ao carrinho!')}
          price={'R$ 8,00'}
        />
        <CardMenu
          source={require('../../images/expresso.png')}
          title={'Expresso'}
          content={contentExpresso}
          onPress={() => Alert.alert('Adicionado ao carrinho!')}
          price={'R$ 6,50'}
        />
        <CardMenu
          source={require('../../images/latte.png')}
          title={'Latte'}
          content={contentLatte}
          onPress={() => Alert.alert('Adicionado ao carrinho!')}
          price={'R$ 9,00'}
        />
        <CardMenu
          source={require('../../images/macchiato.png')}
          title={'Latte Macchiato'}
          content={contentMacchiato}
          onPress={() => Alert.alert('Adicionado ao carrinho!')}
          price={'R$ 12,00'}
        />
        <CardMenu
          source={require('../../images/irish.png')}
          title={'Irlandês'}
          content={contentIrish}
          onPress={() => Alert.alert('Adicionado ao carrinho!')}
          price={'R$ 15,00'}
        />
        <CardMenu
          source={require('../../images/mocha.png')}
          title={'Mocha'}
          content={contentMocha}
          onPress={() => Alert.alert('Adicionado ao carrinho!')}
          price={'R$ 13,50'}
        />
      </ScrollView>
    </View>
  );
}
