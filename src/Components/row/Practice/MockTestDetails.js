import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TextComp from '../../common/TextComp';
import {spacing} from '../../../styles/spacing';
import {textScale} from '../../../styles/responsiveStyles';
import {fontNames} from '../../../styles/typography';
import ImagePath from '../../../Utills/ImagePath';
import navigationString from '../../../Navigation/navigationString';
import BottonComp from '../../common/BottonComp';
import {boxShadow, boxShadowLess} from '../../../styles/Mixins';
import {useNavigation} from '@react-navigation/native';
import VirtualizedView from '../../common/VirtualizedView';

const options = [
  {
    id: 1,
    text: 'Lorem Ipsum Dolar Sit Amet',
    image: ImagePath.IC_UNCHECK,
    selectedImage: ImagePath.IC_CHECK,
  },
  {
    id: 2,
    text: 'Lorem Ipsum Dolar Sit Amet',
    image: ImagePath.IC_UNCHECK,
    selectedImage: ImagePath.IC_CHECK,
  },
  {
    id: 3,
    text: 'Lorem Ipsum Dolar Sit Amet',
    image: ImagePath.IC_UNCHECK,
    selectedImage: ImagePath.IC_CHECK,
  },
  {
    id: 4,
    text: 'Lorem Ipsum Dolar Sit Amet',
    image: ImagePath.IC_UNCHECK,
    selectedImage: ImagePath.IC_CHECK,
  },
];
const MockTestDetails = () => {
  const [progress, setProgress] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const startTime = new Date().getTime();
    const endTime = startTime + 3600000;

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDiff = currentTime - startTime;

      if (timeDiff >= 3600000) {
        setProgress(1);
        setElapsedTime(3600000);
        clearInterval(interval);
      } else {
        setProgress(timeDiff / 3600000);
        setElapsedTime(timeDiff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedProgress = Math.round(progress * 10);
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);

  const handleOptionToggle = optionId => {
    if (selectedOptions === optionId) {
      // If the same option is clicked again, unselect it
      setSelectedOptions(null);
    } else {
      // Select the clicked option
      setSelectedOptions(optionId);
    }
  };

  const renderOptionImage = option => {
    const isSelected = selectedOptions === option.id;
    const source = isSelected ? option.selectedImage : option.image;
    return <Image source={source} />;
  };
  return (
    <VirtualizedView>
    <View
      style={{
        marginTop: spacing.MARGIN_16,
        marginHorizontal: spacing.MARGIN_18,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: spacing.MARGIN_8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextComp text={'Time Left'} style={styles.timeLeftTextStyle} />
          <View style={{flexDirection: 'row'}}>
            <TextComp text={`${hours}Hrs`} style={styles.timeTextStyle} />
            <TextComp
              text={`${minutes.toString().padStart(2, '0')}Min ${seconds
                .toString()
                .padStart(2, '0')}Secs`}
              style={styles.timeTextStyle}
            />
          </View>
        </View>
        <View>
          <Image source={ImagePath.IC_TIMER_PAUSE} />
        </View>
      </View>

      <View style={{marginTop: spacing.MARGIN_8}}>
        <View style={styles.progessBarContainer}>
          <View
            style={{...styles.progressBar, width: `${formattedProgress}%`}}
          />
        </View>
      </View>

      <View style={styles.questionsContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextComp text="Question-3" style={styles.questionNuberTextSTyle} />
          <TextComp text="Marks: +1, -0.25" style={styles.marksTextCounnt} />
        </View>
        <TextComp
          text="Activity"
          style={styles.activityTextStyle}
          onPress={() =>
            navigation.navigate(navigationString.MOCK_TEST_ACTIVITY_SCREEN)
          }
        />
      </View>
      <View style={styles.sepratorLine} />
      <View
        style={{
          // marginHorizontal: spacing.MARGIN_16,
          marginVertical: spacing.MARGIN_30,
        }}>
        <TextComp
          text="What Is The Meaning Of Reasoning?"
          style={styles.questionStyle}
        />
        <View style={styles.questionViewContainer}></View>

        {options.map(item => (
          <View
            style={{flexDirection: 'row', marginVertical: spacing.MARGIN_10}}
            key={String(item.id)}>
            <TouchableOpacity
              style={[
                {
                  marginRight: spacing.MARGIN_8,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}
              onPress={() => handleOptionToggle(item.id)}
              activeOpacity={0.8}>
              {renderOptionImage(item)}
            </TouchableOpacity>
            <TextComp
              text={item.text}
              style={{
                color: '#0F0C1A',
                fontSize: textScale(14),
                fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
              }}
            />
          </View>
        ))}
      </View>

      <View style={styles.btnContainer}>
        <View
          style={{
            ...styles.navigationContainer,
            transform: [{rotate: '180deg'}],
          }}>
          <Image
            source={ImagePath.IC_Right_ARROW}
            style={{tintColor: '#C8C1DF'}}
          />
        </View>
        <BottonComp
          text={'Mark For Review'}
          style={styles.middalBtn}
          textStyle={{
            fontSize: textScale(13),
            fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
            color: '#463196',
            opacity: 1,
          }}
        />
        <BottonComp
          text="Submit Test"
          style={{...styles.middalBtn, backgroundColor: '#463196'}}
          textStyle={{
            fontSize: textScale(13),
            fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
            color: '#FCFCFC',
            opacity: 1,
          }}
        />
        <View style={{...styles.navigationContainer}}>
          <Image
            source={ImagePath.IC_Right_ARROW}
            style={{tintColor: '#C8C1DF'}}
          />
        </View>
      </View>
    </View>
    </VirtualizedView>
  );
};

export default MockTestDetails;

const styles = StyleSheet.create({
  timeLeftTextStyle: {
    color: '#0F0C1A',
    fontSize: textScale(16),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    marginRight: spacing.MARGIN_4,
    opacity: 1,
  },
  timeTextStyle: {
    color: '#0F0C1A',
    fontSize: textScale(14),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    marginLeft: spacing.MARGIN_4,
  },
  progessBarContainer: {
    // marginHorizontal: spacing.MARGIN_16,
    height: spacing.HEIGHT_18,
    backgroundColor: '#E6E6E6',
    borderRadius: spacing.RADIUS_10,
    justifyContent: 'center',
  },
  progressBar: {
    maxWidth: spacing.WIDTH_305,
    height: spacing.HEIGHT_16,
    backgroundColor: '#463196',
    marginLeft: spacing.MARGIN_1,
    borderRadius: spacing.RADIUS_10,
  },
  questionNuberTextSTyle: {
    color: '#463196',
    fontSize: textScale(16),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    opacity: 1,
    marginRight: spacing.MARGIN_4,
  },
  questionsContainer: {
    marginTop: spacing.MARGIN_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: spacing.MARGIN_8,
  },
  marksTextCounnt: {
    color: '#939198',
    fontSize: textScale(14),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
  },
  activityTextStyle: {
    color: '#1BA643',
    fontSize: textScale(14),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
  },
  questionStyle: {
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(14),
    opacity: 1,
  },
  sepratorLine: {
    borderWidth: 0.5,
    // marginHorizontal: spacing.MARGIN_16,
    borderColor: '#C8C1DF',
  },
  questionViewContainer: {
    backgroundColor: '#E6E6E6',
    height: spacing.HEIGHT_128,
  },
  btnContainer: {
    marginVertical: spacing.MARGIN_60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  middalBtn: {
    width: spacing.WIDTH_128,
    height: spacing.HEIGHT_40,
    backgroundColor: '#C8C1DF',
    borderRadius: spacing.RADIUS_6,
    ...boxShadowLess(),
  },
  navigationContainer: {
    width: spacing.WIDTH_40,
    height: spacing.HEIGHT_40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: spacing.RADIUS_6,
    borderWidth: 1,
    borderColor: '#C8C1DF',
  },
});
