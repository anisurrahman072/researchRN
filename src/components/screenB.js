import React, { useMemo } from 'react'
import { Text, View } from 'react-native'
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions'

export default function ScreenB({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: 'cyan' }}>
			<Text style={{ fontSize: responsiveScreenFontSize(10) }}>BBBBBBB</Text>
		</View>
	)
}
