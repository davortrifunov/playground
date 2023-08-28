import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LoadingIndicator } from './components/RingComponent';

export default function RingIndicator() {
  return (
    <View style={styles.flex}>
      <LoadingIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
