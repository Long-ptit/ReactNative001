import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ScreenWelcome from "./src/screens/ScreenWelcome";
import ScreenDetail from "./src/screens/ScreenDetail";
import AppNavigator from "./src/utils/AppNavigator";

const Stack = createNativeStackNavigator();
const Stack2 = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Home() {
  return (
    <Tab.Navigator>
    <Drawer.Screen name="ScreenWelcome" component={ScreenWelcome} />
      <Drawer.Screen name="ScreenDetail" component={ScreenDetail} />
</Tab.Navigator>
  );
}

export default class App extends Component {
  render() {
    return (

      // <NavigationContainer ref={AppNavigator.navigationReference}>
      //   <Stack.Navigator>
      //     <Stack.Screen name="ScreenWelcome" component={ScreenWelcome} />
      //     <Stack.Screen name="ScreenDetail" component={ScreenDetail} />
      //   </Stack.Navigator>
      // </NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer ref={AppNavigator.navigationReference}>
          <Drawer.Navigator>
            <Drawer.Screen name="ScreenWelcome" component={ScreenWelcome} />
            <Drawer.Screen name="ScreenDetail" component={ScreenDetail} />
            <Drawer.Screen name="Home" component={Home} />
          </Drawer.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    )
  }
}