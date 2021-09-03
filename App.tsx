/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';

import MovieList from './src/screens/Movies/MoviesScreen';

const App: () => Node = () => {
  const backgroundStyle = {
    backgroundColor: 'black',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <MovieList />
    </SafeAreaView>
  );
};

export default App;
