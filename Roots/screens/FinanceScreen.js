import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { MonoText } from '../components/StyledText';

var balance = 77.00;
balance = balance.toFixed(2)

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

    <View style={styles.communityDonation}>
      
    </View>

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

FinanceScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 40,
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  balanceViewText : {
    flex: 2, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white', paddingBottom:13
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

  communityDonation : {
    flex: 10,
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
