import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AllPostList from '../../Modules/Home/AllPostList';
import {fontNames} from '../../../styles/typography';
import {textScale} from '../../../styles/responsiveStyles';
import {spacing} from '../../../styles/spacing';
import TextComp from '../../common/TextComp';

const tabName = [
  {name: 'All', id: 1},
  {name: 'Script', id: 2},
  {name: 'Jobs ', id: 3},
  {name: 'Announcement  ', id: 4},
  {name: 'Hackathon', id: 5},
  {name: 'College Festives', id: 6},
  {name: 'Campus Recruitment', id: 7},
  {name: 'Cultural Events', id: 8},
  {name: 'Conferences', id: 9},
  {name: 'Internship'},
];

const Announcements = ({selectedOption = true}) => {
  const [selectedTab, setSelectEdTab] = useState(1);
  // const [selectOption, setSelectOption] = useState(false)
  return (
    <View style={{flex: 1}}>
      {selectedOption ? (
        <View style={{marginBottom: spacing.MARGIN_8}}>
          <FlatList
            data={tabName}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    marginHorizontal: spacing.MARGIN_16,
                  }}>
                  <TouchableOpacity onPress={() => setSelectEdTab(item.id)}>
                    <TextComp
                      text={item.name}
                      style={
                        selectedTab != item.id
                          ? styles.unSelectedText
                          : styles.selectedText
                      }
                    />
                  </TouchableOpacity>
                  <View
                    style={[
                      {
                        borderBottomWidth: selectedTab == item.id ? 4 : 0,
                        borderColor: '#463196',
                        borderRadius: spacing.RADIUS_8,
                      },
                    ]}
                  />
                </View>
              );
            }}
          />
        </View>
      ) : null}
      <AllPostList />
    </View>
  );
};

export default Announcements;

const styles = StyleSheet.create({
  selectedText: {
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    fontSize: textScale(14),
    opacity: 0.9,
  },
  unSelectedText: {
    color: '#9A9A9A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(14),
    opacity: 0.9,
  },
});
