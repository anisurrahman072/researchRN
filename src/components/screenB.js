import React, { useMemo } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'

export default function ScreenB({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: 'cyan', position: 'relative' }}>
			<Image
				style={styles.teamImg}
				source={require('../../assets/images/fourth.jpg')}
			/>
			<View
				style={{
					position: 'absolute',
					top: 70,
					left: 0,
					width: wp(100)
				}}>
				<Text
					style={{
						fontSize: 40,
						color: 'white',
						textAlign: 'center',
						fontWeight: 'bold'
					}}>
					SWIPE DOWN (👇👇)
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'blanchedalmond'
	},
	teamImg: {
		width: wp('100%'),
		height: wp('210%')
	}
})
