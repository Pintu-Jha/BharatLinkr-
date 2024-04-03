import React from 'react';
import {View} from 'react-native';
import navigationString from './navigationString';
import bottomTabs from './bottomTabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import * as screen from '../screens';

const Stack = createNativeStackNavigator();

function AppStack({}) {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={navigationString.BOTTON_TAB_BAR}
            component={bottomTabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default AppStack;
