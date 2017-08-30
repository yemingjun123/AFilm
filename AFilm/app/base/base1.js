/**
 * View Text
 */
 
'use strict';

import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default React.createClass({
  render() {
    return (
      <View style={styles.container}>
          <View style={[styles.item, styles.item1]}>
            <Text style={styles.itemText}> 1 </Text>
          </View>
          <View style={[styles.item, styles.item2]}>
            <Text style={styles.itemText}> 2 </Text>
          </View>
          <View style={[styles.item, styles.item3]}>
            <Text style={styles.itemText}> 3 </Text>
          </View>
      </View>
    );
  }
});

let styles = StyleSheet.create({
  container: {
    backgroundColor: '#eae7ff',
    flex: 1,
   	paddingTop: 20,
    flexDirection: 'column',
  },
  item: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#6435c9',
    margin: 6,
    flex: 1,
    // width: 200,
  },
  item1: {
    // float: 'left'
    // position: 'absolute',
    // left: 30,
    // zIndex: 1,
  },
  item2: {
    // alignSelf: 'center',
  },
  item3: {
    // alignSelf: 'flex-end',
  },
  itemText: {
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: 30,
  },
});
