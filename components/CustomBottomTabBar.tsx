import React, { Fragment, useEffect, useState, useMemo } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { AuthContext } from '../store/AuthContext'
import Colors from '../constants/Colors'

export const CustomBottomTabBar = ({navigation}, props) => {
  // const auth = React.useContext(AuthContext) 
  // const { state } = props;
  const [active, setActive] = useState({
    home: false,
    add: true,
    sche: false,
    pro: false,
    help: false
  });

  const compileBackgroundStyle = useMemo(() => {
    return {
      // height: Globals.dimension.bottomTabBar.backgroundHeight,
      ...styles.background,
      height: 136,
      width: '100%',
      marginBottom: -20,
      position: 'absolute'
    };
}, []);
  
  useEffect(() => {
    console.log(props, navigation.isFocused())
    navigation.isFocused()
  }, [])

  return (
    <View style={styles.container}>
        <Image 
          source={require('../assets/images/navbar/navbar-background.png')}
          style={compileBackgroundStyle}
        />
        
        <View 
          style={styles.navWrapper}
        >

        <TouchableOpacity 
          onPress={() => {
            navigation.navigate('Home')
            setActive({
              home: true,
              add: false,
              sche: false,
              pro: false,
              help: false
            })
          }}
          {...props} 
          style={styles.customTab}
        >
        { !active.home ?
          <Image 
            source={require('../assets/nav-icons/ho1.png')}
            style={styles.navIcon}
          /> :
          <Image 
            source={require('../assets/nav-icons/ho2.png')}
            style={styles.navIcon}
          />
          }
          <Text style={!active.home
            ? styles.navText
            : styles.navTextActive
          }>Cleans</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.customTab}
          onPress={() => {
            navigation.navigate('Addresses')
            setActive({
              home: false,
              add: true,
              sche: false,
              pro: false,
              help: false
            })
          }}
        >
          { !active.add ?
            <Image 
              source={require('../assets/nav-icons/a1.png')}
              style={styles.navIcon}
            /> :
            <Image 
              source={require('../assets/nav-icons/a2.png')}
              style={styles.navIcon}
            />
          }
          <Text style={!active.add 
            ? styles.navText
            : styles.navTextActive
          }>Addresses</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.customTabCenter}
          onPress={() => {
            navigation.navigate('Schedule')
            setActive({
              home: false,
              add: false,
              sche: true,
              pro: false,
              help: false
            })
          }}
        >
        <View style={styles.notification}/>
        { !active.sche ?
        <Image 
          source={require('../assets/nav-icons/s1.png')}
          style={{width: 50, height: 50}}
        /> :
        <Image 
          source={require('../assets/nav-icons/s2.png')}
          // style={styles.img}
          style={{width: 50, height: 50}}
        />
        }
          <Text style={!active.sche 
            ? styles.navText
            : styles.navTextActive
          }>Schedule</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.customTab}
          onPress={() => {
            navigation.navigate('Profile')
            setActive({
              home: false,
              add: false,
              sche: false,
              pro: true,
              help: false
            })
          }}
        >
{ !active.pro ?
        <Image 
          source={require('../assets/nav-icons/p1.png')}
          // style={styles.img}
          style={styles.navIcon}
        /> :
        <Image 
          source={require('../assets/nav-icons/p2.png')}
          // style={styles.img}
          style={styles.navIcon}
        />
        }
          <Text style={!active.pro 
            ? styles.navText
            : styles.navTextActive
          }>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          // accessibilityStates={focused ? ['selected'] : []} 
          style={styles.customTab}
          onPress={() => {
            navigation.navigate('Help')
            setActive({
              home: false,
              add: false,
              sche: false,
              pro: false,
              help: true,
            })
          }}
        >
        
          { !active.help ?
        <Image 
          source={require('../assets/nav-icons/h1.png')}
          // style={styles.img}
          style={styles.navIcon}
        /> :
        <Image 
          source={require('../assets/nav-icons/h2.png')}
          // style={styles.img}
          style={styles.navIcon}
        />
        }
        <Text style={!active.help 
            ? styles.navText
            : styles.navTextActive
          }>Help</Text>
        </TouchableOpacity>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
  navWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 6,
    paddingBottom: 11,
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20,
  },
  customTab: {
    alignItems: 'center',
    width: '20%',
  },
  customTabCenter: {
    marginBottom: 10,
    width: '20%',
    alignItems: 'center',
  },
  navText: {
    color: '#595959',
    fontFamily: 'ubuntu',
    textTransform: 'uppercase',
    fontSize: 12,
  },
  navTextActive: {
    color: Colors.tintColor,
    fontFamily: 'ubuntu',
    textTransform: 'uppercase',
    fontSize: 12,
  },
  navIcon: {
    width: 30,
    height: 30,
    marginBottom: 12
  },
  notification: {
    backgroundColor: '#FF6060',
    position:'absolute',
    height: 10,
    width: 10,
    borderRadius: 50,
    right: 13,
  },
  background: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
  },
  hidden: {
    display: 'none',
  },
});