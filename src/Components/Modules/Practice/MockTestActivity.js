import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import WapperContainer from '../../common/WapperContainer'
import MockTestActivityDetails from '../../row/Practice/MockTestActivityDetails'
import SerachBar from '../../common/SerachBar'

const MockTestActivity = () => {
  const [search, setSearch] = useState('');
  return (
    <WapperContainer>
     <SerachBar
        placeholder="Search here..."
        value={search}
        onChangeText={e => setSearch(e)}
      />
      <MockTestActivityDetails/>
    </WapperContainer>
  )
}

export default MockTestActivity

const styles = StyleSheet.create({})