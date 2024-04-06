import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SerachBar from '../../common/SerachBar';
import PopularTextHeading from '../../common/PopularTextHeading';
import TextComp from '../../common/TextComp';
import {height, textScale} from '../../../styles/responsiveStyles';
import {fontNames} from '../../../styles/typography';
import {spacing} from '../../../styles/spacing';
import BottonComp from '../../common/BottonComp';
import {boxShadow} from '../../../styles/Mixins';
import ImagePath from '../../../Utills/ImagePath';
import navigationString from '../../../Navigation/navigationString';
import {useNavigation} from '@react-navigation/native';

const InstrucationDetails = () => {
  const navigation = useNavigation()
  const [search, setSearch] = useState('');
  return (
    <View style={{flex: 1}}>
      <SerachBar
        placeholder="Search here.."
        value={search}
        onChangeText={e => setSearch(e)}
      />
      <View style={{marginVertical: spacing.MARGIN_12}}>
        <TextComp
          text={'Test Instructions'}
          style={{
            ...styles.testInstrucationHeadingTextStyle,
            fontSize: textScale(16),
            fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
          }}
        />
        <TextComp
          text={'Reasoning-Topic Name'}
          style={{
            ...styles.testInstrucationHeadingTextStyle,
            fontSize: textScale(12),
            fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
          }}
        />
      </View>
      <View
        style={{
          marginHorizontal: spacing.MARGIN_20,
          marginVertical: spacing.MARGIN_20,
        }}>
        <TextComp
          text={
            '1- The test consists of 50 questions. Each question carry equal marks.'
          }
          style={styles.instrucationTextStyle}
        />
        <TextComp
          text={'2- Total duration for the test is 120 minutes.'}
          style={styles.instrucationTextStyle}
        />
        <TextComp
          text={
            '3- Each questions have five options. Only one option is correct.'
          }
          style={styles.instrucationTextStyle}
        />
        <TextComp
          text={
            '4- Each questions have five options. Only one option is correct.'
          }
          style={styles.instrucationTextStyle}
        />
        <TextComp
          text={'5- No marks will be deducted for unanswered questions.'}
          style={styles.instrucationTextStyle}
        />
      </View>
      <View>
        <BottonComp
          text="Start Test"
          style={styles.btnStyle}
          textStyle={styles.btnTextStyle}
          rightImg={true}
          source={ImagePath.IC_Right_ARROW}
          IconStyle={{
            tintColor: '#FCFCFC',
            opacity: 1,
            width: spacing.WIDTH_14,
            height: spacing.HEIGHT_14,
            resizeMode: 'contain',
          }}
          onPress={()=>navigation.navigate(navigationString.MOCK_TEST_SCREEN)}
        />
      </View>
    </View>
  );
};

export default InstrucationDetails;

const styles = StyleSheet.create({
  instrucationTextStyle: {
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(12),
    opacity: 1,
    marginVertical: spacing.MARGIN_8,
  },
  testInstrucationHeadingTextStyle: {
    color: '#463196',
    fontSize: textScale(16),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    alignSelf: 'center',
    opacity: 0.9,
  },
  btnStyle: {
    width: spacing.WIDTH_116,
    height: spacing.HEIGHT_50,
    backgroundColor: '#463196',
    ...boxShadow(),
    alignSelf: 'center',
  },
  btnTextStyle: {
    color: '#FCFCFC',
    fontSize: textScale(14),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 1,
    marginRight: spacing.MARGIN_2,
  },
});
