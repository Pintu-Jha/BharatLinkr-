import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ExamsDetiales from '../../row/Exams/ExamsDetiales';
import { spacing } from '../../../styles/spacing';
import { fontNames } from '../../../styles/typography';
import { textScale } from '../../../styles/responsiveStyles';
import TextComp from '../../common/TextComp';

const dummyData = [
  {
    heading: 'AP POLYCET',
    descrioption: 'Andhra Pradesh Polytechnic Common Entrance Test',
    accepting_College: '2188 College Accepting this Exam',
    Application_date: '10 Apr 22-17 May 22',
    Exam_data: '28 may 22',
    result_data: '07 jun 22',
    id: 1,
    color: '#2ca24f',
  },
  {
    heading: 'GCET',
    descrioption: 'GOA Common Entrance Test',
    accepting_College: '2188 College Accepting this Exam',
    Application_date: '10 Apr 22-17 May 22',
    Exam_data: '28 may 22',
    result_data: '07 jun 22',
    id: 2,
    color: '#f3694c',
  },
  {
    heading: 'AP POLYCET',
    descrioption: 'Andhra Pradesh Polytechnic Common Entrance Test',
    accepting_College: '2188 College Accepting this Exam',
    Application_date: '10 Apr 22-17 May 22',
    Exam_data: '28 may 22',
    result_data: '07 jun 22',
    id: 3,
    color: '#f1b85f',
  },
];
const ExamsDetailesList = () => {
  return (
    <View style={{flex: 1}}>
     <TextComp
        text="Found 33 Exams"
        style={styles.foundDetailCountTextStyle}
      />
      <FlatList
        data={dummyData}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => {
          return <ExamsDetiales item={item} index={index} />;
        }}
      />
    </View>
  );
};

export default ExamsDetailesList;

const styles = StyleSheet.create({
    foundDetailCountTextStyle:{
        textAlign: 'center',
        marginTop: spacing.MARGIN_10,
        color: '#9A9A9A',
        opacity: 9,
        fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
        fontSize: textScale(12),
      }
});
