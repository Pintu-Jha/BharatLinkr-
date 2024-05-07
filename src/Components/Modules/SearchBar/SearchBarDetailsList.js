import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SerachBar from '../../common/SerachBar';
import {spacing} from '../../../styles/spacing';
import TextComp from '../../common/TextComp';
import {boxShadow, boxShadowLess} from '../../../styles/Mixins';
import {fontNames} from '../../../styles/typography';
import {textScale} from '../../../styles/responsiveStyles';
import Profiles from '../../row/HomeSearchBarRow/Profiles';
import Colleges from '../../row/HomeSearchBarRow/Colleges';
import Corporate from '../../row/HomeSearchBarRow/Corporate';
import Organisation from '../../row/HomeSearchBarRow/Organisation';
import Scripts from '../../row/HomeSearchBarRow/Scripts';
import ANNOUNCEMENTS from '../../row/HomeSearchBarRow/ANNOUNCEMENTS';
import Jobs from '../../row/HomeSearchBarRow/Jobs';
import Internships from '../../row/HomeSearchBarRow/Internships';
import Mentoring from '../../row/HomeSearchBarRow/Mentoring';
import QuestionBank from '../../row/HomeSearchBarRow/QuestionBank';
import OfferServices from '../../row/HomeSearchBarRow/OfferServices';
import CollegeFestives from '../../row/HomeSearchBarRow/CollegeFestives';
import Scholarship from '../../row/HomeSearchBarRow/Scholarship';
import CulturalEvents from '../../row/HomeSearchBarRow/CulturalEvents';
import Confetences from '../../row/HomeSearchBarRow/Confetences';
import Competitions from '../../row/HomeSearchBarRow/Competitions';
import Hackathon from '../../row/HomeSearchBarRow/Hackathon';
import HiringChallenge from '../../row/HomeSearchBarRow/HiringChallenge';
import CampusRecruitment from '../../row/HomeSearchBarRow/CampusRecruitment';
import Courses from '../../row/HomeSearchBarRow/Courses';
import Exams from '../../row/HomeSearchBarRow/Exams';
import ImagePath from '../../../Utills/ImagePath';
import All from '../../row/HomeSearchBarRow/All';

