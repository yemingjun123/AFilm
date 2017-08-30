/**
 * Image
 */

'use strict';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Base2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
            source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
            style={styles.loge}
         />
        <Text>ddd</Text>
      </View>
    );
  }
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loge: {
    width: 100,
    height: 100,
  }
});


export { Base2 as default };
