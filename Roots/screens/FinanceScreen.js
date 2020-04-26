import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { MonoText } from '../components/StyledText';

var balance = 77.00;
balance = balance.toFixed(2)
var donationTotal = 372.34;
donationTotal = donationTotal.toFixed(2)

export default function FinanceScreen (){
  return (
  <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

    <View style={styles.balanceViewText}>
    <Text style = {styles.balanceText} >Your Balance</Text>
    </View>
    
    <View style={styles.balanceViewNumber}>
      <Text style = {styles.balanceNumber}>    {balance}</Text>
      <Text style = {styles.usd}>usd</Text>
    </View>

    <OptionButton
        icon="ios-wallet"
        label="Top Up"
        onPress={() => alert('You tapped the button!')}
    />

    <OptionButton
        icon="md-wallet"
        label="Withdraw"
        onPress={() => alert('You tapped the button!')}
        isLastOption
    />

    <View style={styles.communityDonation1}>
      <Text style = {styles.donationText1} >Your Donations</Text>
    </View>

    <View style={styles.communityDonation3}>
      <Text style = {styles.donationText3}>{donationTotal}</Text>
    </View>

    <View style={styles.communityDonation2}>
      <Text style = {styles.donationText2} >                                           usd  total</Text>
    </View>

    <OptionButton
        icon="ios-journal"
        label="View History"
        onPress={() => alert('You tapped the button!')}
        isLastOption
    />

    <View style={{paddingTop: 15, backgroundColor: 'lightsteelblue'}}>
      
    </View>

    <OptionButton
        icon="ios-send"
        label="Share"
        onPress={() => alert('You tapped the button!')}
        isLastOption
    />

  </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'moccasin'
  },
  balanceViewText : {
    flex: 2, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white', paddingBottom:13, paddingTop:40
  },
  balanceText : {
    fontSize: 20, fontWeight: "bold"
  },
  balanceNumber : {
    fontSize: 60, fontWeight: '600'
  },
  usd : {
    fontSize: 30, fontWeight: "200"
  },
  balanceViewNumber : {
    flex: 2, justifyContent: 'center', alignItems: 'flex-end', backgroundColor: 'white', flexDirection: 'row', paddingBottom: 8
  },

  communityDonation1 : {
    justifyContent: 'center', alignItems: 'center', paddingTop: 30, paddingBottom: 10, backgroundColor: 'lightsteelblue'
  },
  donationText1 : {
    fontSize: 20, fontWeight: "bold"
  },
  communityDonation2 : {
    justifyContent: 'center', alignItems: 'center', paddingTop: 0, paddingBottom: 8, backgroundColor: 'lightsteelblue'
  },
  donationText2 : {
    fontSize: 20, fontWeight: "300"
  },
  communityDonation3 : {
    justifyContent: 'center', alignItems: 'flex-end', backgroundColor: 'lightsteelblue', flexDirection: 'row', paddingTop: 5
  },
  donationText3 : {
    fontSize: 60, fontWeight: "100"
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
