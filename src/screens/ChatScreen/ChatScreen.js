import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WapperContainer from '../../Components/common/WapperContainer'
import ChatList from '../../Components/Modules/Chat/ChatList'

const ChatScreen = () => {
  return (
    <WapperContainer>
     <ChatList/>
    </WapperContainer>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})