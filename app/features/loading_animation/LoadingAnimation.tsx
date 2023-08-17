import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LoadingIndicator } from './components/LoadingIndicator';

export default function LoadingAnimation() {
  return (
    <View style={styles.flex}>
      <LoadingIndicator size={100} />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#010100',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.9,
  },
});
