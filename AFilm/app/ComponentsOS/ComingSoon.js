
'use strict';

import React          from 'react';
import styles         from '../Styles/Main';
import ComingSoonList from './ComingSoonList';
import {
  Text,
  View,
  NavigatorIOS
} from 'react-native';

class ComingSoon extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: ComingSoonList,
          title: '即将上映',
          barTintColor: 'white',
          tintColor: '#666666',
        }}
        style={styles.container}
      />
    )
  };
}


export { ComingSoon as default};
