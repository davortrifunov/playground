import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PrimaryScreens } from '../../navigation/types';
import { DashboardCard } from './components/DashboardCard';

export default function Dashboard() {
  return (
    <View style={styles.flex}>
      <DashboardCard
        screen={PrimaryScreens.LoadingIndicator}
        title={'Loading Animation'}
      />
      <DashboardCard
        screen={PrimaryScreens.RingIndicator}
        title={'Ring Indicator'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
});
