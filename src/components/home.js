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

function Card({ navigation, screen, imageLink }) {
	console.log('JJJJJJ: ', screen, imageLink)
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate(screen)}
			style={{
				paddingHorizontal: wp(3),
				paddingVertical: wp(3),
				borderRadius: wp(2)
			}}>
			<Image style={styles.teamImg} source={imageLink} />
		</TouchableOpacity>
	)
}

export default function Home({ navigation }) {
	const customFontMgr = useFonts({
		Roboto: [
			require('../../assets/fonts/roboto/Roboto-Regular.ttf'),
			require('../../assets/fonts/roboto/Roboto-Medium.ttf')
		],
		Bungee: [require('../../assets/fonts/bungee/BungeeSpice-Regular.ttf')],
		Pacifico: [require('../../assets/fonts/pacifico/Pacifico-Regular.ttf')],
		Climate: [
			require('../../assets/fonts/climate/ClimateCrisis-Regular-VariableFont_YEAR.ttf')
		],
		Tourney: [
			require('../../assets/fonts/tourney/Tourney-Italic-VariableFont_wdth.ttf')
		]
	})

	const paragraph = useMemo(() => {
		if (!customFontMgr) {
			return null
		}
		const paragraphStyle = {
			textAlign: TextAlign.Center
		}

		const textStyleBungee = {
			color: Skia.Color('black'),
			fontFamilies: ['Bungee'],
			fontSize: 40
		}

		const textStyleTourney = {
			color: Skia.Color('magenta'),
			fontFamilies: ['Tourney'],
			fontSize: 50
		}
		return Skia.ParagraphBuilder.Make(paragraphStyle, customFontMgr)
			.pushStyle({ ...textStyleTourney, fontStyle: { weight: 1000 } })
			.addText('# ')

			.pushStyle({ ...textStyleBungee })
			.addText('NotJustDev')

			.pop()
			.build()
	}, [customFontMgr])

	// Render the paragraph
	return (
		<ImageBackground
			source={require('../../assets/images/bg.jpg')}
			style={{ flex: 1, padding: wp(5), position: 'relative' }}>
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

			<Canvas
				style={{
					textAlign: 'center',
					width: wp(90),
					height: hp(12)
					// backgroundColor: 'red'
				}}>
				<Paragraph paragraph={paragraph} x={0} y={40} width={wp(90)} />
			</Canvas>

			{/* ITEMS */}
			<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
				<Card
					navigation={navigation}
					screen={'ScreenA'}
					imageLink={require('../../assets/images/first.png')}
				/>
				<Card
					navigation={navigation}
					screen={'ScreenB'}
					imageLink={require('../../assets/images/fourth.jpg')}
				/>
				<Card
					navigation={navigation}
					screen={'ScreenC'}
					imageLink={require('../../assets/images/third.jpg')}
				/>
				<Card
					navigation={navigation}
					screen={'ScreenD'}
					imageLink={require('../../assets/images/second.jpg')}
				/>
				<Card
					navigation={navigation}
					screen={'ScreenE'}
					imageLink={require('../../assets/images/fifth.jpg')}
				/>
				<Card
					navigation={navigation}
					screen={'ScreenF'}
					imageLink={require('../../assets/images/sixth.jpg')}
				/>
			</View>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	teamImg: {
		width: wp('39%'),
		height: hp('25%'),
		borderRadius: wp(2),
		borderColor: 'gainsboro',
		borderWidth: wp(0.5)
		// objectFit: 'contain'
	}
})
