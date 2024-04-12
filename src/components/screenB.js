import React, { useMemo } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'

export default function ScreenB({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: 'cyan' }}>
			<Image
				resizeMode="contain"
				style={styles.teamImg}
				source={require('../../assets/images/second.jpg')}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'blanchedalmond'
	},
	teamImg: {
		height: hp(100),
		objectFit: 'cover'
	}
})
