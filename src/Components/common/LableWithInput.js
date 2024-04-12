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
import TextComp from './TextComp';
import ImagePath from '../../Utills/ImagePath';
import {boxShadow} from '../../styles/Mixins';
import {fontNames} from '../../styles/typography';

const LableWithInput = ({
  inputStyle = {},
  textStyle = {},
  value = '',
  onChangeText,
  placeholder = '',
  secureText = false,
  onPressSecure = () => {},
  lableText = '',
  bottonLableText = '',
  placeholderTextColor = '#878787',
  SecureImage = false,
  keyboardType,
  inputMainContainer,
  multiline=false,
  ...props
}) => {
  return (
    <>
      <TextComp text={lableText} style={styles.lableTextStyle} />
      <View style={{...styles.inputStyle, ...inputStyle}}>
        <TextInput
          style={{...styles.textStyle,...textStyle}}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          multiline={multiline}
          {...props}
        />

        {!!SecureImage ? (
          <TouchableOpacity activeOpacity={0.5} onPress={onPressSecure}>
            {!!secureText ? (
              <Image source={ImagePath.ICON_HIDE} style={styles.iconstyle} />
            ) : (
              <Image
                source={ImagePath.ICON_VISIABLE}
                style={styles.iconstyle}
              />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
};

export default LableWithInput;

const styles = StyleSheet.create({
  inputStyle: {
    borderRadius: spacing.RADIUS_6,
    borderWidth: 1,
    borderColor: '#0d0d0d0d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...boxShadow('#000d0d', {height: 0, width: 0}, 1, 1),
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: textScale(11),
    flex: 1,
    color: '#C8C1DF',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    padding:spacing.PADDING_10,
  },
  iconstyle: {
    width: spacing.WIDTH_24,
    height: spacing.HEIGHT_24,
    resizeMode:'contain'
  },
  lableTextStyle: {
    color: '#463196',
    fontSize: textScale(14),
    alignSelf: 'flex-start',
    marginLeft: spacing.MARGIN_12,
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    marginTop:spacing.MARGIN_10
  },

});