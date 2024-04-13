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
import ScreenC from './src/components/screenC'
import ScreenD from './src/components/screenD'
import ScreenE from './src/components/screenE'
import ScreenF from './src/components/screenF'

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
						<Stack.Screen
							name="ScreenC"
							component={ScreenC}
							options={{
								goBackGesture: 'twoDimensionalSwipe',
								headerShown: false
							}}
						/>
						<Stack.Screen
							name="ScreenD"
							component={ScreenD}
							options={{
								goBackGesture: 'twoDimensionalSwipe',
								headerShown: false
							}}
						/>
						<Stack.Screen
							name="ScreenE"
							component={ScreenE}
							options={{
								goBackGesture: 'twoDimensionalSwipe',
								headerShown: false
							}}
						/>
						<Stack.Screen
							name="ScreenF"
							component={ScreenF}
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
		flex: 1
	}
})

export default App
