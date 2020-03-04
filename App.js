'use strict';
import React, { Component } from 'react'; // 1
import {Platform, StyleSheet, Text, View} from 'react-native';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';

type Props = {};
class SearchPage1 extends Component<Props> {
  render() {
    return <Text style={styles.description}>Search for houses to buy! (Again)</Text>;
  }
} // 3

const App = createStackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
  Products: { screen: Products },
});

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});
export default App;
