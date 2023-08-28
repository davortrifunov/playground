import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../features/dashboard/Dashboard';
import LoadingAnimation from '../features/loading_animation/LoadingAnimation';
import { PrimaryScreens } from './types';
import RingIndicator from '../features/ring_indicator/RingIndicator';

export const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name={PrimaryScreens.Home}
          component={Dashboard}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name={PrimaryScreens.LoadingIndicator}
          component={LoadingAnimation}
          options={{
            title: 'Loading Animation',
          }}
        />
        <Stack.Screen
          name={PrimaryScreens.RingIndicator}
          component={RingIndicator}
          options={{
            title: 'Ring Indicator',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
