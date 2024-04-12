import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import WapperContainer from '../../Components/common/WapperContainer';
import {spacing} from '../../styles/spacing';
import {boxShadow} from '../../styles/Mixins';
import TextComp from '../../Components/common/TextComp';
import {fontNames} from '../../styles/typography';
import {textScale} from '../../styles/responsiveStyles';
import LableWithInput from '../../Components/common/LableWithInput';
import BottonComp from '../../Components/common/BottonComp';
import navigationString from '../../Navigation/navigationString';
import ImagePath from '../../Utills/ImagePath';
import AnimatedComponentToggale from '../../Components/common/AnimatedComponentToggale';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPawword] = useState('');
  const [selectUserOption, setSelectUserOption] = useState('');
  return (
    <WapperContainer>
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <TextComp text={'LOGO'} style={styles.logoStyle} />
            <TextComp
              text={'Sign in to your account'}
              style={styles.signTextStyle}
            />
          </View>
        </View>

        <View style={styles.loginContainer}>
          <LableWithInput
            placeholder="Enter Email"
            lableText="Email"
            inputMainContainer={{flex: 0}}
            value={email}
            onChangeText={e => setEmail(e)}
          />
          <LableWithInput
            placeholder="Enter Password"
            lableText="Password"
            // inputMainContainer={{flex: 0}}
            value={password}
            onChangeText={e => setPawword(e)}
          />
          <TextComp
            text={'Select Login Type'}
            style={styles.loginTypeTextStye}
          />
          <View style={styles.tabContainer}>
            <AnimatedComponentToggale
              initialHeight={spacing.FULL_HEIGHT/4}
              AnimationBtnContainer={{paddingRight: spacing.PADDING_28}}
              tabName={selectUserOption}>
             <View style={{alignItems:"center"}}>
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
                text="Campus Ambassadors"
                style={styles.userTypesTextStyle}
                onPress={() => setSelectUserOption('Campus Ambassadors')}
              />
              <TextComp
                text="School or college authorities"
                style={styles.userTypesTextStyle}
                onPress={() =>
                  setSelectUserOption('School or college authorities')
                }
              />
              <TextComp
                text="Others"
                style={styles.userTypesTextStyle}
                onPress={() => setSelectUserOption('Others')}
              />
             </View>
            </AnimatedComponentToggale>
          </View>

          <TextComp text={'Forgot Password?'} style={styles.forgotText} />
          <BottonComp
            text="Login"
            style={styles.btnStyle}
            textStyle={styles.loginTextStyle}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextComp
              text={`Don't have an account?`}
              style={{
                color: '#939198',
                ...styles.createAccountTextStyle,
              }}
            />
            <TextComp
              text="Create Account"
              style={{
                color: '#6EA3FF',
                ...styles.createAccountTextStyle,
              }}
              onPress={() =>
                navigation.navigate(navigationString.SIGNUP_SCREEN)
              }
            />
          </View>
        </View>
      </View>
    </WapperContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#463196',
    alignItems: 'center',
    justifyContent: 'center',
    height: spacing.FULL_HEIGHT / 3,
  },
  loginContainer: {
    width: spacing.FULL_WIDTH / 1.2,
    height: spacing.FULL_HEIGHT / 1.7,
    backgroundColor: '#FCFCFC',
    ...boxShadow(),
    alignSelf: 'center',
    top: spacing.HEIGHT_216,
    borderRadius: spacing.RADIUS_16,
    position: 'absolute',
    paddingHorizontal: spacing.PADDING_16,
    paddingVertical: spacing.PADDING_16,
    flex: 1,
  },
  logoStyle: {
    color: '#FCFCFC',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    fontSize: textScale(36),
    opacity: 1,
  },
  signTextStyle: {
    color: '#FCFCFC',
    fontSize: textScale(16),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 1,
  },
  forgotText: {
    color: '#939198',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    fontSize: textScale(14),
    opacity: 1,
    alignSelf: 'flex-end',
    textDecorationLine: 'underline',
    marginTop: spacing.MARGIN_60,
  },
  btnStyle: {
    width: spacing.WIDTH_116,
    height: spacing.HEIGHT_40,
    alignSelf: 'center',
    backgroundColor: '#463196',
    marginTop: spacing.MARGIN_30,
  },
  loginTextStyle: {
    color: '#FCFCFC',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(14),
    opacity: 1,
  },
  createAccountTextStyle: {
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    fontSize: textScale(13),
    opacity: 1,
    marginTop: spacing.MARGIN_30,
  },
  loginTypeTextStye: {
    color: '#463196',
    fontSize: textScale(14),
    alignSelf: 'flex-start',
    marginLeft: spacing.MARGIN_12,
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    marginTop: spacing.MARGIN_10,
  },
  tabContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: spacing.MARGIN_18,
    borderRadius: spacing.RADIUS_8,
    flex: 1,
    position: 'absolute',
    top: spacing.HEIGHT_200,
    alignSelf: 'center',
    width: spacing.FULL_WIDTH / 1.35,
    zIndex: 1,
    borderWidth: 1,
    borderColor: '#0d0d0d0d',
    ...boxShadow('#000d0d', {height: 0, width: 0}, 1, 1),
  },
  userTypesTextStyle: {
    // alignSelf: 'center',
    marginTop: spacing.MARGIN_12,
    fontSize: textScale(14),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    color: '#0F0C1A',
    opacity: 1,
  },
});
