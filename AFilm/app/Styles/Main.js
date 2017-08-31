'use strict'

import React from 'react-native';

let { StyleSheet } = React;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'rgba(100,53,201,0.1)',
    borderBottomWidth: 1,
  },
  sm_img: {
    width: 80,
    height: 106,
    marginLeft: 6,
    marginTop: 6,
    marginBottom: 6,
  },
  itemContent: {
    flex: 1,
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontFamily: 'PingFang SC',
    fontWeight: '300',
    color: '#666666',
    marginBottom: 6,
    marginTop: 6,
  },
  itemMeta: {
    fontSize: 16,
    fontFamily: 'PingFang SC',
    color: '#999999',
    marginBottom: 6,
  },
  itemStar: {
    fontSize: 14,
    fontFamily: 'PingFang SC',
    color: '#ff0000',
  }
  loading: {
    
  }
});
