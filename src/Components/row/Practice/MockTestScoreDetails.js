import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextComp from '../../common/TextComp';
import {height, textScale} from '../../../styles/responsiveStyles';
import {fontNames} from '../../../styles/typography';
import {spacing} from '../../../styles/spacing';
import ImagePath from '../../../Utills/ImagePath';
import {boxShadow} from '../../../styles/Mixins';
import BottonComp from '../../common/BottonComp';
import VirtualizedView from '../../common/VirtualizedView';

const MockTestScoreDetails = () => {
  return (
    <VirtualizedView>
      <View style={styles.headingContainer}>
        <TextComp
          text="Congratulations!"
          style={styles.CongratulationsHeading}
        />
        <TextComp
          text={`You've Completed the Test`}
          style={styles.CongratulationSubsHeading}
        />
      </View>
      <View style={{alignSelf: 'center'}}>
        <Image source={ImagePath.DEMO_PROGRESS} />
      </View>
      <View style={styles.totalScoreContainer}>
        <TextComp
          text="Total Score: 44/50"
          style={{
            alignSelf: 'center',
            marginTop: spacing.MARGIN_8,
            color: '#0F0C1A',
            fontSize: textScale(16),
            fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
            opacity: 1,
          }}
        />
        <View
          style={{
            marginHorizontal: spacing.MARGIN_18,
            marginVertical: spacing.MARGIN_12,
          }}>
          <TextComp
            text="Percentile    55.87%"
            style={styles.totalScoreResultText}
          />
          <TextComp
            text="Accuracy     0%"
            style={styles.totalScoreResultText}
          />
          <TextComp
            text="Time Taken  01Hrs 22Mins 05Secs"
            style={styles.totalScoreResultText}
          />
        </View>
      </View>
      <View style={styles.questionAttemptContainer}>
        <View
          style={{
            marginHorizontal: spacing.MARGIN_50,
            marginVertical: spacing.MARGIN_16,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={ImagePath.IC_CORRECT_QUESTION}
              style={{marginTop: spacing.MARGIN_8}}
            />
            <TextComp
              text="14 Correct Questions"
              style={{...styles.textStyle, color: '#1BA643'}}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={ImagePath.IC_WRONG_QUESTION}
              style={{marginTop: spacing.MARGIN_8}}
            />
            <TextComp
              text="14 Wrong Questions"
              style={{...styles.textStyle, color: '#F7684A'}}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={ImagePath.IC_SKIP_QUESTION}
              style={{marginTop: spacing.MARGIN_8}}
            />
            <TextComp
              text="22 Skipped Questions"
              style={{...styles.textStyle, color: '#C8C1DF'}}
            />
          </View>
        </View>
      </View>
      <View>
        <BottonComp
          text="Re-Attempt"
          style={{
            backgroundColor: '#463196',
            width: spacing.WIDTH_130,
            height: spacing.HEIGHT_40,
            alignSelf: 'center',
            marginTop: spacing.MARGIN_20,
            justifyContent:"center",
            marginBottom:spacing.MARGIN_16
          }}
          textStyle={{
            color: '#FFFFFF',
            fontSize: textScale(14),
            fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
            opacity: 1,
            marginLeft:spacing.MARGIN_6
          }}
          leftImg={true}
          source={ImagePath.IC_REATTEMPT}
          IconStyle={{resizeMode:"contain"}}
        />
      </View>
    </VirtualizedView>
  );
};

export default MockTestScoreDetails;

const styles = StyleSheet.create({
  CongratulationsHeading: {
    color: '#463196',
    fontSize: textScale(16),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    opacity: 0.9,
  },
  headingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.MARGIN_16,
  },
  CongratulationSubsHeading: {
    fontSize: textScale(13),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 1,
    color: '#463196',
  },
  totalScoreContainer: {
    marginVertical: spacing.MARGIN_16,
    alignSelf: 'center',
    ...boxShadow(),
    backgroundColor: '#FFFFFF',
  },
  totalScoreResultText: {
    color: '#939198',
    fontSize: textScale(14),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
  },
  questionAttemptContainer: {
    marginVertical: spacing.MARGIN_16,
    alignSelf: 'center',
    ...boxShadow(),
    backgroundColor: '#FFFFFF',
  },
  textStyle: {
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(14),
    opacity: 1,
    marginTop: spacing.MARGIN_8,
    marginLeft: spacing.MARGIN_8,
  },
});
