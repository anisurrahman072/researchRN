// NPM MODULES
import React, { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GestureDetectorProvider } from 'react-native-screens/gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
// UTILS
import FONTS from './src/utils/fonts'
import ScreenA from './src/components/screenA'
import ScreenB from './src/components/screenB'

const Stack = createNativeStackNavigator()

function App() {
	return (
		<GestureHandlerRootView style={styles.container}>
			<NavigationContainer>
				<GestureDetectorProvider>
					<Stack.Navigator
						screenOptions={{
							stackAnimation: 'none'
						}}>
						<Stack.Screen name="ScreenA" component={ScreenA} />
						<Stack.Screen
							name="ScreenB"
							component={ScreenB}
							options={{
								goBackGesture: 'swipeDown' // gestures that trigger the screen transition
							}}
						/>
					</Stack.Navigator>
				</GestureDetectorProvider>
			</NavigationContainer>
		</GestureHandlerRootView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'blanchedalmond'
	},
	title: {
		...FONTS.BOLD16,
		color: 'black'
	}
})

export default App
