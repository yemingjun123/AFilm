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
      }).
  },

  renderMovieList(movie) {
    return (
      <View style={styles.item}>
        <View style={styles.itemImg}>
            <Image source={{uri: 'https://img3.doubanio.com/img/celebrity/medium/1387002546.12.jpg'}} style={styles.sm_img} />
        </View>
        <View style={styles.itemContent}>
          <Text style={styles.itemText}>{movie.title}</Text>
          <Text style={styles.itemText}>{movie.rating.average}</Text>
        </View>
      </View>
    )
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
            renderRow={this.renderMovieList}
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
    flexDirection: 'row',
    // marginBottom: 6,
    // paddingBottom: 6,
    borderColor: '#eae123',
    borderBottomWidth: 1,
    height: 100,
  },
  sm_img: {
    width: 80,
    height: 80,
    margin: 0,
  },
  itemContent: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: 'blue',

  },

  itemText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
});
