import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {spacing} from '../../../styles/spacing';
import ImagePath from '../../../Utills/ImagePath';
import TextComp from '../../../Components/TextComp';
import commonStyle from '../../../styles/commonStyle';
import {fontNames} from '../../../styles/typography';
import {textScale} from '../../../styles/responsiveStyles';

const CollumeList = ({item, index}) => {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          flexDirection: 'row',
          //   alignItems: 'center',
          //   justifyContent: 'space-between',
          marginTop:spacing.MARGIN_10
        }}>
        <Image source={ImagePath.Profile} />
        <View style={{marginHorizontal: spacing.MARGIN_8}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{...commonStyle.flexRow, alignItems: 'center'}}>
              <TextComp
                text={item.item.userName}
                style={{
                  color: '#0F0C1A',
                  fontFamily: fontNames.POPPINS_FONT_FAMILY_SEMI_BOLD,
                  fontSize: textScale(13),
                  marginTop: 2,
                }}
              />
              <TextComp
                text={item.item.hiring}
                style={{
                  color: '#f2d4a0',
                  fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
                  fontSize: textScale(10),
                  marginLeft: spacing.MARGIN_4,
                  fontWeight: '800',
                }}
              />
            </View>

            <View
              style={{
                ...commonStyle.flexRow,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={ImagePath.IC_HOURS}
                style={{
                  width: spacing.WIDTH_14,
                  height: spacing.HEIGHT_14,
                  resizeMode: 'contain',
                  marginRight: spacing.MARGIN_4,
                  tintColor: '#ABABAB',
                }}
              />
              <TextComp
                text={'2Hrs ago'}
                style={{
                  color: '#ABABAB',
                  fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
                  fontSize: textScale(10),
                  opacity: 0.76,
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={ImagePath.IC_STUDENT}
              style={{
                width: spacing.WIDTH_14,
                height: spacing.HEIGHT_14,
                resizeMode: 'contain',
                marginHorizontal: spacing.MARGIN_4,
              }}
            />
            <TextComp
              text={item.item.profession}
              style={{
                color: '#7A7880',
                opacity: 0.76,
                fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
                fontSize: textScale(10),
              }}
            />
            <View
              style={{
                width: spacing.WIDTH_1,
                height: spacing.HEIGHT_10,
                backgroundColor: '#ABABAB',
                margin: spacing.MARGIN_4,
                opacity: 0.76,
              }}
            />
            <TextComp
              text={item.item.collegeName}
              style={{
                color: '#7A7880',
                opacity: 0.76,
                fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
                fontSize: textScale(10),
              }}
            />
          </View>
        </View>
        <Image
          source={ImagePath.IC_MENU}
          style={{
            tintColor: '#6753a3',
            marginTop: spacing.MARGIN_10,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={{marginHorizontal: spacing.MARGIN_10}}>
        <View style={styles.horizontalLineStyle} />
        <TextComp
          text={item.item.requiredTask}
          style={{
            color: '#0F0C1A',
            fontSize: textScale(12),
            fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
            opacity: 1,
          }}
        />
        <TextComp
          text={item.item.requiredTaskDescription}
          style={{
            color: '#484651',
            fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
            fontSize: textScale(11),
            opacity: 1,
          }}
        />
        <View
          style={{
            ...styles.horizontalLineStyle,
            borderWidth: 0.2,
            borderColor: '#C8C1DF',
            opacity: 0.62,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: spacing.MARGIN_12,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={ImagePath.IC_LIKE_CLLAPING}
              style={{
                tintColor: '#484651',
                opacity: 0.7,
                width: spacing.WIDTH_18,
                height: spacing.HEIGHT_18,
                // marginBottom:spacing.MARGIN_4
              }}
            />
            <TextComp
              text="125"
              style={{
                color: '#0F0C1A',
                fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
                fontSize: textScale(12),
                marginHorizontal: spacing.MARGIN_8,
                textAlign: 'center',
                paddingTop: spacing.PADDING_6,
              }}
            />
            <Image
              source={ImagePath.IC_COMMENTS}
              style={{
                tintColor: '#484651',
                opacity: 0.7,
                width: spacing.WIDTH_18,
                height: spacing.HEIGHT_18,
              }}
            />
            <TextComp
              text="125"
              style={{
                color: '#0F0C1A',
                fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
                fontSize: textScale(12),
                marginHorizontal: spacing.MARGIN_8,
                textAlign: 'center',
                paddingTop: spacing.PADDING_6,
              }}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={ImagePath.IC_SEND}
              style={{
                tintColor: '#484651',
                opacity: 0.7,
                width: spacing.WIDTH_24,
                height: spacing.HEIGHT_24,
                transform: [{rotate: '320deg'}],
              }}
            />
            <TextComp
              text="125"
              style={{
                color: '#0F0C1A',
                fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
                fontSize: textScale(12),
                marginHorizontal: spacing.MARGIN_8,
                textAlign: 'center',
                paddingTop: spacing.PADDING_10,
              }}
            />
          </View>
        </View>
        <View
          style={{
            ...styles.horizontalLineStyle,
            borderWidth: 0.2,
            borderColor: '#C8C1DF',
            opacity: 0.62,
          }}
        />

        <View
          style={{
            marginHorizontal: spacing.MARGIN_16,
            marginBottom: spacing.MARGIN_16,
          }}>
          <TextComp
            text={'View all options (125)'}
            style={{
              color: '#1BA643',
              opacity: 0.76,
              fontSize: textScale(10),
              fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={ImagePath.Profile} />
            <TextInput
              placeholder="Write an option..."
              placeholderTextColor={'#0F0C1A'}
              style={{
                flex: 1,
                color: '#0F0C1A',
                fontSize: textScale(11),
                opacity: 0.76,
                fontFamily: fontNames.POPPINS_FONT_FAMILY_REGULAR,
                borderBottomWidth: 0.5,
              }}
            />
            <Image
              source={ImagePath.IC_SHARE_POST}
              style={{
                width: spacing.WIDTH_22,
                height: spacing.HEIGHT_22,
                tintColor: '#0F0C1A',
                transform: [{rotate: '45deg'}],
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CollumeList;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fffefe',
    elevation: 4,
    alignSelf: 'center',
    marginVertical: spacing.MARGIN_16,
    borderRadius: spacing.RADIUS_4,
  },
  horizontalLineStyle: {
    borderTopWidth: 1,
    marginVertical: spacing.MARGIN_8,
    borderColor: '#0F0C1A',
    opacity: 1,
    borderWidth: 1,
  },
});
