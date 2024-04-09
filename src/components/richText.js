import {useMemo} from 'react';
import {
  Paragraph,
  Skia,
  useFonts,
  TextAlign,
  Canvas,
} from '@shopify/react-native-skia';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function RichText() {
  const customFontMgr = useFonts({
    Roboto: [
      require('../../assets/fonts/roboto/Roboto-Regular.ttf'),
      require('../../assets/fonts/roboto/Roboto-Medium.ttf'),
    ],
    Bungee: [require('../../assets/fonts/bungee/BungeeSpice-Regular.ttf')],
    Pacifico: [require('../../assets/fonts/pacifico/Pacifico-Regular.ttf')],
    Climate: [
      require('../../assets/fonts/climate/ClimateCrisis-Regular-VariableFont_YEAR.ttf'),
    ],
    Tourney: [
      require('../../assets/fonts/tourney/Tourney-Italic-VariableFont_wdth.ttf'),
    ],
  });

  const paragraph = useMemo(() => {
    if (!customFontMgr) {
      return null;
    }
    const paragraphStyle = {
      textAlign: TextAlign.Center,
    };
    const textStyle = {
      color: Skia.Color('black'),
      fontFamilies: ['Roboto'],
      fontSize: 50,
    };
    const textStyleBungee = {
      color: Skia.Color('black'),
      fontFamilies: ['Bungee'],
      fontSize: 45,
    };
    const textStylePacifico = {
      color: Skia.Color('black'),
      fontFamilies: ['Pacifico'],
      fontSize: 50,
    };
    const textStyleClimate = {
      color: Skia.Color('darkseagreen'),
      fontFamilies: ['Climate'],
      fontSize: 40,
    };
    const textStyleTourney = {
      color: Skia.Color('magenta'),
      fontFamilies: ['Tourney'],
      fontSize: 50,
    };
    return Skia.ParagraphBuilder.Make(paragraphStyle, customFontMgr)
      .pushStyle(textStyle)
      .addText('Welcome to RN')
      .pushStyle({...textStyle, fontStyle: {weight: 500}})
      .addText(' Skia V1.0. 🚀')
      .pushStyle({...textStyleBungee})
      .addText(' #NotJustDev')
      .pushStyle({...textStyle})
      .addText(' is presenting ')
      .pushStyle({...textStyle, fontStyle: {weight: 500}})
      .addText('Skia.')
      .pushStyle({...textStylePacifico})
      .addText('Mixing and matching ')
      .pushStyle({...textStyleClimate})
      .addText(' fonts & text layouts ')
      .pushStyle({...textStyleTourney, fontStyle: {weight: 1000}})
      .addText(' is fun! ')
      .pop()
      .build();
  }, [customFontMgr]);

  // Render the paragraph
  return (
    <Canvas
      style={{
        width: wp(90),
        height: hp(70),
      }}>
      <Paragraph paragraph={paragraph} x={0} y={0} width={wp(90)} />
    </Canvas>
  );
}
