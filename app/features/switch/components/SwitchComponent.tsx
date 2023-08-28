import { MotiView } from '@motify/components';
import { MotiTransitionProp } from '@motify/core';
import React, { useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { Easing } from 'react-native-reanimated';
import { ScaledSheet } from 'react-native-size-matters';

const _colors = {
  active: '#2C2C2C',
  inactive: '#DCDCDC',
};

const transition: MotiTransitionProp = {
  type: 'timing',
  duration: 300,
  easing: Easing.inOut(Easing.ease),
};

interface SwitchComponentProps {
  size: number;
  onPress: () => void;
  isActive: boolean;
}

export const SwitchComponent = ({
  isActive,
  onPress,
  size,
}: SwitchComponentProps) => {
  const trackWidth = useMemo(() => {
    return size * 1.5;
  }, [size]);
  const trackHeight = useMemo(() => {
    return size * 0.4;
  }, [size]);
  const knobSize = useMemo(() => {
    return size * 0.6;
  }, [size]);

  return (
    <Pressable onPress={onPress}>
      <View style={styles.view}>
        <MotiView
          transition={transition}
          animate={{
            backgroundColor: isActive ? _colors.active : _colors.inactive,
          }}
          style={[
            {
              width: trackWidth,
              height: trackHeight,
              borderRadius: trackHeight / 2,
              backgroundColor: _colors.active,
            },
            styles.absolute,
          ]}
        />
        <MotiView
          transition={transition}
          animate={{
            translateX: isActive ? trackWidth / 4 : -trackWidth / 4,
          }}
          style={[
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
            styles.container,
          ]}>
          <MotiView
            transition={transition}
            animate={{
              width: isActive ? 0 : knobSize,
              borderColor: isActive ? _colors.active : _colors.inactive,
            }}
            style={{
              width: knobSize,
              height: knobSize,
              borderRadius: knobSize / 2,
              borderWidth: size * 0.1,
              borderColor: _colors.active,
            }}
          />
        </MotiView>
      </View>
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  absolute: {
    position: 'absolute',
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
