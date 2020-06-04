import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './store/AuthContext'

import { Routes } from './navigation/routes'

import useLinking from './navigation/useLinking';

import BackendApiClient from './api/BackendApiClient';

export default function App(props) {
  const {token, login, logout} = useAuth()

  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  const isSignedIn = false

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        console.log('API Server', BackendApiClient.getApiBaseUrl())


        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          'ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf'),
          'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
          'ubuntu-medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    console.disableYellowBox = true; 
    const isAuthenticated = !!token
    return (
      <AuthContext.Provider value={{
        token,
        login,
        logout
      }}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
            <Routes auth={ isAuthenticated ? true : false }/>
          </NavigationContainer>
        </View>
      </AuthContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
