import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import VirtualizedView from '../../../Components/common/VirtualizedView';
import LableWithInput from '../../../Components/common/LableWithInput';
import {spacing} from '../../../styles/spacing';
import {fontNames} from '../../../styles/typography';
import {textScale} from '../../../styles/responsiveStyles';
import BottonComp from '../../../Components/common/BottonComp';
import {boxShadow} from '../../../styles/Mixins';
import TextComp from '../../../Components/common/TextComp';

const HrProfessional = () => {
  const [name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [mobileNmber, setMobileNumber] = useState('');
  const [idProof, setIdProof] = useState('Id Proof');
  const [verifyDoc, setVirifyDoc] = useState('Verified Document');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [secureTexConfirmt, setSecureTextConfirm] = useState(true);
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
          value={Email}
          onChangeText={e => setEmail(e)}
        />
        <LableWithInput
          placeholder="Mobile Number"
          textStyle={styles.textInputStyle}
          value={mobileNmber}
          onChangeText={e => setMobileNumber(e)}
          keyboardType={'number-pad'}
        />
        {/* <View style={{flex: 1}}>
          <BottonComp
            text={'Select State'}
            style={styles.highestEducationBtnContainer}
            onPress={() => setStateSelectoOpen(!isStateSelectOpen)}
            rightImg={true}
            source={ImagePath.IC_DOWN_ARROW}
            IconStyle={{width: spacing.WIDTH_8, height: spacing.HEIGHT_8}}
            textStyle={styles.textInputStyle}
          />
          {isStateSelectOpen ? (
            <View
              style={{
                elevation: 5,
                marginTop: 20,
                height: spacing.HEIGHT_200,
                alignSelf: 'center',
                width: '84%',
                backgroundColor: '#fff',
                borderRadius: 10,
                // position: 'absolute',
                // bottom: spacing.HEIGHT_105,
                bottom: 0,
                flex: 1,
              }}>
              <TextInput
                placeholder="Search.."
                // value={search}
                // ref={searchRef}
                onChangeText={txt => {
                  // onSearch(txt);
                  // setSearch(txt);
                }}
                style={{
                  width: '90%',
                  height: 50,
                  alignSelf: 'center',
                  borderWidth: 0.2,
                  borderColor: '#8e8e8e',
                  borderRadius: 7,
                  marginTop: 20,
                  paddingLeft: 20,
                  // flex: 1,
                }}
              />
              <View style={{flex: 1, borderWidth: 1}}>
                <FlatList
                  data={state}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        style={{
                          width: '85%',
                          alignSelf: 'center',
                          height: 50,
                          justifyContent: 'center',
                          borderBottomWidth: 0.5,
                          borderColor: '#8e8e8e',
                          backgroundColor: 'red',
                          // flex:1
                        }}
                        onPress={() => {
                          // setSelectedCountry(item.country);
                          // setClicked(!clicked);
                          // onSearch('');
                          // setSearch('');
                        }}>
                        <Text style={{fontWeight: '600', color: '#000'}}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </View>
          ) : null}
        </View> */}

        <View style={styles.photoContainer}>
          <View style={styles.profileBtnContainer}>
            <TextComp text={idProof} style={styles.textInputStyle} />
          </View>
          <TouchableOpacity style={styles.browerBtnContainer} onPress={{}}>
            <TextComp text="Choose File" style={styles.browerTextStyle} />
          </TouchableOpacity>
        </View>
        <View style={styles.photoContainer}>
          <View style={styles.profileBtnContainer}>
            <TextComp text={verifyDoc} style={styles.textInputStyle} />
          </View>
          <TouchableOpacity style={styles.browerBtnContainer} onPress={{}}>
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

export default HrProfessional;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.MARGIN_32,
    marginTop: spacing.MARGIN_60,
    flex: 1,
  },
  textInputStyle: {
    color: '#0F0C1A',
    fontSize: textScale(14),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 1,
  },
  photoContainer: {
    // height: spacing.HEIGHT_48,
    // borderColor:"#878787",
    marginTop: spacing.MARGIN_28,
    backgroundColor: '#fff',
    ...boxShadow('#000d0d', {height: 0, width: 0}, 1, 1),
    borderRadius: spacing.RADIUS_8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileBtnContainer: {
    width: spacing.FULL_WIDTH / 1.7,
    height: spacing.HEIGHT_48,
    justifyContent: 'center',
    paddingLeft: spacing.PADDING_12,
  },
  browerTextStyle: {
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(12),
  },
  browerBtnContainer: {
    backgroundColor: '#E6E6E6',
    width: spacing.FULL_WIDTH / 4,
    height: spacing.HEIGHT_48,
    borderTopRightRadius: spacing.RADIUS_8,
    borderBottomRightRadius: spacing.RADIUS_8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
