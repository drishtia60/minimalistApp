import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef,} from 'react';
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
import Pomodoro from './screens/pomodro';
import Home from './screens/home';
import Calender from "./screens/calender"

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pomodoro" component={Pomodoro} />
        <Stack.Screen name = "Calender" component={Calender}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


