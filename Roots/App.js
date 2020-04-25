import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';

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

let first_time = true;

// Check to see if the current user is logged in -- show different pages if so
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    first_time = false;
  }
});

const Stack = createStackNavigator();

export default class App extends Component {

  constructor (props) {

    super(props);

    this.state = {
      username: '',
      password: '',
      first: true,
    };

    this.state.first = first_time;

  }

  loginonpress () {

      try {
        firebase
            .auth()
            .signInWithEmailAndPassword(username, password)
            .then(user => {
               console.log("SUCCESS");
               this.state.first = false;
                   this.forceUpdate();
            });
      } catch (error) {
      }

  }

  render () {

    if (this.state.first === false) {
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
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
            <Stack.Navigator>
              <Stack.Screen name="Root" component={BottomTabNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      );
    }
  }

}

const styles = StyleSheet.create({
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
