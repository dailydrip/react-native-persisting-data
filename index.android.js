import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  View
} from 'react-native';

class persistingData extends Component {

  constructor(props){
    super(props)
    this.state = { name: '', phone: ''}
    this.persistData = this.persistData.bind(this);
    this.clearData = this.clearData.bind(this);
  }

  persistData(){
    let name = this.state.name
    let phone = this.state.phone
    AsyncStorage.setItem('name', name).done();
    AsyncStorage.setItem('phone', phone).done();
    this.setState({name: name, persistedName: name, phone: phone, persistedPhone: phone })
  }

  check(){

    AsyncStorage.getItem('name').then((name) => {
        this.setState({name: name, persistedName: name})
    })

    AsyncStorage.getItem('phone').then((phone) => {
      this.setState({phone: phone, persistedPhone: phone})
    })
  }

  clearData(){
    AsyncStorage.clear();
    this.setState({persistedPhone: '', persistedName: ''})
  }

  componentWillMount(){
    this.check();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Persisting Data
        </Text>

      <Text>Name</Text>
      <TextInput
       value={this.state.name}
       onChangeText={(text) => this.setState({name: text})}
       style={styles.input} />

       <Text>Phone</Text>
       <TextInput
       value={this.state.phone}
       onChangeText={(text) => this.setState({phone: text})}
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

        <View>
          <Text>STATE:</Text>
          <Text>Name: {this.state.name}</Text>
          <Text>Phone: {this.state.phone}</Text>
        </View>

        <View>
          <Text>PERSISTENCE DATA:</Text>
          <Text>Name: {this.state.persistedName}</Text>
          <Text>Phone: {this.state.persistedPhone}</Text>
        </View>

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
