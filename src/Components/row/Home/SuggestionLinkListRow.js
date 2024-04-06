import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImagePath from '../../../Utills/ImagePath';
import TextComp from '../../common/TextComp';
import {spacing} from '../../../styles/spacing';
import {textScale} from '../../../styles/responsiveStyles';
import {fontNames} from '../../../styles/typography';
import BottonComp from '../../common/BottonComp';
import {boxShadow, boxShadowTwo} from '../../../styles/Mixins';

const SuggestionLinkListRow = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{marginRight: spacing.MARGIN_12}}>
        <Image source={ImagePath.Other_PROFILE} />
      </View>
      <View style={{flex: 1}}>
        <TextComp text="Bharat" />
        <Image
          source={ImagePath.IC_CLOSE}
          style={{position: 'absolute', right: 0}}
        />
        <TextComp
          text={'Student | Lyallpur college of Technology'}
          style={styles.studentDetailsTextstyle}
        />
        <View
          style={styles.btnContainer}>
          <BottonComp
            style={{
              ...styles.btnStyle,
              backgroundColor: '#C8C1DF',
              ...boxShadow('#0000000F'),
            }}
            textStyle={styles.connectPopleTextStyle}
            text="Link"
          />
          <BottonComp
            style={{...styles.btnStyle, marginHorizontal: spacing.MARGIN_12}}
            text="Posts"
            textStyle={styles.connectPopleTextStyle}
          />
        </View>
      </View>
    </View>
  );
};

export default SuggestionLinkListRow;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    width: spacing.FULL_WIDTH / 1.8,
    paddingHorizontal: spacing.PADDING_16,
    marginRight: spacing.MARGIN_12,
    paddingVertical: spacing.PADDING_12,
    marginHorizontal: spacing.MARGIN_16,
    marginVertical: spacing.MARGIN_16,
    borderRadius: spacing.RADIUS_6,
    ...boxShadow(),
  },
  btnStyle: {
    width: spacing.WIDTH_70,
    height: spacing.HEIGHT_30,
    borderRadius: spacing.RADIUS_8,
  },
  connectPopleTextStyle:{
    color: '#0F0C1A',
    fontSize: textScale(9),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
  },
  btnContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.MARGIN_12,
    flex: 1,
    marginRight: spacing.MARGIN_10,
  },
  studentDetailsTextstyle:{
    color: '#7A7880',
    opacity: 0.76,
    fontSize: textScale(10),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
  }
});
