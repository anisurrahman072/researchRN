import React, { useMemo } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import {
	Paragraph,
	Skia,
	useFonts,
	TextAlign,
	Canvas
} from '@shopify/react-native-skia'

export default function ScreenA({ navigation }) {
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
		const textStyle = {
			color: Skia.Color('black'),
			fontFamilies: ['Roboto'],
			fontSize: 50
		}
		const textStyleBungee = {
			color: Skia.Color('black'),
			fontFamilies: ['Bungee'],
			fontSize: 45
		}
		const textStylePacifico = {
			color: Skia.Color('black'),
			fontFamilies: ['Pacifico'],
			fontSize: 50
		}
		const textStyleClimate = {
			color: Skia.Color('darkseagreen'),
			fontFamilies: ['Climate'],
			fontSize: 40
		}
		const textStyleTourney = {
			color: Skia.Color('magenta'),
			fontFamilies: ['Tourney'],
			fontSize: 50
		}
		return Skia.ParagraphBuilder.Make(paragraphStyle, customFontMgr)
			.pushStyle({ ...textStyleTourney, fontStyle: { weight: 1000 } })
			.addText(' by ')

			.pushStyle({ ...textStyleBungee })
			.addText(' @Anis')

			.pop()
			.build()
	}, [customFontMgr])

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'black'
			}}>
			<Canvas
				style={{
					width: wp(90),
					height: hp(10)
				}}>
				<Paragraph paragraph={paragraph} x={0} y={0} width={wp(90)} />
			</Canvas>
			<Image
				// resizeMode="contain"
				style={styles.teamImg}
				source={require('../../assets/images/first.png')}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	teamImg: {
		width: wp('90%'),
		height: wp('150%')
		// objectFit: 'contain'
	}
})
