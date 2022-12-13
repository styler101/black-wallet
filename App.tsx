import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Main } from "./src/components/App";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return !fontsLoaded ? (
    <ActivityIndicator size="small" color="#fff" />
  ) : (
    <React.Fragment>
      <StatusBar style="light" />
      <Main />
    </React.Fragment>
  );
}
