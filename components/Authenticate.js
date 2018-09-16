 import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

import {LoginInput} from './LoginInput'
import {LoginButton} from './LoginPageButton'

export default class Authenticate extends React.Component {

  state = {
    email: '',
    password: '',
    authenticating: false,
    error: '',
  }

  componentWillMount(){
    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyCIOHJPKAdDmrMSZK8BnjTKL41asXUolTw",
    authDomain: "lumo-7fc70.firebaseapp.com",
    databaseURL: "https://lumo-7fc70.firebaseio.com",
    projectId: "lumo-7fc70",
    storageBucket: "",
    messagingSenderId: "567615851804"};
    firebase.initializeApp(config);

 }

  renderCurrentState(){
    if (this.state.authenticating){
      console.log("yes")
      return(
        <View>
          <ActivityIndicator size="large" />
        </View>
      );
    }else{
      console.log("no")
      return(
        <View style={styles.container}>
        <LoginInput placeholder="Enter your email" 
        label="Email" 
        onChangeText={email => this.setState({ email })} 
        value={this.state.email} 
        /> 
        <LoginInput placeholder="Enter your password" 
          label="Password" 
          secureTextEntry
          onChangeText={password => this.setState({ password })} 
          value={this.state.password}
        />
        <Text style={styles.errorText}>{this.state.error}</Text>
        <LoginButton children="Login" onPress={() => this.onPressSignIn()}/>
        <LoginButton children="Signup" onPress={() => this.onPressSignUp()}/>
      </View>
      );
    }
  }

  onPressSignIn(){
    this.setState({
      authenticating: true,
    });
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      this.setState({authenticating: false, error: ''})
      this.props.navigation.navigate('Blogs')
      console.log("logged in!!")
    })
    .catch((message) => {
      this.setState({error: message.code, authenticating: false})
    })
    console.log("state: " + this.state)
  }

  onPressSignUp(){
    this.setState({
      authenticating: true,
    });
    
    const {email, password} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      this.setState({authenticating: false, error: ''})
      this.props.navigation.navigate('Blogs')
      console.log("logged in!!")
    })
    .catch(message => {
      this.setState({error: message.code, authenticating: false})
    })
    console.log("state: " + this.state)
  }

  render() {
    return (
      <View style={styles.container}>
       {this.renderCurrentState()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  errorText:{
    padding: 5,
    height: "10%",
  },

  button:{
    marginTop:5,
  }
});
