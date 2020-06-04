import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { ScreenTitleText } from '../components/ScreenTitleText';
import { AuthContext } from '../store/AuthContext';
import { Entypo } from '@expo/vector-icons';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { MonoText } from '../components/StyledText';
const axios = require('axios');

export const SingleAddress = ({ navigation }) => {
  return(
  <View style={styles.container} contentContainerStyle={styles.contentContainer}>
    <View style={styles.header}>
        <TouchableOpacity
          onPress={navigation.goBack}
          style={styles.headerBtn}
        >
          <Ionicons name="ios-arrow-back" size={34} color="#4BB244" />
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.headerBtn}
        >
          <Text style={styles.headerText}>Edit</Text>
        </TouchableOpacity>
    </View>
    <ScrollView>
      <ScreenTitleText style={styles.title}>Clean Address</ScreenTitleText>  

      <View style={styles.addressWrapper}>
        <Entypo name="location-pin" size={24} color="#CCCCCC" />
        <Text>363 Sioux Rd, Sherwood Park, Edmonton</Text>
      </View>

      <Image 
          source={require('../assets/images/address.png')}
          style={styles.map}
      />

      <Text style={styles.subTitle}>Appointments</Text>
      <View style={styles.listWrapper}>
          <View style={styles.listItem}>
            <MonoText>
              June 1st - June6st
            </MonoText>
            <MonoText>
              4 Hours
            </MonoText>
            <TouchableOpacity
              onPress={() => navigation.navigate('Single')}
            >
              <Entypo name="chevron-right" size={24} color="#4BB244" />
            </TouchableOpacity>
          </View>

          <View style={styles.listItem}>
            <MonoText>
              June 1st - June6st
            </MonoText>
            <MonoText>
              3 Hours
            </MonoText>
            <TouchableOpacity
              onPress={() => navigation.navigate('Single')}
            >
              <Entypo name="chevron-right" size={24} color="#4BB244" />
            </TouchableOpacity>
          </View>

          </View>

          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Book a New Clean</Text>
          </TouchableOpacity>
        </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30
  },
  headerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    color: '#4BB244',
    paddingLeft: 10,
  },
  subTitle: {
    color: '#000000',
    fontSize: 25,
    marginHorizontal: 25,
    fontFamily: 'ubuntu',
    fontWeight: '700',
    marginBottom: 20
  },  
  title: {
    top: 10
  },
  listWrapper: {
    // marginTop: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 25,
    zIndex: 1,
  }, 
  listItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: -1,
    paddingVertical: 16,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imgBgWrapper:{
    width: '100%',
    position: 'absolute',
    bottom: 35,
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: 0,
  },  
  imgBg: {
    width: '40%',
    width: 220,
    height: 270,
    transform: [{ scale: .5 }]
  },



  addressWrapper: {
    marginHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  },  
  map: {
    width: '100%',
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#4BB244',
    paddingVertical: 12,
    marginHorizontal: 25,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20
  },
  primaryButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});
