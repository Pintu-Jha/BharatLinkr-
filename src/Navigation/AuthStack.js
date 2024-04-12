import React from 'react';
import navigationString from './navigationString';
import * as Screens from '../screens';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationString.LOGIN_SCREEN}
        component={Screens.LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationString.SIGNUP_SCREEN}
        component={Screens.SignupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationString.OTP_SCREEN}
        component={Screens.OtpVerification}
        options={{headerShown: false}}
      />
    </>
  );
}
