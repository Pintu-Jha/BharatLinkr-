import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CollegeAllPostRow from '../College/CollegeAllPostRow';
import {spacing} from '../../../styles/spacing';
import {fontNames} from '../../../styles/typography';
import {textScale} from '../../../styles/responsiveStyles';
import TextComp from '../../common/TextComp';
import ImagePath from '../../../Utills/ImagePath';
import commonStyle from '../../../styles/commonStyle';
import {boxShadow} from '../../../styles/Mixins';
import BottonComp from '../../common/BottonComp';
import VirtualizedView from '../../common/VirtualizedView';

const Colleges = () => {
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const dummyData = [
    {
      heading: 'RAM Devi University Institute Of Science, Arts & Technology',
      address: 'Coimbatore,Tamil Nadu',
      UGC: 'UGC',
      Course: 'Course',
      Fees: 'Fees',
      Exam: 'Exam',
      ranked: 'Ranked',
      course_name: 'B.Ed',
      course_fees: '₹ 63,00',
      exam_name: 'AKNUCET',
      rankedNumber: '#0 by',
      id: 1,
      color: '#2ca24f',
    },
    {
      heading: 'RAM Devi University Institute Of Science, Arts & Technology',
      address: 'Coimbatore,Tamil Nadu',
      UGC: 'UGC',
      Course: 'Course',
      Fees: 'Fees',
      Exam: 'Exam',
      ranked: 'Ranked',
      course_name: 'B.Ed',
      course_fees: '₹ 63,00',
      exam_name: 'AKNUCET',
      rankedNumber: '#0 by',
      id: 2,
      color: '#f3694c',
    },
    {
      heading: 'RAM Devi University Institute Of Science, Arts & Technology',
      address: 'Coimbatore,Tamil Nadu',
      UGC: 'UGC',
      Course: 'Course',
      Fees: 'Fees',
      Exam: 'Exam',
      ranked: 'Ranked',
      course_name: 'B.Ed',
      course_fees: '₹ 63,00',
      exam_name: 'AKNUCET',
      rankedNumber: '#0 by',
      id: 3,
      color: '#f1b85f',
    },
  ];

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
            style={{
              marginTop: spacing.MARGIN_14,
              width: spacing.WIDTH_275,
            }}>
            <TouchableOpacity
              style={{
                ...commonStyle.flexRow,
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <Image
                source={ImagePath.COLLEGE_IMAGE}
                style={{
                  width: spacing.WIDTH_60,
                  height: spacing.HEIGHT_60,
                  resizeMode: 'contain',
                }}
              />
              <TextComp text={item.heading} style={styles.courseHeadingStyle} />
            </TouchableOpacity>
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
                  source={ImagePath.IC_LOCATION}
                  style={{
                    width: spacing.WIDTH_16,
                    height: spacing.HEIGHT_16,
                    marginHorizontal: spacing.MARGIN_6,
                    resizeMode: 'contain',
                  }}
                />
                <TextComp
                  text={item.address}
                  style={styles.locationTextStyle}
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
                  source={ImagePath.IC_BOOK}
                  style={{
                    width: spacing.WIDTH_16,
                    height: spacing.HEIGHT_16,
                    marginHorizontal: spacing.MARGIN_6,
                    resizeMode: 'contain',
                  }}
                />
                <TextComp text={item.UGC} style={styles.locationTextStyle} />
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setIsOptionVisible(!isOptionVisible)}>
            <Image source={ImagePath.IC_MENU} style={styles.menuIconStyle} />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLineStyle} />
        <View style={styles.averageTextContainer}>
          <View>
            <TextComp text={item.Course} style={styles.feeSalaryTextStyle} />
            <TextComp text={item.course_name} style={styles.amountTextStyle} />
          </View>
          <View style={styles.sepretorLine} />
          <View>
            <TextComp text={item.Fees} style={styles.feeSalaryTextStyle} />
            <TextComp text={item.course_fees} style={styles.amountTextStyle} />
          </View>
          <View style={styles.sepretorLine} />
          <View>
            <TextComp text={item.Exam} style={styles.feeSalaryTextStyle} />
            <TextComp text={item.exam_name} style={styles.amountTextStyle} />
          </View>
          <View style={styles.sepretorLine} />
          <View>
            <TextComp text={item.ranked} style={styles.feeSalaryTextStyle} />
            <TextComp text={item.rankedNumber} style={styles.amountTextStyle} />
          </View>
        </View>
        <View style={styles.horizontalLineStyle} />
        <View style={styles.averageTextContainer}>
          <View
            style={{...commonStyle.flexRow, ...commonStyle.justifyALignCenter}}>
            <Image
              source={ImagePath.IC_LIKE}
              style={styles.socialMediaIconStyle}
            />
            <TextComp text={'551'} style={styles.socialCountTextStyle} />
          </View>
          <View style={styles.sepretorLine} />
          <View
            style={{...commonStyle.flexRow, ...commonStyle.justifyALignCenter}}>
            <Image
              source={ImagePath.IC_ADD_PEOPLE}
              style={styles.socialMediaIconStyle}
            />
            <TextComp text={'12'} style={styles.socialCountTextStyle} />
          </View>
          <View style={styles.sepretorLine} />
          <TouchableOpacity
            style={{...commonStyle.flexRow, ...commonStyle.justifyALignCenter}}
            activeOpacity={0.8}
            onPress={{}}>
            <Image
              source={ImagePath.IC_SHARE}
              style={styles.socialMediaIconStyle}
            />
            <TextComp text={'305'} style={styles.socialCountTextStyle} />
          </TouchableOpacity>
          <View style={styles.sepretorLine} />
          <View
            style={{...commonStyle.flexRow, ...commonStyle.justifyALignCenter}}>
            <Image
              source={ImagePath.IC_FILE_SAVE}
              style={styles.socialMediaIconStyle}
            />
            <TextComp text={'125'} style={styles.socialCountTextStyle} />
          </View>
        </View>
        <View style={styles.bottonCotainer}>
          <BottonComp
            text="Courses & Fees"
            style={{
              marginRight: spacing.MARGIN_10,
              width: spacing.WIDTH_128,
              height: spacing.HEIGHT_40,
            }}
          />
          <BottonComp
            text="Apply now"
            style={{width: spacing.WIDTH_128, height: spacing.HEIGHT_40}}
          />
        </View>
        {isOptionVisible && (
          <View
            style={{
              maxWidth: spacing.WIDTH_220,
              maxHeight: spacing.HEIGHT_150,
              backgroundColor: '#fff',
              elevation: 4,
              position: 'absolute',
              top: 50,
              right: 20,
              alignContent: 'center',
              justifyContent: 'center',
              width: spacing.WIDTH_116,
              height: spacing.HEIGHT_80,
            }}>
            <TouchableOpacity>
              <TextComp
                text="Courses & Fees"
                style={{
                  textAlign: 'center',
                  fontSize: textScale(13),
                  color: '#0F0C1A',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <TextComp
                text="Apply Now"
                style={{
                  textAlign: 'center',
                  marginTop: spacing.MARGIN_12,
                  fontSize: textScale(13),
                  color: '#0F0C1A',
                }}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <VirtualizedView>
      <FlatList
        data={dummyData}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </VirtualizedView>
  );
};

export default Colleges;

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
    ...boxShadow(),
    alignSelf: 'center',
    marginVertical: spacing.MARGIN_16,
    borderRadius: spacing.RADIUS_4,
    flex: 1,
  },
  courseContainer: {
    width: spacing.WIDTH_4,
    height: spacing.HEIGHT_80,
    borderRadius: spacing.RADIUS_6,
    marginRight: spacing.MARGIN_10,
  },
  courseHeadingStyle: {
    width: spacing.WIDTH_250,
    fontSize: textScale(13),
    color: '#0F0C1A',
    textAlign: 'center',
    opacity: 9,
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
  },
  courseDescriptionStyle: {
    fontSize: textScale(12),
    color: '#0F0C1A',
    textAlign: 'center',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
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
    marginVertical: spacing.MARGIN_4,
    borderColor: '#463196',
    opacity: 0.12,
    borderWidth: 1,
    marginHorizontal: spacing.MARGIN_10,
  },
  averageTextContainer: {
    ...commonStyle.flexRow,
    alignItems: 'center',
    justifyContent: 'space-around',
    // marginHorizontal: spacing.MARGIN_10,
    marginBottom: spacing.MARGIN_10,
  },
  feeSalaryTextStyle: {
    color: '#0F0C1A',
    opacity: 9,
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    textAlign: 'center',
  },
  amountTextStyle: {
    textAlign: 'center',
    color: '#919191',
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
  menuIconStyle: {
    width: spacing.WIDTH_24,
    height: spacing.HEIGHT_24,
    marginTop: spacing.MARGIN_20,
    resizeMode: 'contain',
  },
  locationTextStyle: {
    fontSize: textScale(10),
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    opacity: 9,
  },
  socialCountTextStyle: {
    color: '#0E1D18',
    opacity: 0.9,
    fontSize: textScale(10),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
  },
  socialMediaIconStyle: {
    width: spacing.WIDTH_22,
    height: spacing.HEIGHT_22,
    marginHorizontal: spacing.MARGIN_6,
    resizeMode: 'contain',
  },
  popularTextHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: spacing.MARGIN_16,
  },
  popularHeadingTextStyle: {
    color: '#463196',
    fontSize: textScale(16),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    marginLeft: spacing.MARGIN_30,
  },
  filterIconStyle: {
    width: spacing.WIDTH_20,
    height: spacing.HEIGHT_16,
    tintColor: '#463196',
  },
  selectionOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  foundSubTextContainer: {
    textAlign: 'center',
    marginTop: spacing.MARGIN_10,
    color: '#9A9A9A',
    opacity: 9,
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    fontSize: textScale(12),
  },
  bottonCotainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: spacing.MARGIN_16,
    alignSelf: 'center',
  },
});
