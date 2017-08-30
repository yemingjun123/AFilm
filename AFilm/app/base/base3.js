/**
 * Background Image
 */

'use strict';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Image  source={{uri: 'http://img7.doubanio.com/view/photo/photo/public/p2191398861.jpg'}} style={styles.background}>
          <View style={styles.overlay}>
            <Text style={styles.overlayTitle}>标题</Text>
            <Text style={styles.overlaySubTitle}>子标题</Text>
          </View>
        </Image>
      </View>
    );
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
  },
  overlayTitle: {
    fontSize: 30,
    fontFamily: 'PingFang SC',
    color: '#fff',
    padding: 10,
  },
  overlaySubTitle: {
    fontSize: 15,
    fontFamily: 'PingFang SC',
    fontWeight: '200',
    color: '#fff',
    padding: 10,
    paddingTop: 0,
  },
});
