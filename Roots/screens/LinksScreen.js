import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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

// Check to see if the current user is logged in -- show different pages if so
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    first_time = false;
  }
});

export default class LinksScreen extends Component {

  constructor (props) {
    super(props);
  }

  render () {

    return(
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      
      </ScrollView>
    );

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
});
