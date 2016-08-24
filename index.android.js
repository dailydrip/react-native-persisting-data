import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

class persistingData extends Component {

  constructor(props){
    super(props)
    this.persistData = this.persistData.bind(this);
    this.clearData = this.clearData.bind(this);
  }

  persistData(){

  }

  clearData(){

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Persisting Data
        </Text>

      <Text>Name</Text>
      <TextInput
       ref="name"
       style={styles.input} />

       <Text>Phone</Text>
       <TextInput
       ref="phone"
        style={styles.input} />

        <TouchableHighlight
          style={styles.button}
          onPress={this.persistData}
          underlayColor="white">
          <Text style={styles.buttonText}> SAVE </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={this.clearData}
          underlayColor="white">
          <Text style={styles.buttonText}> CLEAR </Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#006289',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  input: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black'
  },
});

AppRegistry.registerComponent('persistingData', () => persistingData);
