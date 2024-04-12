import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import RequestLinkDetails from '../../row/RequestLinks/RequestLinkDetails';
import {textScale} from '../../../styles/responsiveStyles';
import ImagePath from '../../../Utills/ImagePath';
import {spacing} from '../../../styles/spacing';

const dummyData = [
  {
    name: 'Zubair',
    collage: `Student | Lyallpur college of Technology`,
    DP: ImagePath.DP,
    id: 1,
  },
  {
    name: 'Zubair',
    collage: `Student | Lyallpur college of Technology`,
    DP: ImagePath.DP,
    id: 2,
  },
  {
    name: 'Zubair',
    collage: `Student | Lyallpur college of Technology`,
    DP: ImagePath.DP,
    id: 3,
  },
  {
    name: 'Zubair',
    collage: `Student | Lyallpur college of Technology`,
    DP: ImagePath.DP,
    id: 4,
  },
  {
    name: 'Zubair',
    collage: `Student | Lyallpur college of Technology`,
    DP: ImagePath.DP,
    id: 5,
  },
  {
    name: 'Zubair',
    collage: `Student | Lyallpur college of Technology`,
    DP: ImagePath.DP,
    id: 6,
  },
  {
    name: 'Zubair',
    collage: `Student | Lyallpur college of Technology`,
    DP: ImagePath.DP,
    id: 7,
  },
  {
    name: 'Zubair',
    collage: `Student | Lyallpur college of Technology`,
    DP: ImagePath.DP,
    id: 8,
  },
  {
    name: 'Zubair',
    collage: `Student | Lyallpur college of Technology`,
    DP: ImagePath.DP,
    id: 9,
  },
  {
    name: 'Zubair',
    collage: `Student | Lyallpur college of Technology`,
    DP: ImagePath.DP,
    id: 10,
  },
  {
    name: 'Zubair',
    collage: `Student | Lyallpur college of Technology`,
    DP: ImagePath.DP,
    id: 11,
  },
  {
    name: 'Zubair',
    collage: `Student | Lyallpur college of Technology`,
    DP: ImagePath.DP,
    id: 12,
  },
];

const RequestLinksList = () => {
  const [search, setSearch] = useState('');
  return (
    <View>
      <View
        style={{
          marginHorizontal: spacing.MARGIN_16,
          marginVertical: spacing.MARGIN_20,
        }}>
        <View style={styles.inputStyle}>
          <TextInput
            placeholder="Search Here.."
            placeholderTextColor={'#C8C1DF'}
            style={styles.inputTextStyle}
            value={search}
            onChangeText={e => setSearch(e)}
          />
          <Image source={ImagePath.IC_SEARCH} style={{tintColor: '#C8C1DF'}} />
        </View>
      </View>
      <FlatList
        data={dummyData}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        renderItem={({item, index}) => {
          return <RequestLinkDetails item={item} index={index} />;
        }}
      />
    </View>
  );
};

export default RequestLinksList;

const styles = StyleSheet.create({
  inputTextStyle: {
    color: '#0F0C1AD6',
    fontSize: textScale(12),
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: spacing.RADIUS_8,
    borderColor: '#C8C1DF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.PADDING_16,
    opacity: 0.96,
  },
});
