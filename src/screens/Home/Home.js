import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import WapperContainer from '../../Components/common/WapperContainer';
import SerachBar from '../../Components/common/SerachBar';
import {spacing} from '../../styles/spacing';
import VirtualizedView from '../../Components/common/VirtualizedView';
import HomeStatusBar from '../../Components/Modules/Home/HomeStatusBar';
import CategoryList from '../../Components/Modules/Home/CategoryList';
import SuggestionLinkList from '../../Components/Modules/Home/SuggestionLinkList';
import AllPostList from '../../Components/Modules/Home/AllPostList';
import PostInputContainer from '../../Components/Modules/Home/PostInputContainer';
import {useSelector} from 'react-redux';
import ReviewList from '../../Components/Modules/Home/ReviewList';
import ReviewDetails from '../../Components/row/Home/ReviewDetails';
import {filterPost} from '../../Redux/actions/post';
import LinksList from '../../Components/Modules/Home/LinksList';
import {useNavigation} from '@react-navigation/native';
import navigationString from '../../Navigation/navigationString';
import TextComp from '../../Components/common/TextComp';
import {fontNames} from '../../styles/typography';
import {textScale} from '../../styles/responsiveStyles';

const Home = () => {
  const [search, setSearch] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const categoryType = useSelector(state => state?.categoryPost?.selectedItem);
  const filterData = useSelector(state => state?.categoryPost?.setFilters);
  const navigation = useNavigation();
  const handalNavigation = () => {
    navigation.navigate(navigationString.EDIT_PROFILE);
    setIsVisible(false);
  };
  // const types = filterData.forEach(item => item)
  // console.log(types);
  // filterPost(categoryType);

  // console.log(categoryType === 'allPostlist');
  // console.log("categoryType >>",categoryType);

  return (
    <WapperContainer>
      <VirtualizedView>
        <SerachBar
          placeholder={'Search here..'}
          value={search}
          onChangeText={e => setSearch(e)}
          msgOnpress={() => navigation.navigate(navigationString.TOP_TAB_BAR)}
          menuPress={() => setIsVisible(!isVisible)}
        />
        <HomeStatusBar />
        <PostInputContainer />
        <CategoryList />
        {categoryType === 'allPostlist' && <SuggestionLinkList />}

        {categoryType === 'allPostlist' ? (
          <AllPostList />
        ) : categoryType === 'Review' ? (
          <ReviewList />
        ) : categoryType === 'Links' ? (
          <LinksList />
        ) : null}
        {isVisible ? (
          <TouchableOpacity
            style={styles.editModal}
            onPress={handalNavigation}
            activeOpacity={0.8}>
            <TextComp text={'Edit Profile'} style={styles.editText} />
          </TouchableOpacity>
        ) : null}
      </VirtualizedView>
    </WapperContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  addIconStyle: {
    width: spacing.WIDTH_34,
    height: spacing.HEIGHT_34,
    tintColor: '#0F0C1A',
    resizeMode: 'contain',
  },
  editModal: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: spacing.WIDTH_90,
    height: spacing.HEIGHT_40,
    right: spacing.WIDTH_30,
    top: spacing.HEIGHT_46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: spacing.RADIUS_6,
  },
  editText: {
    color: '#0F0C1A',
    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
    fontSize: textScale(12),
  },
});
