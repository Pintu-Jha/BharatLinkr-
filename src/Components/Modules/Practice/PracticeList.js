import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SerachBar from '../../common/SerachBar';
import PopularTextHeading from '../../common/PopularTextHeading';
import SelectionContainer from '../../RepeatComponents/SelectionContainer';
import PracticeListDetails from '../../row/Practice/PracticeListDetails';
import TextComp from '../../common/TextComp';
import {textScale} from '../../../styles/responsiveStyles';
import {spacing} from '../../../styles/spacing';
import {fontNames} from '../../../styles/typography';

const dummyData = [
  {
    heading: 'Topic Name Here',
    likes: '4 Likes',
    views: 'Views',
    download: 'Downloads',
    id: 1,
    color: '#1BA643',
  },
  {
    heading: 'Topic Name Here',
    likes: '4 Likes',
    views: 'Views',
    download: 'Downloads',
    id: 2,
    color: '#F7684A',
  },
  {
    heading: 'Topic Name Here',
    likes: '4 Likes',
    views: 'Views',
    download: 'Downloads',
    id: 3,
    color: '#F8B54C',
  },
  {
    heading: 'Topic Name Here',
    likes: '4 Likes',
    views: 'Views',
    download: 'Downloads',
    id: 4,
    color: '#1BA643',
  },
  {
    heading: 'Topic Name Here',
    likes: '4 Likes',
    views: 'Views',
    download: 'Downloads',
    id: 5,
    color: '#F8B54C',
  },
  {
    heading: 'Topic Name Here',
    likes: '4 Likes',
    views: 'Views',
    download: 'Downloads',
    id: 6,
    color: '#F7684A',
  },
];
const PracticeList = () => {
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
        text="Found 39 Reasoning Short Tricks"
        style={styles.foundDetailsTextStyle}
      />

     <FlatList
        data={dummyData}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        renderItem={({item, index}) => {
          return (
            <PracticeListDetails
              item={item}
              index={index}
              key={'PracticeListDetails' + String(item.id)}
            />
          );
        }}
      />
    </View>
  );
};

export default PracticeList;

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
