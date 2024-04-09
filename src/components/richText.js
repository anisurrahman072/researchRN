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
      fontSize: 50,
    };
    return Skia.ParagraphBuilder.Make(paragraphStyle, customFontMgr)
      .pushStyle(textStyle)
      .addText('Say Hello to ')
      .pushStyle({...textStyle, fontStyle: {weight: 500}})
      .addText('Skia.')
      .pushStyle({...textStyleBungee, fontStyle: {weight: 500}})
      .addText('#NotJustDev')
      .pushStyle({...textStyle})
      .addText(' Presenting ')
      .pushStyle({...textStyle, fontStyle: {weight: 500}})
      .addText('Skia.')
      .pop()
      .build();
  }, [customFontMgr]);

  // Render the paragraph
  return (
    <Canvas
      style={{
        width: wp(100),
        height: hp(50),
        paddingVertical: hp(40),
      }}>
      <Paragraph paragraph={paragraph} x={0} y={0} width={wp(100)} />
    </Canvas>
  );
}
