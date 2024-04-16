import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Profile from '../../row/EditProfiles/Profile';
import TextComp from '../../common/TextComp';
import {spacing} from '../../../styles/spacing';
import {boxShadowLess} from '../../../styles/Mixins';
import {textScale} from '../../../styles/responsiveStyles';
import {fontNames} from '../../../styles/typography';
import Inbox from '../../row/EditProfiles/Inbox';
import Application from '../../row/EditProfiles/Application';
import Activites from '../../row/EditProfiles/Activites';
import SwitchProfile from '../../row/EditProfiles/SwitchProfile';

const Tab = [
  {
    tab: 'Profile',
    id: 1,
  },
  {
    tab: 'Inbox',
    id: 2,
  },
  {
    tab: 'Application',
    id: 3,
  },
  {
    tab: 'Activites',
    id: 4,
  },
  {
    tab: 'Switch Profile',
    id: 5,
  },
];

const EditProfileList = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          marginVertical: spacing.MARGIN_12,
        }}>
        <FlatList
          data={Tab}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.tabContainer,
                  {
                    borderBottomWidth: selectedTab == item.id ? 5 : 0,
                    borderColor: selectedTab == item.id ? '#463196' : '#fff',
                  },
                ]}
                onPress={() => {
                  setSelectedTab(item.id);
                }}>
                <TextComp
                  text={item.tab}
                  style={{
                    ...styles.tabTextStyle,
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      {selectedTab == 1 ? (
        <Profile />
      ) : selectedTab == 2 ? (
        <Inbox />
      ) : selectedTab == 3 ? (
        <Application />
      ) : selectedTab == 4 ? (
        <Activites />
      ) : (
        <SwitchProfile />
      )}
    </View>
  );
};

export default EditProfileList;

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    ...boxShadowLess('#00000014', {height: 2, width: 0}, 1, 1),
    marginLeft: spacing.MARGIN_16,
    marginRight: spacing.MARGIN_12,
  },
  tabTextStyle: {
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    color: '#463196',
    opacity: 0.76,
  },
});
