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
import MessageDetails from '../../row/Message/MessageDetails';
import {spacing} from '../../../styles/spacing';
import {textScale} from '../../../styles/responsiveStyles';
import ImagePath from '../../../Utills/ImagePath';
import ModalComp from '../../common/ModalComp';

const dummyData = [
  {
    name: 'Zubair',
    massage: `Hello what's up?`,
    sendTime: '18:09',
    DP: ImagePath.DP,
    id: 1,
  },
  {
    name: 'Zubair',
    massage: `Hello what's up?`,
    sendTime: '18:09',
    DP: ImagePath.DP,
    id: 2,
  },
  {
    name: 'Zubair',
    massage: `Hello what's up?`,
    sendTime: '18:09',
    DP: ImagePath.DP,
    id: 3,
  },
  {
    name: 'Zubair',
    massage: `Hello what's up?`,
    sendTime: '18:09',
    DP: ImagePath.DP,
    id: 4,
  },
  {
    name: 'Zubair',
    massage: `Hello what's up?`,
    sendTime: '18:09',
    DP: ImagePath.DP,
    id: 5,
  },
  {
    name: 'Zubair',
    massage: `Hello what's up?`,
    sendTime: '18:09',
    DP: ImagePath.DP,
    id: 6,
  },
  {
    name: 'Zubair',
    massage: `Hello what's up?`,
    sendTime: '18:09',
    DP: ImagePath.DP,
    id: 7,
  },
  {
    name: 'Zubair',
    massage: `Hello what's up?`,
    sendTime: '18:09',
    DP: ImagePath.DP,
    id: 8,
  },
  {
    name: 'Zubair',
    massage: `Hello what's up?`,
    sendTime: '18:09',
    DP: ImagePath.DP,
    id: 9,
  },
  {
    name: 'Zubair',
    massage: `Hello what's up?`,
    sendTime: '18:09',
    DP: ImagePath.DP,
    id: 10,
  },
  {
    name: 'Zubair',
    massage: `Hello what's up?`,
    sendTime: '18:09',
    DP: ImagePath.DP,
    id: 11,
  },
  {
    name: 'Zubair',
    massage: `Hello what's up?`,
    sendTime: '18:09',
    DP: ImagePath.DP,
    id: 12,
  },
];

const renderItem = ({item, index}) => {
  return (
    <View style={[styles.statusContainer]}>
      <Image source={index === 0 ? ImagePath.IC_UPLOAD_IMG : ImagePath.DP} />
    </View>
  );
};

const Message = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={{}}>
      <FlatList
        data={dummyData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
      />
      <View
        style={{
          marginHorizontal: spacing.MARGIN_16,
          marginVertical: spacing.MARGIN_20,
        }}>
        <View style={styles.inputStyle}>
          <TextInput
            placeholder="Search Here.."
            placeholderTextColor={'#C8C1DF'}
            style={styles.inputTextStyle}
            value={search}
            onChangeText={e => setSearch(e)}
          />
          <Image source={ImagePath.IC_SEARCH} style={{tintColor: '#C8C1DF'}} />
        </View>
      </View>
      <View style={styles.massegeContainer}>
        <View
          style={{
            marginBottom: spacing.MARGIN_60,
            paddingTop: spacing.PADDING_20,
          }}>
          <FlatList
            data={dummyData}
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return <MessageDetails item={item} index={index} />;
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  statusContainer: {
    marginHorizontal: spacing.MARGIN_10,
    alignSelf: 'center',
    marginTop: spacing.MARGIN_20,
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: spacing.RADIUS_8,
    borderColor: '#C8C1DF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.PADDING_16,
    opacity: 0.96,
  },
  inputTextStyle: {
    color: '#0F0C1AD6',
    fontSize: textScale(12),
    flex:1
  },
  massegeContainer: {
    borderTopRightRadius: spacing.RADIUS_50,
    borderTopLeftRadius: spacing.RADIUS_50,
    backgroundColor: '#F5F2FF',
    minHeight: spacing.FULL_HEIGHT / 2,
    height: spacing.FULL_HEIGHT / 1.4,
  },
});
