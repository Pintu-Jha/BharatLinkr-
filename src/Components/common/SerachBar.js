//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import {spacing} from '../../styles/spacing';
import {textScale} from '../../styles/responsiveStyles';
import ImagePath from '../../Utills/ImagePath';
import {fontNames} from '../../styles/typography';
import {boxShadow} from '../../styles/Mixins';

// create a component
const SerachBar = ({
  value = '',
  onChangeText,
  rightNotificationImage = true,
  rightMassageImage = true,
  rightMenuImage = true,
  placeholder = '',
  isSearch = false,
  inputStyle = {},
  textStyle = {},
  source3,
  Icon3 = {},
  placeholderTextColor = '#0F0C1A',
  ...props
}) => {
  // console.log(source3);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        height: spacing.HEIGHT_70,
        paddingHorizontal: spacing.PADDING_20,
        ...boxShadow(),
      }}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={ImagePath.Profile}
          style={{
            width: spacing.WIDTH_50,
            height: spacing.HEIGHT_50,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View
        style={{
          ...styles.inputStyle,
          ...inputStyle,
          flex: 0.55,
        }}>
        <TextInput
          style={{
            ...styles.textStyle,
            ...textStyle,
          }}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          {...props}
        />
        <Image source={ImagePath.IC_SEARCH} style={styles.searchImage} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          flex: 0.45,
          marginLeft: spacing.MARGIN_10,
        }}>
        {rightNotificationImage ? (
          <TouchableOpacity>
            <Image
              style={styles.iconStyle}
              source={ImagePath.IC_NOTIFICATION}
            />
          </TouchableOpacity>
        ) : null}

        {rightMassageImage ? (
          <TouchableOpacity>
            <Image style={styles.iconStyle} source={ImagePath.IC_MESSAGE} />
          </TouchableOpacity>
        ) : null}
        {rightMenuImage ? (
          <TouchableOpacity>
            <Image
              style={{
                ...styles.iconStyle,
                ...Icon3,
              }}
              source={ImagePath.IC_MENU}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    // height: spacing.HEIGHT_44,
    borderRadius: spacing.RADIUS_8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.PADDING_12,
    marginVertical: spacing.MARGIN_8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0F0C1AD6',
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: textScale(11),
    flex: 1,
    color: '#0F0C1A',
    opacity: 0.76,
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
  },
  iconStyle: {
    width: spacing.WIDTH_24,
    height: spacing.HEIGHT_24,
    opacity: 1,
    resizeMode:'contain'
  },
  searchImage: {
    tintColor: '#0F0C1A',
    opacity: 1,
    resizeMode: 'contain',
  },
});
export default SerachBar;
