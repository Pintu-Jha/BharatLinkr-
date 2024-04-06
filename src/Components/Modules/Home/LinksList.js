import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinksDetails from '../../row/Home/LinksDetails';
import {spacing} from '../../../styles/spacing';

data = [
  {title: 'Learn English', isIcon: true, id: 1, backGroundColor: '#1BA643'},
  {title: 'Learn IELTS', isIcon: true, id: 2, backGroundColor: '#F7684A'},
  {title: 'Learn Quants', isIcon: false, id: 3, backGroundColor: '#463196'},
  {title: 'Learn Reasoning', isIcon: false, id: 4, backGroundColor: '#F8B54C'},
  {
    title: 'Learn Verbal Ability',
    isIcon: true,
    id: 5,
    backGroundColor: '#1BA643',
  },
  {title: 'Learn Soft Skills', isIcon: true, id: 6, backGroundColor: '#F7684A'},
  {title: 'Learn Quants', isIcon: false, id: 7, backGroundColor: '#463196'},
  {title: 'Learn Reasoning', isIcon: false, id: 8, backGroundColor: '#F8B54C'},
];
const LinksList = () => {
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => String(item.id)}
      renderItem={({item, index}) => {
        return (
          <LinksDetails
            item={item}
            index={index}
            key={'LinksDetails' + item.id}
          />
        );
      }}
    />
  );
};

export default LinksList;

const styles = StyleSheet.create({});
