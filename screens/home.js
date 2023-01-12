import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef, Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Pomodoro from './pomodro';
import App from '../App';
import Calender from "./calender";

const Stack = createStackNavigator();

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../bg.png')}
          style={styles.backgroundImage}>
          <TouchableOpacity style={styles.routeCard1} 
                    onPress={async() =>                   
                      this.props.navigation.navigate("Calender")
                    }>
                        <Text style={styles.routeText}>Calender</Text>
                        <Image source={require("../calender.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeCard2}
            onPress={async () => this.props.navigation.navigate('Pomodoro')}>
            <Text style={styles.routeText}>Pomodoro</Text>
            <Image
              source={require('../clock.ong.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard1: {
        flex: 0.35,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 150,
        borderRadius: 30,
        backgroundColor: '#76b5c5'},
  routeCard2: {
    flex: 0.35,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 60,
    borderRadius: 30,
    backgroundColor: '#76b5c5',
  },
  routeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 75,
    paddingLeft: 45,
  },

  iconImage: {
    position: 'absolute',
    height: 100,
    width: 200,
    resizeMode: 'contain',
    right: 20,
    top: -20,
  },
});
