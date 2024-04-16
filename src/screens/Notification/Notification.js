import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WapperContainer from '../../Components/common/WapperContainer';
import {spacing} from '../../styles/spacing';
import TextComp from '../../Components/common/TextComp';
import {fontNames} from '../../styles/typography';
import {textScale} from '../../styles/responsiveStyles';
import ImagePath from '../../Utills/ImagePath';

const dummydata = [
  {personLikeTitle: 'Argha Paul liked your post', id: 1},
  {personLikeTitle: `Argha Paul reposted Noor's post`, id: 2},
  {personLikeTitle: 'Argha Paul posted an event', id: 3},
  {personLikeTitle: 'Argha Paul liked your post', id: 4},
  {personLikeTitle: `Argha Paul reposted Noor's post`, id: 5},
  {personLikeTitle: 'Argha Paul posted an event', id: 6},
  {personLikeTitle: 'Argha Paul liked your post', id: 7},
  {personLikeTitle: `Argha Paul reposted Noor's post`, id: 8},
  {personLikeTitle: 'Argha Paul posted an event', id: 9},
];

const renderItem = ({item}) => {
  return (
    <View style={styles.notificationContainer}>
      <TextComp text="Today" style={styles.dayText} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <Image source={ImagePath.Profile} />
        </View>
        <View>
          <TextComp text={item.personLikeTitle} style={styles.personNameText} />
          <TextComp text={'09:10 PM'} style={styles.dayText} />
        </View>
      </View>
    </View>
  );
};

const Notification = () => {
  return (
    <WapperContainer>
      <View style={styles.headerContainer}>
        <TextComp text="Notifications" style={styles.headerText} />
      </View>
      <View style={{}}>
        <FlatList
          data={dummydata}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </WapperContainer>
  );
};

export default Notification;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: spacing.MARGIN_16,
    alignItems: 'center',
  },
  headerText: {
    color: '#463196',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(16),
    opacity: 1,
  },
  notificationContainer: {
    marginHorizontal: spacing.MARGIN_20,
  },
  dayText: {
    color: '#7A7880',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(12),
    opacity: 0.76,
  },
  personNameText: {
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 0.76,
    fontSize: textScale(13),
  },
});
