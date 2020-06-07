import React, { Fragment, useEffect, useState, useMemo } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { AuthContext } from '../store/AuthContext'
import { tintColor } from '../constants/Colors'

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
      // height: 120,
      height: 126,
      width: '100%',
      marginBottom: -20,
      position: 'absolute'
    };
}, []);

  const buildHome = () => {
    return`
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="23.167" viewBox="0 0 21 23.167">
        <g id="Group_63" data-name="Group 63" transform="translate(0.75 0.75)">
          <path id="Path_10" data-name="Path 10" d="M3,9.583,12.75,2,22.5,9.583V21.5a2.167,2.167,0,0,1-2.167,2.167H5.167A2.167,2.167,0,0,1,3,21.5Z" transform="translate(-3 -2)" fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          <path id="Path_11" data-name="Path 11" d="M9,22.833V12h6.5V22.833" transform="translate(-2.5 -1.167)" fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
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
        fill="${
          active.add 
          ? tintColor
          : 'none'
        }" 
        stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <circle id="Ellipse_2" data-name="Ellipse 2" cx="3.25" cy="3.25" r="3.25" transform="translate(6.5 6.5)" stroke-width="1.5" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
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

  const buildProfile = () => {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="18.833" height="21" viewBox="0 0 18.833 21">
        <g id="Group_66" data-name="Group 66" transform="translate(0.75 0.75)">
          <path id="Path_14" data-name="Path 14" d="M21.333,21.5V19.333A4.333,4.333,0,0,0,17,15H8.333A4.333,4.333,0,0,0,4,19.333V21.5" transform="translate(-4 -2)" 
          fill="none" 
          stroke="#979797" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="1.5"
        />
          <circle id="Ellipse_4" data-name="Ellipse 4" cx="4.333" cy="4.333" r="4.333" transform="translate(4.333)" 
          stroke-width="1.5" 
          stroke="#979797"
          stroke-linecap="round" 
          stroke-linejoin="round" 
          fill="none"
        />
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
  

  // #979797


  // stroke="${
  //   // // focused 
  //   // ? '#979797'
  //   // : 'red'
  //   '#979797'
  // }
  
  // " 
  
  useEffect(() => {
    console.log(props, navigation.isFocused())
    navigation.isFocused()
    // console.log(state)
    // console.log(auth)
  }, [])

  return (
    <View style={styles.container}>
        <Image 
          source={require('../assets/images/navbar/navbar-background.png')}
          // style={styles.img}
          style={compileBackgroundStyle}
        />

        <View 
          style={styles.navWrapper}
        >

        <TouchableOpacity 
          // focused={console.log(focused)}
          onPress={() => {
            navigation.navigate('Home')
          }}
          {...props} 
          style={styles.customTab}
          // focused={state.index === 2}
        >
          {/* <View 
            // style={{width: 100, height: 60, zIndex: 20}}
            style={styles.customTab}
          > */}
            <SvgXml xml={buildHome()} width={30} height={32} />
            <Text>Cleans</Text>
          {/* </View> */}
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.customTab}
          // focused={console.log(focused)}
          onPress={() => {
            navigation.navigate('Addresses')
          }}
        >
          {/* <View style={{width: 100, height: 20, zIndex: 20}}> */}
            <SvgXml xml={buildAddresses()} width={30} height={32} />
            <Text>Addresses</Text>
          {/* </View> */}
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.customTab}
          // focused={console.log(focused)}
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
        { !active.sche ?
        <Image 
          source={require('../assets/nav-icons/s1.png')}
          // style={styles.img}
          // style={compileBackgroundStyle}
          style={{width: 50, height: 50}}
        /> :
        <Image 
          source={require('../assets/nav-icons/s2.png')}
          // style={styles.img}
          // style={compileBackgroundStyle}
          style={{width: 50, height: 50}}
        />
        }

          
          {/* <SvgXml xml={buildSchedule()} width={50} height={50} /> */}
      
            <Text>Schedule</Text>


        </TouchableOpacity>

        <TouchableOpacity 

          style={styles.customTab}
          // focused={console.log(focused)}
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
          <SvgXml xml={buildProfile()} width={30} height={32} />
          {/* <View style={{width: 100, height: 60, zIndex: 20}}> */}
            <Text>Profile</Text>
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityRole="button"
          // accessibilityStates={focused ? ['selected'] : []} 
          style={styles.customTab}
          // focused={console.log(focused)}
          onPress={() => {
            navigation.navigate('Help')
            setActive({
              home: false,
              add: false,
              sche: false,
              pro: false,
              help: true
            })
          }}
        >
            <SvgXml xml={buildHelp()} width={30} height={32} />
            <Text>Help</Text>
        </TouchableOpacity>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginTop: -60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
  navWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 11,
    alignItems: 'center',
    // backgroundColor: 'red',
    width: '100%'
  },
  customTab: {
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    // width: 75, 
    // width: '20%',
    flex: 1,
    height: 70, 
    zIndex: 20,
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