import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import logo from "../../assets/logo.png";
import { formatDate } from "../../utils/date";

export function Main() {
  const { userName, formatDate: date, message } = formatDate("Lucas");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.image} />
      </View>

      <View style={styles.main}>
        <Text> {date}</Text>
      </View>
    </View>
  );
}
