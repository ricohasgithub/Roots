import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmIzUERgQIiesJMiulSvn9ZNTq0GP6aV0",
  authDomain: "roots-275313.firebaseapp.com",
  databaseURL: "https://roots-275313.firebaseio.com",
  projectId: "roots-275313",
  storageBucket: "roots-275313.appspot.com",
  messagingSenderId: "332657243073",
  appId: "1:332657243073:web:9a539b8c7a77607d833540",
  measurementId: "G-9QPPJXPG9D"
};

// Initialize the firebase app
firebase.initializeApp(firebaseConfig);

export default class LinksScreen extends Component {

  constructor (props) {

    super(props);

    this.states = {
      username: '',
      first: true,
    }

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.states.first = false;
      }
    })

  }

  loginonpress () {
      try {
        firebase
            .auth()
            .createUserWithEmailAndPassword(username, password)
            .then(user => {
               console.log("SUCCESS");
               this.state.first = false;
               this.forceUpdate();
            });
      } catch (error) {
      }
  }

  render () {

    if (this.states.first === true) {
      return (
              <View style={styles.container}>
                <TextInput
                  placeholder="Email"
                  onChangeText={(username) => this.setState({ username })}
                   label="Email"
                  style={styles.input}
                />
                <TextInput
                  placeholder="Password"
                  onChangeText={(password) => this.setState({ password })}
                  label="Password"
                  secureTextEntry={true}
                  style={styles.input}
                />
                <Button
                  title={'Sign Up'}
                  style={styles.formbutton}
                  onPress={this.loginonpress}
                />
              </View>
        );
    } else {
      return(
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        </ScrollView>
      );
    }

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
},
input: {
  width: 200,
  height: 44,
  padding: 10,
  marginBottom: 25,
  borderWidth: 1,
  borderColor: '#e8e8e8',
},
inputext: {
  width: 200,
  height: 44,
  padding: 10,
  textAlign:'center',
  fontWeight:'bold',
  borderWidth: 1,
  borderColor: '#e8e8e8',
  marginBottom: 10,
},
formbutton: {
  width: 200,
  height: 44,
  padding: 10,
  marginBottom: 10,
  backgroundColor: '#54ffee',
}
});
