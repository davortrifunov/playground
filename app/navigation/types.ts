import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum PrimaryScreens {
  Home = 'home',
  LoadingIndicator = 'loadingIndicator',
  RingIndicator = 'ringIndicator',
}

export type PrimaryNavigationScreens = {
  [PrimaryScreens.Home]: undefined;
  [PrimaryScreens.LoadingIndicator]: undefined;
  [PrimaryScreens.RingIndicator]: undefined;
};

export type PrimaryNagivationProps = NativeStackScreenProps<
  PrimaryNavigationScreens,
  keyof PrimaryNavigationScreens
>;
export type PrimaryNavigationType = PrimaryNagivationProps['navigation'];
export type PrimaryRouteType = PrimaryNagivationProps['route'];
