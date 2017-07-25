import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import HomeScreen from './src/pages/HomeScreen.js';
import ChatScreen from './src/pages/ChatScreen.js';

class RecentChatsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>List of recent chats</Text>
      </View>
    )
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return <Text>List of all contacts</Text>
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
})

MainScreenNavigator.navigationOptions = {
  title: "My Chats"
}
const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SimpleApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
