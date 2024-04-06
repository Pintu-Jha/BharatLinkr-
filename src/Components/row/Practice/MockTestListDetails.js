import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {boxShadow, boxShadowLess} from '../../../styles/Mixins';
import {spacing} from '../../../styles/spacing';
import TextComp from '../../common/TextComp';
import {height, textScale} from '../../../styles/responsiveStyles';
import {fontNames} from '../../../styles/typography';
import ImagePath from '../../../Utills/ImagePath';
import BottonComp from '../../common/BottonComp';
import {useNavigation} from '@react-navigation/native';
import navigationString from '../../../Navigation/navigationString';
const MockTestListDetails = ({item, index}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            ...styles.learningStipLine,
            backgroundColor: item.color,
          }}
        />

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: spacing.PADDING_12,
          }}>
          <View style={{flexDirection: 'row'}}>
            <TextComp text={item.heading} style={styles.headingTextStyle} />
            <TextComp text={item.testCategory} />
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: spacing.MARGIN_12,
              }}>
              <Image
                source={ImagePath.IC_QUESTION}
                style={{
                  ...styles.reactionOnCourseIconsStyle,
                  marginBottom: spacing.MARGIN_6,
                }}
              />
              <TextComp
                text={item.question}
                style={styles.reactionOnCourseTextStyle}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: spacing.MARGIN_12,
              }}>
              <Image
                source={ImagePath.IC_MARKS}
                style={styles.reactionOnCourseIconsStyle}
              />
              <TextComp
                text={item.totalMarks}
                style={styles.reactionOnCourseTextStyle}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={ImagePath.IC_TIME}
                style={styles.reactionOnCourseIconsStyle}
              />
              <TextComp
                text={item.time}
                style={styles.reactionOnCourseTextStyle}
              />
            </View>
          </View>
        </View>
        <View style={{marginTop: spacing.MARGIN_8}}>
          <Image source={ImagePath.IC_MENU} />
        </View>
      </View>

      <View style={{alignItems: 'center', marginVertical: spacing.MARGIN_16}}>
        <BottonComp
          style={{
            borderRadius: spacing.RADIUS_4,
            width: spacing.WIDTH_116,
            height: spacing.HEIGHT_40,
            backgroundColor: '#C8C1DF',
            opacity: 0.5,
            ...boxShadowLess(),
            padding: spacing.PADDING_4,
          }}
          text="Start Now"
          source={ImagePath.IC_Right_ARROW}
          IconStyle={{
            tintColor: '#463196',
            width: spacing.WIDTH_14,
            height: spacing.HEIGHT_14,
          }}
          rightImg={true}
          textStyle={styles.btnTextStyle}
          onPress={()=>navigation.navigate(navigationString.MOCK_INSTRUCATION_SCREEN)}
        />
      </View>
    </View>
  );
};

export default MockTestListDetails;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fffefe',
    alignSelf: 'center',
    marginVertical: spacing.MARGIN_16,
    borderRadius: spacing.RADIUS_4,
    ...boxShadow(),
    minWidth: '90%',
    // marginHorizontal:spacing.MARGIN_18,
  },
  learningStipLine: {
    width: spacing.WIDTH_4,
    height: spacing.HEIGHT_50,
    borderRadius: spacing.RADIUS_6,
    marginRight: spacing.MARGIN_10,
  },
  headingTextStyle: {
    color: '#463196',
    fontSize: textScale(13),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 0.9,
  },
  btnTextStyle: {
    fontSize: textScale(14),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    color: '#463196',
    opacity: 1,
    marginRight: spacing.MARGIN_4,
  },
  reactionOnCourseIconsStyle: {
    tintColor: '#000000',
    resizeMode: 'contain',
    opacity: 1,
    width: spacing.WIDTH_14,
    height: spacing.HEIGHT_14,
  },
  reactionOnCourseTextStyle: {
    color: '#939198',
    opacity: 1,
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    marginLeft: spacing.MARGIN_4,
  },
});
