import React, { useMemo } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'

export default function ScreenE({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: 'cyan', position: 'relative' }}>
			<Image
				style={styles.teamImg}
				source={require('../../assets/images/fifth.jpg')}
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
					SWIPE LEFT (⏪)
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
