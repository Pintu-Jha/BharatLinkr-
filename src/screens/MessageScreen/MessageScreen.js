import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import WapperContainer from '../../Components/common/WapperContainer'
import Message from '../../Components/Modules/Message/Message'

const MessageScreen = () => {

  return (
    <WapperContainer>
     <Message/>
    </WapperContainer>
  )
}

export default MessageScreen

const styles = StyleSheet.create({})