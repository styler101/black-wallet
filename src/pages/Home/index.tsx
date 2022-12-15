import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
//@ts-ignore
import { CreditCardInput } from "react-native-credit-card-input";

import logo from "../../assets/logo.png";
import { styles } from "./styles";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.image} />
      </View>
      <View>
        <CreditCardInput />
        <Text>
          {" "}
          Make payment muck easier by using all your cards in one piece
        </Text>
        <TouchableOpacity>
          <Text>+ Add Card</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
