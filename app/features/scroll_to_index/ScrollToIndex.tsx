import { faker } from '@faker-js/faker';
import { MotiView } from '@motify/components';
import * as React from 'react';
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const { width } = Dimensions.get('screen');

faker.seed(10);

const data = [...Array(20).keys()].map(() => ({
  key: faker.string.uuid(),
  job: faker.animal.crocodilia(),
}));

const _colors = {
  active: `#FCD259ff`,
  inactive: `#FCD25900`,
};
const _spacing = 10;

export default function ScrollToIndex() {
  const ref = React.useRef<FlatList>(null);
  const [index, setIndex] = React.useState(0);
  const [viewPosition, setViewPosition] = React.useState(0);

  React.useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition,
      viewOffset: viewPosition !== 0 ? 0 : _spacing,
    });
  }, [index, viewPosition]);

  return (
    <View style={styles.view}>
      <FlatList
        ref={ref}
        initialScrollIndex={index}
        style={styles.list}
        data={data}
        keyExtractor={item => item.key}
        contentContainerStyle={{ paddingLeft: _spacing }}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item, index: fIndex }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setIndex(fIndex);
              }}>
              <MotiView
                animate={{
                  backgroundColor:
                    fIndex === index ? _colors.active : _colors.inactive,
                  opacity: fIndex === index ? 1 : 0.6,
                }}
                transition={{ duration: 500 }}
                style={styles.touchView}>
                <Text style={styles.touchText}>{item.job}</Text>
              </MotiView>
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.itemRow}>
        <View style={styles.center}>
          <Text style={styles.text}>Scroll position</Text>
          <View style={styles.row2}>
            <TouchableOpacity
              onPress={() => {
                setViewPosition(0);
              }}>
              <View style={styles.icons}>
                <Text>L</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setViewPosition(0.5);
              }}>
              <View style={styles.item}>
                <Text>C</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setViewPosition(1);
              }}>
              <View style={styles.item2}>
                <Text>R</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.center}>
          <Text style={styles.nav}>Navigation</Text>
          <View style={styles.row2}>
            <TouchableOpacity
              onPress={() => {
                if (index === 0) {
                  return;
                }
                setIndex(index - 1);
              }}>
              <View style={styles.item}>
                <Text>BL</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (index === data.length - 1) {
                  return;
                }
                setIndex(index + 1);
              }}>
              <View style={styles.item2}>
                <Text>BR</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  view: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  list: { flexGrow: 0 },
  touchView: {
    marginRight: _spacing,
    padding: _spacing,
    borderWidth: 2,
    borderColor: _colors.active,
    borderRadius: 12,
    backgroundColor: _colors.inactive,
  },
  touchText: { color: '#36303F', fontWeight: '700' },
  itemRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: _spacing * 10,
  },
  center: { alignItems: 'center' },
  text: {
    color: '#36303F',
    fontWeight: '700',
    marginBottom: _spacing,
  },
  row2: {
    flexDirection: 'row',
    width: width / 2,
    justifyContent: 'center',
  },
  icons: {
    padding: _spacing,
    backgroundColor: '#FCD259',
    borderRadius: _spacing,
    marginRight: _spacing,
  },
  item: {
    padding: _spacing,
    backgroundColor: '#FCD259',
    borderRadius: _spacing,
    marginRight: _spacing,
  },
  item2: {
    padding: _spacing,
    backgroundColor: '#FCD259',
    borderRadius: _spacing,
  },
  nav: { color: '#36303F', fontWeight: '700', marginBottom: 10 },
});
