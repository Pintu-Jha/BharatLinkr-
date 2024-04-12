import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {spacing} from '../../../styles/spacing';
import {boxShadow} from '../../../styles/Mixins';
import TextComp from '../../common/TextComp';
import ImagePath from '../../../Utills/ImagePath';
import {fontNames} from '../../../styles/typography';
import {textScale} from '../../../styles/responsiveStyles';

const RequestLinkDetails = ({item, index}) => {
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        height: spacing.HEIGHT_80,
        marginHorizontal: spacing.MARGIN_16,
        marginVertical: spacing.MARGIN_8,
        borderRadius: spacing.RADIUS_8,
        ...boxShadow(),
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: spacing.PADDING_10,
        paddingVertical: spacing.PADDING_10,
      }}>
      <Image source={item.DP} />
      <View style={{flexDirection: 'row', flex: 1}}>
        <View
          style={{
            flex: 0.8,
            marginLeft: spacing.MARGIN_10,
          }}>
          <TextComp text={item.name} style={styles.nameTextStyle} />

          <TextComp text={item.collage} style={styles.collageNameTextStyle} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            flex: 0.2,
            justifyContent: 'space-between',
          }}>
          <Image source={ImagePath.IC_CORRECT_QUESTION} />
          <Image source={ImagePath.IC_WRONG_QUESTION} />
        </View>
      </View>
    </View>
  );
};

export default RequestLinkDetails;

const styles = StyleSheet.create({
  nameTextStyle: {
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(13),
    opacity: 0.76,
  },
  collageNameTextStyle: {
    color: '#7A7880',
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 0.76,
  },
});
