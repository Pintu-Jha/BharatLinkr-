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
import validator from '../../Utills/validations';
import AnimatedComponentToggale from '../../Components/common/AnimatedComponentToggale';
import ModalComp from '../../Components/common/ModalComp';
import {showError} from '../../Utills/HelperFuncation';
import {userLogin} from '../../Redux/actions/auth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPawword] = useState('');
  const [selectUserOption, setSelectUserOption] = useState('');
  const [disclaimer, setDisclaimer] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const isValidData = () => {
    const error = validator({
      email,
      password,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  const handleAccept = async () => {
    const checkValid = isValidData();
    if (checkValid) {
      setLoading(true);
      setDisclaimer(false);
      try {
        await userLogin({email, password});
        setLoading(false);
      } catch (error) {
        showError(error?.message);
        setLoading(false);
      }
    }
  };
  const handleLogin = async () => {
    setDisclaimer(true);
  };
  const handleDecline = () => {
    console.log('click decline btn>>');
    setDisclaimer(false);
  };

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
            value={password}
            onChangeText={e => setPawword(e)}
          />
          <TextComp text={'Forgot Password?'} style={styles.forgotText} />
          <BottonComp
            text="Login"
            isLoading={isLoading}
            style={styles.btnStyle}
            textStyle={styles.loginTextStyle}
            onPress={() => handleLogin()}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
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
      <ModalComp
        isVisible={disclaimer}
        onBackdropPress={() => setDisclaimer(false)}
        backdropOpacity={0.7}>
        <View
          style={{
            backgroundColor: '#fff',
            minHeight: spacing.FULL_HEIGHT / 3.5,
            borderRadius: spacing.RADIUS_12,
            padding: spacing.PADDING_16,
            marginHorizontal: spacing.MARGIN_12,
            elevation: 4,
          }}>
          <TextComp
            text="Disclaimer"
            style={{
              color: '#463196',
              fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
              fontSize: textScale(20),
              opacity: 1,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              marginVertical: spacing.MARGIN_16,
              marginLeft: spacing.MARGIN_16,
            }}>
            <TextComp
              text="1- Lorem ipsum dolar sit amet"
              style={{
                fontSize: textScale(14),
                fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
                color: '#0F0C1A',
                opacity: 1,
              }}
            />
            <TextComp
              text="1- Lorem ipsum dolar sit amet"
              style={{
                fontSize: textScale(14),
                fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
                color: '#0F0C1A',
                opacity: 1,
                marginTop: spacing.MARGIN_10,
              }}
            />
            <TextComp
              text="1- Lorem ipsum dolar sit amet"
              style={{
                fontSize: textScale(14),
                fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
                color: '#0F0C1A',
                opacity: 1,
                marginTop: spacing.MARGIN_10,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <BottonComp
              text="Decline"
              style={{
                width: spacing.WIDTH_110,
                height: spacing.HEIGHT_40,
                backgroundColor: '#4631961F',
                borderColor: '',
              }}
              textStyle={{color: '#6553A7'}}
              onPress={() => handleDecline()}
            />
            <BottonComp
              text="I Accept"
              style={{
                width: spacing.WIDTH_110,
                height: spacing.HEIGHT_40,
                backgroundColor: '#463196',
                borderColor: '#463196',
              }}
              textStyle={{color: '#FCFCFC'}}
              onPress={() => handleAccept()}
            />
          </View>
        </View>
      </ModalComp>
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
    height: spacing.FULL_HEIGHT / 2,
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
    marginTop: spacing.MARGIN_30,
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
    fontSize: textScale(14),
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
    top: spacing.HEIGHT_192,
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
