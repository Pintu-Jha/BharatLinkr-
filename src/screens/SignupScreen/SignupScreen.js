import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import WapperContainer from '../../Components/common/WapperContainer';
import TextComp from '../../Components/common/TextComp';
import {fontNames} from '../../styles/typography';
import {spacing} from '../../styles/spacing';
import {height, textScale} from '../../styles/responsiveStyles';
import LableWithInput from '../../Components/common/LableWithInput';
import AnimatedComponentToggale from '../../Components/common/AnimatedComponentToggale';
import {boxShadow} from '../../styles/Mixins';
import VirtualizedView from '../../Components/common/VirtualizedView';
import ImagePath from '../../Utills/ImagePath';
import BottonComp from '../../Components/common/BottonComp';
import Dropdown from '../../Components/RepeatComponents/SearchWithModal';

const states = [
  {id: 'AP', name: 'Andhra Pradesh'},
  {id: 'AR', name: 'Arunachal Pradesh'},
  {id: 'AS', name: 'Assam'},
  {id: 'BR', name: 'Bihar'},
  {id: 'CT', name: 'Chhattisgarh'},
  {id: 'GA', name: 'Goa'},
  {id: 'GJ', name: 'Gujarat'},
  {id: 'HR', name: 'Haryana'},
  {id: 'HP', name: 'Himachal Pradesh'},
  {id: 'JH', name: 'Jharkhand'},
  {id: 'KA', name: 'Karnataka'},
  {id: 'KL', name: 'Kerala'},
  {id: 'MP', name: 'Madhya Pradesh'},
  {id: 'MH', name: 'Maharashtra'},
  {id: 'MN', name: 'Manipur'},
  {id: 'ML', name: 'Meghalaya'},
  {id: 'MZ', name: 'Mizoram'},
  {id: 'NL', name: 'Nagaland'},
  {id: 'OD', name: 'Odisha'},
  {id: 'PB', name: 'Punjab'},
  {id: 'RJ', name: 'Rajasthan'},
  {id: 'SK', name: 'Sikkim'},
  {id: 'TN', name: 'Tamil Nadu'},
  {id: 'TG', name: 'Telangana'},
  {id: 'TR', name: 'Tripura'},
  {id: 'UP', name: 'Uttar Pradesh'},
  {id: 'UT', name: 'Uttarakhand'},
  {id: 'WB', name: 'West Bengal'},
];

