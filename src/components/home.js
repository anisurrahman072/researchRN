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
					style={{ width: wp(100), height: hp(100), opacity: 0.8 }}
					source={require('../../assets/images/bgdark.jpg')}
				/>
			</View>

			{/* ITEMS */}
			<View style={{ display: 'flex', flexWrap: 'wrap' }}>
				<TouchableOpacity
					onPress={() => navigation.navigate('ScreenA')}
					style={{
						padding: wp(0.5),
						backgroundColor: 'gainsboro',
						borderRadius: wp(2)
					}}>
					<Image
						style={styles.teamImg}
						source={require('../../assets/images/first.png')}
					/>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	teamImg: {
		width: wp('35%'),
		height: hp('25%'),
		borderRadius: wp(2)
		// objectFit: 'contain'
	}
})
