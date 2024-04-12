import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {spacing} from '../../../styles/spacing';
import TextComp from '../../common/TextComp';
import {textScale} from '../../../styles/responsiveStyles';
import {fontNames} from '../../../styles/typography';
import {useNavigation} from '@react-navigation/native';
import navigationString from '../../../Navigation/navigationString';

const MessageDetails = ({item, index}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        marginVertical: spacing.MARGIN_16,
        marginHorizontal: spacing.MARGIN_20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate(navigationString.CHAT_SCREEN, {name: item.name,image:item.DP})
      }>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={item.DP} style={{resizeMode: 'contain'}} />

        <View style={{marginLeft: spacing.MARGIN_8}}>
          <TextComp text={item.name} style={styles.nameText} />
          <TextComp text={item.massage} style={styles.massageTextStyle} />
        </View>
      </View>
      <View style={{}}>
        <TextComp text={item.sendTime} style={styles.sendTimeTextStyle} />
      </View>
    </TouchableOpacity>
  );
};

export default MessageDetails;

const styles = StyleSheet.create({
  nameText: {
    color: '#0F0C1A',
    opacity: 1,
    fontSize: textScale(16),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
  },
  massageTextStyle: {
    color: '#9B9B9B',
    opacity: 1,
    fontSize: textScale(13),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
  },
  sendTimeTextStyle: {
    color: '#9B9B9B',
    fontSize: textScale(11),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    opacity: 1,
  },
});
