import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TextImputComp from '../../common/TextImputComp'
import { textScale } from '../../../styles/responsiveStyles'
import { fontNames } from '../../../styles/typography'
import { spacing } from '../../../styles/spacing'
import { boxShadow } from '../../../styles/Mixins'

const PostInputContainer = () => {
    const [postComment, setPostComments] = useState('');
  return (
    <TextImputComp
    inputStyle={{...boxShadow(), marginHorizontal: spacing.MARGIN_16}}
    textScale={styles.postUploadeStyle}
    placeholder={`What's in your mind,Argha ?`}
    placeholderTextColor="#484651"
    value={postComment}
    onChangeText={e => setPostComments(e)}
  />
  )
}

export default PostInputContainer

const styles = StyleSheet.create({
    postUploadeStyle: {
        color: '#484651',
        fontSize: textScale(10),
        fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
        opacity: 0.76,
        paddingHorizontal: spacing.PADDING_6,
      },
})