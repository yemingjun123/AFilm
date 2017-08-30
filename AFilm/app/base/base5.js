/**
 * ListView
 */

'use strict';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';

export default React.createClass({
  getInitialState() {
    let movies = [
      {title: '战狼1'},
      {title: '战狼2'},
      {title: '战狼3'},
      {title: '战狼4'},
      {title: '战狼5'}
    ];

    let dataSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});

    return {movies: dataSource.cloneWithRows(movies)}
  },

  render() {
    return (
      <View style={styles.container}>
          <ListView
            dataSource={this.state.movies}
            renderRow={
              movie => <Text style={styles.itemText}>{movie.title}</Text>
            }
          />
      </View>
    );
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  itemText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
