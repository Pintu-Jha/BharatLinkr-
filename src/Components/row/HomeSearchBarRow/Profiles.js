import React, {useState} from 'react';
import {Button, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {boxShadow} from '../../../styles/Mixins';
import ImagePath from '../../../Utills/ImagePath';
import {spacing} from '../../../styles/spacing';
import TextComp from '../../common/TextComp';
import {fontNames} from '../../../styles/typography';
import {textScale} from '../../../styles/responsiveStyles';
import VirtualizedView from '../../common/VirtualizedView';
import BottonComp from '../../common/BottonComp';

// const renderItem = ({item}) => {
//   return (
//     <View key={item.id} style={styles.itemContainer}>
//       <Image source={ImagePath.COVER_PHOTO} style={styles.coverImg} />

//       <View style={{flexDirection: 'row'}}>
//         <View
//           style={{
//             paddingHorizontal: spacing.PADDING_16,
//             position: 'relative',
//             flex: 0.2,
//           }}>
//           <View style={styles.profileContainer}>
//             <Image
//               source={ImagePath.Profile}
//               style={{alignSelf: 'center', bottom: -3}}
//             />
//           </View>
//         </View>
//         <View style={{flex: 1}}>
//           <TextComp text={item.useName} style={styles.userNameText} />
//           <TextComp text={item.profession} style={styles.professionText} />
//           <View
//             style={{
//               flexDirection: 'row',
//             }}>
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <TextComp
//                 text="Links:"
//                 style={{...styles.professionText, color: '#1BA643'}}
//               />
//               <TextComp
//                 text={item.links}
//                 style={{...styles.professionText, color: '#0F0C1A'}}
//               />
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 marginLeft: spacing.MARGIN_8,
//               }}>
//               <TextComp
//                 text="Followers:"
//                 style={{...styles.professionText, color: '#1BA643'}}
//               />
//               <TextComp
//                 text={item.follwers}
//                 style={{...styles.professionText, color: '#0F0C1A'}}
//               />
//             </View>
//           </View>
//         </View>
//       </View>
//       <Image source={ImagePath.IC_MENU} style={styles.menuIcon} />
//       <View style={styles.btnContainer}>
//         <BottonComp
//           text="Link"
//           style={{...styles.btnStyle, backgroundColor: '#C8C1DF'}}
//           textStyle={styles.btnTextStyle}
//         />
//         <BottonComp
//           text="Follow"
//           style={{
//             width: spacing.WIDTH_50,
//             height: spacing.HEIGHT_24,
//             marginHorizontal: spacing.MARGIN_4,
//           }}
//           textStyle={styles.btnTextStyle}
//         />
//         <BottonComp
//           text="Activity"
//           style={styles.btnStyle}
//           textStyle={styles.btnTextStyle}
//         />
//       </View>
//     </View>
//   );
// };

const Profiles = ({data, initialCount}) => {
  // const [showAll, setShowAll] = useState(false);
  // const visibleData = showAll ? data : data.slice(0, initialCount);

  const toggleShowAll = () => {
    setShowAll(prevShowAll => !prevShowAll);
  };
  return (
    <VirtualizedView>
      {/* {data.length > initialCount && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: spacing.PADDING_16,
          }}>
          <TextComp
            text="Profile"
            style={{
              color: '#463196',
              fontFamily: fontNames.POPPINS_FONT_FAMILY_BOLD,
              fontSize: textScale(16),
              textDecorationLine: 'underline',
            }}
          />
          <TextComp
            text={showAll ? 'Show Less' : 'See More'}
            onPress={toggleShowAll}
            style={styles.button}
          />
        </View>
      )} */}
      {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <FlatList
          data={visibleData}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={{
            padding: spacing.PADDING_10,
          }}
          initialNumToRender={initialCount}
          maxToRenderPerBatch={initialCount + 5}
          updateCellsBatchingPeriod={50}
        />
      </View> */}
    </VirtualizedView>
  );
};
export default Profiles;

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: spacing.MARGIN_10,
    marginHorizontal: spacing.MARGIN_4,
    backgroundColor: '#fff',
    borderRadius: spacing.RADIUS_10,
    ...boxShadow(),
  },
  coverImg: {
    height: spacing.HEIGHT_60,
    width: spacing.WIDTH_176,
    resizeMode: 'cover',
    borderTopLeftRadius: spacing.RADIUS_10,
    borderTopRightRadius: spacing.RADIUS_10,
  },
  profileContainer: {
    width: spacing.WIDTH_40,
    height: spacing.HEIGHT_40,
    borderRadius: spacing.HEIGHT_40 / 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -spacing.HEIGHT_24,
    left: spacing.WIDTH_10,
  },
  userNameText: {
    color: '#0F0C1A',
    fontSize: textScale(10),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 1,
  },
  professionText: {
    color: '#7A7880',
    fontSize: textScale(10),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 0.76,
  },
  menuIcon: {
    position: 'absolute',
    top: spacing.HEIGHT_10,
    tintColor: '#fff',
    right: spacing.WIDTH_6,
    resizeMode: 'contain',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: spacing.PADDING_10,
  },
  btnTextStyle: {
    color: '#0F0C1A',
    fontSize: textScale(10),
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    opacity: 0.76,
  },
  btnStyle: {
    width: spacing.WIDTH_50,
    height: spacing.HEIGHT_24,
  },
});
