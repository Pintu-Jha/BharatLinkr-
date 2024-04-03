import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {textScale} from '../../styles/responsiveStyles';
import WapperContainer from '../../Components/WapperContainer';
import SerachBar from '../../Components/SerachBar';
import {spacing} from '../../styles/spacing';
import {fontNames} from '../../styles/typography';
import ImagePath from '../../Utills/ImagePath';
import TextComp from '../../Components/TextComp';
import CollumeMainListDetails from './CollumeListCollege/CollumeMainListDetails';

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

const Colloge = () => {
  const [search, setSearch] = useState('');
  return (
    <WapperContainer>
      <SerachBar
        placeholder="Search here.."
        source3={ImagePath.IC_MENU}
        Icon3={{width: spacing.WIDTH_34, height: spacing.HEIGHT_34}}
        value={search}
        onChangeText={e => setSearch(e)}
      />
      <View style={styles.popularTextHeadingContainer}>
        <TextComp
          text="Popular Colleges In India"
          style={styles.popularHeadingTextStyle}
        />
        <Image source={ImagePath.IC_SETTING} style={styles.filterIconStyle} />
      </View>
      <View style={styles.selectionOptionContainer}>
        <View style={styles.selectionContainer}>
          <TextComp text="Select Stream" style={styles.selectionTextStyle} />
          <Image
            source={ImagePath.IC_DOWN_ARROW}
            style={styles.downArrowStyle}
          />
        </View>
        <View style={styles.selectionContainer}>
          <TextComp text="Select Course" style={styles.selectionTextStyle} />
          <Image
            source={ImagePath.IC_DOWN_ARROW}
            style={styles.downArrowStyle}
          />
        </View>
      </View>
      <TextComp text="Found 33 Colleges" style={styles.foundSubTextContainer} />
      <FlatList
        data={dummyData}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={item => {
          return <CollumeMainListDetails item={item} />;
        }}
      />
    </WapperContainer>
  );
};

export default Colloge;

const styles = StyleSheet.create({
  selectionContainer: {
    width: spacing.WIDTH_160,
    height: spacing.HEIGHT_44,
    backgroundColor: '#fffefe',
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderRadius: spacing.RADIUS_6,
    borderColor: 1,
    borderColor: '#C8C1DF59',
    opacity: 1,
  },
  selectionTextStyle: {
    color: '#0F0C1A',
    opacity: 0.76,
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
  },
  downArrowStyle: {
    width: spacing.WIDTH_8,
    height: spacing.HEIGHT_8,
    tintColor: '#3B374A',
    resizeMode: 'contain',
  },
  popularTextHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: spacing.MARGIN_16,
  },
  popularHeadingTextStyle: {
    color: '#463196',
    fontSize: textScale(16),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    marginLeft: spacing.MARGIN_30,
  },
  filterIconStyle: {
    width: spacing.WIDTH_20,
    height: spacing.HEIGHT_16,
    tintColor: '#463196',
    resizeMode: 'contain',
  },
  selectionOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  foundSubTextContainer: {
    textAlign: 'center',
    marginTop: spacing.MARGIN_10,
    color: '#9A9A9A',
    opacity: 9,
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    fontSize: textScale(12),
  },
});
