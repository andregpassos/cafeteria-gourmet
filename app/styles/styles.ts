import {StatusBar, StyleSheet} from 'react-native';

export const colors = {
  Gray: '#C2C2C2',
  Brown: '#6E2C00',
  Black: '#000',
  White: '#FFF',
  LightBrown: '#D35400',
  ClearBrown: '#EDBB99',
};

export const styles = StyleSheet.create({
  View: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.White,
    padding: StatusBar.currentHeight,
  },
  CoffeMenuView: {
    flex: 1,
    backgroundColor: colors.White,
  },
  ButtonDefault: {
    backgroundColor: colors.Brown,
    borderRadius: 20,
  },
  ButtonLight: {
    backgroundColor: colors.LightBrown,
    borderRadius: 20,
  },
  ButtonDefaultContainer: {
    height: 50,
    width: 300,
    margin: 5,
  },
  ButtonDefaultText: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  Input: {
    height: 50,
    width: 300,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
    color: colors.Black,
  },
  ImageLogoLoginScreen: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  Text: {
    color: colors.LightBrown,
    fontSize: 25,
  },
  LitteText: {
    color: colors.Gray,
    fontSize: 15,
  },
  BigGrayText: {
    color: colors.Gray,
    fontSize: 25,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  Card: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: colors.ClearBrown,
  },
  PhoneText: {
    fontSize: 15,
    color: 'blue',
    fontWeight: 'bold',
    marginRight: 10,
  },
  TextContact: {
    alignSelf: 'center',
    fontSize: 20,
    color: colors.Brown,
    marginBottom: 200,
    fontWeight: 'bold',
  },
});
