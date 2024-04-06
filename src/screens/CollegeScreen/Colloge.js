import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import WapperContainer from '../../Components/common/WapperContainer';
import SerachBar from '../../Components/common/SerachBar';
import PopularTextHeading from '../../Components/common/PopularTextHeading';
import SelectionContainer from '../../Components/RepeatComponents/SelectionContainer';
import CollegeAllPost from '../../Components/Modules/College/CollegeAllPost';

const Colloge = () => {
  const [search, setSearch] = useState('');
  return (
    <WapperContainer>
      <SerachBar
        placeholder="Search here.."
        value={search}
        onChangeText={e => setSearch(e)}
      />
      <PopularTextHeading text={'Popular Colleges In India'} />
      <SelectionContainer />
      <CollegeAllPost />
    </WapperContainer>
  );
};

export default Colloge;

const styles = StyleSheet.create({});
