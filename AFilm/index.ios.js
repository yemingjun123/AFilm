/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// import Base5 from './app/base/base5.js';
// import Base6 from './app/base/base6.js';
import MovieList from './app/ComponentsOS/MovieList.js';

import {
  AppRegistry,
} from 'react-native';

export default class AFilm extends Component {
  render() {
    return (
      <MovieList />
    );
  }
}

AppRegistry.registerComponent('AFilm', () => AFilm);
