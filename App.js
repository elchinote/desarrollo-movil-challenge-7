import React from 'react'
import { createStackNavigator,createBottomTabNavigator  } from 'react-navigation'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'

// const RootStack = createStackNavigator({
//   Screen1: {
//     screen: Screen1,
//   },
//   Screen2: {
//     screen: Screen2,
//   },
// })


const Screen1Stack = createStackNavigator({
  Home: Screen1,
});

Screen1.navigationOptions = {
  tabBarLabel: 'Screen1',
  title: 'Screen1',
};


const Screen2Stack = createStackNavigator({
  Home: Screen2,
});

Screen2.navigationOptions = {
  tabBarLabel: 'Screen2',
  title: 'Screen2',
};


const Screen3Stack = createStackNavigator({
  Home: Screen3,
});

Screen3.navigationOptions = {
  tabBarLabel: 'Screen3',
  title: 'Screen3',
};





export default createBottomTabNavigator({
  Screen1,
  Screen2,
  Screen3,
});