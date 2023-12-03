import React, {useEffect} from 'react';
import {Icon, Card, Text} from 'react-native-paper';
import {colors, styles} from '../styles/styles';
import {TouchableOpacity, View} from 'react-native';

type CardCoffeeMenu = {
  source: any;
  title: string;
  content: string;
  onPress: Function;
};

function CardMenu(props: CardCoffeeMenu) {
  return (
    <Card style={styles.Card} mode="contained">
      <Card.Cover {...props} />
      <View style={{paddingTop: 5}}>
        <Text variant="titleLarge">{props.title}</Text>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 5,
          }}>
          <Text style={{width: '80%'}} variant="bodyMedium">
            {props.content}
          </Text>
          <Card.Actions>
            <TouchableOpacity onPress={() => props.onPress()}>
              <Icon source="plus-circle" color={colors.Brown} size={50} />
            </TouchableOpacity>
          </Card.Actions>
        </View>
      </View>
    </Card>
  );
}

export default CardMenu;
