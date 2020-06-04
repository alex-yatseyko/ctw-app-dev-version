import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { ScreenTitleText } from '../components/ScreenTitleText';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../store/AuthContext';
import { Entypo } from '@expo/vector-icons';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { MonoText } from '../components/StyledText';
import BackendApiClient from '../api/BackendApiClient';
const axios = require('axios');

const Addresses = ({navigation}) => {
  const auth = React.useContext(AuthContext)
  const [locations, setLocations] = useState({})
  
  const getAddresses = async () => {
    const t = auth.token
    const locations = await axios.get(
      // 'http://test.homekind.newbusinesslogic.ru/rest_api/v1/contacts/',
      `${BackendApiClient.getApiBaseUrl()}locations/`,
      {
        headers: {Authorization: `Bearer ${t}`},
      }
    )
    setLocations(locations.data)
  }

  useEffect(() => {
    getAddresses()
    // console.log(locations.results)
    // console.log(locations)
  }, [])

  return (
    <View style={styles.container} contentContainerStyle={styles.contentContainer}>

      <View style={styles.header}>
        <View/>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.headerBtn}
        >
          <AntDesign name="plus" size={24} color="#4BB244" />
        </TouchableOpacity>
      </View>

      <ScreenTitleText style={styles.title}>Addresses</ScreenTitleText>    
      
      <View style={{height: '20%'}}/>

      {
        locations.count == 0 ? 
        navigation.navigate('Home') :
        // <MonoText style={{marginHorizontal: 25}}>No addresses</MonoText> : 
      
      <View style={styles.listWrapper}>
        
        {/* {console.log('TestResult', locations.results[0]['latlng'])} */}
        {/* {console.log('TestResult', locations.results[0]['pk'])} */}
        {/* {console.log('TestResult', locations.results[0]['data']['location.type_of_home'])} */}

        {locations.results ? locations.results.map(
          m => {
            return(
              <TouchableOpacity
                  onPress={() => navigation.navigate('Single')}
                  key={m.pk}
              >
              <View key={m.pk} style={styles.listItem}>
                <MonoText>
                  {/* PK: {m.pk} */}
                  {/* {`\n`} */}
                  LatLng: {m.latlng}
                </MonoText>
                {/* <TouchableOpacity
                  onPress={() => navigation.navigate('Single')}
                > */}
                  <Entypo name="chevron-right" size={24} color="#979797" />
                {/* </TouchableOpacity>  */}
              </View>
              </TouchableOpacity>
            )
          }
        ): <View/>}

        <View style={styles.listItem}>
          <MonoText>
            363 Sioux Rd, Sherwood Park
          </MonoText>
          <TouchableOpacity
            onPress={() => navigation.navigate('Single')}
          >
            <Entypo name="chevron-right" size={24} color="#979797" />
          </TouchableOpacity>
        </View>

      
        {/* <View style={styles.listItem}>
          <MonoText>
            363 Sioux Rd, Sherwood Park
          </MonoText>
          <TouchableOpacity
            onPress={() => navigation.navigate('Single')}
          >
            <Entypo name="chevron-right" size={24} color="#4BB244" />
          </TouchableOpacity>
        </View>

        <View style={styles.listItem}>
          <MonoText>
            363 Sioux Rd, Sherwood Park
          </MonoText>
          <TouchableOpacity>
            <Entypo name="chevron-right" size={24} color="#4BB244" />
          </TouchableOpacity>
        </View> */}
      {/* </ScrollView> */}
      </View>
      }
      <View style={styles.imgBgWrapper}>
        <Image source={require('../assets/images/icon-back.png')} style={styles.imgBg}/>
      </View>
    </View>
  );
}

const SingleAddress = ({ navigation }) => {
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

export default function AddressesScreen() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Addresses" 
        component={Addresses}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Single" 
        component={SingleAddress}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
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
    marginTop: 36
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
    // bottom: -160,
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
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20
  },
  primaryButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});
