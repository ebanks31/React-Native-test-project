'use strict';
import React, { Component } from 'react'; // 1
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

//const instructions = Platform.select({ ... }); // 2

type Props = {};
class Products extends Component<Props> {
  static navigationOptions = {
    title: 'Products',
  };

  render() {
    return <Text style={styles.description}>List of products (Again)</Text>;
  }
} // 3

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});

const App = createStackNavigator({
  Home: { screen: SearchPage },
});

export default App;