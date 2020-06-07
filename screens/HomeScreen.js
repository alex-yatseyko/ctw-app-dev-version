import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as Location from 'expo-location';
// import { Notifications, Location, Permissions } from 'expo';
// import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import MapView from 'react-native-maps';

import { ScreenTitleText } from '../components/ScreenTitleText';
import { NavBackground } from '../navigation/NavBackground'

import { tintColor } from '../constants/Colors'

export default function HomeScreen() {
  const [region, setRegion] = useState({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    })
  const [marker, setMarker] = useState({  
    "latitude": 0,
    "longitude": -122.35170505417733
  })

  const _getLocation = async () => {
    
  }

  const onAddressChange = () => {
    
  }

  const onRegionChange = (e) => {
    setRegion({ e });
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      // setLocation(location);
    })();
  }, [region]);

  return (
    <View style={styles.container}>
      <ScrollView>
      <ScreenTitleText>Clean Address</ScreenTitleText>
      <Text style={styles.text}>It looks like you don’t have a home linked to your account. Please, enter the service address below so we can verify we serve you area and provide with correct pricing.</Text>
      <TextInput
        placeholder="Type" 
        onChange={ onAddressChange }
        style={styles.addressInput}
      />

      <MapView 
        // onRegionChange={onRegionChange}
        style={styles.mapStyle}
        showsUserLocation={true}
        // onPress={(e) => console.log(e.nativeEvent.coordinate)}
        onPress={(e) => {
          setMarker(e.nativeEvent.coordinate)
          setRegion(region)
          // console.log(e.nativeEvent)
        }}
        // region={region}
        onRegionChange={region => {
          // this.setState({region});
          // console.log(region)
          setRegion(region)
        }}
      >
        <MapView.Marker coordinate={marker} >
          <Image source={require('../assets/images/marker.png')} style={{width: 40, height: 50}} />
        </MapView.Marker>
      </MapView>
{/* 
      <MapView 
        style={styles.map} 
        region={this.state.region}
        onPress={(e) => this.setState({ markers: [...this.state.markers, { latlng: e.nativeEvent.coordinate }] })}>
{
    this.state.markers.map((marker, i) => (
        <MapView.Marker key={i} coordinate={marker.latlng} />
    ))
}
</MapView> */}

    {/* 
      <Image 
        source={require('../assets/images/map-image.png')}
        style={styles.map}
      /> */}

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Create Home</Text>
      </TouchableOpacity>

      <Text>{tintColor}</Text>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  mapStyle: {
    // width: Dimensions.get('window').width,
    width: '100%',
    // height: '50%',
    height: 200,
    marginBottom: 40,
  },
  map: {
    width: '100%', 
    marginBottom: 20,
  },
  text: {
    paddingHorizontal: 25,
    marginTop: 30,
    fontSize: 16,
    lineHeight: 24,
    color: '#595959',
  },
  addressInput: {
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 25,
    marginVertical: 30,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  primaryButton: {
    backgroundColor: '#4BB244',
    paddingVertical: 15,
    marginHorizontal: 25,
    borderRadius: 5,
  },
  primaryButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});
