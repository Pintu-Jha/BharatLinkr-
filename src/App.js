import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Navigetor from './Navigation';
import {Provider} from 'react-redux';
import store from './Redux/store';
import FlashMessage from 'react-native-flash-message';
import {textScale} from './styles/responsiveStyles';
import {getData} from './Utills/HelperFuncation';
import {saveUserData} from './Redux/reducers/auth';
import LoadingScreen from './Components/common/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);
  const {dispatch} = store;
  useEffect(() => {
    initUser();
  }, []);

  const initUser = async () => {
    try {
      let data = await getData('userData');
      if (!!data) {
        dispatch(saveUserData(data));
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log('no data found');
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Provider store={store}>
      <Navigetor />
      <FlashMessage
        position={'top'}
        titleStyle={{
          fontSize: textScale(13),
        }}
      />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
