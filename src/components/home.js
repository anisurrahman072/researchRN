import { useMemo } from 'react'
import {
	Paragraph,
	Skia,
	useFonts,
	TextAlign,
	Canvas
} from '@shopify/react-native-skia'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Button, TouchableOpacity, View, Text } from 'react-native'
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions'

export default function Home({ navigation }) {
	// Render the paragraph
	return (
		<View style={{ flex: 1, backgroundColor: 'yellow' }}>
			<TouchableOpacity
				onPress={() => navigation.navigate('ScreenA')}
				style={{ marginTop: hp(20) }}>
				<Text style={{ fontSize: responsiveScreenFontSize(10) }}>
					CLICK ME (A)
				</Text>
			</TouchableOpacity>
		</View>
	)
}