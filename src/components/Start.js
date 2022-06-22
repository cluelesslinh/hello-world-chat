import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, Button } from 'react-native';
import { ColorPicker, TriangleColorPicker, toHsv, fromHsv } from 'react-native-color-picker';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

class Start extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  render() {

  const Picker = () => (
    <ColorPicker
      onColorSelected={color => alert(`Color selected: ${color}`)}
      style={{flex: 1}}
    />
  )

    return (
      <View style={styles.background}>
        <ImageBackground source={require('../../assets/background.png')} resizeMode='cover' style={styles.image}>
          <Text style={styles.title}>Hello-World-Chat</Text>
        </ImageBackground>
        <View style={styles.container}>
          <TextInput
            style={styles.inputField}
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
            placeholder='Your name'
          />
          <View>
            <Text style={styles.text}>Choose Background Color</Text>
              <View>
              </View>
            <View style={styles.chatBackgroundColor}>
              <TouchableOpacity
                style={styles.color1}
                onPress={() => this.setState({ backgroundColor: '#090C08' })}
              />
              <TouchableOpacity
                style={styles.color2}
                onPress={() => this.setState({ backgroundColor: '#CCC' })}
              />
              <TouchableOpacity
                style={styles.color3}
                onPress={() => this.setState({ backgroundColor: '#13E1D4' })}
              />
              <TouchableOpacity
                style={styles.color4}
                onPress={() => this.setState({ backgroundColor: '#4DFE83' })}
              />
            </View>
          </View>
          <Button
              style={styles.btn}
              title='Start Chatting'
              color={'#757083'}
              containerViewStyle={{ width: '100%', marginLeft: 0 }}
              onPress={() =>
                this.props.navigation.navigate('Chat', {
                  username: this.state.username,
                  backgroundColor: this.state.backgroundColor,
                })
              }
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: '4em',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2em',
  },
  background: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    width: '88%',
    height: '44%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    marginBottom: '5.5%',
    fontSize: 16,
    flex: 0.8,
  },
  inputField: {
    alignItems: 'center',
    width: '88%',
    height: 40,
    color: '#5E6B61',
    fontSize: 16,
    borderColor: '#5E6B61',
    borderWidth: 1,
    paddingLeft: 10,
  },
  text: {
    color: '#5E6B61',
    fontSize: 16,
  },
  chatBackgroundColor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  color1: {
    backgroundColor: '#090C08',
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
  },
  color2: {
    backgroundColor: '#CCC',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  color3: {
    backgroundColor: '#13E1D4',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  color4: {
    backgroundColor: '#4DFE83',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  btn: {
    flex: 1,
  },
});

export default Start;
