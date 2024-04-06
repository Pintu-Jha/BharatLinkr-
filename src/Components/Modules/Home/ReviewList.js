import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {textScale} from '../../../styles/responsiveStyles';
import TextComp from '../../common/TextComp';
import {fontNames} from '../../../styles/typography';
import {spacing} from '../../../styles/spacing';
import ImagePath from '../../../Utills/ImagePath';
import ReviewDetails from '../../row/Home/ReviewDetails';

const dummyData = [
  {
    lable: 'choose college',
    id: 1,
  },
  {
    lable: 'Choose Course',
    id: 2,
  },
  {
    lable: 'Your Name',
    id: 3,
  },
  {
    lable: 'Choose Gender',
    id: 4,
  },
  {
    lable: 'Mobile Number',
    id: 5,
  },
  {
    lable: 'Enrollment Year',
    id: 6,
  },
  {
    lable: 'Program Fees',
    id: 7,
  },
  {
    lable: 'Review Title',
    id: 8,
  },
  {
    lable: 'Description',
    id: 9,
  },
];

const ReviewList = () => {
  return (
    <View style={styles.container}>
      <TextComp
        text="How was your experience?"
        style={styles.headingTextStyle}
      />
      <Image source={ImagePath.IC_REACTION} style={styles.reactionIconStyle} />
      <View style={{flex:1}}>
        <FlatList
          data={dummyData}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={({item, index}) => {
            return (
              <ReviewDetails
                item={item}
                index={index}
                key={'ReviewList' + index}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default ReviewList;

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.MARGIN_20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingTextStyle: {
    color: '#0F0C1A',
    opacity: 1,
    fontSize: textScale(14),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
  },
  reactionIconStyle: {
    resizeMode: 'contain',
    opacity: 1,
    marginVertical: spacing.MARGIN_16,
  },
});
