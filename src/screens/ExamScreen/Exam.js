import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import WapperContainer from '../../Components/common/WapperContainer';
import SerachBar from '../../Components/common/SerachBar';
import {textScale} from '../../styles/responsiveStyles';
import {spacing} from '../../styles/spacing';
import {fontNames} from '../../styles/typography';
import ExamsDetailesList from '../../Components/Modules/Exams/ExamsDetailesList';
import SelectionContainer from '../../Components/RepeatComponents/SelectionContainer';
import PopularTextHeading from '../../Components/common/PopularTextHeading';
import {boxShadow} from '../../styles/Mixins';
import TextComp from '../../Components/common/TextComp';
import {useNavigation} from '@react-navigation/native';
import navigationString from '../../Navigation/navigationString';

const Exam = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [isMenuOptionvisible, setIsMenuOptionVisible] = useState(false);

  return (
    <WapperContainer>
      <SerachBar
        placeholder="Search here.."
        value={search}
        onChangeText={e => setSearch(e)}
        menuPress={() => setIsMenuOptionVisible(!isMenuOptionvisible)}
      />
      <PopularTextHeading
        text={'Popular Entrance Exams In India'}
        onfilterPress={() =>
          navigation.navigate(navigationString.EXAM_FILTER_SCREEN)
        }
      />
      <SelectionContainer />
      <ExamsDetailesList />
      {isMenuOptionvisible ? (
        <View
          style={{
            width: spacing.WIDTH_110,
            height: spacing.HEIGHT_65,
            position: 'absolute',
            top: spacing.HEIGHT_50,
            right: spacing.WIDTH_40,
            backgroundColor: '#fff',
            ...boxShadow(),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <TextComp
              text="Edit Profile"
              style={{
                fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
                fontSize: textScale(12),
                color: '#0F0C1A',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <TextComp
              text="Logout"
              style={{
                fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
                fontSize: textScale(12),
                color: '#0F0C1A',
                marginTop: spacing.MARGIN_6,
              }}
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </WapperContainer>
  );
};

export default Exam;

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
  },
  mainContainer: {
    backgroundColor: '#fffefe',
    // width: spacing.WIDTH_336,
    // height: '70%',
    elevation: 4,
    alignSelf: 'center',
    marginVertical: spacing.MARGIN_16,
    borderRadius: spacing.RADIUS_4,
  },
  courseContainer: {
    width: spacing.WIDTH_4,
    height: spacing.HEIGHT_90,
    borderRadius: spacing.RADIUS_6,
    marginRight: spacing.MARGIN_10,
  },
  courseHeadingStyle: {
    fontSize: textScale(18),
    color: '#463196',
    textAlign: 'center',
    opacity: 9,
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
  },
  courseDescriptionStyle: {
    fontSize: textScale(12),
    color: '#0F0C1A',
    textAlign: 'center',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
  },
  acceptingCollegeCount: {
    fontSize: textScale(12),
    alignSelf: 'center',
    color: '#463196',
    textDecorationLine: 'underline',
    marginTop: spacing.MARGIN_10,
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    opacity: 9,
  },
  courseDetailesDateContainer: {
    flexDirection: 'row',
    marginVertical: spacing.MARGIN_12,
    elevation: 0.4,
    backgroundColor: '#fffefe',
    borderRadius: spacing.RADIUS_4,
    alignItems: 'center',
    justifyContent: 'center',
    width: spacing.WIDTH_296,
    alignSelf: 'center',
    padding: spacing.PADDING_4,
  },
  applicationDateStyle: {
    // width: spacing.WIDTH_140,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  seprationLine: {
    width: spacing.WIDTH_1,
    height: spacing.HEIGHT_40,
    backgroundColor: '#E6E6E6',
    margin: spacing.MARGIN_4,
  },
  examDateStyle: {
    // width: spacing.WIDTH_80,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resultDateStyle: {
    // width: spacing.WIDTH_80,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  menuIconStyle: {
    width: spacing.WIDTH_24,
    height: spacing.HEIGHT_24,
    marginTop: spacing.MARGIN_20,
  },
  bottonCotainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.MARGIN_16,
  },
  applicationDataHeading: {
    fontSize: textScale(12),
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
  },
  dateStyle: {
    fontSize: textScale(11),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    color: '#0F0C1A',
    opacity: 9,
  },
});
