import React, {useState} from 'react';
import {
  Animated,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {spacing} from '../styles/spacing';
import * as Screen from '../screens/index';
import ImagePath from '../Utills/ImagePath';
import navigationString from './navigationString';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {textScale, width} from '../styles/responsiveStyles';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const activeTabColor = '#6753a3';
const inActiveTabColor = '#C8C1DF';
const tabBarColor = '#fffefe';

const tabData = [
  {
    name: navigationString.HOME_SCREEN,
    label: 'Home',
    icon: ImagePath.IC_HOME,
    component: Screen.Home,
  },
  {
    name: navigationString.COLLEGE_SCREEN,
    label: 'Colleges',
    icon: ImagePath.IC_COLLEGE,
    component: Screen.College,
  },
  {
    name: navigationString.COURSE_SCREEN,
    label: 'Courses',
    icon: ImagePath.IC_COURSE,
    component: Screen.Course,
  },
  {
    name: navigationString.EXAM_SCREEN,
    label: 'Exams',
    icon: ImagePath.IC_EXAM,
    component: Screen.Exam,
  },
  {
    name: navigationString.PRACTICE_SCREEN,
    label: 'Practice',
    icon: ImagePath.IC_Practice,
    component: Practice,
  },
  {
    name: navigationString.CORPORETION_SCREEN,
    label: 'Corporate',
    icon: ImagePath.IC_CORPORETE,
    component: Screen.Corporate,
  },
];

function Practice() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'modal',
          animation: 'slide_from_right',
          animationTypeForReplace: 'push',
          // animationDuration:.2
        }} >
        <Stack.Screen
          name={navigationString.PRACTICE_SCREEN}
          component={Screen.Practice}
        />
        <Stack.Screen
          name={navigationString.MOCK_TEST_List_SCREEN}
          component={Screen.MockTestList}
        />
        <Stack.Screen
          name={navigationString.MOCK_INSTRUCATION_SCREEN}
          component={Screen.Instrucation}
        />
        <Stack.Screen
          name={navigationString.MOCK_TEST_SCREEN}
          component={Screen.MockTest}
        />
        <Stack.Screen
          name={navigationString.MOCK_TEST_ACTIVITY_SCREEN}
          component={Screen.MockTestActivity}
        />
        <Stack.Screen
          name={navigationString.MOCK_TEST_SCORE_SCREEN}
          component={Screen.MockTestScore}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function BottomTabs({}) {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: activeTabColor,
            tabBarInactiveTintColor: inActiveTabColor,
            
            tabBarStyle: {
              backgroundColor: tabBarColor,
              paddingBottom: 0,
              height: spacing.HEIGHT_68,
              // borderTopWidth: selectedTab === 0 ? 4 : 0,
              // borderTopColor: 'red',
            },
            tabBarLabelStyle: {alignSelf: 'center'},
            tabBarAllowFontScaling: true,
            headerShown: false,
          }}>
          {tabData.map((item, index) => {
            return (
              <Tab.Screen
                key={`bottomTabMain_${index.toString()}`}
                name={item.name}
                component={item.component}
                listeners={({navigation, route, focused}) => ({
                  tabPress: e => {
                    setSelectedTab(index);
                  },
                })}
                options={{
                  tabBarLabel: item.label,
                  tabBarIcon: ({focused}) => {
                    return (
                      <View style={{width: spacing.WIDTH_60}}>
                        <View
                          style={[
                            {
                              alignItems: 'center',
                              paddingVertical: spacing.PADDING_4,
                            },
                            focused && styles.focusedIconContainer,
                          ]}
                        />
                        <View style={{marginBottom: spacing.MARGIN_14}}>
                          <Image
                            source={item.icon}
                            style={[
                              styles.iconStyle,
                              focused && {tintColor: '#6753a3'},
                            ]}
                            resizeMode="contain"
                          />

                          <Text
                            style={[
                              styles.label,
                              focused && {color: '#6753a3'},
                            ]}>
                            {item.label}
                          </Text>
                        </View>
                      </View>
                    );
                  },
                }}
              />
            );
          })}
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    height: spacing.HEIGHT_24,
    width: spacing.HEIGHT_24,
    tintColor: '#C8C1DF',
    alignSelf: 'center',
  },
  focusedIconContainer: {
    borderTopWidth: 5,
    borderTopColor: '#6553A7',
  },
  label: {
    fontSize: textScale(11),
    color: '#C8C1DF',
    opacity: 9,
    alignSelf: 'center',
  },
  badgeStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(BottomTabs);
