import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import logo from "../../assets/logo.png";
export function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>
    </View>
  );
}
