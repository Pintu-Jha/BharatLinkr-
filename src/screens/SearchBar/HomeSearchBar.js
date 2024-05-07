import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WapperContainer from '../../Components/common/WapperContainer'
import SearchBarDetailsList from '../../Components/Modules/SearchBar/SearchBarDetailsList'

const HomeSearchBar = () => {
  return (
    <WapperContainer>
     <SearchBarDetailsList/>
    </WapperContainer>
  )
}

export default HomeSearchBar

const styles = StyleSheet.create({})