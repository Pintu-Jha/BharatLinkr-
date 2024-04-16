import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import WapperContainer from '../../Components/common/WapperContainer';
import SerachBar from '../../Components/common/SerachBar';
import PopularTextHeading from '../../Components/common/PopularTextHeading';
import SelectionContainer from '../../Components/RepeatComponents/SelectionContainer';
import CollegeAllPost from '../../Components/Modules/College/CollegeAllPost';
import navigationString from '../../Navigation/navigationString';
import {useNavigation} from '@react-navigation/native';

const Colloge = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  return (
    <WapperContainer>
      <SerachBar
        placeholder="Search here.."
        value={search}
        onChangeText={e => setSearch(e)}
      />
      <PopularTextHeading
        text={'Popular Colleges In India'}
        onfilterPress={() =>
          navigation.navigate(navigationString.College_FILTER_SCREEN)
        }
      />
      <SelectionContainer />
      <CollegeAllPost />
    </WapperContainer>
  );
};

export default Colloge;

const styles = StyleSheet.create({});
