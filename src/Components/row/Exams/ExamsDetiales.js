import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, textScale } from '../../../styles/responsiveStyles';
import { fontNames } from '../../../styles/typography';
import { spacing } from '../../../styles/spacing';
import BottonComp from '../../common/BottonComp';
import TextComp from '../../common/TextComp';
import ImagePath from '../../../Utills/ImagePath';
import { boxShadow } from '../../../styles/Mixins';

const ExamsDetiales = ({item,index}) => {
    return (
      <View style={styles.mainContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{...styles.courseContainer, backgroundColor: item.color}}
          />
          <View
            style={{marginTop: spacing.MARGIN_14, width: spacing.WIDTH_290}}>
            <TextComp text={item.heading} style={styles.courseHeadingStyle} />
            <TextComp
              text={item.descrioption}
              style={styles.courseDescriptionStyle}
            />

            <TextComp
              text={item.accepting_College}
              style={styles.acceptingCollegeCount}
            />
            <View style={styles.courseDetailesDateContainer}>
              <View style={styles.applicationDateStyle}>
                <TextComp
                  text={'Application Date'}
                  style={styles.applicationDataHeading}
                />
                <TextComp
                  text={item.Application_date}
                  style={styles.dateStyle}
                />
              </View>
              <View style={styles.seprationLine} />
              <View style={styles.examDateStyle}>
                <TextComp
                  text={'Exam Date'}
                  style={styles.applicationDataHeading}
                />
                <TextComp text={item.Exam_data} style={styles.dateStyle} />
              </View>
              <View style={styles.seprationLine} />
              <View style={styles.resultDateStyle}>
                <TextComp
                  text={'Result Date'}
                  style={styles.applicationDataHeading}
                />
                <TextComp text={item.result_data} style={styles.dateStyle} />
              </View>
            </View>
          </View>
          <View>
            <Image source={ImagePath.IC_MENU} style={styles.menuIconStyle} />
          </View>
        </View>
        <View style={styles.bottonCotainer}>
          <BottonComp
            text="Get Updates"
            style={{marginRight: spacing.MARGIN_10,width:spacing.WIDTH_116,height:spacing.HEIGHT_40}}
          />
          <BottonComp  text="How To Apply"  style={{width:spacing.WIDTH_116,height:spacing.HEIGHT_40}}/>
        </View>
      </View>
    );
  };

  export default ExamsDetiales
  const styles = StyleSheet.create({
    selectionContainer: {
      width: spacing.WIDTH_160,
      height: spacing.HEIGHT_44,
      backgroundColor: '#fffefe',
      elevation: 4,
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      borderRadius: spacing.RADIUS_6,
      borderColor: 1,
      borderColor: '#C8C1DF59',
      opacity: 1,
    },
    selectionTextStyle: {
      color: '#0F0C1A',
      opacity: 0.76,
      fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    },
    downArrowStyle: {
      width: spacing.WIDTH_8,
      height: spacing.HEIGHT_8,
      tintColor: '#3B374A',
    },
    mainContainer: {
      backgroundColor: '#fffefe',
      alignSelf: 'center',
      marginVertical: spacing.MARGIN_16,
      borderRadius: spacing.RADIUS_4,
      ...boxShadow()
    },
    courseContainer: {
      width: spacing.WIDTH_4,
      height: spacing.HEIGHT_90,
      borderRadius: spacing.RADIUS_6,
      marginRight: spacing.MARGIN_10,
    },
    courseHeadingStyle: {
      fontSize: textScale(18),
      color: '#463196',
      textAlign: 'center',
      opacity: 9,
      fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    },
    courseDescriptionStyle: {
      fontSize: textScale(12),
      color: '#0F0C1A',
      textAlign: 'center',
      fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    },
    acceptingCollegeCount: {
      fontSize: textScale(12),
      alignSelf: 'center',
      color: '#463196',
      textDecorationLine: 'underline',
      marginTop: spacing.MARGIN_10,
      fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
      opacity: 9,
    },
    courseDetailesDateContainer: {
      flexDirection: 'row',
      marginVertical: spacing.MARGIN_12,
      elevation: 0.4,
      backgroundColor: '#fffefe',
      borderRadius: spacing.RADIUS_4,
      alignItems: 'center',
      justifyContent: 'center',
      width: spacing.WIDTH_296,
      alignSelf: 'center',
      padding: spacing.PADDING_4,
    },
    applicationDateStyle: {
      // width: spacing.WIDTH_140,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    seprationLine: {
      width: spacing.WIDTH_1,
      height: spacing.HEIGHT_40,
      backgroundColor: '#E6E6E6',
      margin: spacing.MARGIN_4,
    },
    examDateStyle: {
      // width: spacing.WIDTH_80,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    resultDateStyle: {
      // width: spacing.WIDTH_80,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    menuIconStyle: {
      width: spacing.WIDTH_24,
      height: spacing.HEIGHT_24,
      marginTop: spacing.MARGIN_20,
    },
    bottonCotainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginBottom: spacing.MARGIN_16,
      alignSelf:"center"
    },
    applicationDataHeading: {
      fontSize: textScale(12),
      color: '#0F0C1A',
      fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    },
    dateStyle: {
      fontSize: textScale(11),
      fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
      color: '#0F0C1A',
      opacity: 9,
    },
  });