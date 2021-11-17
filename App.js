import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Start from './src/components/Start';
import Chat from './src/components/Chat';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class App extends React.Component {

  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen
            name="Start"
            component={Start}
            options={{ title: "Welcome to Hello-World-Chat!" }}
          />
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
