import {Button} from '@rneui/themed';
import React from 'react';
import {styles} from '../styles/styles';
import {ButtonParams} from '../types/types';

export const DefaultButton = ({onPress, title, loading}: ButtonParams) => (
  <Button
    title={title}
    loading={loading}
    loadingProps={{size: 'small', color: 'white'}}
    buttonStyle={styles.ButtonDefault}
    titleStyle={styles.ButtonDefaultText}
    containerStyle={styles.ButtonDefaultContainer}
    onPress={() => onPress()}
  />
);

export const LightButton = ({onPress, title, loading}: ButtonParams) => (
  <Button
    title={title}
    loading={loading}
    loadingProps={{size: 'small', color: 'white'}}
    buttonStyle={styles.ButtonLight}
    titleStyle={styles.ButtonDefaultText}
    containerStyle={styles.ButtonDefaultContainer}
    onPress={() => onPress()}
  />
);

export const ClearButton = ({onPress, title}: ButtonParams) => (
  <Button
    title={title}
    type="clear"
    loading={false}
    onPress={() => onPress()}
    titleStyle={{...styles.ButtonDefaultText, fontWeight: 'normal'}}
  />
);
