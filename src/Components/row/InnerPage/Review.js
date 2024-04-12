import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextComp from '../../common/TextComp';
import {textScale} from '../../../styles/responsiveStyles';
import {fontNames} from '../../../styles/typography';
import {spacing} from '../../../styles/spacing';
import ImagePath from '../../../Utills/ImagePath';
import {boxShadow} from '../../../styles/Mixins';

const dummyData = [
  {
    userName: 'Noor Fatima',
    rating: '3.4/4',
    enrolled_year: 'Enrolled 2021',
    date: 'July 29,2022',
    reviewTitle: 'Review title for the review',
    review:
      'Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumyeirmod tempor I nvidunt ut labore et dolore mana...View More',
    id: 1,
  },
  {
    userName: 'Noor Fatima',
    rating: '3.4/4',
    enrolled_year: 'Enrolled 2021',
    date: 'July 29,2022',
    reviewTitle: 'Review title for the review',
    review:
      'Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumyeirmod tempor I nvidunt ut labore et dolore mana...View More',
    id: 2,
  },
  {
    userName: 'Noor Fatima',
    rating: '3.4/4',
    enrolled_year: 'Enrolled 2021',
    date: 'July 29,2022',
    reviewTitle: 'Review title for the review',
    review:
      'Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumyeirmod tempor I nvidunt ut labore et dolore mana...View More',
    id: 3,
  },
  {
    userName: 'Noor Fatima',
    rating: '3.4/4',
    enrolled_year: 'Enrolled 2021',
    date: 'July 29,2022',
    reviewTitle: 'Review title for the review',
    review:
      'Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumyeirmod tempor I nvidunt ut labore et dolore mana...View More',
    id: 4,
  },
  {
    userName: 'Noor Fatima',
    rating: '3.4/4',
    enrolled_year: 'Enrolled 2021',
    date: 'July 29,2022',
    reviewTitle: 'Review title for the review',
    review:
      'Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumyeirmod tempor I nvidunt ut labore et dolore mana...View More',
    id: 5,
  },
];

const renderItem = ({item}) => {
  return (
    <View style={styles.listMainContainer}>
      <View style={{flexDirection: 'row'}}>
        <Image source={ImagePath.Profile} />
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: spacing.MARGIN_8,
            }}>
            <TextComp text={item.userName} style={styles.userNameTextStyles} />
            <View style={{flexDirection: 'row'}}>
              <Image source={ImagePath.IC_STAR} style={styles.starIconStsyle} />
              <TextComp text={item.rating} style={styles.userNameTextStyles} />
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TextComp
              text={item.enrolled_year}
              style={styles.enrolledYearStyle}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={ImagePath.IC_Eligibility}
                style={styles.EligibilityIconStyle}
              />
              <TextComp text="BS" style={styles.enrolledYearStyle} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={ImagePath.IC_TIME}
                style={styles.EligibilityIconStyle}
              />
              <TextComp text={item.date} style={styles.enrolledYearStyle} />
            </View>
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal: spacing.PADDING_10}}>
        <TextComp text={item.reviewTitle} style={styles.reviewTitleTextStyle} />
        <TextComp text={item.review} style={styles.reviewDescriptionStyle} />
      </View>
    </View>
  );
};

const Review = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.ratingHeadingContainer}>
        <TextComp text="COLLEGE RATING" style={styles.ratingHeading} />
        <TextComp text="3.4/4" style={styles.ratingText} />
      </View>
      <View style={styles.reviewContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextComp
            text="02 Reviews Found"
            style={styles.foundReviewCountText}
          />
          <Image source={ImagePath.IC_UPLOAD_IMG} />
        </View>
        <Image source={ImagePath.IC_REVIEW_REACTION} />
      </View>
      <View style={{marginBottom: spacing.MARGIN_100}}>
        <FlatList
          data={dummyData}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  ratingHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingHeading: {
    color: '#463196',
    fontSize: textScale(14),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 0.9,
  },
  ratingText: {
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    fontSize: textScale(14),
    opacity: 1,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  foundReviewCountText: {
    color: '#9A9A9A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(13),
    opacity: 0.9,
    marginRight: spacing.MARGIN_6,
  },
  listMainContainer: {
    marginVertical: spacing.MARGIN_10,
    marginHorizontal: spacing.MARGIN_4,
    borderRadius: spacing.RADIUS_6,
    flex: 1,
    backgroundColor: '#fff',
    ...boxShadow('#000000', {height: 2, width: 0}, 8, 0.5),
    paddingVertical: spacing.PADDING_12,
  },
  userNameTextStyles: {
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    fontSize: textScale(14),
    opacity: 0.9,
  },
  enrolledYearStyle: {
    color: '#939198',
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 0.9,
  },
  starIconStsyle: {
    tintColor: '#F8B54C',
    opacity: 1,
    resizeMode: 'contain',
    width: spacing.WIDTH_18,
    height: spacing.HEIGHT_18,
  },
  EligibilityIconStyle: {
    resizeMode: 'contain',
    tintColor: '#939198',
    width: spacing.WIDTH_14,
    height: spacing.HEIGHT_14,
    marginRight: spacing.MARGIN_2,
  },
  reviewTitleTextStyle: {
    color: '#463196',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    fontSize: textScale(14),
    opacity: 1,
  },
  reviewDescriptionStyle: {
    color: '#0F0C1A',
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
  },
});
