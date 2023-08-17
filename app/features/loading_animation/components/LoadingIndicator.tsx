import { MotiView } from '@motify/components';
import React from 'react';
import { StyleSheet } from 'react-native';

interface LoadingIndicatorProps {
  size: number;
}

export const LoadingIndicator = ({ size }: LoadingIndicatorProps) => {
  return (
    <MotiView
      from={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 0,
        shadowOpacity: 0.5,
      }}
      animate={{
        width: size + 20,
        height: size + 20,
        borderRadius: (size + 20) / 2,
        borderWidth: size / 10,
        shadowOpacity: 1,
      }}
      transition={{
        type: 'timing',
        duration: 1000,
        // repeat: 3,
        loop: true,
        // repeatReverse: false,
      }}
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: size / 10,
        },
        styles.view,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  view: {
    borderColor: '#fff',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});
