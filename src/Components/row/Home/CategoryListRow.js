import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {spacing} from '../../../styles/spacing';
import TextComp from '../../common/TextComp';
import {textScale} from '../../../styles/responsiveStyles';
import {fontNames} from '../../../styles/typography';
import {boxShadowLess} from '../../../styles/Mixins';

const CategoryListRow = ({item, index, isSelected, onPress}) => {
  return (
    <TouchableOpacity
      style={[
        styles.filterContainer,
        isSelected && {
          backgroundColor: '#6553A7',
        },
        index == 0 && {
          marginLeft: spacing.MARGIN_14,
        },
      ]}
      onPress={onPress}
      activeOpacity={50}>
      <TextComp
        text={item.lable}
        style={{
          fontSize: textScale(12),
          color: isSelected ? '#FFFFFF' : '#6553A7',
          opacity: 0.76,
          fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
          marginTop: spacing.MARGIN_2,
          ...boxShadowLess(),
        }}
      />
    </TouchableOpacity>
  );
};
export default CategoryListRow;

const styles = StyleSheet.create({
  filterContainer: {
    borderWidth: 1,
    borderColor: '#6553A7',
    borderRadius: spacing.RADIUS_30,
    marginHorizontal: spacing.MARGIN_4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.PADDING_24,
    paddingVertical: spacing.PADDING_6,
    backgroundColor: '#fff',
    ...boxShadowLess(),
  },
});
