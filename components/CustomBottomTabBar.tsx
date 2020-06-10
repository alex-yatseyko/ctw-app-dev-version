import React, { Fragment, useEffect, useState, useMemo } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Feather } from '@expo/vector-icons';

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
      // height: 130,
      width: '100%',
      marginBottom: 0,
      position: 'absolute',
      transform: [{ scale: 1.2 }]
    };
}, []);

const buildHome = () => {
  return`
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
  <g id="Group_72" data-name="Group 72" transform="translate(-660 -632)">
    <rect id="Rectangle_18" data-name="Rectangle 18" width="26" height="26" transform="translate(660 632)" fill="#fff" opacity="0"/>
    <g id="Group_63" data-name="Group 63" transform="translate(663.25 634.167)">
      <path id="Path_10" data-name="Path 10" d="M3,9.583,12.75,2,22.5,9.583V21.5a2.167,2.167,0,0,1-2.167,2.167H5.167A2.167,2.167,0,0,1,3,21.5Z" transform="translate(-3 -2)" fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Path_11" data-name="Path 11" d="M9,22.833V12h6.5V22.833" transform="translate(-2.5 -1.167)" fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
  </g>
</svg>
  `
}
const buildFillHome = () => {
  return`
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
  <g id="Group_72" data-name="Group 72" transform="translate(-660 -632)">
    <rect id="Rectangle_18" data-name="Rectangle 18" width="26" height="26" transform="translate(660 632)" fill="#fff" opacity="0"/>
    <g id="Group_63" data-name="Group 63" transform="translate(663.25 634.167)">
      <path id="Path_10" data-name="Path 10" d="M3,9.583,12.75,2,22.5,9.583V21.5a2.167,2.167,0,0,1-2.167,2.167H5.167A2.167,2.167,0,0,1,3,21.5Z" transform="translate(-3 -2)" fill="#4bb244"/>
      <path id="Path_11" data-name="Path 11" d="M9,22.833V12h6.5V22.833" transform="translate(-2.5 -1.167)" fill="#f4f4f4"/>
    </g>
  </g>
</svg>
  `
}
const buildAddresses = () => {
  return`
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
  <g id="Group_71" data-name="Group 71" transform="translate(-694 -632)">
    <rect id="Rectangle_19" data-name="Rectangle 19" width="26" height="26" transform="translate(694 632)" fill="#fff" opacity="0"/>
    <g id="Group_64" data-name="Group 64" transform="translate(697.25 633.083)">
      <path id="Path_12" data-name="Path 12" d="M22.5,10.75c0,7.583-9.75,14.083-9.75,14.083S3,18.333,3,10.75a9.75,9.75,0,1,1,19.5,0Z" transform="translate(-3 -1)" 
      fill="none"
      stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <circle id="Ellipse_2" data-name="Ellipse 2" cx="3.25" cy="3.25" r="3.25" transform="translate(6.5 6.5)" stroke-width="1.5" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </g>
  </g>
</svg>  
  `
}
const buildFillAddresses = () => {
  return`
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
  <g id="Group_71" data-name="Group 71" transform="translate(-694 -632)">
    <rect id="Rectangle_19" data-name="Rectangle 19" width="26" height="26" transform="translate(694 632)" fill="#fff" opacity="0"/>
    <g id="Group_64" data-name="Group 64" transform="translate(697.25 633.083)">
      <path id="Path_12" data-name="Path 12" d="M22.5,10.75c0,7.583-9.75,14.083-9.75,14.083S3,18.333,3,10.75a9.75,9.75,0,1,1,19.5,0Z" transform="translate(-3 -1)" fill="#4bb244"/>
      <circle id="Ellipse_2" data-name="Ellipse 2" cx="3.25" cy="3.25" r="3.25" transform="translate(6.5 6.5)" fill="#f4f4f4"/>
    </g>
  </g>
</svg>  
  `
}
const buildSchedule = () => {
  return`
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <g id="Group_70" data-name="Group 70" transform="translate(-728 -632)">
    <rect id="Rectangle_20" data-name="Rectangle 20" width="40" height="40" transform="translate(728 632)" fill="#fff" opacity="0"/>
    <g id="Group_65" data-name="Group 65" transform="translate(731.333 635.333)">
      <circle id="Ellipse_3" data-name="Ellipse 3" cx="16.667" cy="16.667" r="16.667" transform="translate(0 0)" stroke-width="1.5" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path id="Path_13" data-name="Path 13" d="M12,6V16l6.667,3.333" transform="translate(4.667 0.667)" fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
  </g>
</svg>  
  `
}
const buildFillSchedule = () => {
  return`
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <g id="Group_70" data-name="Group 70" transform="translate(-728 -632)">
    <rect id="Rectangle_20" data-name="Rectangle 20" width="40" height="40" transform="translate(728 632)" fill="#fff" opacity="0"/>
    <g id="Group_65" data-name="Group 65" transform="translate(731.333 635.333)">
      <circle id="Ellipse_3" data-name="Ellipse 3" cx="16.667" cy="16.667" r="16.667" transform="translate(0 0)" fill="#4bb244"/>
      <path id="Path_13" data-name="Path 13" d="M12,6V16l6.667,3.333" transform="translate(4.667 0.667)" fill="none" stroke="#f4f4f4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
  </g>
</svg>
  `
}

