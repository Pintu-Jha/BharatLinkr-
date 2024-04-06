import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {spacing} from '../../../styles/spacing';
import ImagePath from '../../../Utills/ImagePath';
import TextComp from '../../common/TextComp';
import commonStyle from '../../../styles/commonStyle';
import {fontNames} from '../../../styles/typography';
import {textScale} from '../../../styles/responsiveStyles';
import {boxShadow} from '../../../styles/Mixins';

const AllPostListRow = ({item, index, isSelected}) => {
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const handleOptionVisible = () => {
    setIsOptionVisible(!isOptionVisible);
  };
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          flexDirection: 'row',
          // marginTop: spacing.MARGIN_8,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Image
          source={ImagePath.Other_PROFILE}
          style={{marginLeft: spacing.MARGIN_16, resizeMode: 'contain'}}
        />
        <View>
          <View style={styles.postUserNameDetailsContainer}>
            <View style={{...commonStyle.flexRow, alignItems: 'center'}}>
              <TextComp
                text={item.item.userName}
                style={styles.userNameTextStyle}
              />
              <TextComp
                text={item.item.hiring}
                style={styles.hiringTextStyle}
              />
            </View>

            <View style={styles.postTimeContainer}>
              <Image source={ImagePath.IC_HOURS} style={styles.timeIconStyle} />
              <TextComp text={'2Hrs ago'} style={styles.timeTextStyle} />
            </View>
          </View>
          <View style={styles.positionRequiredTextContainer}>
            <Image
              source={ImagePath.IC_STUDENT}
              style={styles.graduationStudentIconStyle}
            />
            <TextComp
              text={item.item.profession}
              style={styles.professionTextStyle}
            />
            <View style={styles.seperatorLine} />
            <TextComp
              text={item.item.collegeName}
              style={styles.collegeNameTextStyle}
            />
          </View>
        </View>
        <TouchableOpacity onPress={handleOptionVisible}>
          <Image source={ImagePath.IC_MENU} style={styles.menuIconStyle} />
        </TouchableOpacity>
      </View>
      <View style={styles.horizontalLineStyle} />

      <View style={{marginHorizontal: spacing.MARGIN_16}}>
        <TextComp
          text={item.item.requiredTask}
          style={styles.requiredTaskTextStyle}
        />
        <TextComp
          text={item.item.requiredTaskDescription}
          style={styles.requiredTaskDescriptionTextStyle}
        />
      </View>
      <View style={styles.horizontalLineStyle} />
      <View style={styles.socialMeidalContainer}>
        {/* <View style={{flexDirection: 'row', alignItems: 'center',borderWidth:1}}> */}
        {/* <View style={{alignItems: 'center', borderWidth: 1}}> */}
        <Image
          source={ImagePath.IC_LIKE_CLLAPING}
          style={styles.socialMeidaIconStyle}
        />
        {/* <TextComp text={'Admired'} style={styles.admiredTextStyle} /> */}
        {/* </View> */}
        <TextComp text="125" style={styles.socialMediaIconsCountNumberStyle} />
        <View style={styles.commentAlignMentContainer}>
          <Image
            source={ImagePath.IC_COMMENTS}
            style={{
              ...styles.socialMeidaIconStyle,

              // marginBottom: spacing.MARGIN_8,
            }}
          />
          <TextComp
            text="125"
            style={styles.socialMediaIconsCountNumberStyle}
          />
        </View>

        <View style={styles.sharePostAlignmentContainer}>
          <Image
            source={ImagePath.IC_SHARE_POST}
            style={styles.socialMeidaIconStyle}
          />
          {/* <TextComp text={'Reposted'} style={styles.admiredTextStyle} /> */}
        </View>
        <TextComp text="125" style={styles.socialMediaIconsCountNumberStyle} />
        {/* </View> */}
      </View>
      <View style={styles.horizontalLineStyle} />
      <View
        style={{
          marginHorizontal: spacing.MARGIN_16,
          marginBottom: spacing.MARGIN_16,
        }}>
        <TextComp
          text={'View all options (125)'}
          style={styles.viewAllPostTextStyle}
        />
        <View style={styles.commentOnPostContainer}>
          <Image
            source={ImagePath.Other_PROFILE}
            style={{marginRight: spacing.MARGIN_4, resizeMode: 'contain'}}
          />
          <TextInput
            placeholder="Write an opinion..."
            placeholderTextColor={'#0F0C1A'}
            style={styles.textInputTextContainer}
          />
          <Image
            source={ImagePath.IC_SHARE_POST}
            style={styles.postCommentIconStyle}
          />
        </View>
      </View>

      {isOptionVisible && (
        <View
          style={{
            width: spacing.WIDTH_90,
            height: spacing.HEIGHT_40,
            backgroundColor: '#fff',
            elevation: 4,
            position: 'absolute',
            top: 50,
            right: 20,
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <TextComp text="Report" style={{textAlign: 'center'}} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default AllPostListRow;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fffefe',
    alignSelf: 'center',
    marginVertical: spacing.MARGIN_12,
    borderRadius: spacing.RADIUS_4,
    marginHorizontal: spacing.MARGIN_16,
    paddingVertical: spacing.PADDING_8,
    ...boxShadow(),
  },
  horizontalLineStyle: {
    borderTopWidth: 0.5,
    marginVertical: spacing.MARGIN_6,
    borderColor: '#C8C1DF',
    opacity: 0.68,
    marginHorizontal: spacing.MARGIN_10,
  },
  postUserNameDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userNameTextStyle: {
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    fontSize: textScale(12),
    marginTop: 2,
    opacity: 1,
  },
  hiringTextStyle: {
    color: '#F8B54C',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(10),
    marginLeft: spacing.MARGIN_4,
  },
  postTimeContainer: {
    ...commonStyle.flexRow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeIconStyle: {
    width: spacing.WIDTH_14,
    height: spacing.HEIGHT_14,
    resizeMode: 'contain',
    marginRight: spacing.MARGIN_4,
    tintColor: '#ABABAB',
  },
  timeTextStyle: {
    color: '#ABABAB',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(10),
    opacity: 0.76,
  },
  positionRequiredTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  graduationStudentIconStyle: {
    width: spacing.WIDTH_14,
    height: spacing.HEIGHT_14,
    resizeMode: 'contain',
    marginHorizontal: spacing.MARGIN_4,
    tintColor: '#ABABAB',
  },
  professionTextStyle: {
    color: '#ABABAB',
    opacity: 0.76,
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(10),
  },
  seperatorLine: {
    width: spacing.WIDTH_1,
    height: spacing.HEIGHT_10,
    backgroundColor: '#ABABAB',
    margin: spacing.MARGIN_4,
    opacity: 0.76,
  },
  collegeNameTextStyle: {
    color: '#ABABAB',
    opacity: 0.76,
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(10),
  },
  menuIconStyle: {
    tintColor: '#6753a3',
    marginTop: spacing.MARGIN_10,
    resizeMode: 'contain',
  },
  requiredTaskTextStyle: {
    color: '#0F0C1A',
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 1,
  },
  requiredTaskDescriptionTextStyle: {
    color: '#484651',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    fontSize: textScale(11),
    opacity: 1,
  },
  socialMeidalContainer: {
    flexDirection: 'row',
    marginHorizontal: spacing.MARGIN_14,
  },
  socialMeidaIconStyle: {
    opacity: 1,
    width: spacing.WIDTH_18,
    height: spacing.HEIGHT_18,
    resizeMode: 'contain',
    marginHorizontal: spacing.MARGIN_6,
  },
  admiredTextStyle: {
    color: '#ABABAB',
    opacity: 0.76,
    fontSize: textScale(8),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
  },
  socialMediaIconsCountNumberStyle: {
    color: '#484651',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(12),
    textAlign: 'center',
    opacity: 1,
  },
  commentAlignMentContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: spacing.MARGIN_16,
  },
  sharePostAlignmentContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: spacing.MARGIN_16,
  },
  viewAllPostTextStyle: {
    color: '#1BA643',
    opacity: 0.76,
    fontSize: textScale(10),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
  },
  commentOnPostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textInputTextContainer: {
    flex: 1,
    color: '#0F0C1A',
    fontSize: textScale(11),
    opacity: 0.76,
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    borderBottomWidth: 0.5,
  },
  postCommentIconStyle: {
    width: spacing.WIDTH_20,
    height: spacing.HEIGHT_20,
    tintColor: '#0F0C1A',
    resizeMode: 'contain',
    transform: [{rotate: '45deg'}],
  },
});
