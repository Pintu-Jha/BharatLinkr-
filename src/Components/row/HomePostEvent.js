import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {spacing} from '../../styles/spacing';
import ImagePath from '../../Utills/ImagePath';
import TextComp from '../TextComp';
import {fontNames} from '../../styles/typography';

const dummyData = [
  {id: 1, lableText: 'Post an Event'},
  {id: 2, lableText: 'Kanika'},
  {id: 3, lableText: 'Noor'},
  {id: 4, lableText: 'Zubs'},
  {id: 5, lableText: 'Pintu'},
];

const renderItem = ({item, index}) => {
  return (
    <View
      style={{
        marginVertical: spacing.MARGIN_20,
        marginHorizontal: spacing.MARGIN_14,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: spacing.WIDTH_80,
          height: spacing.HEIGHT_80,
          borderWidth: 1.5,
          borderColor: '#6753a3',
          borderRadius: spacing.RADIUS_30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Image
            source={
              index === 0
                ? ImagePath.IC_ADD_POST
                : ImagePath.STATUS_PERSON_IMAGE
            }
            style={
              index === 0
                ? null
                : {
                    width: spacing.WIDTH_68,
                    height: spacing.HEIGHT_68,
                    resizeMode: 'cover',
                    borderRadius: spacing.RADIUS_24,
                  }
            }
          />
        </View>
      </View>
      <TextComp
        text={item.lableText}
        style={{
          marginVertical: spacing.MARGIN_8,
          color: '#000',
          fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
        }}
      />
    </View>
  );
};

const HomePostEvent = () => {
  return (
    <View>
      <FlatList
        data={dummyData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomePostEvent;

const styles = StyleSheet.create({});
