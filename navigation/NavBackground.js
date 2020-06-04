import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';

export const NavBackground = () => {
    return (
        <React.Fragment>
            {/* <View style={styles.circle}></View> */}
            <Image 
                source={require('../assets/images/navbar/navbar-background.png')}
                style={styles.img}
            />
            <View style={styles.bottom}></View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    img: {
        height: 100,
        width: '100%',
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 20,
        zIndex: 1,
    },
    circle: {
        position: 'absolute',
        bottom: 15,
        borderRadius: Math.round((150 * 0.5) + (150 * 0.5)) / 2,
        // borderWidth: 1,
        // borderColor: '#000',
        width: 150 * 0.5,
        height: 150 * 0.5,
        // backgroundColor: '#fff',
        opacity: .4,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        // shadowColor: "#000",
        shadowColor: "green",
        shadowOffset: {
          width: 0,
          height: -5,
        },
        shadowOpacity: 0.43,
        shadowRadius: 2.62,
        elevation: 1,
        // zIndex: 1,
        // zIndex: 0,
    },
    bottom: {
        // backgroundColor: '#fff',
        backgroundColor: '#f4f4f4',
        width: '100%',
        height: 100,
        position: 'absolute',
        bottom: -20,
        zIndex: 0
    },
})
