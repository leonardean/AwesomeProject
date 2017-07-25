import React from 'react';
import { Text, View, Button } from 'react-native';

export default class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Chat with ${navigation.state.params.user}',
    headerRight: <Button title="Info" />,
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}
