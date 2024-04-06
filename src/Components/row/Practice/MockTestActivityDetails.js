import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {textScale} from '../../../styles/responsiveStyles';
import {fontNames} from '../../../styles/typography';
import {spacing} from '../../../styles/spacing';
import ImagePath from '../../../Utills/ImagePath';
import TextComp from '../../common/TextComp';
import {boxShadow, boxShadowLess} from '../../../styles/Mixins';
import BottonComp from '../../common/BottonComp';
import {useNavigation} from '@react-navigation/native';
import navigationString from '../../../Navigation/navigationString';
import VirtualizedView from '../../common/VirtualizedView';

const MockTestActivityDetails = () => {
  const [progress, setProgress] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
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

  const Btn = ({title, type}) => (
    <TouchableOpacity
      style={{
        borderRadius: spacing.RADIUS_8,
        width: spacing.WIDTH_50,
        height: spacing.HEIGHT_50,
        marginHorizontal: spacing.MARGIN_4,
        marginVertical: spacing.MARGIN_2,
        // backgroundColor: getBtnbackgroundColor(type),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        ...boxShadowLess(),
      }}>
      <Text
        style={{
          color: '#939198',
          fontSize: textScale(17),
          fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
  return (
    <VirtualizedView>
      <View
        style={{
          marginVertical: spacing.MARGIN_6,
          marginHorizontal: spacing.MARGIN_12,
        }}>
        <View style={styles.timerTextContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                justifyContent: 'space-around',
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
        </View>
        <View style={{marginTop: spacing.MARGIN_8}}>
          <View style={styles.progessBarContainer}>
            <View
              style={{...styles.progressBar, width: `${formattedProgress}%`}}
            />
          </View>
        </View>
      </View>
      <TextComp text="Your Answers" style={styles.yourAnswerTest} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View style={{}}>
          <View style={{flexDirection: 'row'}}>
            <TextComp text="Attempted" style={styles.text} />
            <TextComp
              text="05"
              style={{
                marginLeft: spacing.MARGIN_6,
                ...styles.text,
                color: '#1BA643',
              }}
            />
          </View>
          <View style={{flexDirection: 'row', marginTop: spacing.MARGIN_8}}>
            <TextComp text="Not Attempted" style={styles.text} />
            <TextComp
              text="05"
              style={{
                marginLeft: spacing.MARGIN_6,
                ...styles.text,
                color: '#C8C1DF',
              }}
            />
          </View>
        </View>
        <View style={{}}>
          <View style={{flexDirection: 'row'}}>
            <TextComp text="Not Answered" style={styles.text} />
            <TextComp
              text="10"
              style={{
                marginLeft: spacing.MARGIN_6,
                ...styles.text,
                color: '#F7684A',
              }}
            />
          </View>
          <View style={{flexDirection: 'row', marginTop: spacing.MARGIN_8}}>
            <TextComp text="Marked For Review" style={styles.text} />
            <TextComp
              text="10"
              style={{
                marginLeft: spacing.MARGIN_6,
                ...styles.text,
                color: '#463196',
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          color: '#939198',
          marginHorizontal: spacing.MARGIN_16,
          marginVertical: spacing.MARGIN_6,
        }}>
        <Btn title="1" type="top" />
        <Btn title="2" type="right" />
        <Btn title="3" type="right" />
        <Btn title="4" type="right" />
        <Btn title="5" type="number" />
        <Btn title="6" type="number" />
        <Btn title="7" type="number" />
        <Btn title="8" type="right" />
        <Btn title="9" type="number" />
        <Btn title="10" type="number" />
        <Btn title="11" type="number" />
        <Btn title="12" type="right" />
        <Btn title="13" type="number" />
        <Btn title="14" type="number" />
        <Btn title="15" type="number" />
        <Btn title="16" type="right" />
        <Btn title="17" type="number" />
        <Btn title="18" type="number" />
        <Btn title="19" type="number" />
        <Btn title="20" type="right" />
        <Btn title="21" type="top" />
        <Btn title="22" type="right" />
        <Btn title="23" type="right" />
        <Btn title="24" type="right" />
        <Btn title="25" type="number" />
        <Btn title="26" type="number" />
        <Btn title="27" type="number" />
        <Btn title="28" type="right" />
        <Btn title="29" type="number" />
        <Btn title="30" type="number" />
        <Btn title="31" type="number" />
        <Btn title="32" type="right" />
        <Btn title="33" type="number" />
        <Btn title="34" type="number" />
        <Btn title="35" type="number" />
        <Btn title="36" type="right" />
        <Btn title="37" type="number" />
        <Btn title="38" type="number" />
        <Btn title="39" type="number" />
        <Btn title="40" type="right" />
      </View>
      <View>
        <BottonComp
          text="Submit Test"
          style={styles.btnCOntainer}
          textStyle={styles.btnTextStyle}
          onPress={() =>
            navigation.navigate(navigationString.MOCK_TEST_SCORE_SCREEN)
          }
        />
      </View>
    </VirtualizedView>
  );
};

export default MockTestActivityDetails;

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
    marginHorizontal: spacing.MARGIN_16,
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
  yourAnswerTest: {
    color: '#1BA643',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(14),
    opacity: 1,
    alignSelf: 'center',
    marginVertical: spacing.MARGIN_8,
  },
  text: {
    color: '#0F0C1A',
    fontSize: textScale(14),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 1,
  },
  btnCOntainer: {
    width: spacing.WIDTH_130,
    height: spacing.HEIGHT_40,
    alignSelf: 'center',
    marginTop: spacing.MARGIN_16,
    backgroundColor: '#463196',
    ...boxShadow(),
    marginBottom:spacing.MARGIN_16
  },
  btnTextStyle: {
    color: '#FCFCFC',
    fontSize: textScale(14),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 1,
  },
});
