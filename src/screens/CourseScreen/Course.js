import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {textScale} from '../../styles/responsiveStyles';
import WapperContainer from '../../Components/common/WapperContainer';
import SerachBar from '../../Components/common/SerachBar';
import {spacing} from '../../styles/spacing';
import {fontNames} from '../../styles/typography';
import commonStyle from '../../styles/commonStyle';
import CourseDetailsList from '../../Components/Modules/Course/CourseDetailsList';
import SelectionContainer from '../../Components/RepeatComponents/SelectionContainer';
import PopularTextHeading from '../../Components/common/PopularTextHeading';

const Course = () => {
  const [search, setSearch] = useState('');

  return (
    <WapperContainer>
      <SerachBar
        placeholder="Search here.."
        value={search}
        onChangeText={e => setSearch(e)}
      />
      <PopularTextHeading text={'Popular Courses In India'} />
      <SelectionContainer />
      <CourseDetailsList />
    </WapperContainer>
  );
};

export default Course;

const styles = StyleSheet.create({
  selectionMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
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
    width: spacing.WIDTH_312,
    // height: spacing.HEIGHT_230,
    elevation: 4,
    alignSelf: 'center',
    marginVertical: spacing.MARGIN_16,
    borderRadius: spacing.RADIUS_4,
  },
  courseContainer: {
    width: spacing.WIDTH_4,
    height: spacing.HEIGHT_80,
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
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 9,
  },
  courseDetailesDateContainer: {
    flexDirection: 'row',
    marginVertical: spacing.MARGIN_12,
    elevation: 0.5,
    backgroundColor: '#fffefe',
    borderRadius: spacing.RADIUS_4,
    alignItems: 'center',
    justifyContent: 'center',
    width: spacing.WIDTH_296,
    alignSelf: 'center',
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
    justifyContent: 'center',
  },
  offerCollegeCount: {
    fontSize: textScale(12),
    alignSelf: 'center',
    color: '#463196',
    textDecorationLine: 'underline',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    opacity: 9,
  },
  horizontalLineStyle: {
    borderTopWidth: 0.5,
    marginVertical: spacing.MARGIN_6,
    borderColor: '#463196',
    opacity: 0.12,
  },
  averageTextContainer: {
    ...commonStyle.flexRow,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: spacing.MARGIN_10,
  },
  feeSalaryTextStyle: {
    color: '#0F0C1A',
    opacity: 9,
    fontSize: textScale(13),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
  },
  amountTextStyle: {
    textAlign: 'center',
    opacity: 0.9,
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
  },
  sepretorLine: {
    width: spacing.WIDTH_1,
    height: spacing.HEIGHT_40,
    backgroundColor: '#463196',
    opacity: 0.12,
  },
  popularCourseHeadingTextStyle: {
    color: '#463196',
    textAlign: 'center',
    fontSize: textScale(16),
    marginVertical: spacing.MARGIN_16,
    opacity: 1,
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
  },
});
