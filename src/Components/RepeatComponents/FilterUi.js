import {
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {spacing} from '../../styles/spacing';
import TextComp from '../common/TextComp';
import LableWithInput from '../common/LableWithInput';
import VirtualizedView from '../common/VirtualizedView';
import {textScale} from '../../styles/responsiveStyles';
import {fontNames} from '../../styles/typography';

const FilterUi = () => {
  return (
    <VirtualizedView>
      <View style={styles.modalStyle}>
        <TextComp
          text="Filter"
          style={{
            fontSize: textScale(24),
            alignSelf: 'center',
            color: '#463196',
            fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
          }}
        />
        <View style={{flex: 1}}>
          <LableWithInput lableText="Index" placeholder="Filter by Index" />
          <LableWithInput
            lableText="Post Title"
            placeholder="Filter by Post Title"
          />
          <LableWithInput
            lableText="Post Date"
            placeholder="Filter by Post Date"
          />
          <LableWithInput
            lableText="Post Type"
            placeholder="Filter by Post Type"
          />
          <LableWithInput
            lableText="User Name"
            placeholder="Filter by User Name"
          />
          <LableWithInput
            lableText="User Type"
            placeholder="Filter by User Type"
          />
          <LableWithInput
            lableText="Contact No"
            placeholder="Filter by Contact No"
          />
          <LableWithInput
            lableText="Email ID"
            placeholder="Filter by Email ID"
          />
          <LableWithInput
            lableText="Education"
            placeholder="Filter by Education"
          />
          <LableWithInput lableText="Skills" placeholder="Filter by Skills" />
          <LableWithInput
            lableText="Apply Date"
            placeholder="Filter by Apply Date"
          />
          <LableWithInput
            lableText="Location"
            placeholder="Filter by Location"
          />
        </View>
      </View>
    </VirtualizedView>
  );
};

export default FilterUi;

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: '#fff',
    padding: spacing.PADDING_16,
  },
});
