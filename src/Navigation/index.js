import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            presentation: 'modal',
            animation: 'slide_from_right',
            animationTypeForReplace: 'push',
          }}>
          {false ? MainStack(Stack) : AuthStack(Stack)}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default AppStack;
