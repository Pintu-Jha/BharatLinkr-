import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import TextComp from '../common/TextComp';
import ImagePath from '../../Utills/ImagePath';
import {spacing} from '../../styles/spacing';
import {fontNames} from '../../styles/typography';
import {boxShadow} from '../../styles/Mixins';
import {textScale} from '../../styles/responsiveStyles';
import {useNavigation} from '@react-navigation/native';
import navigationString from '../../Navigation/navigationString';

const SelectionContainer = ({
  firstContainerText = 'Select Stream',
  secondContainerText = 'Select Course',
}) => {
  const [isFirstSelectionVisible, setFirstIsSelectionVisible] = useState(false);
  const [isSecondSelectionVisible, setSeondIsSelectionVisible] =
    useState(false);
  const handleFirstOptionVisible = () => {
    setFirstIsSelectionVisible(!isFirstSelectionVisible);
  };
  const handleSecondOptionVisible = () => {
    setSeondIsSelectionVisible(!isSecondSelectionVisible);
  };
  const MockTestModalDisable =()=>{
    navigation.navigate(navigationString.MOCK_TEST_List_SCREEN)
    setFirstIsSelectionVisible(false)
  } 
  const navigation = useNavigation();
  return (
    <View style={styles.selectionOptionContainer}>
      <TouchableOpacity
        style={styles.selectionContainer}
        onPress={handleFirstOptionVisible}
        activeOpacity={1}>
        <TextComp text={firstContainerText} style={styles.selectionTextStyle} />
        <View style={{padding: spacing.PADDING_4}}>
          <Image
            source={ImagePath.IC_DOWN_ARROW}
            style={styles.downArrowStyle}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.selectionContainer}
        onPress={handleSecondOptionVisible}
        activeOpacity={1}>
        <TextComp
          text={secondContainerText}
          style={styles.selectionTextStyle}
        />
        <TouchableOpacity style={{padding: spacing.PADDING_4}}>
          <Image
            source={ImagePath.IC_DOWN_ARROW}
            style={styles.downArrowStyle}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      {isFirstSelectionVisible && (
        <View style={styles.firstDropDownContainer}>
          <TextComp
            text="Short Tricks"
            style={styles.stremContainerText}
            onPress={() => Alert.alert('soon..')}
          />
          <TextComp
            text="Worksheets for pactice"
            style={styles.stremContainerText}
            onPress={() => Alert.alert('soon..')}
          />
          <TextComp
            text="HCCECO Library for Trainers/Teachers"
            style={styles.stremContainerText}
            onPress={() => Alert.alert('soon..')}
          />
          <TextComp
            text="Mock Tests for practice"
            style={styles.stremContainerText}
            onPress={MockTestModalDisable }
          />
        </View>
      )}
      {isSecondSelectionVisible && (
        <View style={styles.seconDropDownContainer}>
          <TextComp
            text="Reasoning"
            style={styles.stremContainerText}
            onPress={() => Alert.alert('soon..')}
          />
          <TextComp
            text="Quantitative Aptitude"
            style={styles.stremContainerText}
            onPress={() => Alert.alert('soon..')}
          />
          <TextComp
            text="Verbal Ability"
            style={styles.stremContainerText}
            onPress={() => Alert.alert('soon..')}
          />
          <TextComp
            text="Soft Skills/Personality Development"
            style={styles.stremContainerText}
            onPress={() => Alert.alert('soon..')}
          />
          <TextComp
            text="Interview Preparation"
            style={styles.stremContainerText}
            onPress={() => Alert.alert('soon..')}
          />
        </View>
      )}
    </View>
  );
};

export default SelectionContainer;

const styles = StyleSheet.create({
  selectionOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    zIndex: 1,
  },
  selectionContainer: {
    width: spacing.WIDTH_160,
    height: spacing.HEIGHT_44,
    backgroundColor: '#fffefe',
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderTopLeftRadius: spacing.RADIUS_6,
    borderTopRightRadius: spacing.RADIUS_6,
    borderColor: 1,
    borderColor: '#C8C1DF59',
    opacity: 1,
  },
  downArrowStyle: {
    width: spacing.WIDTH_8,
    height: spacing.HEIGHT_8,
    tintColor: '#3B374A',
    resizeMode: 'contain',
  },
  selectionTextStyle: {
    color: '#0F0C1A',
    opacity: 0.76,
    fontSize: textScale(11),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
  },
  firstDropDownContainer: {
    position: 'absolute',
    width: spacing.WIDTH_160,
    backgroundColor: '#fff',
    top: spacing.HEIGHT_44,
    justifyContent: 'space-around',
    paddingHorizontal: spacing.PADDING_6,
    ...boxShadow(),
  },
  seconDropDownContainer: {
    position: 'absolute',
    width: spacing.WIDTH_160,
    backgroundColor: '#fff',
    top: spacing.HEIGHT_44,
    right: spacing.WIDTH_14,
    paddingHorizontal: spacing.PADDING_6,
    ...boxShadow(),
  },
  stremContainerText: {
    color: '#0F0C1A',
    fontSize: textScale(11),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 0.76,
    marginVertical: spacing.MARGIN_14,
  },
});
