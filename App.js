// NPM MODULES
import React from 'react'
import { StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GestureDetectorProvider } from 'react-native-screens/gesture-handler'

// SCREENS
import ScreenA from './src/components/screenA'
import ScreenB from './src/components/screenB'
import ScreenC from './src/components/screenC'

const Stack = createNativeStackNavigator()

function App() {
	return (
		<GestureHandlerRootView style={styles.container}>
			<NavigationContainer>
				<GestureDetectorProvider>
					<Stack.Navigator
						screenOptions={{
							stackAnimation: 'modal'
						}}>
						<Stack.Screen name="ScreenA" component={ScreenA} />
						<Stack.Screen
							name="ScreenB"
							component={ScreenB}
							options={{
								title: 'ScreenB',
								gestureEnabled: true,
								goBackGesture: 'swipeDown' // gestures that trigger the screen transition
							}}
						/>
						<Stack.Screen
							name="ScreenC"
							component={ScreenC}
							options={{
								title: 'ScreenC',
								gestureEnabled: true,
								goBackGesture: 'swipeUp' // gestures that trigger the screen transition
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
	}
})

export default App
