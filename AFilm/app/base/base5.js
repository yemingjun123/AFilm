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
  ListView,
  ActivityIndicator
} from 'react-native';

const IN_THEATER_URL = 'https://api.douban.com/v2/movie/in_theaters';

export default React.createClass({
  getInitialState() {
    this.fetchData();
    return {
      movies: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      loading: true,
    }
  },

  fetchData() {
    fetch(IN_THEATER_URL)
      .then(response => response.json())
      .then(responseObject => {
        this.setState({
          movies: this.state.movies.cloneWithRows(responseObject.subjects),
          loading: false,
        })
      })
  },

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size='large' color='red' />
        </View>
      )
    }

    return (
      <View style={styles.container}>
          <ListView
            dataSource={this.state.movies}
            renderRow={
              movie => <View style={styles.item}><Text style={styles.itemText}>{movie.title}</Text></View>
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
  item: {
    flex: 1,
    margin: 6,
    borderColor: '#eae123',
    borderWidth: 1,
    height: 100,
  },
  itemText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
