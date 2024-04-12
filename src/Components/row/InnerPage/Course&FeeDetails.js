import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import TextComp from '../../common/TextComp';
import {textScale} from '../../../styles/responsiveStyles';
import {fontNames} from '../../../styles/typography';
import {spacing} from '../../../styles/spacing';
import ImagePath from '../../../Utills/ImagePath';
import {boxShadow} from '../../../styles/Mixins';

const dummyData = [
  {
    stream: 'Bachelor of Science',
    courseName: '[B.Sc] (Microbiology)',
    duration: '3 Yrs',
    onCampus: 'On Campus',
    degree: 'Degree',
    workingType: 'Full Time',
    graduation: 'Graduation',
    total_fee: 'T.Fee',
    fee: '₹ 30,000',
    Eligibility: 'Eligibility',
    Rank: '0 by',
    Exams_Accepted: 'Exams Accepted',
    JE: 'JE',
    allStream:
      '11 Streams- Biological Sciences | Biological Sciences | Bio Sciences | Biological Sciences…View more',
    id: 1,
  },
  {
    stream: 'Bachelor of Science',
    courseName: '[B.Sc] (Microbiology)',
    duration: '3 Yrs',
    onCampus: 'On Campus',
    degree: 'Degree',
    workingType: 'Full Time',
    graduation: 'Graduation',
    total_fee: 'T.Fee',
    fee: '₹ 30,000',
    Eligibility: 'Eligibility',
    Rank: '0 by',
    Exams_Accepted: 'Exams Accepted',
    JE: 'JE',
    allStream:
      '11 Streams- Biological Sciences | Biological Sciences | Bio Sciences | Biological Sciences…View more',
    id: 2,
  },
  {
    stream: 'Bachelor of Science',
    courseName: '[B.Sc] (Microbiology)',
    duration: '3 Yrs',
    onCampus: 'On Campus',
    degree: 'Degree',
    workingType: 'Full Time',
    graduation: 'Graduation',
    total_fee: 'T.Fee',
    fee: '₹ 30,000',
    Eligibility: 'Eligibility',
    Rank: '0 by',
    Exams_Accepted: 'Exams Accepted',
    JE: 'JE',
    allStream:
      '11 Streams- Biological Sciences | Biological Sciences | Bio Sciences | Biological Sciences…View more',
    id: 3,
  },
  {
    stream: 'Bachelor of Science',
    courseName: '[B.Sc] (Microbiology)',
    duration: '3 Yrs',
    onCampus: 'On Campus',
    degree: 'Degree',
    workingType: 'Full Time',
    graduation: 'Graduation',
    total_fee: 'T.Fee',
    fee: '₹ 30,000',
    Eligibility: 'Eligibility',
    Rank: '0 by',
    Exams_Accepted: 'Exams Accepted',
    JE: 'JE',
    allStream:
      '11 Streams- Biological Sciences | Biological Sciences | Bio Sciences | Biological Sciences…View more',
    id: 4,
  },
  {
    stream: 'Bachelor of Science',
    courseName: '[B.Sc] (Microbiology)',
    duration: '3 Yrs',
    onCampus: 'On Campus',
    degree: 'Degree',
    workingType: 'Full Time',
    graduation: 'Graduation',
    total_fee: 'T.Fee',
    fee: '₹ 30,000',
    Eligibility: 'Eligibility',
    Rank: '0 by',
    Exams_Accepted: 'Exams Accepted',
    JE: 'JE',
    allStream:
      '11 Streams- Biological Sciences | Biological Sciences | Bio Sciences | Biological Sciences…View more',
    id: 5,
  },
];

