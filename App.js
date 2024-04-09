// NPM MODULES
import React, {useMemo} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// UTILS
import FONTS from './src/utils/fonts';
import RichText from './src/components/richText';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RichText />
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