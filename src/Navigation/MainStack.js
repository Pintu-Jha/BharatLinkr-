import React from 'react';
import navigationString from './navigationString';
import bottomTabs from './bottomTabs';
import * as Screen from '../screens';
import TopBar from './TopTabs';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationString.BOTTON_TAB_BAR}
        component={bottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationString.TOP_TAB_BAR}
        component={TopBar}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationString.CHAT_SCREEN}
        component={Screen.ChatScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationString.COLLEGE_INNER_PAGE}
        component={Screen.CollegeInnerPage}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name={navigationString.EDIT_PROFILE}
        component={Screen.EditProfile}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name={navigationString.FilterUi}
        component={Screen.FilterUi}
        options={{headerShown: false}}
      />
         <Stack.Screen
        name={navigationString.EXAM_FILTER_SCREEN}
        component={Screen.ExamFilter}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name={navigationString.College_FILTER_SCREEN}
        component={Screen.CollegeFilter}
        options={{headerShown: false}}
      />
    </>
  );
}
