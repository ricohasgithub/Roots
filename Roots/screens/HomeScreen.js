import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import MapView from 'react-native-maps';
import { OverlayComponent } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { CalloutSubview } from 'react-native-maps';


export default class HomeScreen extends Component {

  constructor (props) {

    super(props);

    this.states = {
      
    }

  }

  render () {
    return (
      <View style={styles.container}>
      <MapView style={StyleSheet.absoluteFillObject}
          provider = "google"
          region = {{
              latitude: 43.4756,
              longitude: -79.6483,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          showsUserLocation
      >
      <Markers lat = {samplelat} lon = {samplelon} titl = {sampleRequest} descr = {sampleDescr}/>
      </MapView>
    <TouchableOpacity style={styles.overlay} onPress={() => WebBrowser.openBrowserAsync('https://cocky-panini-0ad02c.netlify.app/')}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize:15 }}>Donate Now</Text>
    </TouchableOpacity>
    </View>
    );
  }

}

HomeScreen.navigationOptions = {
  header: null,
};

function Markers({lat, lon, titl, descr}){
  return(<Marker coordinate={{latitude: lat,
    longitude: lon}}
    pinColor='red' opacity = {1}
    title = {titl}
    description = {descr}
    >
    
   </Marker>);
}

var samplelat = 43.5090;
var samplelon = -79.6540;
var sampleRequest = '$126 needed';
var sampleDescr = 'We could not afford food, electricity, and toilet paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  overlay: {
    position: 'absolute',
    bottom: 50,
    paddingVertical: 10,
      paddingHorizontal: 30,
      backgroundColor: "#007bff",
      borderColor: "#eee",
      borderRadius: 5,
      elevation: 10
  },
});

const CustomMarker = () => (
  <View
    style={{
      paddingVertical: 10,
      paddingHorizontal: 30,
      backgroundColor: "#007bff",
      borderColor: "#eee",
      borderRadius: 5,
      elevation: 10
    }}
  >
    <Text style={{ color: 'white', fontWeight: 'bold', fontSize:15 }}>Berlin</Text>
  </View>
);
