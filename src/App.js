import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigetor from './Navigation';
import {Provider} from 'react-redux';
import store from './Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Navigetor />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
