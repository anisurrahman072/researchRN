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

import FONTS from './src/utils/fonts';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>I'm Anis</Text>
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
