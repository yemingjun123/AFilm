
'use strict';

import React      from 'react';
import styles     from '../Styles/Main';
import MovieList  from './MovieList';
import {
  Text,
  View,
  NavigatorIOS
} from 'react-native';

class Featured extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MovieList,
          title: '正在热映',
          barTintColor: 'white',
          tintColor: '#666666',
        }}
        style={styles.container}
      />
    )
  };
}


export { Featured as default};
