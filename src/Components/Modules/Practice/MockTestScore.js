import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WapperContainer from '../../common/WapperContainer'
import MockTestScoreDetails from '../../row/Practice/MockTestScoreDetails'

const MockTestScore = () => {
  return (
    <WapperContainer>
      <MockTestScoreDetails/>
    </WapperContainer>
  )
}

export default MockTestScore

const styles = StyleSheet.create({})