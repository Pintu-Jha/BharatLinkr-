import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CategoryListRow from '../../row/Home/CategoryListRow';
import {useSelector} from 'react-redux';
import {iSselected} from '../../../Redux/actions/categoryPost';

const CategoryList = () => {
  const filterData = useSelector(state => state?.categoryPost?.category);
  const [selectedItem, setSelectedItem] = useState(filterData[0]?.type);
  // console.log(selectedItem);
  iSselected(selectedItem);
  const handleItemPress = item => {
    setSelectedItem(item);
  };
  return (
    <View>
      <FlatList
        data={filterData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <CategoryListRow
              item={item}
              index={index}
              onPress={() => handleItemPress(item.type)}
              isSelected={selectedItem === item.type}
            />
          );
        }}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
