import {
  Alert,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import VirtualizedView from '../../../Components/common/VirtualizedView';
import {spacing} from '../../../styles/spacing';
import {boxShadow} from '../../../styles/Mixins';
import {textScale} from '../../../styles/responsiveStyles';
import {fontNames} from '../../../styles/typography';
import {androidCameraPermission} from '../../../../AndroidPermission';
import {
  OpenCamera,
  OpenGallary,
  pickDocument,
} from '../../../Utills/commonImagePicker';
import LableWithInput from '../../../Components/common/LableWithInput';
import BottonComp from '../../../Components/common/BottonComp';
import TextComp from '../../../Components/common/TextComp';

const WorkingProfessional = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNmber, setMobileNumber] = useState('');
  const [certification, setCertification] = useState('Id Proof');
  const [secureText, setSecureText] = useState(true);
  const [secureTexConfirmt, setSecureTextConfirm] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const onSearch = search => {
    if (search !== '') {
      let tempData = data.filter(item => {
        return item.country.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(countries);
    }
  };

  const onSelectImage = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus || Platform.OS == 'ios') {
      Alert.alert('Choose File', 'Choose an option', [
        {text: 'Camera', onPress: onCamera},
        {text: 'Gallery', onPress: onGallery},
        {text: 'Cancel', onPress: () => {}},
      ]);
    }
  };

  const onCamera = async () => {
    try {
      const options = {
        width: 300,
        height: 400,
        includeBase64: true,
      };
      const callback = imageObject => {
        console.log('Captured Image:', imageObject);
      };
      const capturedImage = await OpenCamera(callback, options);
    } catch (error) {
      console.error('Error opening camera:', error);
    }
  };
  const onGallery = async () => {
    try {
      const options = {
        multiple: false,
        cropping: true,
        width: 300,
        height: 400,
        includeBase64: true,
      };
      const callback = selectedImage => {
        console.log('Selected Image from Gallery:', selectedImage);
      };

      await OpenGallary(callback, options);
    } catch (error) {
      console.error('Error selecting image from gallery:', error);
    }
  };

  const onSelectDocument = async () => {
    try {
      const callback = selectedImage => {
        console.log('Selected Document from Gallery:', selectedImage);
      };
      await pickDocument(callback);
    } catch (error) {
      console.error('Error selecting document:', error);
    }
  };

  return (
    <VirtualizedView>
      <View style={styles.container}>
        <LableWithInput
          placeholder="Name"
          textStyle={styles.textInputStyle}
          value={name}
          onChangeText={e => setName(e)}
        />
        <LableWithInput
          placeholder="Email"
          textStyle={styles.textInputStyle}
          value={email}
          onChangeText={e => setEmail(e)}
          keyboardType={'email-address'}
        />
        <LableWithInput
          placeholder="Mobile Number"
          textStyle={styles.textInputStyle}
          value={mobileNmber}
          onChangeText={e => setMobileNumber(e)}
          keyboardType={'number-pad'}
        />
        <View style={styles.photoContainer}>
          <View style={styles.profileBtnContainer}>
            <TextComp text={certification} style={styles.textInputStyle} />
          </View>
          <TouchableOpacity
            style={styles.browerBtnContainer}
            onPress={onSelectImage}>
            <TextComp text="Choose File" style={styles.browerTextStyle} />
          </TouchableOpacity>
        </View>
        <LableWithInput
          placeholder="Password"
          textStyle={styles.textInputStyle}
          value={password}
          onChangeText={e => setPassword(e)}
          keyboardType={'default'}
          secureTextEntry={secureText}
          secureText={secureText}
          onPressSecure={() => setSecureText(!secureText)}
          SecureImage={true}
        />
        <LableWithInput
          placeholder="Re-Enter Password"
          textStyle={styles.textInputStyle}
          value={confirmPassword}
          onChangeText={e => setConfirmPassword(e)}
          keyboardType={'default'}
          secureTextEntry={secureTexConfirmt}
          secureText={secureTexConfirmt}
          onPressSecure={() => setSecureTextConfirm(!secureTexConfirmt)}
          SecureImage={true}
        />
        <BottonComp
          text="Next Step"
          style={{
            width: spacing.WIDTH_110,
            height: spacing.HEIGHT_40,
            alignSelf: 'center',
            backgroundColor: '#463196',
            marginTop: spacing.MARGIN_20,
          }}
          textStyle={{color: '#fff'}}
        />
      </View>
    </VirtualizedView>
  );
};

export default WorkingProfessional;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.MARGIN_32,
    marginTop: spacing.MARGIN_60,
    flex: 1,
  },

  userTypesTextStyle: {
    marginTop: spacing.MARGIN_12,
    fontSize: textScale(14),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    color: '#0F0C1A',
    opacity: 1,
  },
  textInputStyle: {
    color: '#0F0C1A',
    fontSize: textScale(14),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 1,
  },
  stateContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: spacing.MARGIN_18,
    borderRadius: spacing.RADIUS_8,
    position: 'absolute',
    top: spacing.FULL_HEIGHT / 1.95,
    alignSelf: 'center',
    zIndex: 1,
    borderWidth: 1,
    borderColor: '#0d0d0d0d',
    ...boxShadow('#000d0d', {height: 0, width: 0}, 1, 1),
    flex: 1,
  },
  photoContainer: {
    height: spacing.HEIGHT_48,
    // borderColor:"#878787",
    marginTop: spacing.MARGIN_28,
    backgroundColor: '#fff',
    ...boxShadow('#000d0d', {height: 0, width: 0}, 1, 1),
    borderRadius: spacing.RADIUS_8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  browerBtnContainer: {
    backgroundColor: '#E6E6E6',
    width: spacing.FULL_WIDTH / 3.5,
    height: spacing.HEIGHT_48,
    borderTopRightRadius: spacing.RADIUS_8,
    borderBottomRightRadius: spacing.RADIUS_8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileBtnContainer: {
    width: spacing.FULL_WIDTH / 1.9,
    height: spacing.HEIGHT_48,
    justifyContent: 'center',
    paddingLeft: spacing.PADDING_12,
  },
  browerTextStyle: {
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(12),
  },
  highestEducationBtnContainer: {
    height: spacing.HEIGHT_48,
    marginTop: spacing.MARGIN_30,
    borderColor: '#0d0d0d0d',
    backgroundColor: '#fff',
    ...boxShadow('#000d0d', {height: 0, width: 0}, 1, 1),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.PADDING_18,
  },
});
