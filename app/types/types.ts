export type RootStackParamList = {
  Home: {userName: string};
  Login: undefined;
  Register: undefined;
  CoffeeMenu: undefined;
  Contact: undefined;
};

export type ButtonParams = {
  onPress: Function;
  title: string;
  loading?: boolean;
};
