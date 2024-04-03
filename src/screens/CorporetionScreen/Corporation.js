import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { textScale } from '../../styles/responsiveStyles'

const Corporation = () => {
  return (
    <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
      <Text style={{color:'#000',fontSize:textScale(20)}}>Corporete</Text>
    </View>
  )
}

export default Corporation

const styles = StyleSheet.create({})