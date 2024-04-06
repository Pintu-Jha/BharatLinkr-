import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {spacing} from '../../../styles/spacing';
import {boxShadow} from '../../../styles/Mixins';
import TextComp from '../../common/TextComp';
import ImagePath from '../../../Utills/ImagePath';
import {textScale} from '../../../styles/responsiveStyles';
import {fontNames} from '../../../styles/typography';

const LinksDetails = ({item, index}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={styles.courseLinksContainer}>
          <Image
            source={ImagePath.IC_Rectangle}
            style={{
              marginHorizontal: spacing.MARGIN_8,
              tintColor: item.backGroundColor,
              resizeMode: 'contain',
            }}
          />
          <TextComp text={item.title} style={styles.titleStyle} />
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={ImagePath.IC_Right_ARROW}
            style={{
              resizeMode: 'contain',
              tintColor: '#000000',
              //   alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LinksDetails;
const styles = StyleSheet.create({
  mainContainer: {
    // height: spacing.HEIGHT_60,
    backgroundColor: '#FFFFFF',
    ...boxShadow(),
    marginVertical: spacing.MARGIN_10,
    marginHorizontal: spacing.MARGIN_30,
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: spacing.PADDING_20,
    paddingVertical: spacing.PADDING_10,
  },
  courseLinksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    color: '#0F0C1A',
    opacity: 1,
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
  },
});
