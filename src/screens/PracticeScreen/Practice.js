import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import WapperContainer from '../../Components/common/WapperContainer';
import PracticeList from '../../Components/Modules/Practice/PracticeList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Practice = () => {
  return (
    <WapperContainer>
     <PracticeList/>
    </WapperContainer>
  );
};

export default Practice;

const styles = StyleSheet.create({});
