import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {textScale} from '../../styles/responsiveStyles';
import WapperContainer from '../../Components/WapperContainer';
import SerachBar from '../../Components/SerachBar';
import ImagePath from '../../Utills/ImagePath';
import {spacing} from '../../styles/spacing';
import HomePostEvent from '../../Components/row/HomePostEvent';
import TextImputComp from '../../Components/TextImputComp';
import TextComp from '../../Components/TextComp';
import {fontNames} from '../../styles/typography';
import CollumeList from './collumeListDetails/CollumeList';

const dummydata = [
  {
    id: 1,
    userName: 'Argha Paul',
    hiring: 'Hiring',
    profession: 'student',
    collegeName: 'Lyallpur college of Technology',
    requiredTask: 'Graphic designer required!',
    requiredTaskDescription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
  },
  {
    id: 2,
    userName: 'Argha Paul',
    hiring: 'Hiring',
    profession: 'student',
    collegeName: 'Lyallpur college of Technology',
    requiredTask: 'Graphic designer required!',
    requiredTaskDescription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
  },
  {
    id: 3,
    userName: 'Argha Paul',
    hiring: 'Hiring',
    profession: 'student',
    collegeName: 'Lyallpur college of Technology',
    requiredTask: 'Graphic designer required!',
    requiredTaskDescription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
  },
  {
    id: 4,
    userName: 'Argha Paul',
    hiring: 'Hiring',
    profession: 'student',
    collegeName: 'Lyallpur college of Technology',
    requiredTask: 'Graphic designer required!',
    requiredTaskDescription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
  },
];

const Home = () => {
  const [postComment, setPostComments] = useState('');
  return (
    <WapperContainer>
      <SerachBar
        placeholder={'Search here..'}
        source3={ImagePath.IC_APP_PEOPLE}
        Icon3={{
          width: spacing.WIDTH_22,
          height: spacing.HEIGHT_22,
          tintColor: '#0F0C1A',
        }}
      />
      <HomePostEvent />
      <View style={{marginHorizontal: spacing.MARGIN_16, flex: 1}}>
        <TextImputComp
          inputStyle={{elevation: 5}}
          placeholder={`What's in your mind,Argha ?`}
          value={postComment}
          onChangeText={e => setPostComments(e)}
        />
        <TextComp
          text="Suggested Links"
          style={{
            textAlign: 'center',
            color: '#0F0C1A',
            fontSize: textScale(16),
            fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
          }}
        />

        <FlatList
          data={dummydata}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={(item, index) => {
            return <CollumeList item={item} index={index} />;
          }}
        />
      </View>
    </WapperContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
