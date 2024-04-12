import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WapperContainer from '../../Components/common/WapperContainer'
import EditProfileList from '../../Components/Modules/EditProfile/EditProfileList'

const EditProfile = () => {
  return (
    <WapperContainer>
      <EditProfileList/>
    </WapperContainer>
  )
}

export default EditProfile

const styles = StyleSheet.create({})