import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {textScale} from '../../../styles/responsiveStyles';
import {spacing} from '../../../styles/spacing';
import TextComp from '../../common/TextComp';
import ImagePath from '../../../Utills/ImagePath';
import {fontNames} from '../../../styles/typography';

const ReviewDetails = ({item, index}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.inputContainer}>
        <View
          style={{
            alignSelf:
              item.lable.slice(0, 10) == item.lable ? 'flex-start' : 'center',
          }}>
          <View
            style={{
              width:
                item.lable.slice(0, 14) == item.lable
                  ? spacing.WIDTH_74
                  : spacing.WIDTH_90,
              minWidth:
                item.lable.slice(0, 10) == item.lable
                  ? spacing.WIDTH_95
                  : spacing.WIDTH_124,
              position: 'absolute',
              top: -13,
              right:
                item.lable.slice(0, 10) == item.lable
                  ? -spacing.WIDTH_116
                  : spacing.WIDTH_4,
              backgroundColor: '#fff',
              paddingHorizontal: spacing.PADDING_8,
              // alignItems: 'center',
              // borderWidth:1
            }}>
            <TextComp style={styles.inputUperTextStyle} text={item.lable} />
          </View>
        </View>
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Image
            source={ImagePath.IC_DOWN_ARROW}
            style={{
              marginRight: spacing.MARGIN_30,
              tintColor: '#C8C1DF',
              opacity: 1,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({
  inputContainer: {
    width: spacing.FULL_WIDTH / 1.3,
    height: spacing.HEIGHT_50,
    borderWidth: 1,
    marginVertical: spacing.MARGIN_12,
    borderRadius: spacing.RADIUS_6,
    borderColor: '#C8C1DF',
    opacity: 1,
  },
  inputUperTextStyle: {
    color: '#463196',
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
  },
});
