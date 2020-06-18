import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

// You can import from local files
import HomeScreen from './screens/HomeScreen';
import Read from './screens/Screen1'
import Award  from './screens/Screen2';

import AppHeader from './components/AppHeader';

export default class App extends React.Component {
  render() {
    return (
      <View>
       
          <AppHeader/>
          
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Screen1: Read,
  Screen2: Award,

});

const AppContainer = createAppContainer(AppNavigator);
