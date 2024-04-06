import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeStatusCompRow from '../../row/Home/HomeStatusCompRow';

const dummyData = [
  {id: 1, lableText: 'Post an Event'},
  {id: 2, lableText: 'Kanika'},
  {id: 3, lableText: 'Noor'},
  {id: 4, lableText: 'Zubs'},
  {id: 5, lableText: 'Pintu'},
];

const HomeStatusBar = () => {
  return (
    <View>
      <FlatList
        data={dummyData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => {
          return (
            <HomeStatusCompRow
              item={item}
              index={index}
              key={'HomeStatusComp' + index}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeStatusBar;

const styles = StyleSheet.create({});
