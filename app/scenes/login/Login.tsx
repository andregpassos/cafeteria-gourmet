import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';
import {styles} from '../../styles/styles';
import {RootStackParamList} from '../../types/types';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({navigation}: NavigationProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
  );
}
