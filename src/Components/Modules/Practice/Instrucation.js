import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InstrucationDetails from '../../row/Practice/InstrucationDetails'
import WapperContainer from '../../common/WapperContainer'

const Instrucation = () => {
  return (
    <WapperContainer style={{flex:1}}>
      <InstrucationDetails/>
    </WapperContainer>
  )
}

export default Instrucation

const styles = StyleSheet.create({})