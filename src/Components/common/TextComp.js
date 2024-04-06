import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {textScale} from '../../styles/responsiveStyles';
import { fontNames } from '../../styles/typography';

const TextComp = ({text = '', style = {}, children, onPress,...props}) => {
  return (
    <Text
      style={{
        ...styles.textStyle,
        ...style,
      }}
      {...props} onPress={onPress}>
      {text}
      {children}
    </Text>
  );
};

export default TextComp;

const styles = StyleSheet.create({
  textStyle: {
    color: '#000',
    fontSize: textScale(12),

  },
});
