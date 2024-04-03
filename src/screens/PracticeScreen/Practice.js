import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { textScale } from '../../styles/responsiveStyles'

const Practice = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{color: '#000', fontSize: textScale(20)}}>Practice</Text>
    </View>
  )
}

export default Practice

const styles = StyleSheet.create({})