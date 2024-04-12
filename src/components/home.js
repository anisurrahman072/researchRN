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
import {
	Button,
	TouchableOpacity,
	View,
	Text,
	Image,
	StyleSheet,
	ImageBackground
} from 'react-native'
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions'

export default function Home({ navigation }) {
	// Render the paragraph
	return (
		<ImageBackground
			source={require('../../assets/images/bg.jpg')}
			style={{ flex: 1, padding: wp(10), position: 'relative' }}>
			<View
				style={{
					position: 'absolute',
					top: 0,
					left: 0
				}}>
				<Image
					style={{ width: wp(100), height: hp(100), opacity: 0.7 }}
					source={require('../../assets/images/bgdark.jpg')}
				/>
			</View>
			<TouchableOpacity
				onPress={() => navigation.navigate('ScreenE')}
				style={{ padding: wp(5) }}>
				<Image
					style={styles.teamImg}
					source={require('../../assets/images/second.jpg')}
				/>
			</TouchableOpacity>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	teamImg: {
		width: wp('40%'),
		height: hp('10%')
		// objectFit: 'contain'
	}
})
