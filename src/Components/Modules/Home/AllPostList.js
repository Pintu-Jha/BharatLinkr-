import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AllPostListRow from '../../row/Home/AllPostListRow';
import { useSelector } from 'react-redux';
import { spacing } from '../../../styles/spacing';


const AllPostList = () => {
  const postData = useSelector(state=>state?.createPost?.post)

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={postData}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={(item, index) => {
          return <AllPostListRow item={item} index={index} />;
        }}
      />
    </View>
  );
};

export default AllPostList;

const styles = StyleSheet.create({});
