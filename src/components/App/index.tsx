import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Main() {
  return (
    <View style={styles.container}>
      <Text> Black Wallet </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
