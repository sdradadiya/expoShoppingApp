import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalculatorDesign from './CalculatorDesign';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up main.js to start on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(CalculatorDesign);
