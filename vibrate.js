import React,{Component} from "react";
import {View,Text,StyleSheet} from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default class HomeScreen extends Component{
  render(){
    return(
      <View>
      <Calendar
      
      initialDate = {'2022-12-08'}
      minDate = {'2000-01-01'}
      maxDate = {'2000-31-01'}
      onDayPress={day=>{
        console.log('selected day',day)
      }}
      onDayLongPress={day=>{
        console.log('selected day',day)
      }}
      onMonthChange = {month=>{
        console.log('selected month',month)
      }}
      hideArrows = {false}
      enableSwipeMonths = {true}

      theme = {{
        arrowColor : "black"
      }}

      />
      </View>
    )
  }
}