import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import WapperContainer from '../../common/WapperContainer';
import ImagePath from '../../../Utills/ImagePath';
import TextComp from '../../common/TextComp';
import {useRoute} from '@react-navigation/native';
import {textScale} from '../../../styles/responsiveStyles';
import {fontNames} from '../../../styles/typography';
import {spacing} from '../../../styles/spacing';
import SerachBar from '../../common/SerachBar';
import About from '../../row/InnerPage/About';
import Course_FeeDetails from '../../row/InnerPage/Course&FeeDetails';
import Announcements from '../../row/InnerPage/Announcements';
import Admission from '../../row/InnerPage/Admission';
import Review from '../../row/InnerPage/Review';
import DistanceEducationDetails from '../../row/InnerPage/DistanceEducationDetails';
import Scholarship from '../../row/InnerPage/Scholarship';
import FAQs from '../../row/InnerPage/FAQs';

const tabName = [
  {name: 'About', id: 1},
  {name: 'Course & Fees', id: 2},
  {name: 'Activities', id: 3},
  {name: 'Admission', id: 4},
  {name: 'Reviews', id: 5},
  {name: 'Distance Education', id: 6},
  {name: 'Scholarship', id: 7},
  {name: 'FAQs', id: 8},
];

const CollegeInnerPage = () => {
  const [search, setSearch] = useState();
  const [selectedTab, setSelectEdTab] = useState(1);
  const [selectOption, setSelectOption] = useState(false);
  const route = useRoute();
  const {college, address, BOARD} = route.params;
  return (
    <WapperContainer>
      <SerachBar
        placeholder="Search by name.."
        value={search}
        onChangeText={e => setSearch(e)}
      />

      <View>
        <Image
          source={ImagePath.COLLEGE_BG_IMG}
          style={{alignSelf: 'center', resizeMode: 'contain'}}
        />
      </View>
      <View style={styles.collegeAddressDetailsContainer}>
        <View style={styles.logo} />
        <View style={styles.addressContainer}>
          <TextComp text={college} style={styles.collegeName} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={ImagePath.IC_LOCATION}
                style={{tintColor: '#C8C1DF'}}
              />
              <TextComp text={address} style={styles.addressTextStyle} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={ImagePath.IC_BOOK}
                style={{tintColor: '#C8C1DF'}}
              />
              <TextComp text={BOARD} style={styles.addressTextStyle} />
            </View>
            <View style={styles.ratingContainer}>
              <TextComp text="+3" style={{color: '#F7684A'}} />
            </View>
          </View>
        </View>
      </View>

      <View>
        <FlatList
          data={[1]}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: spacing.MARGIN_20,
                  alignSelf: 'center',
                }}>
                <TextComp
                  text="Announcement"
                  style={styles.AnnouncementsText}
                />
                <TextComp text=" |" />
                <TextComp
                  text="Announcement will show here | Announcement will show"
                  style={styles.AnnouncementsUpdationText}
                />
              </View>
            );
          }}
        />
      </View>
      <View style={{marginTop: spacing.MARGIN_8}}>
        <FlatList
          data={tabName}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  marginHorizontal: spacing.MARGIN_20,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity onPress={() => setSelectEdTab(item.id)}>
                    <TextComp
                      text={item.name}
                      style={
                        selectedTab != item.id
                          ? styles.unSelectedText
                          : styles.selectedText
                      }
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setSelectOption(!selectOption)}>
                    <Image
                      source={
                        item.name !== 'Reviews'
                          ? ImagePath.IC_Right_ARROW
                          : null
                      }
                      style={[
                        {
                          tintColor:
                            selectedTab == item.id ? '#0F0C1A' : '#9A9A9A',
                        },
                        styles.downArrowIconStyle,
                      ]}
                    />
                  </TouchableOpacity>
                </View>

                <View
                  style={[
                    {
                      borderBottomWidth: selectedTab == item.id ? 4 : 0,
                      borderColor: '#463196',
                      borderRadius: spacing.RADIUS_6,
                    },
                  ]}
                />
              </View>
            );
          }}
        />
      </View>
      <View style={styles.tabContainer}>
        {selectedTab == 1 ? (
          <About />
        ) : selectedTab == 2 ? (
          <Course_FeeDetails />
        ) : selectedTab == 3 ? (
          <Announcements selectedOption={selectOption} />
        ) : selectedTab == 4 ? (
          <Admission />
        ) : selectedTab == 5 ? (
          <Review />
        ) : selectedTab == 6 ? (
          <DistanceEducationDetails />
        ) : selectedTab == 7 ? (
          <Scholarship />
        ) : (
          <FAQs />
        )}
      </View>
    </WapperContainer>
  );
};

export default CollegeInnerPage;

const styles = StyleSheet.create({
  collegeName: {
    color: '#FCFCFC',
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_BOLD,
    opacity: 0.9,
  },
  addressTextStyle: {
    color: '#FFFFFF',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 0.9,
    fontSize: textScale(10),
    marginLeft: spacing.MARGIN_2,
  },
  ratingContainer: {
    width: spacing.WIDTH_24,
    height: spacing.HEIGHT_24,
    borderRadius: spacing.RADIUS_24 / 2,
    backgroundColor: '#C8C1DF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.MARGIN_4,
  },
  addressContainer: {
    width: spacing.FULL_WIDTH / 1.5,
    marginLeft: spacing.MARGIN_6,
    height: spacing.HEIGHT_80,
    justifyContent: 'center',
  },
  logo: {
    width: spacing.WIDTH_70,
    height: spacing.HEIGHT_70,
    backgroundColor: '#FCFCFC',
    borderRadius: spacing.HEIGHT_70 / 2,
  },
  collegeAddressDetailsContainer: {
    position: 'absolute',
    top: spacing.HEIGHT_136,
    left: spacing.WIDTH_28,
    flexDirection: 'row',
    width: spacing.FULL_WIDTH,
    maxWidth: spacing.FULL_WIDTH / 1.18,
    height: spacing.HEIGHT_80,
  },
  selectedText: {
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    fontSize: textScale(14),
    opacity: 0.9,
  },
  unSelectedText: {
    color: '#9A9A9A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(14),
    opacity: 0.9,
  },
  tabContainer: {
    marginHorizontal: spacing.MARGIN_16,
    marginTop: spacing.MARGIN_12,
    flex: 1,
  },
  AnnouncementsText: {
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    fontSize: textScale(12),
    opacity: 0.9,
  },
  AnnouncementsUpdationText: {
    color: '#F7684A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(12),
    opacity: 0.9,
    marginHorizontal: spacing.MARGIN_8,
  },
  downArrowIconStyle: {
    transform: [{rotate: '90deg'}],
    resizeMode: 'contain',
    width: spacing.WIDTH_8,
    height: spacing.HEIGHT_8,
    marginLeft: spacing.MARGIN_8,
  },
});
