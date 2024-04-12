import 'react-native-gesture-handler'

// NPM MODULES
import React from 'react'
import { StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { GestureDetectorProvider } from 'react-native-screens/gesture-handler'

// SCREENS
import Home from './src/components/home'
import ScreenA from './src/components/screenA'
import ScreenB from './src/components/screenB'

const Stack = createNativeStackNavigator()

function App() {
	return (
		<GestureHandlerRootView style={styles.container}>
			<GestureDetectorProvider>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name="Home"
							component={Home}
							options={{
								headerShown: false
							}}
						/>
						{/* My BOOK */}
						<Stack.Screen
							name="ScreenA"
							component={ScreenA}
							options={{
								goBackGesture: 'swipeDown',
								headerShown: false
							}}
						/>
						<Stack.Screen
							name="ScreenB"
							component={ScreenB}
							options={{
								goBackGesture: 'twoDimensionalSwipe',
								headerShown: false
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</GestureDetectorProvider>
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
