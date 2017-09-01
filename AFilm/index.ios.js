/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import ComingSoon from './app/ComponentsOS/ComingSoon.js';
import Featured   from './app/ComponentsOS/Featured.js'
import icons      from './app/Resource/Icons';

import {
  AppRegistry,
  TabBarIOS,
} from 'react-native';

export default class AFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabBar: 'Featured'
    };
  }

  render() {
    return (
      <TabBarIOS tintColor='green' unselectedTintColor='gray'>
        <TabBarIOS.Item
          title='正在热映'
          icon={{uri: icons.star, scale: 4.6}}
          selected={this.state.tabBar === 'Featured'}
          onPress={() =>{
            this.setState({
              tabBar: 'Featured'
            })
          }}
        >
          <Featured />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='即将上映'
          icon={{uri: icons.calendar, scale: 4.6}}
          selected={this.state.tabBar === 'ComingSoon'}
          onPress={() =>{
            this.setState({
              tabBar: 'ComingSoon'
            })
          }}
        >
          <ComingSoon />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('AFilm', () => AFilm);
