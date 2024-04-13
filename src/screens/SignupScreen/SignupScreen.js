import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TextComp from '../../Components/common/TextComp';
import {fontNames} from '../../styles/typography';
import {spacing} from '../../styles/spacing';
import {textScale} from '../../styles/responsiveStyles';
import Student from './FromAllUser/Student';
import WapperContainer from '../../Components/common/WapperContainer';
import {boxShadow} from '../../styles/Mixins';
import AnimatedComponentToggale from '../../Components/common/AnimatedComponentToggale';
import CollegeUser from './FromAllUser/CollegeUser';
import Mentor from './FromAllUser/Mentor';
import Orginaization from './FromAllUser/Orginaization';
import CampusAmbassador from './FromAllUser/CampusAmbassador';
import WorkingProfessional from './FromAllUser/WorkingProfessional';
import HrProfessional from './FromAllUser/HrProfessional';

const SignupScreen = () => {
  const [selectUserOption, setSelectUserOption] = useState('Student');
  return (
    <WapperContainer style={{flex: 1}}>
      <TextComp text="Create Account" style={styles.createAccountTextStyle} />
      <View style={styles.tabContainer}>
        <AnimatedComponentToggale
          initialHeight={spacing.FULL_HEIGHT / 3}
          AnimationBtnContainer={{
            paddingRight: spacing.PADDING_20,
            paddingLeft: 0,
          }}
          tabNameStyle={styles.textInputStyle}
          tabName={selectUserOption}>
          <View
            style={{
              height: 2,
              width: spacing.FULL_WIDTH / 1.2,
              backgroundColor: '#0d0d0d0d',
              alignSelf: 'center',
            }}
          />
          <View style={{alignItems: 'center'}}>
            <TextComp
              text="Student"
              style={styles.userTypesTextStyle}
              onPress={() => setSelectUserOption('Student')}
            />
            <TextComp
              text="College"
              style={styles.userTypesTextStyle}
              onPress={() => setSelectUserOption('College')}
            />
            <TextComp
              text="Organisation"
              style={styles.userTypesTextStyle}
              onPress={() => setSelectUserOption('Organisation')}
            />
            <TextComp
              text="Mentor"
              style={styles.userTypesTextStyle}
              onPress={() => setSelectUserOption('Mentor')}
            />
            <TextComp
              text="Campus Ambassador"
              style={styles.userTypesTextStyle}
              onPress={() => setSelectUserOption('Campus Ambassador')}
            />
            <TextComp
              text="HR Professional"
              style={styles.userTypesTextStyle}
              onPress={() => setSelectUserOption('HR Professional')}
            />
            <TextComp
              text="Working Professional"
              style={styles.userTypesTextStyle}
              onPress={() => setSelectUserOption('Working Professional')}
            />
          </View>
        </AnimatedComponentToggale>
      </View>
      {selectUserOption === 'Student' ? (
        <Student />
      ) : selectUserOption === 'College' ? (
        <CollegeUser />
      ) : selectUserOption === 'Organisation' ? (
        <Orginaization />
      ) : selectUserOption === 'Mentor' ? (
        <Mentor />
      ) : selectUserOption === 'Campus Ambassador' ? (
        <CampusAmbassador />
      ) : selectUserOption === 'HR Professional' ? (
        <HrProfessional />
      ) : (
        <WorkingProfessional />
      )}
    </WapperContainer>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  createAccountTextStyle: {
    color: '#463196',
    alignSelf: 'center',
    fontSize: textScale(20),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 1,
    marginTop: spacing.MARGIN_16,
  },
  tabContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: spacing.MARGIN_18,
    borderRadius: spacing.RADIUS_8,
    position: 'absolute',
    top: spacing.HEIGHT_50,
    alignSelf: 'center',
    zIndex: 1,
    borderWidth: 1,
    borderColor: '#0d0d0d0d',
    ...boxShadow('#000d0d', {height: 0, width: 0}, 1, 1),
  },
  textInputStyle: {
    color: '#878787',
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 1,
  },
  userTypesTextStyle: {
    marginTop: spacing.MARGIN_12,
    fontSize: textScale(14),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    color: '#0F0C1A',
    opacity: 1,
  },
});
