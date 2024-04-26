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

function Card({ navigate, screen, imageLink }) {
	console.log('JJJJJJ: ', screen, imageLink)
	return (
		<TouchableOpacity
			onPress={() => navigate(screen)}
			style={{
				paddingHorizontal: wp(3),
				paddingVertical: wp(3),
				borderRadius: wp(2)
			}}>
			<Image style={styles.teamImg} source={imageLink} />
		</TouchableOpacity>
	)
}

export default function Home({ navigation: { navigate } }) {
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
		<View style={styles.container}>
			<View
				style={{
					flexDirection: 'row',
					backgroundColor: 'olive',
					width: 395,
					height: 300
				}}>
				<View
					style={{
						flexDirection: 'row-reverse',
						// flexDirection: 'row',
						backgroundColor: 'dodgerblue',
						flex: 1,
						marginLeft: 100,
						marginRight: 20,
						marginVertical: 20,
						alignItems: 'center'
					}}>
					<View
						style={{
							backgroundColor: 'green',
							width: 80,
							height: 150,
							marginLeft: 50
						}}
					/>
					<View
						style={{
							backgroundColor: 'pink',
							width: 80,
							height: 150,
							marginLeft: 50
						}}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightsteelblue',
		justifyContent: 'center',
		alignItems: 'center'
	}
})
