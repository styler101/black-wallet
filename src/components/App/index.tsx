import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import logo from "../../assets/logo.png";
import { formatDate } from "../../utils/date";

export function Main() {
  const { userName, formatDate: date, message } = formatDate("Lucas");
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logo} style={styles.image} />
        </View>

        <View style={styles.main}>
          <Text style={styles.greetings}>
            {message} <Text style={styles.userName}> {userName}</Text>
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.fingerButton}>
            <Ionicons name="finger-print-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
}
