import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {textScale} from '../../styles/responsiveStyles';
import WapperContainer from '../../Components/common/WapperContainer';
import SerachBar from '../../Components/common/SerachBar';
import ImagePath from '../../Utills/ImagePath';
import {spacing} from '../../styles/spacing';
import {fontNames} from '../../styles/typography';
import TextComp from '../../Components/common/TextComp';
import TextImputComp from '../../Components/common/TextImputComp';
import BottonComp from '../../Components/common/BottonComp';
import { boxShadow } from '../../styles/Mixins';

const dummyData = [
  {title1: 'Jobs', id: '1'},
  {title1: 'Intership', id: '2'},
  {title1: 'Company', id: '3'},
  {title1: 'Professions', id: '4'},
];
const Corporate = () => {
  const [job, setJob] = useState('');
  const [location, setLocation] = useState('');
  const [isJobSelectOpen, setIsJobSelectionOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('Jobs');

  const jobList = jobTitle => {
    setSelectedJob(jobTitle);
    setIsJobSelectionOpen(false);
  };
  return (
    <WapperContainer>
      <SerachBar
        placeholder={'Search here..'}
        source3={ImagePath.IC_MENU}
        Icon3={styles.addPopleIconStyle}
      />
      <View style={styles.popularTextHeadingContainer}>
        <TextComp
          text="Popular Organizations In India"
          style={styles.popularTextHeadingStyle}
        />
        <Image source={ImagePath.IC_SETTING} style={styles.filterIconStyle} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: spacing.MARGIN_16,
        }}>
        <TextImputComp
          placeholder="Job Title..."
          value={job}
          onChangeText={e => setJob(e)}
          searchIcon={true}
          appIcons={false}
          profileImage={false}
          inputStyle={{
            elevation: 4,
            flex: 1,
            paddingHorizontal: spacing.PADDING_10,
          }}
        />
        <TextImputComp
          placeholder="Job Location..."
          value={location}
          onChangeText={e => setLocation(e)}
          searchIcon={true}
          appIcons={false}
          profileImage={false}
          inputStyle={{
            elevation: 4,
            flex: 1,
            marginLeft: spacing.MARGIN_16,
            paddingHorizontal: spacing.PADDING_10,
          }}
        />
      </View>
      <View
        style={{
          marginHorizontal: spacing.MARGIN_16,
        }}>
        <BottonComp
          text={selectedJob || 'Jobs'}
          style={{
            alignSelf: 'center',
            width: spacing.FULL_WIDTH / 1.1,
            height: spacing.HEIGHT_50,
            elevation: 4,
            borderWidth: 0.5,
          }}
          onPress={e => setIsJobSelectionOpen(!isJobSelectOpen)}
        />
      </View>
      {isJobSelectOpen ? (
        <View
          style={{
            width: spacing.FULL_WIDTH / 1.1,
            alignSelf: 'center',
            // borderWidth: 0.5,
            ...boxShadow(),
            backgroundColor:'#fff'
          }}>
          {dummyData.map(item => {
            return (
              <View
                style={{paddingHorizontal: spacing.PADDING_20}}
                key={item.id}>
                <TouchableOpacity
                  style={{
                    height: spacing.HEIGHT_50,
                    borderBottomWidth: item.id == dummyData.length ? 0 : 0.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => jobList(item.title1)}>
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
    </WapperContainer>
  );
};

export default Corporate;

const styles = StyleSheet.create({
  popularTextHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: spacing.MARGIN_16,
  },
  popularTextHeadingStyle: {
    color: '#463196',
    fontSize: textScale(16),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    marginLeft: spacing.MARGIN_12,
  },
  filterIconStyle: {
    width: spacing.WIDTH_20,
    height: spacing.HEIGHT_16,
    tintColor: '#463196',
  },
  addPopleIconStyle: {
    width: spacing.WIDTH_34,
    height: spacing.HEIGHT_34,
    tintColor: '#0F0C1A',
    resizeMode: 'contain',
  },
});
