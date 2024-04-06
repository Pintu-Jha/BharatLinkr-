import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CourseDetailes from '../../row/Course/CourseDetailes';
import { spacing } from '../../../styles/spacing';
import { fontNames } from '../../../styles/typography';
import { textScale } from '../../../styles/responsiveStyles';
import TextComp from '../../common/TextComp';

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
const CourseDetailsList = () => {
  return (
    <View style={{flex: 1}}>
      <TextComp text="Found 33 Courses" style={styles.foundDetailsTextStyle} />
      <FlatList
        data={dummyData}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <CourseDetailes
              item={item}
              index={index}
              key={'CourseDetailes' + index}
            />
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default CourseDetailsList;

const styles = StyleSheet.create({
  foundDetailsTextStyle: {
    textAlign: 'center',
    marginTop: spacing.MARGIN_10,
    color: '#9A9A9A',
    opacity: 9,
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    fontSize: textScale(12),
  },
});
