// NPM MODULES
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Canvas, Circle, Group} from '@shopify/react-native-skia';

// UTILS
import FONTS from './src/utils/fonts';

function App() {
  const width = 256;
  const height = 256;
  const r = width * 0.33;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>I'm Anis</Text>
      <Canvas style={{width, height}}>
        <Group blendMode="multiply">
          <Circle cx={r} cy={r} r={r} color="cyan" />
          <Circle cx={width - r} cy={r} r={r} color="magenta" />
          <Circle cx={width / 2} cy={width - r} r={r} color="yellow" />
        </Group>
      </Canvas>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blanchedalmond',
  },
  title: {
    ...FONTS.BOLD16,
    color: 'black',
  },
});

export default App;
