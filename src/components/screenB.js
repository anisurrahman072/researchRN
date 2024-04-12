import React, { useMemo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'

export default function ScreenB({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: 'cyan' }}>
			<TouchableOpacity
				onPress={() => navigation.navigate('ScreenC')}
				style={{ marginTop: hp(20) }}>
				<Text style={{ fontSize: responsiveScreenFontSize(10) }}>
					CLICK ME (B)
				</Text>
			</TouchableOpacity>
		</View>
	)
}
