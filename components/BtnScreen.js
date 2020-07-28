import React, { useState, useEffect, createRef } from 'react';
import { View,  Easing, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

// var {vw, vh, vmin, vmax} = require('react-native-viewport-units');

const GOOGLE_PLACES_API_KEY = "AIzaSyBCyOEh2WrOPQOTrUtFZdknEInK6TthZxI"


export const MainScreen = ({navigation}) => {
    const [angleValue, setAngleValue] = useState(-86)
    // const [angle, setAngle] = useState(`${-90}deg`)
    const [testFill, setTestFill] = useState(0)
    const [intervalActive, setIntervalActive] = useState(0)

    // const progress = createRef()
    const progress = React.useRef()

    // let angleValue = -90

    let angleTest = -86

    const startProgress = () => {
        // progress.animate(100, 2000, Easing.linear);
        console.log('Test', progress)
     }

    const changeAngle = () => {
    // const changeAngle = 
        setIntervalActive(true)
        console.log('Interval ACtive', intervalActive)
        setInterval(() => {
            frame()
        }, 78.3)
    }

    const frame = () => {
        console.log('ShowAngle', angleTest)
        if(angleTest > 270) {
            setAngleValue(270)
            // console.log('Stop')
            return clearInterval(changeAngle)
            console.log('Stop2')
            return;
        } else if ( angleTest <= 270 ) {
            setAngleValue(angleTest++)
        } else if (!intervalActive) {
            console.log('Interval Active', intervalActive)
            clearInterval(changeAngle)
            return;
        }
    }

    // const timer = () => {setInterval(() => {
    //     if(angleTest < 0) {
    //         // angleValue++
    //         let test = angleTest++
    //         console.log('test', test)
    //         setAngleValue(test)
    //     } else if(angleTest === -1){
    //         // angleValue = 1
    //         setAngleValue(1)
    //     } else if(angleTest === 270){
    //         // angleValue = 270
    //         setAngleValue(270)
    //         clearInterval() 
    //     } else {
    //         // angleValue++
    //         setAngleValue()
    //     }
    //     console.log(angleValue)
    //     setAngle(`${angleValue}deg`)
    //   }, 49)};

    useEffect(() => {
        // changeAngle()
        // timer()
    }, [])

    return (
        <>
            <View style={styles.container}>
                <View style={styles.welcome}>
                    <Text style={styles.hello}>Hello</Text>
                    <Text style={styles.name} >Carlos</Text>
                </View>
                <MapView
                    // provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    showsUserLocation={false}
                    followUserLocation={false}
                    zoomEnabled={true}
                >
                </MapView>

                <View style={[
                    styles.progressDotWrapper, 
                    {transform: [ 
                        {   translateX: -1 * (110 / 2)},
                        {   rotate: `${angleValue}deg` },
                        {   translateX: (101 / 2) },
                        // {   translateX: -1 * (111 / 2)},
                        // {   rotate: `${angleValue}deg` },
                        // {   translateX: (101 / 2) },
                    ]}
                ]}>
                    <View style={styles.progressDotBase} />
                    <View style={styles.progressDot} />
                </View>


                <View style={styles.sendAlertWrapper}>
                    <TouchableOpacity 
                        style={styles.sendAlertBtn}
                        onPress={() => {
                            navigation.navigate('SelectCategory')
                        }}
                    >
                        {/* <View style={styles.btnCenter}/> */}
                        <Text style={styles.sendAlertBtnText}>Send{"\n"} Alert</Text>
                    </TouchableOpacity>
                    {testFill > 0 ?
                    <AnimatedCircularProgress
                        ref={progress}
                        size={230}
                        width={9}
                        prefill={1}
                        fill={100}
                        fill={testFill}
                        easing={Easing.linear}
                        // fill={angleValue + 90}
                        // fill={this.state.spinValue}
                        rotation={0}
                        duration={30000}
                        tintColor="#FF0000"
                        backgroundColor="transparent"
                        onAnimationComplete={
                            () => console.log('onAnimationComplete')
                        }
                        style={{
                            position: 'absolute',
                            bottom: -15,
                        }}
                        lineCap="round"
                        // renderCap={console.log('Check', testFill)}
                    />
                    : null }
                </View>
                <View style={styles.hintWrapper}>
                    <TouchableOpacity
                        style={styles.hintTouch}
                        onPress={() => {
                            // circularProgress.animate(100, 8000, Easing.quad);
                            // this.refs.circularProgress.performLinearAnimation(100, 2000);
                            // progress.performLinearAnimation(100, 2000);
                            startProgress()
                            // setTestFill(100)
                        }}
                        onLongPress = {() => {
                            setTestFill(100)
                            changeAngle()
                        }}
                        onPressOut = {() => {
                            setTestFill(0)
                            clearInterval(changeAngle)
                            setAngleValue(-86)
                            angleTest = -86
                            setIntervalActive(false)
                        }}
                    >
                        <View style={styles.hint}>
                            <Text style={styles.hintText}>‘Tap and Hold’ to send alert</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        paddingTop: 100,
        paddingLeft: 40,
        backgroundColor: 'white'
    },
    hello: {
        fontSize: 25,
        fontFamily: 'RedHatDisplay-Medium',
    },
    map: {
        height: '100%',
        marginTop: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20,
        fontFamily: 'RedHatDisplay-Bold',
    },
    touch: {
        position: 'absolute',
        height: 210,
        width: 210,
        top: 200,
        backgroundColor: 'blue',
        zIndex: 999,
    },
    alert: {
        borderWidth: 4,
        borderColor: 'white',
        backgroundColor: 'red',
        borderRadius: 150,
        shadowColor: '#ff0000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 2,
        shadowRadius: 14.00,
        elevation: 24,
    },
    progressDotWrapper: {
        position: 'absolute',
        // left: (Dimensions.get('window').width / 2) + 2.5,
        left: (Dimensions.get('window').width / 2) + 3,
        width: 103,
        height: 200,
        bottom: 130,
        flexDirection: 'row',
        zIndex: 999,
        alignItems: 'center'
    },
    progressDotBase: {
        // backgroundColor: 'black',
        width: '100%',
        height: 1,
    },
    progressDot: {
        backgroundColor: '#FF0000',
        borderWidth: 4.5,
        borderColor: '#fff',
        borderRadius: 20,
        width: 15,
        height: 15,
        // right: (Dimensions.get('window').width / 2) - 7.5,
        zIndex: 100,
    },
    sendAlertBtnText: {
        color: 'white',
        position: 'absolute',
        fontSize: 38,
        fontFamily: 'RedHatDisplay-Medium',
        // fontFamily: 'Rubik-Regular',
        textAlign: 'center',
    },
    sendAlertWrapper: {
        position: 'absolute',
        bottom: 130,
        alignItems: 'center',
        width: '100%',
        height: 200,
        shadowColor: '#ff0000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 2,
        shadowRadius: 14.00,
        elevation: 24,
    },
    sendAlertBtn: {
        height: 100,
        backgroundColor: 'red',
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 150,
        borderWidth: 7,
        borderColor: '#fff',
    },
    btnCenter: {
        width: 1,
        height: 1,
        backgroundColor: '#fff',
        zIndex: 1999,
    },
    hint: {
        backgroundColor: '#181E36',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    hintText: {
        color: '#fff',
        fontFamily: 'RedHatDisplay-Medium',
    },
    hintWrapper: {
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        bottom: 35,
    },
})