import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View, Animated, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import { AuthContext } from '../store/AuthContext'
import { useNavigation } from '@react-navigation/native';

import TabBarIcon from '../components/TabBarIcon';
import { NavBackground } from './NavBackground'

import CleansRoot from '../screens/CleansRoot';
import HomeScreen from '../screens/HomeScreen';
import AddressesScreen from '../screens/AddressesScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HelpScreen from '../screens/HelpScreen';

import {CustomBottomTabBar} from '../components/CustomBottomTabBar'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Addresses';

import { Ionicons, Feather } from '@expo/vector-icons';

const BottomRoutes = ({navigation, screenName}) => {
  const auth = React.useContext(AuthContext) 
  // const isAuthenticated = !!auth.token
  const navigation2 = useNavigation();

  useEffect(() => {
    // console.log('Bottom', auth)
    // console.log({focused})
    // console.log(navigation.addListener())
    // console.log(screenName)
    // console.log('test', navigation2)
    // AsyncStorage.setItem('activeTab', 'ad');
  }, [])

  return(
    <React.Fragment>  
      <BottomTab.Navigator 
        initialRouteName={INITIAL_ROUTE_NAME}
        style={styles.tabWrapper}
        // tabBar={() => <Image 
        //   source={require('../assets/images/navbar/navbar-background.png')}
        //   style={styles.img}
        // />}
        tabBar={(props, navigation) => <CustomBottomTabBar navigation={navigation} {...props} />}
       
        tabBarOptions={{
          tabStyle: {
            backgroundColor: 'transparent',
            zIndex: 999,
          },
          activeTintColor: '#4BB244',
          style: {
            // marginBottom: 20,
            // backgroundColor: '#f4f4f4',
            backgroundColor: 'transparent',
            // backgroundColor: 'red',
            zIndex: 999,
            // opacity: 0,
            // display: 'none',
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
          // style={styles.tabBtn}
          // options={{
          //   title: 'New Clean',
          //   tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home" size={30}/>,
          //   headerShown: false,
          // }}
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
        //   options={{
        //     title: 'Schedule',
        //     tabBarIcon: ({ focused }) => <TouchableOpacity
        //     // focused={focused}
        //     activeOpacity={1}
        //     style={{
        //         borderRadius: Math.round((150 * 0.5) + (150 * 0.5)) / 2,
        //         width: 150 * 0.5,
        //         height: 150 * 0.5,
        //         backgroundColor: '#fff',
        //         backgroundColor: '#f4f4f4',
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //         zIndex: 20,
        //     }}
        //     underlayColor='#ccc'
        // >
        //           <TabBarIcon 
        //             name="md-clock" 
        //             size={50}
        //             focused={focused}
        //             style={{
        //               borderRadius: Math.round((150 * 0.5) + (150 * 0.5)) / 2,
        //               width: 150 * 0.5,
        //               height: 150 * 0.5,
        //               justifyContent: 'center',
        //               alignItems: 'center',
        //               zIndex: 20,
        //           }}
        //           />
        //     </TouchableOpacity>
        //   }}
        />

        <BottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          // options={{
          //   title: 'Profile',
          //   tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-cog" size={30} />,
          // }}
        />
        <BottomTab.Screen
          name="Help"
          component={HelpScreen}
          // options={{
          //   title: 'Help',
          //   tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-help-circle-outline" size={30}/>,
          // }}
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
      
      <ImageBackground 
        style={{
          height: '100%', 
          // height: 120,
          width: '100%',
          position:'absolute',
          bottom: 0,
        }}
        source={require('../assets/images/navbar/navbar-background.png')}
      >

        <BottomRoutes 
          style={styles.tabs}
          navigation={navigation}
          // focused={focused}
        />
        
        {/* <View style={{height: 20, width: '100%', backgroundColor: 'transparent'}}/> */}
        
        {/* <Image 
          source={require('../assets/images/navbar/navbar-background.png')}
          style={styles.img}
        /> */}

      </ImageBackground>

     
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
  tab: {
    zIndex: 99
  },  
  img: {
    position: 'absolute',
    bottom: 0,
    height: '14%',
    zIndex: 0,
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height
  },
  tabItem: {
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
