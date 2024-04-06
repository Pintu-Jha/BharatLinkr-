import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CollegeAllPostRow from '../../row/College/CollegeAllPostRow';
import TextComp from '../../common/TextComp';
import {spacing} from '../../../styles/spacing';
import {fontNames} from '../../../styles/typography';
import {textScale} from '../../../styles/responsiveStyles';

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

const CollegeAllPost = () => {
  return (
    <View style={{flex: 1}}>
      <TextComp text="Found 33 Colleges" style={styles.foundSubTextContainer} />
      <FlatList
        data={dummyData}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={item => {
          return <CollegeAllPostRow item={item} />;
        }}
      />
    </View>
  );
};

export default CollegeAllPost;

const styles = StyleSheet.create({
  foundSubTextContainer: {
    textAlign: 'center',
    marginTop: spacing.MARGIN_10,
    color: '#9A9A9A',
    opacity: 9,
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    fontSize: textScale(12),
  },
});
