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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// UTILS
import FONTS from './src/utils/fonts';
import RichText from './src/components/richText';
import AtlasAPI from './src/components/AtlasAPI';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <RichText /> */}
      <AtlasAPI />
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
