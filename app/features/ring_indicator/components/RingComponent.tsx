import { MotiView } from '@motify/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Phone from '../../../../assets/icons/phone.svg';
import { Easing } from 'react-native-reanimated';

export const LoadingIndicator = () => {
  return (
    <View style={[styles.in, styles.center]}>
      {[...Array(3).keys()].map(index => {
        return (
          <MotiView
            from={{
              opacity: 0.7,
              scale: 1,
            }}
            animate={{
              opacity: 0,
              scale: 4,
            }}
            transition={{
              type: 'timing',
              duration: 2000,
              easing: Easing.out(Easing.ease),
              delay: index * 400,
              loop: true,
              repeatReverse: false,
            }}
            key={index}
            style={[StyleSheet.absoluteFillObject, styles.in]}
          />
        );
      })}
      <Phone />
    </View>
  );
};

const styles = StyleSheet.create({
  in: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#6E01EF',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
