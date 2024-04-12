import React, { useMemo } from 'react'
import { Text, View } from 'react-native'
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'

export default function ScreenC({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: 'red' }}>
			<Text
				style={{ fontSize: responsiveScreenFontSize(10), marginTop: hp(20) }}>
				CLICK ME (C)
			</Text>
		</View>
	)
}
