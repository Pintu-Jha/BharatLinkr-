import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import WapperContainer from '../../Components/common/WapperContainer';
import TextComp from '../../Components/common/TextComp';
import {fontNames} from '../../styles/typography';
import {textScale} from '../../styles/responsiveStyles';
import {spacing} from '../../styles/spacing';
import OTPTextView from 'react-native-otp-textinput';
import BottonComp from '../../Components/common/BottonComp';

const OtpVerification = () => {
  const input = useRef(null);
  const [otpInput, setOtpInput] = useState('');
  const handleCellTextChange = async (text, i) => {};
  return (
    <WapperContainer>
      <View style={{marginHorizontal: spacing.MARGIN_20, flex: 1}}>
        <View
          style={{
            // width: spacing.FULL_WIDTH / 1.6,
            // height: spacing.HEIGHT_60,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: spacing.MARGIN_20,
            alignSelf: 'center',
          }}>
          <TextComp
            text={`OTP has been sent on your given mobile number or email.`}
            style={styles.desription}></TextComp>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: spacing.MARGIN_50,
          }}>
          <TextComp
            text={'Enter 6 Digit Mobile OTP'}
            style={styles.otpEnterText}
          />

          <View style={{marginTop: spacing.MARGIN_16}}>
            <OTPTextView
              ref={input}
              textInputStyle={styles.textInputContainer}
              handleTextChange={setOtpInput}
              handleCellTextChange={handleCellTextChange}
              inputCount={6}
              keyboardType="numeric"
              autoFocus
              tintColor={'#C8C1DF'}
              offTintColor={'#C8C1DF'}
            />
          </View>
          <BottonComp
            text="Verify"
            style={{
              width: spacing.WIDTH_110,
              height: spacing.HEIGHT_40,
              alignSelf: 'center',
              backgroundColor: '#463196',
              marginTop: spacing.MARGIN_20,
            }}
            textStyle={{color: '#fff'}}
            // onPress={() => navigation.navigate(navigationString.OTP_SCREEN)}
          />
        </View>
      </View>
    </WapperContainer>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  desription: {
    color: '#1BA643',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    fontSize: textScale(12),
    opacity: 1,
  },
  otpEnterText: {
    color: '#463196',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    fontSize: textScale(14),
    opacity: 1,
  },
  textInputContainer: {
    borderBottomWidth: 1,
    borderRadius: spacing.RADIUS_8,
    color: '#463196',
    width: spacing.WIDTH_50,
    height: spacing.HEIGHT_56,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#C8C1DF',
    fontSize: textScale(26),
  },
});
