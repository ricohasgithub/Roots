import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import MapView from 'react-native-maps';
import { OverlayComponent } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { CalloutSubview } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';


export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
  });
};

var UserLocation = {
  latitude: 0,
  longitude: 10,
  latitudeDelta: 0.003,
  longitudeDelta: 0.003,
}

var executed = false;

export default class HomeScreen extends Component {

  constructor (props) {

    super(props);
    this.states = {
      region: UserLocation
    }
    
    
  }

  componentDidMount() {
    return getCurrentLocation().then(position => {
      if (position) {
        this.states.region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.04,
          },
          executed = true;
          
          this.forceUpdate();
      }
    },
    
    );
    
  }

  render () {
    console.log(2)
    if(executed){
      console.log(this.states.region);
    return (
      <View style={styles.container}>
      <MapView style={StyleSheet.absoluteFillObject}
          provider = 'google'
          region = {this.states.region}
          showsUserLocation
      >
      <Markers lat = {samplelat} lon = {samplelon} titl = {sampleRequest} descr = {sampleDescr}/>
      <Markers lat = {samplelat2} lon = {samplelon2} titl = {sampleRequest2} descr = {sampleDescr2}/>
      <Markers lat = {samplelat3} lon = {samplelon3} titl = {sampleRequest3} descr = {sampleDescr3}/>
      <Markers lat = {samplelat4} lon = {samplelon4} titl = {sampleRequest4} descr = {sampleDescr4}/>
      <Markers lat = {samplelat5} lon = {samplelon5} titl = {sampleRequest5} descr = {sampleDescr5}/>
      </MapView>
    <TouchableOpacity style={styles.overlay} onPress={() => WebBrowser.openBrowserAsync('https://cocky-panini-0ad02c.netlify.app/')}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize:15 }}>Donate Now</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.overlay2} onPress={() => this.componentDidMount()}>
      <View>
          <Ionicons name={'ios-return-left'} size={22} color="grey" />
      </View>
    </TouchableOpacity>

    </View>
    );
  } else{
    return(
      <View/>
    );
  }
  }

}


HomeScreen.navigationOptions = {
  header: null,
};

function ToUser({}){
  return getCurrentLocation().then(position => {
    if (position) {
        UserLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        },
      console.log(1)
    }
  },
  );
}

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

var samplelat2 = 43.4537681;
var samplelon2 = -79.6744629;
var sampleRequest2 = 'Any amount would be appreciated';
var sampleDescr2 = 'Oakville hospital: funding for combat covid 19';

var samplelat3 = 43.4668901;
var samplelon3 = -79.6662389;
var sampleRequest3 = '$25 needed';
var sampleDescr3 = 'food and facemasks';

var samplelat4 = 43.4792404;
var samplelon4 = -79.6809867;
var sampleRequest4 = 'Any amount appreciated';
var sampleDescr4 = 'Healthcare funding';

var samplelat5 = 43.4796737;
var samplelon5 = -79.6367012;
var sampleRequest5 = '$40 needed';
var sampleDescr5 = 'basic needs';

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
  overlay2: {
    position: 'absolute',
    right: 20,
    bottom: 50,
    paddingVertical: 8,
      paddingHorizontal: 10,
      backgroundColor: "white",
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
