import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Authentication } from "../pages/Authentication";
import { Home } from "../pages/Home";
const StackNavigator = createNativeStackNavigator();

export function Routes() {
  return (
    <StackNavigator.Navigator
      initialRouteName="Authentication"
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNavigator.Screen name="Authentication" component={Authentication} />
      <StackNavigator.Screen name="Home" component={Home} />
    </StackNavigator.Navigator>
  );
}
