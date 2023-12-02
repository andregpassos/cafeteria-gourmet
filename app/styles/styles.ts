import {StyleSheet} from 'react-native';

export const colors = {
  Gray: '#C2C2C2',
  Brown: '#6E2C00',
};

export const styles = StyleSheet.create({
  View: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonDefault: {
    backgroundColor: colors.Brown,
    borderRadius: 20,
  },
  ButtonDefaultContainer: {
    height: 50,
    width: 300,
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
    color: '#000',
  },
  ImageLogoLoginScreen: {
    width: 300,
    height: 300,
    marginTop: 100,
  },
  Text: {
    color: '#000',
  },
});
