import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {textScale} from '../../styles/responsiveStyles';
import WapperContainer from '../../Components/common/WapperContainer';
import PracticeList from '../../Components/Modules/Practice/PracticeList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationString from '../../Navigation/navigationString';
import * as Screen from '../index'


const Stack = createNativeStackNavigator();

const Practice = () => {
//   <Stack.Navigator>
//   <Stack.Screen name={navigationString.MOCK_TEST_SCREEN} component={Screen.MockTest} />
//   {/* <Stack.Screen name="Messages" component={Messages} /> */}
// </Stack.Navigator>
  return (
    <WapperContainer>
     <PracticeList/>
    </WapperContainer>
  );
};

export default Practice;

const styles = StyleSheet.create({});
