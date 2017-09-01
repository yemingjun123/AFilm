/*
* MovieList
*/

'use strict';

import React from 'react';

import {
  View,
  Text,
  Image,
  ListView,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';

/* styles */
import styles      from '../Styles/Main';
import icons       from '../Resource/Icons';
import MovieDetail from './MovieDetail'

class  MovieList extends React.Component {
  constructor(props) {
    super(props);
    const IN_THEATER_URL = 'https://api.douban.com/v2/movie/in_theaters';
    this.fetchData(IN_THEATER_URL);
    this.state = {
      movies: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      loading: true,
    };
  }

  fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(responseObject => {
        this.setState({
          movies: this.state.movies.cloneWithRows(responseObject.subjects),
          loading: false,
        })
      })
      .done();
  }

  renderMovieList(movie) {
    try {
      var img_url = movie.casts[0].avatars.large
    } catch (e) {
      var img_url = icons.none;
    }
    return (
      <TouchableHighlight onPress={() => this.onPressButton(movie)} underlayColor='rgba(24,34,34,0.1)'>
        <View style={styles.item}>
          <View style={styles.itemImg}>
            <Image source={{uri: img_url}} style={styles.sm_img} />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>{movie.title}</Text>
            <Text style={styles.itemMeta}>{movie.original_title}({movie.year})</Text>
            <Text style={styles.itemStar}>{movie.rating.average}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  onPressButton(movie) {
    this.props.navigator.push({
      title: movie.title,
      component: MovieDetail,
      passProps: {movie}
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size='large' color='red' />
        </View>
      )
    }
    return (
      <View style={styles.level1Container}>
          <ListView
            dataSource={this.state.movies}
            renderRow={this.renderMovieList.bind(this)}
          />
      </View>
    );
  }
}

export { MovieList as default };
