import {StyleSheet} from 'react-native';
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

const Home = () => {
  const [search, setSearch] = useState('');
  const categoryType = useSelector(state => state?.categoryPost?.selectedItem);
  const filterData = useSelector(state => state?.categoryPost?.setFilters);
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
});