const SearchBarDetailsList = () => {
  const [search, setSearch] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);
  const [profileOption, setProfileOption] = useState(false);
  const [ProfileUser, setProfileUser] = useState('');
  const Tab = [
    {
      tab: 'All',
      id: 0,
    },
    {
      tab: 'Profiles',
      id: 1,
    },
    {
      tab: 'Colleges',
      id: 2,
    },
    {
      tab: 'Corporate',
      id: 3,
    },
    {
      tab: 'Organisation',
      id: 4,
    },
    {
      tab: 'Scripts',
      id: 5,
    },
    {
      tab: 'ANNOUNCEMENTS',
      id: 6,
    },
    {
      tab: 'Jobs',
      id: 7,
    },
    {
      tab: 'Internships',
      id: 8,
    },
    {
      tab: 'Mentoring',
      id: 9,
    },
    {
      tab: 'Question Bank',
      id: 10,
    },
    {
      tab: 'Offer Services',
      id: 11,
    },
    {
      tab: 'College Festives',
      id: 12,
    },
    {
      tab: 'Scholarship',
      id: 13,
    },
    {
      tab: 'Cultural Events',
      id: 14,
    },
    {
      tab: 'Confetences',
      id: 15,
    },
    {
      tab: 'Competitions',
      id: 16,
    },
    {
      tab: 'Hackathon',
      id: 17,
    },
    {
      tab: 'Hiring Challenge',
      id: 18,
    },
    {
      tab: 'Campus Recruitment',
      id: 19,
    },
    {
      tab: 'Courses',
      id: 20,
    },
    {
      tab: 'Exams',
      id: 21,
    },
  ];
  const dummydata = [
    {
      useName: 'Argha Paul 1',
      profession: 'Student Jalandhar,P..',
      links: 0,
      follwers: '40K',
      id: 1,
      BasicInfo:
        'hello everyone my name is pintu i am a student of b, tech (CSE).',
      Highest_Education: 'B.Tech Computer Science And Engineering',
      Total_Experince: 'Hello | instep | Tech',
      Area_Of_Expertise: 'i have know in React native',
      Accompleshment: 'Top',
    },
    {
      useName: 'Argha Paul 2',
      profession: 'Student Jalandhar,P..',
      links: 0,
      follwers: '40K',
      id: 2,
      BasicInfo:
        'hello everyone my name is pintu i am a student of b, tech (CSE).',
      Highest_Education: 'B.Tech Computer Science And Engineering',
      Total_Experince: 'Hello | instep | Tech',
      Area_Of_Expertise: 'i have know in React native',
      Accompleshment: 'Top',
    },
    {
      useName: 'Argha Paul 3',
      profession: 'Student Jalandhar,P..',
      links: 0,
      follwers: '40K',
      id: 3,
      BasicInfo:
        'hello everyone my name is pintu i am a student of b, tech (CSE).',
      Highest_Education: 'B.Tech Computer Science And Engineering',
      Total_Experince: 'Hello | instep | Tech',
      Area_Of_Expertise: 'i have know in React native',
      Accompleshment: 'Top',
    },
    {
      useName: 'Argha Paul 4',
      profession: 'Student Jalandhar,P..',
      links: 0,
      follwers: '40K',
      id: 4,
      BasicInfo:
        'hello everyone my name is pintu i am a student of b, tech (CSE).',
      Highest_Education: 'B.Tech Computer Science And Engineering',
      Total_Experince: 'Hello | instep | Tech',
      Area_Of_Expertise: 'i have know in React native',
      Accompleshment: 'Top',
    },
    {
      useName: 'Argha Paul',
      profession: 'Student Jalandhar,P..',
      links: 0,
      follwers: '40K',
      id: 5,
      BasicInfo:
        'hello everyone my name is pintu i am a student of b, tech (CSE).',
      Highest_Education: 'B.Tech Computer Science And Engineering',
      Total_Experince: 'Hello | instep | Tech',
      Area_Of_Expertise: 'i have know in React native',
      Accompleshment: 'Top',
    },
    {
      useName: 'Argha Paul',
      profession: 'Student Jalandhar,P..',
      links: 0,
      follwers: '40K',
      id: 6,
      BasicInfo:
        'hello everyone my name is pintu i am a student of b, tech (CSE).',
      Highest_Education: 'B.Tech Computer Science And Engineering',
      Total_Experince: 'Hello | instep | Tech',
      Area_Of_Expertise: 'i have know in React native',
      Accompleshment: 'Top',
    },
    {
      useName: 'Argha Paul',
      profession: 'Student Jalandhar,P..',
      links: 0,
      follwers: '40K',
      id: 7,
      BasicInfo:
        'hello everyone my name is pintu i am a student of b, tech (CSE).',
      Highest_Education: 'B.Tech Computer Science And Engineering',
      Total_Experince: 'Hello | instep | Tech',
      Area_Of_Expertise: 'i have know in React native',
      Accompleshment: 'Top',
    },
    {
      useName: 'Argha Paul',
      profession: 'Student Jalandhar,P..',
      links: 0,
      follwers: '40K',
      id: 8,
      BasicInfo:
        'hello everyone my name is pintu i am a student of b, tech (CSE).',
      Highest_Education: 'B.Tech Computer Science And Engineering',
      Total_Experince: 'Hello | instep | Tech',
      Area_Of_Expertise: 'i have know in React native',
      Accompleshment: 'Top',
    },
    {
      useName: 'Argha Paul',
      profession: 'Student Jalandhar,P..',
      links: 0,
      follwers: '40K',
      id: 9,
      BasicInfo:
        'hello everyone my name is pintu i am a student of b, tech (CSE).',
      Highest_Education: 'B.Tech Computer Science And Engineering',
      Total_Experince: 'Hello | instep | Tech',
      Area_Of_Expertise: 'i have know in React native',
      Accompleshment: 'Top',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <SerachBar
        placeholder={'Search here..'}
        value={search}
        onChangeText={e => setSearch(e)}
      />
      <View
        style={{
          marginVertical: spacing.MARGIN_16,
        }}>
        <FlatList
          data={Tab}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => {
            return (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[
                    styles.tabContainer,
                    {
                      borderBottomWidth: selectedTab == item.id ? 5 : 0,
                      borderColor: selectedTab == item.id ? '#463196' : '#fff',
                    },
                  ]}
                  onPress={() => {
                    setSelectedTab(item.id);
                  }}>
                  <TextComp
                    text={item.tab}
                    style={{
                      ...styles.tabTextStyle,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => setProfileOption(!profileOption)}>
                  {selectedTab == item.id && item.id == 0 && (
                    <Image
                      source={ImagePath.IC_DOWN_ARROW}
                      style={{
                        resizeMode: 'contain',
                        width: spacing.WIDTH_14,
                        height: spacing.HEIGHT_14,
                      }}
                    />
                  )}
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      {selectedTab == 0 ? (
        <All data={dummydata} initialCount={4} />
      ) : selectedTab == 1 ? (
        <Profiles />
      ) : selectedTab == 2 ? (
        <Colleges />
      ) : selectedTab == 3 ? (
        <Corporate />
      ) : selectedTab == 4 ? (
        <Organisation />
      ) : selectedTab == 5 ? (
        <Scripts />
      ) : selectedTab == 6 ? (
        <ANNOUNCEMENTS />
      ) : selectedTab == 7 ? (
        <Jobs />
      ) : selectedTab == 8 ? (
        <Internships />
      ) : selectedTab == 9 ? (
        <Mentoring />
      ) : selectedTab == 10 ? (
        <QuestionBank />
      ) : selectedTab == 11 ? (
        <OfferServices />
      ) : selectedTab == 12 ? (
        <CollegeFestives />
      ) : selectedTab == 13 ? (
        <Scholarship />
      ) : selectedTab == 14 ? (
        <CulturalEvents />
      ) : selectedTab == 15 ? (
        <Confetences />
      ) : selectedTab == 16 ? (
        <Competitions />
      ) : selectedTab == 17 ? (
        <Hackathon />
      ) : selectedTab == 18 ? (
        <HiringChallenge />
      ) : selectedTab == 19 ? (
        <CampusRecruitment />
      ) : selectedTab == 20 ? (
        <Courses />
      ) : (
        <Exams />
      )}
      {profileOption && (
        <View
          style={{
            height: spacing.HEIGHT_200,
            width: spacing.WIDTH_124,
            backgroundColor: '#fff',
            ...boxShadow(),
            left: spacing.WIDTH_10,
            top: spacing.HEIGHT_110,
            position: 'absolute',
            paddingLeft: spacing.PADDING_12,
          }}>
          <TouchableOpacity
            onPress={() => {
              setProfileUser('All'), setProfileOption(false);
            }}>
            <TextComp text="All" style={styles.profileOptionText} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setProfileUser('People'), setProfileOption(false);
            }}>
            <TextComp text="People" style={styles.profileOptionText} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setProfileUser('Mentors'), setProfileOption(false);
            }}>
            <TextComp text="Mentors" style={styles.profileOptionText} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setProfileUser('Hr Proessional'), setProfileOption(false);
            }}>
            <TextComp text="Hr Proessional" style={styles.profileOptionText} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setProfileUser('Colleges'), setProfileOption(false);
            }}>
            <TextComp text="Colleges" style={styles.profileOptionText} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setProfileUser('Organisation'), setProfileOption(false);
            }}>
            <TextComp text="Organisation" style={styles.profileOptionText} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SearchBarDetailsList;

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    ...boxShadowLess('#00000014', {height: 2, width: 0}, 1, 1),
    marginLeft: spacing.MARGIN_16,
    marginRight: spacing.MARGIN_12,
  },
  tabTextStyle: {
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    color: '#463196',
    opacity: 0.76,
    textTransform: 'uppercase',
  },
  profileOptionText: {
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
    fontSize: textScale(14),
    opacity: 1,
    marginTop: spacing.MARGIN_8,
  },
});
