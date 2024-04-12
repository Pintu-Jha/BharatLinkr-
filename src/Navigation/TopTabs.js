import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import navigationString from './navigationString';
import * as screen from '../screens';
import SerachBar from '../Components/common/SerachBar';
import {useState} from 'react';
import {spacing} from '../styles/spacing';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {fontNames} from '../styles/typography';
import {textScale} from '../styles/responsiveStyles';

const Tab = createMaterialTopTabNavigator();

const tabBar = [
  {
    lable: 'mesaages',
    component: screen.MessageScreen,
    name: navigationString.MESSAGE_SCREEN,
  },
  {
    lable: 'Link Requests',
    component: screen.RequestLinks,
    name: navigationString.Request_Links_SCREEN,
  },
];

export default function TopBar() {
  const [search, setSearch] = useState('');
  return (
    <>
      <SerachBar
        placeholder={'Search here..'}
        rightMassageImage={false}
        value={search}
        onChangeText={e => setSearch(e)}
      />

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarPressColor: '#FCFCFC',
          swipeEnabled: false,
          presentation: 'modal',
          animation: 'slide_from_right',
          animationTypeForReplace: 'push',
          animationEnabled: true,
          tabBarIndicatorStyle: {
            backgroundColor: '#6553A7',
            height: spacing.HEIGHT_4,
            width: '40%',
            left: spacing.WIDTH_20,
            borderRadius: spacing.RADIUS_8,
          },
          tabBarStyle: {
            height: spacing.HEIGHT_50,
            width: spacing.FULL_WIDTH,
            elevation: 0.5,
          },
          tabBarItemStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}>
        {tabBar.map((item, index) => {
          return (
            <Tab.Screen
              key={`TopTabBar${index.toString()}`}
              name={item.name}
              component={item.component}
              options={{
                tabBarLabel: item.lable,
                tabBarIcon: ({focused}) => {
                  return (
                    <View
                      style={{
                        width: spacing.FULL_WIDTH / 2,
                        right: spacing.WIDTH_84,
                        height: spacing.HEIGHT_30,
                        alignItems: 'center',
                      }}>
                      <Text style={styles.lable}>{item.lable}</Text>
                    </View>
                  );
                },
              }}
            />
          );
        })}
        {/* <Tab.Screen
          options={{tabBarLabel: 'Link Requests'}}
          name={navigationString.Request_Links_SCREEN}
          component={screen.RequestLinks}
        /> */}
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  lable: {
    color: '#484651',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(14),
  },
});
