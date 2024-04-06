import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {spacing} from '../../styles/spacing';
import {textScale} from '../../styles/responsiveStyles';
import {fontNames} from '../../styles/typography';
import ImagePath from '../../Utills/ImagePath';

const TextImputComp = ({
  inputStyle = {},
  textScale = {},
  value = '',
  onChangeText,
  placeholder = '',
  secureText = false,
  appIcons = true,
  profileImage = true,
  searchIcon = false,
  onPressSecure = () => {},
  placeholderTextColor = '#484651',
  ...props
}) => {
  return (
    <View style={{...styles.inputStyle, ...inputStyle}}>
      {!!profileImage ? <Image source={ImagePath.Other_PROFILE} /> : null}
      <TextInput
        style={{...styles.textStyle,...textScale}}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        {...props}
      />

      {!!appIcons ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: spacing.WIDTH_80,
            height: spacing.HEIGHT_52,
          }}>
          <TouchableOpacity>
            <Image
              source={ImagePath.IC_ATTACHMENT}
              style={styles.appIconsStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={ImagePath.IC_ADD_FROM_GALLERY}
              style={styles.appIconsStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={ImagePath.IC_ADDRATE} style={styles.appIconsStyle} />
          </TouchableOpacity>
        </View>
      ) : null}
      {searchIcon ? (
        <Image source={ImagePath.IC_SEARCH} style={{tintColor: '#463196'}} />
      ) : null}
    </View>
  );
};

export default TextImputComp;

const styles = StyleSheet.create({
  inputStyle: {
    height: spacing.HEIGHT_52,
    borderRadius: spacing.RADIUS_8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.PADDING_6,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: spacing.MARGIN_16,
  },
  textStyle: {
    fontSize: textScale(10),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    flex: 1,
    color: '#484651',
    opacity: 0.76,
  },
  appIconsStyle: {
    width: spacing.WIDTH_20,
    width: spacing.HEIGHT_20,
    resizeMode: 'contain',
  },
});