const buildProfile = () => {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
  <g id="Group_69" data-name="Group 69" transform="translate(-762 -632)">
    <rect id="Rectangle_21" data-name="Rectangle 21" width="26" height="26" transform="translate(762 632)" fill="#fff" opacity="0"/>
    <g id="Group_66" data-name="Group 66" transform="translate(766.333 635.25)">
      <path id="Path_14" data-name="Path 14" d="M21.333,21.5V19.333A4.333,4.333,0,0,0,17,15H8.333A4.333,4.333,0,0,0,4,19.333V21.5" transform="translate(-4 -2)" fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <circle id="Ellipse_4" data-name="Ellipse 4" cx="4.333" cy="4.333" r="4.333" transform="translate(4.333)" stroke-width="1.5" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </g>
  </g>
</svg>

  `
}
const buildFillProfile = () => {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
  <g id="Group_69" data-name="Group 69" transform="translate(-762 -632)">
    <rect id="Rectangle_21" data-name="Rectangle 21" width="26" height="26" transform="translate(762 632)" fill="#fff" opacity="0"/>
    <g id="Group_66" data-name="Group 66" transform="translate(766.333 635.25)">
      <path id="Path_14" data-name="Path 14" d="M4,21.5V19.333A4.333,4.333,0,0,1,8.333,15H17a4.333,4.333,0,0,1,4.333,4.333V21.5Z" transform="translate(-4 -2)" fill="#4bb244" stroke="#4bb244" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <circle id="Ellipse_4" data-name="Ellipse 4" cx="4.333" cy="4.333" r="4.333" transform="translate(4.333)" stroke-width="1.5" stroke="#4bb244" stroke-linecap="round" stroke-linejoin="round" fill="#4bb244"/>
    </g>
  </g>
</svg>
  `
}
const buildHelp = () => {
  return`
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
    <g id="Group_68" data-name="Group 68" transform="translate(-796 -632)">
      <rect id="Rectangle_22" data-name="Rectangle 22" width="26" height="26" transform="translate(796 632)" fill="#fff" opacity="0"/>
      <g id="Group_67" data-name="Group 67" transform="translate(798.167 634.167)">
        <circle id="Ellipse_5" data-name="Ellipse 5" cx="10.833" cy="10.833" r="10.833" transform="translate(0 0)" stroke-width="1.5" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path id="Path_15" data-name="Path 15" d="M9.09,9.167a3.25,3.25,0,0,1,6.316,1.083c0,2.167-3.25,3.25-3.25,3.25" transform="translate(-1.409 -1.584)" fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <line id="Line_10" data-name="Line 10" x2="0.011" transform="translate(10.833 16.25)" fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      </g>
    </g>
  </svg>   
  `
}
const buildFillHelp = () => {
  return`
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
  <g id="Group_68" data-name="Group 68" transform="translate(-796 -632)">
    <rect id="Rectangle_22" data-name="Rectangle 22" width="26" height="26" transform="translate(796 632)" fill="#fff" opacity="0"/>
    <g id="Group_67" data-name="Group 67" transform="translate(798.167 634.167)">
      <circle id="Ellipse_5" data-name="Ellipse 5" cx="10.833" cy="10.833" r="10.833" transform="translate(0 0)" stroke-width="1.5" stroke="#4bb244" stroke-linecap="round" stroke-linejoin="round" fill="#4bb244"/>
      <path id="Path_15" data-name="Path 15" d="M9.09,9.167a3.25,3.25,0,0,1,6.316,1.083c0,2.167-3.25,3.25-3.25,3.25" transform="translate(-1.409 -1.584)" fill="none" stroke="#f4f4f4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <line id="Line_10" data-name="Line 10" x2="0.011" transform="translate(10.833 16.25)" fill="none" stroke="#f4f4f4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
  </g>
</svg>  
  `
}
const buildBg = () => {
  return`
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="405" height="124" viewBox="0 0 405 124">
  <defs>
    <filter id="Union_1" x="0" y="0" width="405" height="124" filterUnits="userSpaceOnUse">
      <feOffset dy="-5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feFlood flood-opacity="0.031"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Union_1)">
    <path id="Union_1-2" data-name="Union 1" d="M-6216,3997v-80h375v80Zm0-80h120c43,0,45.491-14,67.5-14s24.494,14,67.5,14h-255Z" transform="translate(6231 -3883)" fill="#f4f4f4"/>
  </g>
</svg>
  `
}
  
  useEffect(() => {
    console.log(props, navigation.isFocused())
    navigation.isFocused()
  }, [])

  return (
    <View style={styles.container}>
        {/* <Image 
          source={require('../assets/images/navbar/navbar-background.png')}
          style={compileBackgroundStyle}
        /> */}
        <SvgXml 
          style={compileBackgroundStyle} 
          xml={buildBg()} 
          width={Dimensions.get('window').width} 
          height={130} 
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
          <SvgXml xml={buildHome()} width={30} height={32} />
          :
          <SvgXml xml={buildFillHome()} width={30} height={32} />
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
            <SvgXml xml={buildAddresses()} width={30} height={32} />
            :
            <SvgXml xml={buildFillAddresses()} width={30} height={32} />
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
        <SvgXml xml={buildSchedule()} width={50} height={50} />
        :
        <SvgXml xml={buildFillSchedule()} width={50} height={50} />
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
      <SvgXml xml={buildProfile()} width={30} height={32} />
        :
        <SvgXml xml={buildFillProfile()} width={30} height={32} />
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
        <SvgXml xml={buildHelp()} width={30} height={32} />
        :
        <SvgXml xml={buildFillHelp()} width={30} height={32} />
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
    backgroundColor: '#F4F4F4',
  },
  navWrapper: {
    flexDirection: 'row',
    // position: 'absolute',
    // zIndex: 999,
    // paddingHorizontal: 6,
    alignItems: 'flex-end',
    width: '100%',
    paddingBottom: 6,
  },
  customTab: {
    alignItems: 'center',
    width: '20%',
    height: '100%',
    // backgroundColor: 'blue',
    // marginTop: -20,
  },
  customTabCenter: {
    // backgroundColor: 'red',
    marginBottom: 18,
    position: 'relative',
    width: '20%',
    height: '100%',
    alignItems: 'center',
    marginTop: -20,
  },
  navText: {
    color: '#595959',
    fontFamily: 'ubuntu',
    textTransform: 'uppercase',
    fontSize: 11,
    marginTop: 10,
  },
  navTextActive: {
    color: Colors.tintColor,
    fontFamily: 'ubuntu',
    textTransform: 'uppercase',
    fontSize: 11,
    marginTop: 10,
  },
  navIcon: {
    width: 30,
    height: 30,
    marginBottom: 12
  },
  notification: {
    backgroundColor: '#FF6060',
    position:'absolute',
    height: 12,
    width: 12,
    borderRadius: 50,
    right: 8,
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