const renderItem = ({item, index}) => {
  return (
    <View style={styles.listMainContainer}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View />
        <View style={{marginLeft: spacing.MARGIN_20, alignItems: 'center'}}>
          <TextComp text={item.stream} style={styles.courseHeading} />
          <TextComp
            text={item.courseName}
            style={styles.courseSubjectTextStyle}
          />
        </View>
        <View style={{marginBottom: spacing.MARGIN_16}}>
          <Image source={ImagePath.IC_MENU} />
        </View>
      </View>
      <View style={styles.courseKeyContainer}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={ImagePath.IC_Rectangle}
              style={styles.courseKeyIcons}
            />
            <TextComp text={item.duration} style={styles.courseKeyText} />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={ImagePath.IC_Rectangle}
              style={styles.courseKeyIcons}
            />
            <TextComp text={item.workingType} style={styles.courseKeyText} />
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={ImagePath.IC_Rectangle}
              style={styles.courseKeyIcons}
            />
            <TextComp text={item.onCampus} style={styles.courseKeyText} />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={ImagePath.IC_Rectangle}
              style={styles.courseKeyIcons}
            />
            <TextComp text={item.graduation} style={styles.courseKeyText} />
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={ImagePath.IC_Rectangle}
              style={styles.courseKeyIcons}
            />
            <TextComp text={item.degree} style={styles.courseKeyText} />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={ImagePath.IC_Rectangle}
              style={styles.courseKeyIcons}
            />
            <TextComp text={item.total_fee} style={styles.courseKeyText} />
            <TextComp text={item.fee} style={styles.courseKeyText} />
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 0.5,
          borderColor: '#463196',
          marginHorizontal: spacing.MARGIN_6,
          marginVertical: spacing.MARGIN_6,
          opacity:.12
        }}
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // marginHorizontal: spacing.MARGIN_6,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: spacing.FULL_WIDTH / 2,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={ImagePath.IC_Eligibility}
                style={styles.iconsBlue}
              />
              <TextComp
                text={item.Eligibility}
                style={styles.EligibilityTextStyle}
              />
            </View>
            <TextComp text={item.graduation} style={styles.graduationText} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: spacing.FULL_WIDTH / 3,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={ImagePath.IC_STAR} style={styles.iconsBlue} />
              <TextComp text={'Rank'} style={styles.EligibilityTextStyle} />
            </View>
            <TextComp text={item.Rank} style={styles.graduationText} />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: spacing.MARGIN_12,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={ImagePath.IC_EXAM_FOR_COURSE}
              style={styles.iconsBlue}
            />
            <TextComp
              text={item.Exams_Accepted}
              style={styles.EligibilityTextStyle}
            />
          </View>
          <TextComp
            text={item.JE}
            style={{...styles.graduationText, marginLeft: spacing.MARGIN_12}}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: '#463196',
            marginHorizontal: spacing.MARGIN_6,
            marginVertical: spacing.MARGIN_8,
            opacity:.12
          }}
        />
      </View>
      <View style={{marginHorizontal: spacing.MARGIN_12}}>
        <TextComp text={item.allStream} style={styles.graduationText} />
      </View>
    </View>
  );
};

const Course_FeeDetails = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.optionTextContainer}>
        <TextComp text="ALL" style={styles.courseBadge} />
        <TextComp text="LATERAL" style={styles.courseBadge} />
        <TextComp text="HONORS" style={styles.courseBadge} />
        <View style={styles.seeAllOptionContainer}>
          <Image
            source={ImagePath.IC_Right_ARROW}
            style={{tintColor: '#463196'}}
          />
        </View>

        <View style={{marginHorizontal: spacing.MARGIN_16}}>
          <View style={styles.inputStyle}>
            <TextInput
              placeholder="Search Here.."
              placeholderTextColor={'#C8C1DF'}
              style={styles.inputTextStyle}
              // value={search}
              // onChangeText={e => setSearch(e)}
            />
            <Image
              source={ImagePath.IC_SEARCH}
              style={{tintColor: '#C8C1DF'}}
            />
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
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

export default Course_FeeDetails;

const styles = StyleSheet.create({
  courseBadge: {
    color: '#463196',
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 0.9,
    textTransform: 'uppercase',
  },
  seeAllOptionContainer: {
    width: spacing.WIDTH_30,
    height: spacing.HEIGHT_30,
    borderRadius: spacing.HEIGHT_30 / 2,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: spacing.RADIUS_8,
    borderColor: '#C8C1DF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    opacity: 0.96,
    maxWidth: spacing.WIDTH_124,
    width: spacing.WIDTH_124,
    paddingHorizontal: spacing.PADDING_10,
  },
  inputTextStyle: {
    color: '#0F0C1AD6',
    fontSize: textScale(10),
  },
  courseHeading: {
    color: '#463196',
    fontSize: textScale(18),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    opacity: 0.9,
  },
  courseSubjectTextStyle: {
    color: '#0F0C1A',
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 0.9,
  },
  courseKeyText: {
    marginHorizontal: spacing.MARGIN_2,
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(12),
  },
  courseKeyIcons: {
    resizeMode: 'contain',
  },
  optionTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  courseKeyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: spacing.MARGIN_6,
    marginHorizontal: spacing.MARGIN_4,
  },
  listMainContainer: {
    marginVertical: spacing.MARGIN_12,
    marginHorizontal: spacing.MARGIN_6,
    borderRadius: spacing.RADIUS_6,
    flex: 1,
    backgroundColor: '#fff',
    ...boxShadow('#000000', {height: 2, width: 0}, 8, 0.5),
  },
  EligibilityTextStyle: {
    color: '#463196',
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    opacity: 1,
    textDecorationLine: 'underline',
  },
  graduationText: {
    color: '#0F0C1A',
    opacity: 0.9,
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
  },
  iconsBlue: {resizeMode: 'contain', marginRight: spacing.MARGIN_2},
});
