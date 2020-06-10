import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Fragment } from 'react';
import { ScreenTitleText } from '../components/ScreenTitleText';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Entypo, Ionicons, Feather, Foundation } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';

export default function ScheduleScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <ScreenTitleText>Appointments</ScreenTitleText>

<View>
        <View style={styles.addressWrapper}>
          <Entypo name="location-pin" size={24} color="#CCCCCC" />
          <Text>363 Sioux Rd, Sherwood Park, Edmonton</Text>
        </View>

        <View style={styles.dangerCard}>
          <View style={styles.dangerCardHeader}>
            <Foundation name="alert" size={24} color="#fff" />
            <MonoText style={styles.headerTitle}>SCHEDULING</MonoText>
            <Foundation name="alert" size={24} color="#FF8181" />
          </View>

          <View style={styles.dangerCardContent}>
            <View style={styles.iconBlock}>
              <Entypo name="calendar" size={24} color="#ccc" />
              <Text style={styles.date}>June 1st – June 6th</Text>
              <Text style={styles.time}>3 Hours</Text>
            </View>
            <Text>Your cleaning appointment is waiting to be scheduled. You will receive your appointment in the next 5 business days. This status will change the business day before your appointment.</Text>
          </View>
        </View>

        <View style={styles.primaryCard}>
          <View style={styles.primaryCardHeader}>
            {/* <Foundation name="alert" size={24} color="#fff" /> */}
            <MonoText style={styles.headerTitle}>SCHEDULED</MonoText>
            {/* <Foundation name="alert" size={24} color="#FF8181" /> */}
          </View>

          <View style={styles.primaryCardContent}>
            <View style={styles.iconBlock}>
              <View style={styles.iconBlockText}>
                <Entypo name="calendar" size={24} color="#ccc" />
                <Text style={styles.date}>June 1st – June 6th</Text>
              </View>  
              <Text style={styles.time}>3 Hours</Text>
            </View>
            <View style={styles.iconBlock}>
              <View style={styles.iconBlockText}>
                <Ionicons name="ios-checkmark-circle" size={24} color="#ccc" />
                <Text style={styles.date}>Checklist clean</Text>
              </View>
              <Text style={styles.time}>3 Hours</Text>
            </View>
          </View>
        </View>

      

        <View style={styles.addressWrapper}>
          <Text>Finished and Cancelled Appointments</Text>
          <Entypo name="chevron-right" size={24} color="#4BB244" />
        </View>
    </View>
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Home')}
          // onPress={loginHandler}
        >
          <Text style={styles.primaryButtonText}>Book a New Clean</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    // marginBottom: 50,
  },
  addressWrapper: {
    marginHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  }, 
  primaryButton: {
    backgroundColor: '#4BB244',
    paddingVertical: 12,
    marginHorizontal: 25,
    borderRadius: 5,
    marginBottom: 70
  },
  primaryButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 17,
  },
  dangerCard: {
    marginHorizontal: 25,
    borderColor: '#FF8181',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 20
  },
  dangerCardHeader: {
    backgroundColor: '#FF8181',
    flexDirection: 'row',
    color: '#fff',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  dangerCardContent:{
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  primaryCard: {
    marginHorizontal: 25,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  primaryCardHeader: {
    backgroundColor: '#4BB244',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  primaryCardContent:{
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  iconBlock: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconBlockText: {
    flexDirection: 'row',
    alignItems: 'center',
  }



});
