import * as React from 'react';
import  { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { WelcomeScreen } from '../screens/WelcomeScreen'
import { AuthScreen } from '../screens/AuthScreen'
import { AsyncStorage } from 'react-native';

import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();
// const isSignedIn = true

export const Routes = (props) => {
    const [loggedIn, setLoggedIn] = useState(false)

    const getToken = async () => {
        const token = await AsyncStorage.getItem('token');
        setLoggedIn(true)
    }
    
    useEffect(() => {
        getToken()
    }, [])

    return(
    <Stack.Navigator>
        {/* {!loggedIn ? ( */}
        {!props.auth ? (
            <>
                <Stack.Screen 
                    name="Welcome" 
                    component={WelcomeScreen}
                    options={{ 
                        headerShown: false,
                    }} 
                />
                    {/* {console.log(isSignedIn)} */}
                <Stack.Screen 
                    name="Auth" 
                    component={AuthScreen}
                    options={{ 
                            headerShown: false,
                        }
                    }
                />
            </>
            ) : (
            <>
                <Stack.Screen 
                    name="Root" 
                    component={BottomTabNavigator} 
                    options={{ 
                        headerShown: false
                    }}
                />
            </>
          )
        }
    </Stack.Navigator>
    )
}