import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import cardImage from "../../assets/card.png";
import logo from "../../assets/logo.png";
import { styles } from "./styles";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.image} />
      </View>
      <View style={styles.main}>
        <Image source={cardImage} style={styles.cardImage} />
        <Text style={styles.cardText}>
          Make payment muck easier by using all your cards in one piece
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.cardText}>+ Add Card</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
