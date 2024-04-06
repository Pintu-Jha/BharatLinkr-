import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SerachBar from '../../common/SerachBar';
import PopularTextHeading from '../../common/PopularTextHeading';
import SelectionContainer from '../../RepeatComponents/SelectionContainer';
import TextComp from '../../common/TextComp';
import {fontNames} from '../../../styles/typography';
import {textScale} from '../../../styles/responsiveStyles';
import {spacing} from '../../../styles/spacing';
import MockTestListDetails from '../../row/Practice/MockTestListDetails';

const dummyData = [
  {
    heading: 'Topic Name -',
    question: '14 Questions',
    testCategory: 'Mocktest 1',
    totalMarks: '12 Marks',
    time: '12 Mins',
    id: 1,
    color: '#1BA643',
  },
  {
    heading: 'Topic Name -',
    question: '14 Questions',
    testCategory: 'Mocktest 1',
    totalMarks: '12 Marks',
    time: '12 Mins',
    id: 2,
    color: '#F7684A',
  },
  {
    heading: 'Topic Name -',
    question: '14 Questions',
    testCategory: 'Mocktest 1',
    totalMarks: '12 Marks',
    time: '12 Mins',
    id: 3,
    color: '#F8B54C',
  },
  {
    heading: 'Topic Name -',
    question: '14 Questions',
    testCategory: 'Mocktest 1',
    totalMarks: '12 Marks',
    time: '12 Mins',
    id: 4,
    color: '#1BA643',
  },
  {
    heading: 'Topic Name -',
    question: '14 Questions',
    totalMarks: '12 Marks',
    testCategory: 'Mocktest 1',
    time: '12 Mins',
    id: 5,
    color: '#F8B54C',
  },
  {
    heading: 'Topic Name -',
    question: '14 Questions',
    testCategory: 'Mocktest 1',
    totalMarks: '12 Marks',
    time: '12 Mins',
    id: 6,
    color: '#F7684A',
  },
];

const MockTestList = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={{flex:1}}>
      <SerachBar
        placeholder="Search here.."
        value={search}
        onChangeText={e => setSearch(e)}
      />
      <PopularTextHeading text="Popular Corporate Learnings" />
      <SelectionContainer
        firstContainerText="Select Category"
        secondContainerText="Select Sub-Category"
      />
      <TextComp
        text="Found 15 Reasoning Mock Tests"
        style={styles.foundDetailsTextStyle}
      />
      <FlatList
        data={dummyData}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return <MockTestListDetails item={item} index={index} />;
        }}
      />
    </View>
  );
};

export default MockTestList;

const styles = StyleSheet.create({
  foundDetailsTextStyle: {
    textAlign: 'center',
    color: '#9A9A9A',
    opacity: 9,
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    fontSize: textScale(12),
    marginVertical: spacing.MARGIN_10,
  },
});
