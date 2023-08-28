import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { SwitchComponent } from './components/SwitchComponent';

export default function Switch() {
  const [isActive, setIsActive] = useState(false);

  const setIsActiveHandler = useCallback(() => {
    setIsActive(isActive => !isActive);
  }, [isActive]);

  return (
    <View style={styles.view}>
      <SwitchComponent
        size={60}
        onPress={setIsActiveHandler}
        isActive={isActive}
      />
    </View>
  );
}

const styles = ScaledSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3f3',
  },
});
