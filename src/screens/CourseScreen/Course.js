import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {textScale} from '../../styles/responsiveStyles';
import WapperContainer from '../../Components/WapperContainer';
import TextComp from '../../Components/TextComp';
import SerachBar from '../../Components/SerachBar';
import {spacing} from '../../styles/spacing';
import {fontNames} from '../../styles/typography';
import ImagePath from '../../Utills/ImagePath';
import BottonComp from '../../Components/BottonComp';
import commonStyle from '../../styles/commonStyle';

const dummyData = [
  {
    heading: 'Bachetor of Science',
    descrioption: '[B.sc] (Microbology)',
    accepting_College: '3 Yrs',
    Application_date: 'Full Time',
    Exam_data: '12 Colleges Offering This Course',
    result_data: 'Average Fees',
    Average_salary: 'Average Salary',
    price: '₹ 30,000',
    id: 1,
    color: '#1BA643',
  },
  {
    heading: 'Bachetor of Science',
    descrioption: '[B.sc] (Microbology)',
    accepting_College: '3 Yrs',
    Application_date: 'Full Time',
    Exam_data: '12 Colleges Offering This Course',
    result_data: 'Average Fees',
    Average_salary: 'Average Salary',
    price: '₹ 30,000',
    id: 2,
    color: '#F7684A',
  },
  {
    heading: 'Bachetor of Science',
    descrioption: '[B.sc] (Microbology)',
    accepting_College: '3 Yrs',
    Application_date: 'Full Time',
    Exam_data: '12 Colleges Offering This Course',
    result_data: 'Average Fees',
    Average_salary: 'Average Salary',
    price: '₹ 30,000',
    id: 3,
    color: '#F8B54C',
  },
];

const Course = () => {
  const [search, setSearch] = useState('');

  const renderItem = ({item}) => {
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
            style={{marginTop: spacing.MARGIN_14, width: spacing.WIDTH_260}}>
            <TextComp text={item.heading} style={styles.courseHeadingStyle} />
            <TextComp
              text={item.descrioption}
              style={styles.courseDescriptionStyle}
            />
            <View
              style={{
                ...commonStyle.flexRow,
                ...commonStyle.justifyALignCenter,
                marginVertical: spacing.MARGIN_10,
              }}>
              <View
                style={{
                  ...commonStyle.flexRow,
                  alignItems: 'center',
                }}>
                <Image
                  source={ImagePath.IC_Rectangle}
                  style={{
                    width: spacing.WIDTH_16,
                    height: spacing.HEIGHT_16,
                    marginHorizontal: spacing.MARGIN_8,
                  }}
                />
                <TextComp
                  text={item.accepting_College}
                  style={styles.acceptingCollegeCount}
                />
              </View>
              <View
                style={{
                  ...commonStyle.flexRow,
                  ...commonStyle.justifyALignCenter,
                  alignItems: 'center',
                  marginHorizontal: spacing.MARGIN_10,
                }}>
                <Image
                  source={ImagePath.IC_Rectangle}
                  style={{
                    width: spacing.WIDTH_16,
                    height: spacing.HEIGHT_16,
                    marginHorizontal: spacing.MARGIN_8,
                  }}
                />
                <TextComp
                  text={item.Application_date}
                  style={styles.acceptingCollegeCount}
                />
              </View>
            </View>
            <TextComp text={item.Exam_data} style={styles.offerCollegeCount} />
            <View style={styles.horizontalLineStyle} />
            <View style={styles.averageTextContainer}>
              <View>
                <TextComp
                  text={item.result_data}
                  style={styles.feeSalaryTextStyle}
                />
                <TextComp text={item.price} style={styles.amountTextStyle} />
              </View>
              <View style={styles.sepretorLine} />
              <View>
                <TextComp
                  text={item.Average_salary}
                  style={styles.feeSalaryTextStyle}
                />
                <TextComp text={item.price} style={styles.amountTextStyle} />
              </View>
            </View>
          </View>
          <View>
            <Image source={ImagePath.IC_MENU} style={styles.menuIconStyle} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <WapperContainer>
       <SerachBar
        placeholder="Search here.."
        source3={ImagePath.IC_MENU}
        Icon3={{width: spacing.WIDTH_34, height: spacing.HEIGHT_34}}
        value={search}
        onChangeText={e => setSearch(e)}/>
      <TextComp
        text={'Popular Courses In India'}
        style={styles.popularCourseHeadingTextStyle}
      />
      <View style={styles.selectionMainContainer}>
        <View style={styles.selectionContainer}>
          <TextComp text="Select Stream" style={styles.selectionTextStyle} />
          <Image
            source={ImagePath.IC_DOWN_ARROW}
            style={styles.downArrowStyle}
          />
        </View>
        <View style={styles.selectionContainer}>
          <TextComp text="Select Course" style={styles.selectionTextStyle} />
          <Image
            source={ImagePath.IC_DOWN_ARROW}
            style={styles.downArrowStyle}
          />
        </View>
      </View>
      <TextComp
        text="Found 33 Courses"
        style={{
          textAlign: 'center',
          marginTop: spacing.MARGIN_10,
          color: '#9A9A9A',
          opacity: 9,
          fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
          fontSize: textScale(12),
        }}
      />
      <FlatList
        data={dummyData}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
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
    marginBottom:spacing.MARGIN_10
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
