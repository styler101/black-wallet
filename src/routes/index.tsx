import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Authentication } from "../pages/Authentication";

const StackNavigator = createNativeStackNavigator();

export function Routes() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Authentication" component={Authentication} />
    </StackNavigator.Navigator>
  );
}
