import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {spacing} from '../../../styles/spacing';
import TextComp from '../../common/TextComp';
import {textScale} from '../../../styles/responsiveStyles';
import {fontNames} from '../../../styles/typography';
import {boxShadow} from '../../../styles/Mixins';
import ImagePath from '../../../Utills/ImagePath';

const dummyData = [
  {
    msg: 'Hi! The weather today is awesome, what are your plans about going to the beach? Zubair is also coming. Lets go we will have fun together!',
    id: 1,
    time: 20.22,
  },
  {
    msg: 'I am waiting for your reply so that we can make a plan to go',
    id: 2,
    time: 12.33,
  },
  {
    msg: 'I am waiting for your reply so that we can make a plan to go',
    id: 3,
    time: 32.22,
  },
  {
    msg: 'Hi! The weather today is awesome, what are your plans about going to the beach? Zubair is also coming. Lets go we will have fun together!',
    id: 4,
    time: 21.1,
  },
];

const renderItem = ({item, index}) => {
  const isSent = item.id % 2 === 0;
  const isSend = item.id % 2 !== 0;
  const alignStyle = isSent
    ? styles.sentMessageContainer
    : styles.receivedMessageContainer;
  // console.log(isSent);
  return (
    <View style={{}}>
      <View style={alignStyle}>
        {isSent && (
          <Text
            style={[
              isSent ? styles.sentTimeText : styles.receivedTimeText,
              styles.timetextStyle,
            ]}>
            {item.time}
          </Text>
        )}
        <View
          style={[
            styles.chatContainer,
            isSent ? styles.sentMessage : styles.receivedMessage,
          ]}>
          <View
            style={[
              styles.messageContainer,
              isSent ? styles.sentMessage : styles.receivedMessage,
            ]}>
            <Text style={styles.messageText}>{item.msg}</Text>
          </View>
        </View>
        {isSend && (
          <Text
            style={[
              isSent ? styles.sentTimeText : styles.receivedTimeText,
              styles.timetextStyle,
            ]}>
            {item.time}
          </Text>
        )}
      </View>
    </View>
  );
};

const ChatListDetails = () => {
  const route = useRoute();
  const {name, image} = route.params;
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image source={image} style={{resizeMode: 'contain'}} />
        <View style={styles.nameTextContainer}>
          <TextComp text={name} style={styles.userNameText} />
          <TextComp text="Last active 17:00" style={styles.activeTimeText} />
          <TextComp />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginVertical: spacing.MARGIN_16,
        }}>
        <FlatList
          data={dummyData}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={renderItem}
          inverted={true}
        />
      </View>
      <View style={styles.textInputContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Image
              source={ImagePath.IC_ATTACHMENT}
              style={styles.attachmentImage}
            />
          </View>
          <TextInput
            placeholder="Type a message.."
            placeholderTextColor={'#9B9B9B'}
            style={styles.inputTextStyle}
            multiline={true}
          />
        </View>
        <View style={{}}>
          <Image
            source={ImagePath.IC_SEND_MESSAGE}
            style={{resizeMode: 'contain'}}
          />
        </View>
      </View>
    </View>
  );
};

export default ChatListDetails;

const styles = StyleSheet.create({
  userNameText: {
    color: '#0F101D',
    fontSize: textScale(18),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
  },
  activeTimeText: {
    color: '#9B9B9B',
    fontSize: textScale(12),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
  },
  container: {
    marginHorizontal: spacing.MARGIN_20,
    marginTop: spacing.MARGIN_16,
    flex: 1,
  },
  nameTextContainer: {
    padding: 0,
    marginHorizontal: spacing.MARGIN_8,
    maxHeight: spacing.MARGIN_26,
  },
  textInputContainer: {
    justifyContent: 'flex-end',
    maxHeight: spacing.HEIGHT_128,
    marginBottom: spacing.MARGIN_40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: spacing.RADIUS_20,
    paddingHorizontal: spacing.MARGIN_16,
    ...boxShadow('#2D66FE2E', {height: 8, width: 0}, 8, 0.3),
    backgroundColor: '#FFFFFF',
  },
  attachmentImage: {
    tintColor: '#9B9B9B',
    width: spacing.WIDTH_18,
    height: spacing.HEIGHT_18,
    resizeMode: 'contain',
  },
  inputTextStyle: {
    fontSize: textScale(13),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    color: '#9B9B9B',
    flex: 0.9,
    marginLeft: spacing.MARGIN_8,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#F3F3F3',
    borderTopRightRadius: spacing.RADIUS_30,
    borderTopLeftRadius: spacing.RADIUS_30,
    borderBottomLeftRadius: spacing.RADIUS_24,
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F1F9FF',
    borderTopRightRadius: spacing.RADIUS_30,
    borderTopLeftRadius: spacing.RADIUS_30,
    borderBottomRightRadius: spacing.RADIUS_24,
  },
  sentMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  receivedMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  messageContainer: {
    maxWidth: spacing.WIDTH_260,
    padding: spacing.PADDING_10,
  },
  messageText: {
    color: '#5E5E5E',
    fontSize: textScale(13),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    opacity: 1,
  },
  sentTimeText: {
    alignSelf: 'flex-end',
  },
  receivedTimeText: {
    alignSelf: 'flex-end',
  },
  chatContainer: {
    paddingVertical: spacing.PADDING_12,
    paddingHorizontal: spacing.PADDING_6,
    marginVertical: spacing.MARGIN_10,
  },
  timetextStyle: {
    color: '#9B9B9B',
    fontSize: textScale(11),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
    marginBottom: spacing.MARGIN_20,
  },
});
