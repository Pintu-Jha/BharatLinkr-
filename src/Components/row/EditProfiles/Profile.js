import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import VirtualizedView from '../../common/VirtualizedView';
import AnimatedComponentToggale from '../../common/AnimatedComponentToggale';
import {spacing} from '../../../styles/spacing';
import ImagePath from '../../../Utills/ImagePath';
import BottonComp from '../../common/BottonComp';
import TextComp from '../../common/TextComp';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {boxShadow} from '../../../styles/Mixins';
import {fontNames} from '../../../styles/typography';
import {textScale} from '../../../styles/responsiveStyles';
import LableWithInput from '../../common/LableWithInput';

const dummyData = [
  {title1: 'Male', id: '1'},
  {title1: 'Female', id: '2'},
  {title1: 'Other', id: '3'},
];
const languageLevel = [
  {
    level: 'Native',
    id: 1,
  },
  {
    level: 'Professional',
    id: 2,
  },
  {
    level: 'Conversational',
    id: 3,
  },
  {
    level: 'Elemantary',
    id: 4,
  },
  {
    level: 'No Proficiency',
    id: 5,
  },
];
const Profile = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('dd/mm/yyyy');
  const [selectedStartDate, setSelectedStratDate] = useState('dd/mm/yyyy');
  const [selectedEndDate, setSelectedEndDate] = useState('dd/mm/yyyy');
  const [selectedWorkStartDate, setSelectedWorkStratDate] =
    useState('dd/mm/yyyy');
  const [selectedWorkEndDate, setSelectedWorkEndDate] = useState('dd/mm/yyyy');
  const [selectedProjectStartDate, setSelectedProjectSartDate] =
    useState('dd/mm/yyyy');
  const [selectedProjectEndDate, setSelectedProjectEndDate] =
    useState('dd/mm/yyyy');
  const [selectGender, setSelectGender] = useState('Select');
  const [isGenderSelect, setIsGenderSelect] = useState(false);
  const [isLanguageLevelSelect, setIsLanguageLevelSelect] = useState(false);
  const [islanguageLevel, setLanguageLevel] = useState('Level');
  const [dateModalId, setDateModalId] = useState(0);
  const [profileSummary, setProfileSummary] = useState('');
  const [date, setDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmPersonDate = date => {
    const dt = new Date(date);
    const stringFormateDate = dt.toISOString().split('T');
    const x = stringFormateDate[0].split('-');
    setSelectedDate(x[2] + '/' + x[1] + '/' + x[0]);
    hideDatePicker();
  };
  const handleConfirmStartAcademicDate = date => {
    const dt = new Date(date);
    const stringFormateDate = dt.toISOString().split('T');
    const x = stringFormateDate[0].split('-');
    setSelectedStratDate(x[2] + '/' + x[1] + '/' + x[0]);
    hideDatePicker();
  };
  const handleConfirmEndAcademicStart = date => {
    const dt = new Date(date);
    const stringFormateDate = dt.toISOString().split('T');
    const x = stringFormateDate[0].split('-');
    setSelectedEndDate(x[2] + '/' + x[1] + '/' + x[0]);
    hideDatePicker();
  };
  const handleConfirmWorkStartDate = date => {
    const dt = new Date(date);
    const stringFormateDate = dt.toISOString().split('T');
    const x = stringFormateDate[0].split('-');
    setSelectedWorkStratDate(x[2] + '/' + x[1] + '/' + x[0]);
    hideDatePicker();
  };
  const handleConfirmWorkEndDate = date => {
    const dt = new Date(date);
    const stringFormateDate = dt.toISOString().split('T');
    const x = stringFormateDate[0].split('-');
    setSelectedWorkEndDate(x[2] + '/' + x[1] + '/' + x[0]);
    hideDatePicker();
  };
  const handleConfirmProjectStartDate = date => {
    const dt = new Date(date);
    const stringFormateDate = dt.toISOString().split('T');
    const x = stringFormateDate[0].split('-');
    setSelectedProjectSartDate(x[2] + '/' + x[1] + '/' + x[0]);
    hideDatePicker();
  };
  const handleConfirmProjectEndtDate = date => {
    const dt = new Date(date);
    const stringFormateDate = dt.toISOString().split('T');
    const x = stringFormateDate[0].split('-');
    setSelectedProjectEndDate(x[2] + '/' + x[1] + '/' + x[0]);
    hideDatePicker();
  };

  const handleConfirm = date => {
    if (dateModalId == 0) {
      handleConfirmPersonDate(date);
    } else if (dateModalId == 1) {
      handleConfirmStartAcademicDate(date);
    } else if (dateModalId == 2) {
      handleConfirmEndAcademicStart(date);
    } else if (dateModalId == 3) {
      handleConfirmWorkStartDate(date);
    } else if (dateModalId == 4) {
      handleConfirmWorkEndDate(date);
    } else if (dateModalId == 5) {
      handleConfirmProjectStartDate(date);
    } else {
      handleConfirmProjectEndtDate(date);
    }
  };
  const gender = title => {
    setSelectGender(title);
    setIsGenderSelect(false);
  };

  return (
    <VirtualizedView>
      <View style={styles.tabContainer}>
        <AnimatedComponentToggale
          initialHeight={spacing.FULL_HEIGHT * 1.2}
          tabName="Basic Details">
          <Image source={ImagePath.COVER_PHOTO} style={styles.coverImgStyle} />
          <View
            style={{
              ...styles.basicDetailsSubBtnContainer,
              marginTop: spacing.MARGIN_100,
            }}>
            <BottonComp
              text={'View Profile Card'}
              style={styles.btnForProfileCard}
            />
            <BottonComp text={'View Resume'} style={styles.btnForProfileCard} />
          </View>

          <LableWithInput
            lableText="USER TYPE"
            inputStyle={styles.inputStyle}
            placeholder="Select.."
          />
          <LableWithInput
            lableText="USER TYPE"
            inputStyle={styles.inputStyle}
            placeholder="Select.."
          />
          <LableWithInput
            lableText="Name"
            inputStyle={styles.inputStyle}
            placeholder="Enter Name"
          />
          <LableWithInput
            lableText="Designation"
            inputStyle={styles.inputStyle}
            placeholder="Enter Designation"
          />
          <LableWithInput
            lableText="Email"
            inputStyle={styles.inputStyle}
            placeholder="Enter Email"
          />
          <LableWithInput
            lableText="Password"
            inputStyle={styles.inputStyle}
            placeholder="Enter Password"
          />
          <LableWithInput
            lableText="Mobile Number"
            inputStyle={styles.inputStyle}
            placeholder="Enter Number"
          />
          <View style={{marginBottom: spacing.MARGIN_12}} />
        </AnimatedComponentToggale>
      </View>
      <View style={styles.tabContainer}>
        <AnimatedComponentToggale
          initialHeight={spacing.FULL_HEIGHT / 5.5}
          tabName="Person Details">
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextComp text="Date Of Birth" style={{...styles.lableTextStyle}} />
            <View style={{flexDirection: 'row'}}>
              <TextComp text={selectedDate} style={styles.dateTextStyle} />
              <TouchableOpacity
                onPress={() => {
                  setDateModalId(0);
                  showDatePicker();
                }}
                activeOpacity={0.5}>
                <Image
                  source={ImagePath.IC_CALENDAR}
                  style={styles.calendarIconStyle}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: spacing.MARGIN_10,
            }}>
            <TextComp text="Gender" style={styles.lableTextStyle} />
            <View style={styles.genderContainer}>
              <TextComp text={selectGender} style={styles.genderText} />
              <TouchableOpacity
                onPress={() => setIsGenderSelect(!isGenderSelect)}
                activeOpacity={0.5}>
                <Image
                  source={ImagePath.IC_Right_ARROW}
                  style={{
                    transform: [{rotate: '90deg'}],
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextComp text="Location" style={styles.lableTextStyle} />
            <View style={{flex: 1}}>
              <TextInput
                placeholder="Location"
                placeholderTextColor={'#000'}
                style={{...styles.locationTextInputStyle}}
              />
            </View>
          </View>
        </AnimatedComponentToggale>
      </View>
      <View style={styles.tabContainer}>
        <AnimatedComponentToggale
          initialHeight={spacing.FULL_HEIGHT / 2}
          tabName="Academic Details">
          <LableWithInput
            lableText="Degree And Field of Study"
            inputStyle={styles.inputStyle}
            placeholder="Degree And Field of Study"
          />
          <LableWithInput
            lableText="School or University"
            inputStyle={styles.inputStyle}
            placeholder="School or University"
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: spacing.MARGIN_12,
            }}>
            <TextComp
              text="Starting Period"
              style={{...styles.lableTextStyle}}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextComp text={selectedStartDate} style={styles.dateTextStyle} />
              <TouchableOpacity
                onPress={() => {
                  setDateModalId(1);
                  showDatePicker();
                }}>
                <Image
                  source={ImagePath.IC_CALENDAR}
                  style={styles.calendarIconStyle}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: spacing.MARGIN_12,
            }}>
            <TextComp text="Ending Period" style={styles.lableTextStyle} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextComp text={selectedEndDate} style={styles.dateTextStyle} />
              <TouchableOpacity
                onPress={() => {
                  setDateModalId(2);
                  showDatePicker();
                }}>
                <Image
                  source={ImagePath.IC_CALENDAR}
                  style={styles.calendarIconStyle}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: spacing.MARGIN_12,
            }}>
            <TextComp text="C.G.P.A" style={styles.lableTextStyle} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextInput
                placeholder="C.G.P.A"
                placeholderTextColor={'#000'}
                style={{
                  ...styles.locationTextInputStyle,
                  flex: 0,
                  marginTop: 0,
                  paddingBottom: 0,
                  width: spacing.FULL_WIDTH / 3,
                  marginHorizontal: spacing.MARGIN_12,
                }}
              />
              <TextComp
                text="/10"
                style={{
                  fontSize: textScale(12),
                  fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
                  marginTop: spacing.MARGIN_10,
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextComp text="Percentage" style={styles.lableTextStyle} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextInput
                placeholder="%"
                placeholderTextColor={'#000'}
                style={{
                  ...styles.locationTextInputStyle,
                  flex: 0,
                  marginTop: 0,
                  paddingBottom: 0,
                  width: spacing.FULL_WIDTH / 3,
                  marginHorizontal: spacing.MARGIN_12,
                }}
              />
              <TextComp
                text="%"
                style={{
                  fontSize: textScale(16),
                  fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
                  marginTop: spacing.MARGIN_10,
                }}
              />
            </View>
          </View>
        </AnimatedComponentToggale>
      </View>
      <View style={styles.tabContainer}>
        <AnimatedComponentToggale
          initialHeight={spacing.FULL_HEIGHT / 2.5}
          tabName="Professional Details">
          <View
            style={{
              ...styles.basicDetailsSubBtnContainer,
            }}>
            <BottonComp
              text={'Fresher'}
              style={styles.btnForProfileCard}
              textStyle={styles.lableTextStyle}
            />
            <BottonComp
              text={'Experienced'}
              style={styles.btnForProfileCard}
              textStyle={styles.lableTextStyle}
            />
          </View>

          <LableWithInput
            lableText="Skills"
            inputStyle={styles.inputStyle}
            placeholder="Select.."
          />
          <LableWithInput
            lableText="Area of Experitise"
            inputStyle={styles.inputStyle}
            placeholder="Select.."
          />
          <LableWithInput
            lableText="Preferred Location"
            inputStyle={styles.inputStyle}
            placeholder="Enter Name"
          />
        </AnimatedComponentToggale>
      </View>
      <View style={styles.tabContainer}>
        <AnimatedComponentToggale
          initialHeight={spacing.FULL_HEIGHT / 1.8}
          tabName="Work Details">
          <LableWithInput
            lableText="Title"
            inputStyle={styles.inputStyle}
            placeholder="Title"
          />
          <LableWithInput
            lableText="Company Name"
            inputStyle={styles.inputStyle}
            placeholder="Company Name"
          />
          <LableWithInput
            lableText="Company Description"
            inputStyle={styles.inputStyle}
            placeholder="Company Description"
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: spacing.MARGIN_16,
            }}>
            <TextComp
              text="Starting Period"
              style={{...styles.lableTextStyle}}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextComp
                text={selectedWorkStartDate}
                style={styles.dateTextStyle}
              />
              <TouchableOpacity
                onPress={() => {
                  setDateModalId(3);
                  showDatePicker();
                }}>
                <Image
                  source={ImagePath.IC_CALENDAR}
                  style={styles.calendarIconStyle}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: spacing.MARGIN_12,
            }}>
            <TextComp text="Ending Period" style={styles.lableTextStyle} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextComp
                text={selectedWorkEndDate}
                style={styles.dateTextStyle}
              />
              <TouchableOpacity
                onPress={() => {
                  setDateModalId(4);
                  showDatePicker();
                }}>
                <Image
                  source={ImagePath.IC_CALENDAR}
                  style={styles.calendarIconStyle}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextComp text="Location" style={styles.lableTextStyle} />
            <View style={{flex: 1}}>
              <TextInput
                placeholder="Location"
                placeholderTextColor={'#000'}
                style={{...styles.locationTextInputStyle}}
              />
            </View>
          </View>
        </AnimatedComponentToggale>
      </View>
      <View style={styles.tabContainer}>
        <AnimatedComponentToggale
          initialHeight={spacing.FULL_HEIGHT / 4.3}
          tabName="ACCOMPLISHMENTS">
          <LableWithInput
            lableText="Title"
            inputStyle={styles.inputStyle}
            placeholder="Title"
          />
          <LableWithInput
            lableText="About"
            inputStyle={styles.inputStyle}
            placeholder="About"
          />
        </AnimatedComponentToggale>
      </View>
      <View style={styles.tabContainer}>
        <AnimatedComponentToggale
          initialHeight={spacing.FULL_HEIGHT / 1.45}
          tabName="PROJECT DETAILS">
          <LableWithInput
            lableText="Project Name"
            inputStyle={styles.inputStyle}
            placeholder="Project Name"
          />
          <LableWithInput
            lableText="Project Description"
            inputStyle={styles.inputStyle}
            placeholder="Project Description"
          />
          <LableWithInput
            lableText="Location"
            inputStyle={styles.inputStyle}
            placeholder="Project Location"
          />
          <LableWithInput
            lableText="Link"
            inputStyle={styles.inputStyle}
            placeholder="URL"
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: spacing.MARGIN_16,
            }}>
            <TextComp
              text="Starting Period"
              style={{...styles.lableTextStyle}}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextComp
                text={selectedProjectStartDate}
                style={styles.dateTextStyle}
              />
              <TouchableOpacity
                onPress={() => {
                  setDateModalId(5);
                  showDatePicker();
                }}>
                <Image
                  source={ImagePath.IC_CALENDAR}
                  style={styles.calendarIconStyle}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: spacing.MARGIN_12,
            }}>
            <TextComp text="Ending Period" style={styles.lableTextStyle} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextComp
                text={selectedProjectEndDate}
                style={styles.dateTextStyle}
              />
              <TouchableOpacity
                onPress={() => {
                  setDateModalId(6);
                  showDatePicker();
                }}>
                <Image
                  source={ImagePath.IC_CALENDAR}
                  style={styles.calendarIconStyle}
                />
              </TouchableOpacity>
            </View>
          </View>
          <LableWithInput
            multiline={true}
            inputStyle={{...styles.inputStyle}}
            placeholder="Short Summary of Your Project"
          />
        </AnimatedComponentToggale>
      </View>
      <View style={styles.tabContainer}>
        <AnimatedComponentToggale
          initialHeight={spacing.FULL_HEIGHT / 4.3}
          tabName="TRAINING/CERTIFICATIONS">
          <LableWithInput
            lableText="Training Name"
            inputStyle={styles.inputStyle}
            placeholder="Training Name"
          />
          <LableWithInput
            lableText="Institute Name"
            inputStyle={styles.inputStyle}
            placeholder="Institute Name"
          />
        </AnimatedComponentToggale>
      </View>
      <View style={styles.tabContainer}>
        <AnimatedComponentToggale
          initialHeight={spacing.FULL_HEIGHT / 3}
          tabName="OTHER DETAILS">
          <LableWithInput
            lableText="Interests/Hobbies"
            inputStyle={styles.inputStyle}
            placeholder="Enter your Interests/Hobbies"
          />
          <LableWithInput
            lableText="Languages"
            inputStyle={{...styles.inputStyle}}
            placeholder="Enter you Languages"
          />
          <TouchableOpacity
            style={styles.languageLevelContainer}
            onPress={() => setIsLanguageLevelSelect(!isLanguageLevelSelect)}
            activeOpacity={0.8}>
            <BottonComp
              text={islanguageLevel}
              style={{height: spacing.HEIGHT_46, borderColor: '#fff'}}
              textStyle={{color: '#463196'}}
            />
            <Image source={ImagePath.IC_DOWN_ARROW} />
          </TouchableOpacity>
        </AnimatedComponentToggale>
      </View>
      <View style={styles.summaryContainer}>
        <TextComp
          text="Write Your Summary"
          style={styles.summaryTextHeadingStyle}
        />
        <TextInput
          style={styles.summaryTextInput}
          multiline={true}
          value={profileSummary}
          onChangeText={e => setProfileSummary(e)}
        />
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {isGenderSelect ? (
        <View
          style={{
            alignSelf: 'center',
            ...boxShadow(),
            backgroundColor: '#fff',
            position: 'absolute',
            top: spacing.HEIGHT_210,
            right: spacing.WIDTH_32,
          }}>
          {dummyData.map(item => {
            return (
              <View
                style={{paddingHorizontal: spacing.PADDING_20}}
                key={item.id}>
                <TouchableOpacity
                  style={{
                    height: spacing.HEIGHT_30,
                    borderBottomWidth: item.id == dummyData.length ? 0 : 0.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => gender(item.title1)}
                  activeOpacity={0.7}>
                  <TextComp
                    text={item.title1}
                    style={{
                      color: '#0F0C1A',
                      fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
                      fontSize: textScale(12),
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      ) : null}
      {isLanguageLevelSelect ? (
        <View style={styles.languageLevelModalContainer}>
          {languageLevel.map(item => (
            <TouchableOpacity
              style={{
                marginHorizontal: spacing.MARGIN_16,
                marginVertical: spacing.MARGIN_6,
              }}
              onPress={e => {
                setLanguageLevel(item.level);
                setIsLanguageLevelSelect(false);
              }}
              key={String(item.id)}>
              <TextComp
                text={item.level}
                style={{
                  fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
                  fontSize: textScale(14),
                  color: '#463196',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
    </VirtualizedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  btnForProfileCard: {
    width: spacing.FULL_WIDTH / 2.5,
    height: spacing.HEIGHT_50,
    marginHorizontal: spacing.MARGIN_16,
  },
  tabContainer: {
    alignItems: 'center',
    marginHorizontal: spacing.MARGIN_18,
    backgroundColor: '#fff',
    ...boxShadow(),
    marginVertical: spacing.MARGIN_18,
    borderRadius: spacing.RADIUS_8,
    flex: 1,
  },
  btnContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: spacing.FULL_WIDTH / 1.2,
    height: spacing.HEIGHT_50,
    marginVertical: spacing.MARGIN_4,
  },
  coverImgStyle: {
    width: spacing.FULL_WIDTH / 1.2,
    height: spacing.HEIGHT_128,
    borderRadius: spacing.RADIUS_8,
    maxHeight: spacing.HEIGHT_128,
    maxWidth: spacing.FULL_WIDTH / 1.1,
    alignSelf: 'center',
  },
  basicDetailsSubBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputStyle: {
    marginHorizontal: spacing.MARGIN_8,
    height: spacing.HEIGHT_48,
  },
  btnForProfileCardTextStyle: {
    color: '#463196',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 1,
    fontSize: textScale(12),
  },
  personDetailsContainer: {
    justifyContent: 'center',
  },
  lableTextStyle: {
    color: '#463196',
    fontSize: textScale(14),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
  },
  calendarIconStyle: {
    resizeMode: 'contain',
    width: spacing.WIDTH_18,
    height: spacing.HEIGHT_18,
    marginHorizontal: spacing.MARGIN_10,
  },
  locationTextInputStyle: {
    borderBottomWidth: 0.6,
    fontSize: textScale(11),
    paddingLeft: spacing.PADDING_10,
    color: '#000',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    borderColor: '#C8C1DF',
  },
  genderContainer: {
    width: spacing.WIDTH_95,
    height: spacing.HEIGHT_30,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    ...boxShadow(),
    backgroundColor: '#fff',
  },
  genderText: {
    color: '#0d0d0d',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(11),
  },
  dateTextStyle: {
    color: '#0d0d0d',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(11),
  },
  languageLevelContainer: {
    marginBottom: spacing.MARGIN_16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.PADDING_20,
    backgroundColor: '#fff',
    borderRadius: spacing.RADIUS_8,
    marginTop: spacing.MARGIN_16,
    ...boxShadow('#000d0d', {height: 3, width: 1}, 2, 1),
    marginHorizontal: spacing.MARGIN_8,
  },
  summaryContainer: {
    marginHorizontal: spacing.MARGIN_18,
    height: spacing.FULL_HEIGHT / 3,
    marginBottom: spacing.MARGIN_30,
    borderRadius: spacing.RADIUS_8,
    ...boxShadow(),
    backgroundColor: '#fff',
  },
  summaryTextHeadingStyle: {
    paddingLeft: spacing.PADDING_16,
    paddingTop: spacing.PADDING_16,
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 1,
    fontSize: textScale(14),
    color: '#878787',
  },
  summaryTextInput: {
    padding: spacing.PADDING_16,
    color: '#0d0d0d',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(14),
  },
  languageLevelModalContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: spacing.HEIGHT_150,
    alignSelf: 'center',
    left: spacing.WIDTH_40,
    borderWidth: 1,
    borderColor: '#878787',
    borderRadius: spacing.RADIUS_8,
  },
});
