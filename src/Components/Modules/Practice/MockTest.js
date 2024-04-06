import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import WapperContainer from '../../common/WapperContainer';
import MockTestDetails from '../../row/Practice/MockTestDetails';
import SerachBar from '../../common/SerachBar';

const MockTest = () => {
  const [search, setSearch] = useState('');
  return (
    <WapperContainer>
      <SerachBar
        placeholder="Search here..."
        value={search}
        onChangeText={e => setSearch(e)}
      />
      <MockTestDetails />
    </WapperContainer>
  );
};

export default MockTest;

const styles = StyleSheet.create({});
