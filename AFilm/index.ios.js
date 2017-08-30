/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Base5 from './app/base/base5.js';

import {
  AppRegistry,
} from 'react-native';

export default class AFilm extends Component {
  render() {
    return (
      <Base5 />
    );
  }
}

AppRegistry.registerComponent('AFilm', () => AFilm);
