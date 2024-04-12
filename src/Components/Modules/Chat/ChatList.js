import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ChatListDetails from '../../row/Chat/ChatListDetails';
import SerachBar from '../../common/SerachBar';

const ChatList = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={{flex:1}}>
      <SerachBar
        placeholder="Search here.."
        rightMassageImage={false}
        value={search}
        onChangeText={e => setSearch(e)}
      />
      <ChatListDetails />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({});
