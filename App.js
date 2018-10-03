import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import HomePage from './components/home-page/home-page-main.js'
import Login from './components/home-page/login.js'
import Register from './components/home-page/register.js'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <HomePage />
        <Login />
        <Register />
      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'start',
//     justifyContent: 'center',
//   },
// });
