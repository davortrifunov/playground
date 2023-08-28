import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Pressable, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import {
  PrimaryNavigationType,
  PrimaryScreens,
} from '../../../navigation/types';

interface DashboardCardProps {
  screen: PrimaryScreens;
  title: string;
}

export const DashboardCard = ({ screen, title }: DashboardCardProps) => {
  const { navigate } = useNavigation<PrimaryNavigationType>();

  const onPress = useCallback(() => {
    navigate(screen);
  }, []);

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  card: {
    width: '90%',
    height: '40@ms',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    alignSelf: 'center',
    marginVertical: '8@ms',
    borderRadius: '20@ms',
    borderColor: 'purple',
  },
});
