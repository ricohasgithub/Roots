import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import MapView from 'react-native-maps';
import { OverlayComponent } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Overlay } from 'react-native-elements';

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
              latitude: 43.6532,
              longitude: -79.3832,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          showsUserLocation
      >
      <Markers lat = {43.6532} lon = {-79.3832}/>
      </MapView>
    <TouchableOpacity style={styles.overlay}>
        <Text style={styles.text}>Touchable Opacity</Text>
    </TouchableOpacity>
    </View>
    );
  }

}

HomeScreen.navigationOptions = {
  header: null,
};

function Markers({lat, lon}){
  return(<Marker coordinate={{latitude: lat,
    longitude: lon}}
    pinColor='red' opacity = {1}
    onPress={e => <OverlayScreen/>}
    >
    
   </Marker>);
}

function OverlayScreen({}){
    return(
      alert('You tapped the marker!')
    );
}

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
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
});
