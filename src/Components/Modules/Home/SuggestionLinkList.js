import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SuggestionLinkListRow from '../../row/Home/SuggestionLinkListRow';
import { textScale } from '../../../styles/responsiveStyles';
import { fontNames } from '../../../styles/typography';
import { spacing } from '../../../styles/spacing';
import TextComp from '../../common/TextComp';

const filterData = [
  {data: 'All', id: '1', type: 'list'},
  {data: 'Posts', id: '2'},
  {data: 'Hiring', id: '3'},
  {data: 'Announcements', id: '4'},
  {data: 'Question', id: '5'},
  {data: 'Service', id: '6'},
  {data: 'Write a Review', id: '7'},
  {data: 'Learning Link', id: '8'},
];

const SuggestionLinkList = () => {
  return (
    <View style={{}}>
      <TextComp text="Suggested Links" style={styles.suggestedLinksTextStyle} />
      <FlatList
        data={[1, 1, 1, 1]}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => {
          return (
            <SuggestionLinkListRow key={'SuggestionLinkListRow' + index} />
          );
        }}
        key={'ConnectPopleComp+1'}
      />
    </View>
  );
};

export default SuggestionLinkList;

const styles = StyleSheet.create({
  suggestedLinksTextStyle: {
    textAlign: 'center',
    color: '#0F0C1A',
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    marginTop: spacing.MARGIN_16,
  },
});
