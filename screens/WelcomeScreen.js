import * as React from 'react';
import { useState, useEffect } from 'react';
import { Keyboard, Animated, Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Swiper from 'react-native-swiper'
import { AsyncStorage } from 'react-native';
import Colors from '../constants/Colors'
import BackendApiClient from '../api/BackendApiClient';
import * as Device from 'expo-device';
const axios = require('axios');



export const WelcomeScreen = ({navigation}) => {
  const [openKeyboard, setOpenKeyboard] = useState(false)
  const [email, setEmail] = useState('')
  const [se, setSe] = useState(false)

  const validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const changeHandler = e => {
    setEmail(e.nativeEvent.text.toLowerCase())
  }

  const loginHandler = async () => {
    // console.log(Device.brand)
    // console.log(Device.modelName)
    // console.log(Device.modelId)
    // console.log('model', Device.manufacturer)

    if (!validateEmail(email)) {
      alert('Invalid email')
    } else {
      try {
          await AsyncStorage.setItem('email', `${email.toLowerCase()}`);
          const data = await axios.post(`${BackendApiClient.getApiBaseUrl()}auth/email/`, 
          {'email': `${email}`},
          {
            headers: {'Content-Type': 'application/json'},
          })
          navigation.navigate('Auth')
      } catch (e) {
          // console.log( 'Authentification:', e ? e : true )
          alert("Crytical error. Please check your intertnet connection");
          alert(e)
          console.log(e)
      }
    }
  }

  useEffect(() => {
    if(Device.modelName = 'iPhone SE') {
      // setSe(true)
      setSe(false)
    }
    setSe(false)

    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setOpenKeyboard(true)
  };

  const _keyboardDidHide = () => {
    setOpenKeyboard(false)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.primaryTitle}>Clean This Week</Text>
      <View style={styles.logoPart}>
        <View >
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={styles.logoText}>Part of the</Text> 
            <Text style={styles.bigTextLogo}> home-kind</Text>
          </View>
          <Text style={styles.serviceTextLogo}>service family</Text>
        </View>
        <Image 
          source={require('../assets/images/grey-icon.png')}
        />
      </View>

      {/* Slider */}
      <View style={ !openKeyboard ? {height: 280} : {height: 60}}>
        <View style={ !se ? {height: 280} : {height: 230}}>
        { !openKeyboard ?
          <Swiper 
            style={styles.wrapper} 
            showsButtons={false}
            loop={false}
            index={0}
            activeDotColor={'#4BB244'}
          >
            <View style={styles.slide1}>
              <Text style={[styles.textBold, se ? {fontSize: 14} : {fontSize: 18}]}>Before you consider using our app, please, read more about our service below to make sure we are a good fit!</Text>
              <Text style={[styles.text, se ? {fontSize: 12, lineHeight: 14} : {fontSize: 16}]}>Clean this week - is a price conscious house cleaning service focused on delivering professional cleaners to your home at the lowest possible prices.</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={[styles.textBold, se ? {fontSize: 14} : {fontSize: 18}]}>Before you consider using our app, please, read more about our service below to make sure we are a good fit!</Text>
              <Text style={[styles.text, se ? {fontSize: 12, lineHeight: 14} : {fontSize: 16}]}>Clean this week - is a price conscious house cleaning service focused on delivering professional cleaners to your home at the lowest possible prices.</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={[styles.textBold, se ? {fontSize: 14} : {fontSize: 18}]}>Before you consider using our app, please, read more about our service below to make sure we are a good fit!</Text>
              <Text style={[styles.text, se ? {fontSize: 12, lineHeight: 14} : {fontSize: 16}]}>Clean this week - is a price conscious house cleaning service focused on delivering professional cleaners to your home at the lowest possible prices.</Text>
            </View>
          </Swiper>
          :
          <View/>}
        </View>
       </View>

      <Text style={[styles.titleEmail, se ? {marginTop: -45} : {}]}>Enter your email</Text>
      <TextInput
        style={[styles.email, se ? {marginBottom: 25} : {marginBottom: 50}]}
        placeholder="Type" 
        onChange={ changeHandler }
        name="email"
        clearButtonMode="while-editing"
        autoCapitalize='none'
        value={email}
      >
      </TextInput>
      <TouchableOpacity 
        style={styles.primaryButton}
        onPress={loginHandler}
      >
        <Text style={styles.primaryButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  logoPart: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 25,
    color: Colors.greyText,
  },
  logoText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    color: Colors.greyText,
    fontSize: 12,
    fontWeight: '700',
    margin: 0,
  },
  bigTextLogo: {
    fontSize: 19,
    color: '#585858',
    fontWeight: '700',
  },
  serviceTextLogo: {
    flexDirection: 'row',
    color: Colors.greyText,
    fontWeight: '700',
    textAlign: "right",
    fontSize: 16,
  },
  email: {
    height: 50,
    borderColor: Colors.inputBorder,
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 25,
    marginTop: 10,
    // marginBottom: 10, for SE
    marginBottom: 50,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  primaryTitle: {
    color: Colors.tintColor,
    fontSize: 34,
    marginBottom: 5,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'ubuntu-bold',
  },
  primaryButton: {
    backgroundColor: Colors.tintColor,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginHorizontal: 25,
  },
  primaryButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  wrapper: {
    marginTop: 40,
    height: 100,
    maxHeight: 10,
  },
  textBold: {
    fontWeight: '100',
    marginHorizontal: 25,
    color: '#000',
    fontFamily: 'ubuntu-bold',
    fontSize: 18,
    marginBottom: 10,
    color: '#595959',
    marginBottom: 25,
  },
  titleEmail: {
    fontSize: 16,
    marginHorizontal: 25,
    fontFamily: 'ubuntu-medium',
    // marginTop: -45
  },
  text: {
    marginHorizontal: 25,
    fontFamily: 'ubuntu',
    fontSize: 16,
    lineHeight: 24
  }
});
