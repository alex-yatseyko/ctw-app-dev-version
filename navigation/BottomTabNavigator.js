import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View, Animated, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import * as React from 'react';
import { useEffect, useState } from 'react';

import TabBarIcon from '../components/TabBarIcon';
import { NavBackground } from './NavBackground'

import HomeScreen from '../screens/HomeScreen';
import AddressesScreen from '../screens/AddressesScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HelpScreen from '../screens/HelpScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Addresses';

import { Ionicons, Feather } from '@expo/vector-icons';

const BottomRoutes = () => {
  return(
    <React.Fragment>    
      <BottomTab.Navigator 
        initialRouteName={INITIAL_ROUTE_NAME}
        style={styles.tabWrapper}
        tabBarOptions={{
          tabStyle: {
            backgroundColor: 'transparent',
            zIndex: 999,
          },
          activeTintColor: '#4BB244',
          style: {
            // marginBottom: 20,
            // backgroundColor: '#f4f4f4',
            zIndex: 999,
            opacity: 0,
            display: 'none',
          },
          tabBarComponent: () => {
            return(      
              <Image 
                source={require('../assets/images/navbar/navbar-background.png')}
                style={styles.img}
              />
            )
          }
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          style={styles.tabBtn}
          options={{
            title: 'New Clean',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home" size={30}/>,
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="Addresses"
          component={AddressesScreen}
          style={styles.tabBtn}
          options={{
            title: 'Addresses',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-pin" size={30}/>,
          }}
        />

        <BottomTab.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{
            title: 'Schedule',
            tabBarIcon: ({ focused }) => <TouchableOpacity
            // focused={focused}
            activeOpacity={1}
            style={{
                borderRadius: Math.round((150 * 0.5) + (150 * 0.5)) / 2,
                width: 150 * 0.5,
                height: 150 * 0.5,
                backgroundColor: '#fff',
                backgroundColor: '#f4f4f4',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 20,
            }}
            underlayColor='#ccc'
        >
                  <TabBarIcon 
                    name="md-clock" 
                    size={50}
                    focused={focused}
                    style={{
                      borderRadius: Math.round((150 * 0.5) + (150 * 0.5)) / 2,
                      width: 150 * 0.5,
                      height: 150 * 0.5,
                      // backgroundColor: '#fff',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 20,
                  }}
                  />
            </TouchableOpacity>
          }}
        />

        <BottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-cog" size={30} />,
          }}
        />
        <BottomTab.Screen
          name="Help"
          component={HelpScreen}
          options={{
            title: 'Help',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-help-circle-outline" size={30}/>,
          }}
        />
      </BottomTab.Navigator>
    {/* </ImageBackground> */}
    {/* <NavBackground></NavBackground> */}
    </React.Fragment>
  )
}

export default function BottomTabNavigator({ navigation, route }) {
  const [homeActive, setHomeActive] = useState();
  const [active, setActive] = useState({
    home: true,
    add: false,
    sche: false,
    pro: false,
    help: false
  });


  useEffect(() => {

  }, [])

  return (
    <View style={{height: '100%', width: '100%'}}>
      <BottomRoutes />
      {/* <View style={{height: 20, width: '100%', backgroundColor: 'transparent'}}/> */}
      <Image 
        source={require('../assets/images/navbar/navbar-background.png')}
        style={styles.img}
      />

      <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 20}}>
      <TouchableOpacity
        onPress={
          () => {
            // setHomeActive(true)
            setActive({
              home: true,
              add: false,
              sche: false,
              pro: false,
              help: false
            })
            navigation.navigate('Home')
          }
        }
        style={styles.tabItem}
      >
        <Ionicons
          name={'ios-home'}
          size={30}
          // style={{ marginBottom: -3 }}
          style={active.home ? styles.active : styles.inactive} 
          // color={focused ? 'green' : Colors.tabIconDefault}
        />
        <Text style={[styles.tabItemText, active.home ? styles.active : styles.inactive]}>Cleans</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setActive({
            home: false,
            add: true,
            sche: false,
            pro: false,
            help: false
          })
          navigation.navigate('Addresses')
          }
        }
        // style={{justifyContent: 'center'}}
        style={styles.tabItem}
      >
        {/* <Feather name="map-pin" size={24} color="black" /> */}
        <Ionicons
          name={'ios-pin'}
          size={30}
          style={active.add ? styles.active : styles.inactive} 
          // style={{ marginBottom: -3 }}
          // color={focused ? 'green' : Colors.tabIconDefault}
        />
        <Text style={[styles.tabItemText, active.add ? styles.active : styles.inactive]}>
          Addresses
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setActive({
            home: false,
            add: false,
            sche: true,
            pro: false,
            help: false
          })
          navigation.navigate('Schedule')}
        }  
        // style={{justifyContent: 'center'}}
        style={styles.tabItem}
      >
        <Feather 
          name="clock" 
          size={50} 
          color="#ccc" 
        />
        {/* <Ionicons
          name={'md-clock'}
          size={50}
          style={active.sche ? styles.active : styles.inactive} 
          // style={{ marginBottom: -3 }}
          // color={focused ? 'green' : Colors.tabIconDefault}
        /> */}
        <Text style={[styles.tabItemText, active.sche ? styles.active : styles.inactive]}>Schedule</Text>
      </TouchableOpacity>

      <TouchableOpacity
        // onPress={() => navigation.navigate('Profile')}
        onPress={() => {
          setActive({
            home: false,
            add: false,
            sche: false,
            pro: true,
            help: false
          })
          navigation.navigate('Profile')}
        }  
        // style={{justifyContent: 'center'}}
        style={styles.tabItem}
      >
        <Ionicons
          name={'ios-cog'}
          size={30}
          // style={{ marginBottom: -3 }}
          style={active.pro ? styles.active : styles.inactive} 
          // color={focused ? 'green' : Colors.tabIconDefault}
        />
        <Text style={[styles.tabItemText, active.pro ? styles.active : styles.inactive]}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        // onPress={() => navigation.navigate('Help')}
        onPress={() => {
          setActive({
            home: false,
            add: false,
            sche: false,
            pro: false,
            help: true
          })
          navigation.navigate('Help')}
        }  
        // disabled={true}
        style={styles.tabItem}
      >
        <Ionicons
          name={'ios-help-circle-outline'}
          size={30}
          // style={{ marginBottom: -3 }}
          style={active.help ? styles.active : styles.inactive} 
          // color={activeOpacity ? 'green' : Colors.tabIconDefault}
        />
        <Text style={[styles.tabItemText, active.help ? styles.active : styles.inactive]}>Help</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabWrapper: {
    // paddingBottom: 20,
    // height: 200,
    zIndex: 999,
  },
  tabBtn: {
    paddingBottom: 20
  }, 
  img: {
    position: 'absolute',
    bottom: 10,
    // backgroundColor: 'red',
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height
  },
  tabItem: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1
  },
  tabItemText: {
    fontFamily: 'ubuntu',
    textTransform: 'uppercase',
    fontSize: 11
  },
  active: {
    color: '#4BB244'
  },
  inactive: {
    color: '#979797'
  }
});
