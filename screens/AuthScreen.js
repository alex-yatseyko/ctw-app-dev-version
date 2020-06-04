import * as WebBrowser from 'expo-web-browser';
import {SecureStore} from 'expo';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Keyboard, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';

import Colors from '../constants/Colors'

const axios = require('axios');

import { ScreenTitleText } from '../components/ScreenTitleText';
import { AuthContext } from '../store/AuthContext';

export const AuthScreen = ({navigation}) => {
  const auth = React.useContext(AuthContext)
  const [openKeyboard, setOpenKeyboard] = useState(false)
  const [email, setEmail] = useState()
  const [form, setForm] = useState({
    email: '',
    token: ''
  })

  const loginHandler = async () => {
    try {
      // All logic goes there

      const data = await axios.post(
        'http://test.homekind.newbusinesslogic.ru/rest_api/v1/auth/token/', 
        {...form},
        {
          headers: {'Content-Type': 'application/json'},
        }
      )
      console.log('Data:', data.data.token)
      auth.login(data.data.token)
      await AsyncStorage.setItem('token', `${data.data.token}`);
      // navigation.navigate('Auth')

    } catch (e) {
      console.log(auth)
      console.log(e)
      alert('Code is wrong. Please check your email again')
      setForm({...form, token: ''})
    }
  }

  const changeInput = async (e) => {
    setForm({...form, token: e.nativeEvent.text})
  }

  const getEmail = async () => {
    const email = await AsyncStorage.getItem('email');
    setForm({...form, 'email': email})
    setEmail(email)
  }

  // const showToken = async () => {
  //   const t = await AsyncStorage.getItem('token');
  //   console.log(t)
  //   const testdata = await axios.get(
  //     // 'http://test.homekind.newbusinesslogic.ru/rest_api/v1/contacts/',
  //     'http://test.homekind.newbusinesslogic.ru/rest_api/v1/locations/',
  //     {
  //       headers: {Authorization: `Bearer ${t}`},
  //     }
  //   )
  //   console.log(testdata.data)
  // }

  const _keyboardDidShow = () => {
    setOpenKeyboard(true)
  };

  const _keyboardDidHide = () => {
    setOpenKeyboard(false)
  };

  useEffect(() => {
    getEmail()
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={navigation.goBack}
          style={styles.headerBtn}
        >
          <Ionicons name="ios-arrow-back" size={34} color="#4BB244" />
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
      </View>

      <ScreenTitleText>Sign In</ScreenTitleText>
      <View style={{height: 30, width: 10}} />
      <Text style={styles.text}>We sent a code to your email</Text>
      <Text style={styles.textBold}>{email}</Text>
      <View style={{height: 30, width: 10}} />
  
      <Text style={styles.textMedium}>Enter the code from email</Text>
      <TextInput
        value={form.token}
        placeholder="Type" 
        onChange={changeInput}
        style={styles.pass}
        keyboardType={'numeric'}
        clearButtonMode="while-editing"
        maxLength={6}
        keyboardType={Platform.OS === 'ios' ? "number-pad" : "numeric"}
      />
      <Text style={[styles.textPrimary, {marginBottom: openKeyboard ? 10 : 40}]}>Didn’t receive Email?</Text>
      <TouchableOpacity 
        style={styles.primaryButton}
        onPress={loginHandler} 
      >
        <Text style={styles.primaryButtonText}>Sign in</Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    position: "absolute",
    marginTop: 36
  },
  headerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    color: Colors.tintColor,
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100,
  },
  primaryTitle: {
    color: Colors.tintColor,
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: Colors.tintColor,
    paddingVertical: 15,
    marginHorizontal: 25,
    borderRadius: 5,
  },
  primaryButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  wrapper: {
    height: 100,
  },
  textMedium: {
    fontFamily: 'ubuntu-medium',
    marginHorizontal: 25,
    fontSize: 16,
  },  
  text: {
    paddingHorizontal: 25,
    color: '#595959',
  },
  textPrimary: {
    paddingHorizontal: 25,
    color: Colors.tintColor,
    // marginBottom: openKeyboard ? 40 : 10,
    fontSize: 16,
  },
  textBold: {
    fontWeight: '600',
    paddingHorizontal: 25,
    color: '#595959',
  },
  pass: {
    height: 50,
    borderColor: Colors.inputBorder,
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 25,
    marginVertical: 30,
    paddingHorizontal: 10,
    paddingVertical: 12,
  }
});
