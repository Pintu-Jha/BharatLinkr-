import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {boxShadow} from '../../../styles/Mixins';
import {spacing} from '../../../styles/spacing';
import TextComp from '../../common/TextComp';
import {height, textScale} from '../../../styles/responsiveStyles';
import {fontNames} from '../../../styles/typography';
import ImagePath from '../../../Utills/ImagePath';
import BottonComp from '../../common/BottonComp';
import ModalComp from '../../common/ModalComp';
import navigationString from '../../../Navigation/navigationString';

const PracticeListDetails = ({item, index}) => {
  const [isCatogaryIvsibale, setCatogaryIvsible] = useState(false);
 
  // console.log(navigation);
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          ...styles.learningStipLine,
          backgroundColor: item.color,
        }}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: 'blue',
          paddingVertical: spacing.PADDING_12,
        }}>
        <TextComp
          text={item.heading}
          style={styles.headingTextStyle}
          onPress={() => setCatogaryIvsible(true)}
        />

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: spacing.MARGIN_12,
            }}>
            <Image
              source={ImagePath.IC_LIKESymbols}
              style={{
                ...styles.reactionOnCourseIconsStyle,
                marginBottom: spacing.MARGIN_6,
              }}
            />
            <TextComp
              text={item.likes}
              style={styles.reactionOnCourseTextStyle}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: spacing.MARGIN_12,
            }}>
            <Image
              source={ImagePath.IC_VIEWS}
              style={styles.reactionOnCourseIconsStyle}
            />
            <TextComp
              text={item.views}
              style={styles.reactionOnCourseTextStyle}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={ImagePath.IC_DOWNLOADSymbols}
              style={styles.reactionOnCourseIconsStyle}
            />
            <TextComp
              text={item.download}
              style={styles.reactionOnCourseTextStyle}
            />
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <BottonComp
          style={{
            borderRadius: spacing.RADIUS_8,
            width: spacing.WIDTH_90,
            height: spacing.HEIGHT_40,
          }}
          text="Likes"
          source={ImagePath.IC_LIKE}
          leftImg={true}
          textStyle={styles.btnTextStyle}
        />
        <BottonComp
          style={{
            borderRadius: spacing.RADIUS_8,
            width: spacing.WIDTH_90,
            height: spacing.HEIGHT_40,
          }}
          text="Save"
          source={ImagePath.IC_SAVE}
          IconStyle={{tintColor:'#463196'}}
          leftImg={true}
          textStyle={styles.btnTextStyle}
        />
        <BottonComp
          style={{
            borderRadius: spacing.RADIUS_8,
            width: spacing.WIDTH_90,
            height: spacing.HEIGHT_40,
          }}
          text="Download"
          source={ImagePath.IC_DOWNLOAD}
          leftImg={true}
          textStyle={styles.btnTextStyle}
        />
      </View>
      <ModalComp
        isVisible={isCatogaryIvsibale}
        animationType="slide"
        transparent={true}
        onBackdropPress={() => setCatogaryIvsible(false)}>
        <View style={styles.modalStyle}>
          <View style={styles.modalData}>
            <TextComp
              text="Reasoning Short Tricks"
              style={{
                color: '#0F0C1A',
                fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
                opacity: 1,
                fontSize: textScale(14),
              }}
            />
            <FlatList
              data={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
              scrollEnabled={false}
              // keyExtractor={index => String(index)}
              // key={'setCatogaryIvsible' + index}
              renderItem={({item}) => {
                return (
                  <View style={{marginVertical: spacing.MARGIN_16}}>
                    <TextComp
                      text={'PDF will show here'}
                      style={{
                        color: '#BBBBBB',
                        opacity: 0.76,
                        fontSize: textScale(12),
                        fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <BottonComp
              text="Previous"
              source={ImagePath.IC_Right_ARROW}
              leftImg={true}
              textStyle={{
                marginLeft: spacing.MARGIN_10,
                fontSize: textScale(14),
                fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
                opacity: 1,
              }}
              style={{width: spacing.WIDTH_110, height: spacing.HEIGHT_40}}
              IconStyle={{transform: [{rotate: '180deg'}]}}
            />
            <BottonComp
              text="next"
              source={ImagePath.IC_Right_ARROW}
              rightImg={true}
              textStyle={{
                marginRight: spacing.MARGIN_10,
                color: '#FFFFFF',
                fontSize: textScale(14),
                fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
                opacity: 1,
              }}
              style={{backgroundColor: '#463196',width: spacing.WIDTH_110, height: spacing.HEIGHT_40}}
              IconStyle={{tintColor: '#FFFFFF'}}
            />
          </View>
        </View>
      </ModalComp>
    </View>
  );
};

export default PracticeListDetails;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fffefe',
    alignSelf: 'center',
    marginVertical: spacing.MARGIN_16,
    borderRadius: spacing.RADIUS_4,
    ...boxShadow(),
    minWidth: '90%',
    // marginHorizontal:spacing.MARGIN_18,
  },
  learningStipLine: {
    width: spacing.WIDTH_4,
    height: spacing.HEIGHT_50,
    borderRadius: spacing.RADIUS_6,
    marginRight: spacing.MARGIN_10,
    position: 'absolute',
  },
  headingTextStyle: {
    color: '#463196',
    fontSize: textScale(13),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 0.9,
  },
  reactionOnCourseTextStyle: {
    color: '#939198',
    opacity: 1,
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    marginLeft: spacing.MARGIN_4,
  },
  reactionOnCourseIconsStyle: {
    tintColor: '#000000',
    resizeMode: 'contain',
    opacity: 1,
    width: spacing.WIDTH_14,
    height: spacing.HEIGHT_14,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: spacing.MARGIN_16,
  },
  btnTextStyle: {
    marginLeft: spacing.MARGIN_8,
    fontSize: textScale(10),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    color: '#0F0C1A',
  },
  categoryResultModal: {
    position: 'absolute',
    top: 10,
  },
  modalStyle: {
    backgroundColor: '#fff',
    minHeight: spacing.FULL_HEIGHT / 1.25,
    borderRadius: spacing.RADIUS_12,
    padding: spacing.PADDING_16,
  },
  modalData: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: spacing.MARGIN_16,
  },
});
