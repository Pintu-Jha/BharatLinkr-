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
import {spacing} from '../../../styles/spacing';
import TextComp from '../../common/TextComp';
import {textScale} from '../../../styles/responsiveStyles';
import {fontNames} from '../../../styles/typography';
import ImagePath from '../../../Utills/ImagePath';
import {useNavigation} from '@react-navigation/native';
import {boxShadow} from '../../../styles/Mixins';
import BottonComp from '../../common/BottonComp';

const categoryData = [
  {
    id: '0',
    name: 'STATE',
    subcategories: [
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
    ],
  },
  {
    id: '1',
    name: 'CITY',
    subcategories: [
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
    ],
  },
  {
    id: '2',
    name: 'STREAM',
    subcategories: [
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
    ],
  },
  {
    id: '3',
    name: 'COURSE',
    subcategories: [
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
    ],
  },
  {
    id: '4',
    name: 'PROGRAM TYPE',
    subcategories: [
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
    ],
  },
  {
    id: '5',
    name: 'TYPE OF COLLEGE',
    subcategories: [
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
    ],
  },
  {
    id: '6',
    name: 'EXAM ACCEPTED',
    subcategories: [
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
    ],
  },
  {
    id: '7',
    name: 'AVG FEE/YEAR [RS]',
    subcategories: [
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
    ],
  },
  {
    id: '8',
    name: 'COURSE TYPE',
    subcategories: [
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
    ],
  },
  {
    id: '9',
    name: 'AFFILIATION',
    subcategories: [
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
    ],
  },
  {
    id: '10',
    name: 'COURSE DURATION[YRS]',
    subcategories: [
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
    ],
  },
  {
    id: '11',
    name: 'AGENCY',
    subcategories: [
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
      'Maharashtra [1]',
      'Tamil Nadu [1]',
    ],
  },
];

const Filter = () => {
  const navigation = useNavigation();
  const [categoryOptionId, setCategoryOptionId] = useState(0);
  const [subCategoryOptionSelect, setSubCategoryOptionSelect] = useState(0);

  const SubcategoryItem = ({item, index}) => {
    return (
      <View style={styles.subCategory}>
        <TouchableOpacity onPress={() => setSubCategoryOptionSelect(index)}>
          <Image
            source={
              subCategoryOptionSelect == index
                ? ImagePath.IC_CHECK
                : ImagePath.IC_UNCHECK
            }
          />
        </TouchableOpacity>
        <TextComp style={styles.subCategoryTextStyle}>{item}</TextComp>
      </View>
    );
  };

  return (
    <WapperContainer>
      <View style={styles.headerContainer}>
        <TextComp text={'Filters'} style={styles.headerTextStyle} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={ImagePath.IC_ACTION_BREAK}
            style={{resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.optionContainer}>
        <View style={styles.categoryContainer}>
          <View style={{marginTop: spacing.MARGIN_50}}>
            <FlatList
              data={categoryData}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.category,
                      {
                        backgroundColor:
                          item.id == categoryOptionId ? '#FCFCFC' : '#EFEFEF',
                      },
                    ]}
                    key={item.id}
                    onPress={() => setCategoryOptionId(item.id)}>
                    <TextComp
                      text={item.name}
                      style={styles.categoryTextStyle}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
        <View style={styles.subCategoryContainer}>
          <View style={styles.searchBar}>
            <TextComp
              text="Search here..."
              style={{
                color: '#0000000F',
                opacity: 1,
                fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
              }}
            />
            <Image
              source={ImagePath.IC_SEARCH}
              style={{resizeMode: 'contain', tintColor: '#EFEFEF'}}
            />
          </View>
          <FlatList
            data={categoryData[categoryOptionId].subcategories}
            renderItem={({item, index}) => (
              <SubcategoryItem item={item} index={index} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      <View
        style={styles.bottomContainer}>
        <TextComp text="150 Results Found" style={styles.filterResultCount} />
        <BottonComp
          text="Apply"
          style={styles.btnStyle}
          textStyle={{color: '#fff'}}
        />
      </View>
    </WapperContainer>
  );
};
export default Filter;

const styles = StyleSheet.create({
  headerContainer: {
    height: spacing.HEIGHT_60,
    elevation: 5,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: spacing.PADDING_30,
    zIndex: 1,
  },
  headerTextStyle: {
    fontSize: textScale(20),
    color: '#463196',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 1,
  },
  optionContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  categoryContainer: {
    flex: 0.5,
    backgroundColor: '#EFEFEF',
  },
  subCategoryContainer: {
    flex: 0.5,
    marginTop: spacing.MARGIN_40,
  },
  category: {
    paddingVertical: spacing.PADDING_20,
    paddingLeft: spacing.PADDING_20,
  },
  categoryTextStyle: {
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    fontSize: textScale(12),
    opacity: 0.9,
  },
  subCategoryTextStyle: {
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(13),
    opacity: 0.76,
    marginLeft: spacing.MARGIN_8,
  },
  subCategory: {
    marginTop: spacing.MARGIN_40,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: spacing.PADDING_30,
  },
  searchBar: {
    borderWidth: 1,
    height: spacing.HEIGHT_40,
    marginHorizontal: spacing.MARGIN_20,
    borderRadius: spacing.RADIUS_8,
    borderColor: '#EEEEEE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.PADDING_10,
  },
  bottomContainer:{
    height: spacing.HEIGHT_80,
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC78',
    opacity: 1,
    ...boxShadow('#C8C1DF'),
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.PADDING_30,
  },
  filterResultCount: {
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    fontSize: textScale(14),
    opacity: 0.76,
  },
  btnStyle: {
    width: spacing.WIDTH_110,
    height: spacing.HEIGHT_40,
    backgroundColor: '#463196',
    ...boxShadow(),
  },
});