const SignupScreen = () => {
  const [selectUserOption, setSelectUserOption] = useState('Select User Type');
  const [selectState, setSelecState] = useState('Select State');
  const [searchState, setSearchState] = useState();
  const [isStateSelectOpen, setStateSelectoOpen] = useState(false);
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNmber, setMobileNumber] = useState('');
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

  return (
    <VirtualizedView>
      <View style={styles.tabContainer}>
        <AnimatedComponentToggale
          initialHeight={spacing.FULL_HEIGHT / 4}
          AnimationBtnContainer={{
            paddingRight: spacing.PADDING_20,
            paddingLeft: 0,
          }}
          tabNameStyle={styles.textInputStyle}
          tabName={selectUserOption}>
          <View
            style={{
              height: 2,
              width: spacing.FULL_WIDTH / 1.2,
              backgroundColor: '#0d0d0d0d',
              alignSelf: 'center',
            }}
          />
          <View style={{alignItems: 'center'}}>
            <TextComp
              text="Student"
              style={styles.userTypesTextStyle}
              onPress={() => setSelectUserOption('Student')}
            />
            <TextComp
              text="College"
              style={styles.userTypesTextStyle}
              onPress={() => setSelectUserOption('College')}
            />
            <TextComp
              text="Campus Ambassadors"
              style={styles.userTypesTextStyle}
              onPress={() => setSelectUserOption('Campus Ambassadors')}
            />
            <TextComp
              text="School or college authorities"
              style={styles.userTypesTextStyle}
              onPress={() =>
                setSelectUserOption('School or college authorities')
              }
            />
            <TextComp
              text="Others"
              style={styles.userTypesTextStyle}
              onPress={() => setSelectUserOption('Others')}
            />
          </View>
        </AnimatedComponentToggale>
      </View>

      <TextComp text="Create Account" style={styles.createAccountTextStyle} />
      <View style={styles.container}>
        <LableWithInput
          placeholder="Name"
          textStyle={styles.textInputStyle}
          value={name}
          onChangeText={e => setName(e)}
        />
        <LableWithInput
          placeholder="Designation"
          textStyle={styles.textInputStyle}
          value={designation}
          onChangeText={e => setDesignation(e)}
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
        <View style={{flex: 1}}>
          <BottonComp
            text={'Select State'}
            style={{
              height: spacing.HEIGHT_48,
              marginTop: spacing.MARGIN_30,
              borderColor: '#0d0d0d0d',
              backgroundColor: '#fff',
              ...boxShadow('#000d0d', {height: 0, width: 0}, 1, 1),
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: spacing.PADDING_18,
            }}
            onPress={() => setStateSelectoOpen(!isStateSelectOpen)}
            rightImg={true}
            source={ImagePath.IC_DOWN_ARROW}
            IconStyle={{width: spacing.WIDTH_8, height: spacing.HEIGHT_8}}
            textStyle={styles.textInputStyle}
          />
          {/* {isStateSelectOpen ? (
            <View
              style={{
                elevation: 5,
                marginTop: 20,
                height: spacing.HEIGHT_200,
                alignSelf: 'center',
                width: '84%',
                backgroundColor: '#fff',
                borderRadius: 10,
                position: 'absolute',
                // bottom: spacing.HEIGHT_105,
                bottom:0,
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
                  data={states}
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
          ) : null} */}
        </View>
        <LableWithInput
          placeholder="School/College/Company"
          textStyle={styles.textInputStyle}
          value={name}
          onChangeText={e => setName(e)}
        />
        <BottonComp
          text={'Highest Education'}
          style={{
            height: spacing.HEIGHT_48,
            marginTop: spacing.MARGIN_30,
            borderColor: '#0d0d0d0d',
            backgroundColor: '#fff',
            ...boxShadow('#000d0d', {height: 0, width: 0}, 1, 1),
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: spacing.PADDING_18,
          }}
          // onPress={() => setStateSelectoOpen(!isStateSelectOpen)}
          rightImg={true}
          source={ImagePath.IC_DOWN_ARROW}
          IconStyle={{width: spacing.WIDTH_8, height: spacing.HEIGHT_8}}
          textStyle={styles.textInputStyle}
        />
        <LableWithInput
          placeholder="Total Experience"
          textStyle={styles.textInputStyle}
          value={email}
          onChangeText={e => setEmail(e)}
          keyboardType={'email-address'}
        />
        <LableWithInput
          placeholder="Summary"
          textStyle={{...styles.textInputStyle}}
          value={mobileNmber}
          onChangeText={e => setMobileNumber(e)}
          keyboardType={'default'}
          multiline={true}
        />
        <LableWithInput
          placeholder="Area of Expertise"
          textStyle={styles.textInputStyle}
          value={mobileNmber}
          onChangeText={e => setMobileNumber(e)}
          keyboardType={'default'}
          multiline={true}
        />
        <LableWithInput
          placeholder="Accomplishments"
          textStyle={styles.textInputStyle}
          value={mobileNmber}
          onChangeText={e => setMobileNumber(e)}
          keyboardType={'default'}
          multiline={true}
        />
        <View
          style={{
            height: spacing.HEIGHT_48,
            borderWidth: 1,
            // borderColor:"#878787",
            marginTop: spacing.MARGIN_28,
            backgroundColor: '#fff',
            ...boxShadow('#000d0d', {height: 0, width: 0}, 1, 1),
            borderRadius:spacing.RADIUS_8
          }}></View>
        <LableWithInput
          placeholder="Cover Photo"
          textStyle={styles.textInputStyle}
          value={mobileNmber}
          onChangeText={e => setMobileNumber(e)}
          keyboardType={'number-pad'}
        />
        <LableWithInput
          placeholder="Password"
          textStyle={styles.textInputStyle}
          value={mobileNmber}
          onChangeText={e => setMobileNumber(e)}
          keyboardType={'default'}
        />
        <LableWithInput
          placeholder="Re-Enter Password"
          textStyle={styles.textInputStyle}
          value={mobileNmber}
          onChangeText={e => setMobileNumber(e)}
          keyboardType={'default'}
        />
        <BottonComp
          text="Next Step"
          style={{
            width: spacing.WIDTH_110,
            height: spacing.HEIGHT_40,
            alignSelf: 'center',
            marginVertical: spacing.MARGIN_16,
            backgroundColor: '#463196',
          }}
          textStyle={{color: '#fff'}}
        />
      </View>
    </VirtualizedView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  createAccountTextStyle: {
    color: '#463196',
    alignSelf: 'center',
    fontSize: textScale(20),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 1,
    marginTop: spacing.MARGIN_16,
  },
  container: {
    marginHorizontal: spacing.MARGIN_32,
    marginTop: spacing.MARGIN_60,
    // flex:1
  },
  tabContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: spacing.MARGIN_18,
    borderRadius: spacing.RADIUS_8,
    position: 'absolute',
    top: spacing.HEIGHT_50,
    alignSelf: 'center',
    zIndex: 1,
    borderWidth: 1,
    borderColor: '#0d0d0d0d',
    ...boxShadow('#000d0d', {height: 0, width: 0}, 1, 1),
  },
  userTypesTextStyle: {
    marginTop: spacing.MARGIN_12,
    fontSize: textScale(14),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    color: '#0F0C1A',
    opacity: 1,
  },
  textInputStyle: {
    color: '#878787',
    fontSize: textScale(12),
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
});
