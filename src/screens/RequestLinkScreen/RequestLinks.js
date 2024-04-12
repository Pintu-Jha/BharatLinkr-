import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WapperContainer from '../../Components/common/WapperContainer'
import RequestLinksList from '../../Components/Modules/RequestLinks.js/RequestLinksList'

const RequestLinks = () => {
  return (
    <WapperContainer>
     <RequestLinksList/>
    </WapperContainer>
  )
}

export default RequestLinks

const styles = StyleSheet.create({})