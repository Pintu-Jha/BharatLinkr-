import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {spacing} from '../../../styles/spacing';
import ImagePath from '../../../Utills/ImagePath';
import TextComp from '../../common/TextComp';
import {fontNames} from '../../../styles/typography';
import {textScale} from '../../../styles/responsiveStyles';
import {boxShadow} from '../../../styles/Mixins';

const HomeStatusComp = ({item, index}) => {
  return (
    <View style={styles.homeStatusContainer}>
      <View style={styles.postContainer}>
        <View>
          <Image
            source={
              index === 0
                ? ImagePath.IC_ADD_POST
                : ImagePath.Profile
            }
            style={
              index === 0
                ? null
                : {
                    width: spacing.WIDTH_40,
                    height: spacing.HEIGHT_40,
                    borderRadius:spacing.HEIGHT_26,
                    resizeMode: 'contain',
                    // borderRadius: spacing.RADIUS_20,
                  }
            }
          />
        </View>
      </View>
      <TextComp text={item.lableText} style={styles.postTextLableStyle} />
    </View>
  );
};

export default HomeStatusComp;

const styles = StyleSheet.create({
  homeStatusContainer: {
    marginVertical: spacing.MARGIN_16,
    marginHorizontal: spacing.MARGIN_6,
    alignItems: 'center',
    justifyContent: 'center',
    ...boxShadow(),
  },
  postContainer: {
    width: spacing.WIDTH_72,
    height: spacing.HEIGHT_74,
    borderWidth: 1,
    borderColor: '#6753a3',
    borderRadius: spacing.HEIGHT_26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postTextLableStyle: {
    marginVertical: spacing.MARGIN_8,
    fontSize: textScale(12),
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 0.9,
  },
});
