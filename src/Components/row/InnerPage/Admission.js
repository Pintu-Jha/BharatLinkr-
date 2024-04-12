import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { textScale } from '../../../styles/responsiveStyles';
import { fontNames } from '../../../styles/typography';
import TextComp from '../../common/TextComp';


const renderItem = ({item, index}) => {
  return (
    <View style={{flex:1}}>
      <TextComp text={'INTRODUCTION'} style={styles.heading} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        <TextComp
          text={`Lorem ipsum dolor sit amet, consetetur sadipscing elit r, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren, no sea takimata sanctus es t Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit r, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren, no sea takimata sanctus es t Lorem ipsum dolor sit amet. Lorem ipsum dolor sit a met, consetetur sadipscing elitr, sed diam nonumy ei rmod tempor invidunt ut labore et...Read More Lorem ipsum dolor sit amet, consetetur sadipscing elit r, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren, no sea takimata sanctus es t Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit r, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren, no sea takimata sanctus es t Lorem ipsum dolor sit amet. Lorem ipsum dolor sit a met, consetetur sadipscing elitr, sed diam nonumy ei rmod tempor invidunt ut labore et...Read More`}
          style={styles.introductionText}
        />
      </View>
    </View>
  );
};


const Admission = () => {
  return (
    <View style={{}}>
      <FlatList
        data={[1]}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
}

export default Admission

const styles = StyleSheet.create({
  heading: {
    color: '#463196',
    fontSize: textScale(14),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 0.9,
  },
  introductionText: {
    color: '#0F0C1A',
    fontSize: textScale(13),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    opacity: 1,
  },
})