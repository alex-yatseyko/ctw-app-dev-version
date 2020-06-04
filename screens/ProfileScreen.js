import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
// Components
import { ScreenTitleText } from '../components/ScreenTitleText';
import { PrimaryBtn } from '../components/PrimaryBtn';
import { AuthContext } from '../store/AuthContext';
import { Feather, Entypo } from '@expo/vector-icons'; 

export default function ProfileScreen() {
  const auth = React.useContext(AuthContext)

  const logoutHandler = async () => {
    auth.logout()
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {/* <View style={styles.welcomeContainer}> */}
        <View>
          <ScreenTitleText>Profile</ScreenTitleText>

          <View style={styles.lightBlock}>
            <View style={styles.profileBlock}>
              <Text style={styles.greytext}>Full Name: </Text>
              <Text style={styles.boldtext}>Alex Yatseyko</Text>
            </View>
            <View style={styles.profileBlock}>
              <Text style={styles.greytext}>Email: </Text>
              <Text style={styles.boldtext}>me@gmail.com</Text>
            </View>
            <View style={styles.profileBlock}>
              <Text style={styles.greytext}>Phone: </Text>
              <Text style={styles.boldtext}>063 02 34 788</Text>
            </View>

            <TouchableOpacity style={styles.editBtn}>
              <Feather name="edit" size={20} color="#4BB244" />
              <Text style={styles.primaryText}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.noBgBlock}>
            <Text style={styles.primaryTitle}>Notify Partners</Text>
            <Text style={styles.regularText}>
              We will automatically send appointment {`\n`} reminders and updates to the phone and email above. If you have other members, you can easily add them.
            </Text>
            <TouchableOpacity style={styles.editBtn}>
              <Feather name="edit" size={20} color="#4BB244" />
              <Text style={styles.primaryText}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.lightBlock}>
            <Text style={styles.blockTitle}>Partner 1</Text>

            <View style={styles.row}>
              <Feather name="user" size={24} color="#595959" />
              <Text style={styles.rowText}>Gunay Latif, wife</Text>
            </View>
            <View style={styles.row}>
              <Feather name="mail" size={24} color="#595959" />
              <Text style={styles.rowText}>glatif@gmail.com</Text>
            </View>
            <View style={styles.row}>
              <Feather name="phone" size={24} color="#595959" />
              <Text style={styles.rowText}>123 456 78 90</Text>
            </View>
{/* 
            <TouchableOpacity style={styles.editBtn}>
              <Feather name="edit" size={24} color="#4BB244" />
              <Text style={styles.primaryText}>Edit</Text>
            </TouchableOpacity> */}
          </View>

          <View style={styles.noBgBlock}>
            <Text style={styles.primaryTitle}>Payment Methods</Text>
          </View>

          <View style={styles.lightBlock}>
          <View style={styles.profileBlock}>
              <Text style={styles.greytext}>Card Number</Text>
              <Text style={styles.boldtext}>**** **** **** 0987</Text>
            </View>
            <View style={styles.profileBlock}>
              <Text style={styles.greytext}>Name on Card</Text>
              <Text style={styles.boldtext}>Elmir Latifov</Text>
            </View>
            <View style={styles.profileBlock}>
              <Text style={styles.greytext}>Expiry</Text>
              <Text style={styles.boldtext}>12/25</Text>
            </View>


            <TouchableOpacity style={styles.editBtn}>
              <Feather name="edit" size={20} color="#4BB244" />
              <Text style={styles.primaryText}>Edit</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.rowBtn}>
            <Text style={styles.primaryText}>Payment History</Text>
            <Entypo name="chevron-right" size={22} color="#4BB244" />   
          </TouchableOpacity>

        <TouchableOpacity onPress={logoutHandler} style={styles.exitBtn}>
            <Text style={styles.btnText}>Log out</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 12,
  },
  editBtn: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    top: 15,
    alignItems: 'center',
  },
  greytext: {
    color: '#979797',
    fontSize: 14,
  },
  primaryText: {
    color: '#4BB244',
    fontFamily: 'ubuntu',
    fontSize: 16,
    marginLeft: 5,
  },
  primaryTitle: {
    color: '#4BB244',
    fontFamily: 'ubuntu',
    fontSize: 20,
  },
  boldtext: {
    fontSize: 18,
    color: '#595959',
    fontFamily: 'ubuntu',
  },
  blockTitle: {
    fontFamily: 'ubuntu-bold',
    color: '#595959',
    fontSize: 18,
    marginBottom: 20
  },  
  profileBlock: {
    marginVertical: 10
  },
  exitBtn: {
    backgroundColor: '#F4F4F4',
    paddingVertical: 12,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 25,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    marginBottom: 50,
    marginTop: 70,
  },
  rowBtn: {
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnText: {
    color: '#595959',
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'ubuntu',
  },
  contentContainer: {
    paddingTop: 30,
    paddingBottom: 20,
  },
  lightBlock: {
    backgroundColor: '#F4F4F4',
    borderRadius: 5,
    marginHorizontal: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginVertical: 45,
  },  
  noBgBlock: {
    marginHorizontal: 25,
    paddingVertical: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  rowText: {
    color: '#595959',
    fontSize: 15,
    fontFamily: 'ubuntu',
    marginLeft: 15,
  },
  regularText: {
    color: '#595959',
    fontSize: 16,
    marginTop: 35,
    lineHeight: 28,
  }

});
