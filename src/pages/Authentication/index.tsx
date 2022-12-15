import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Alert, View, Text, Image, TouchableOpacity } from "react-native";
import logo from "../../assets/logo.png";
import * as LocalAuthentication from "expo-local-authentication";
import { formatDate } from "../../utils/date";
import { styles } from "./styles";

export function Authentication() {
  const { userName, formatDate: date, message } = formatDate("Lucas");
  const [hasBiometricSupported, setHasBiometricSupported] =
    React.useState<boolean>(false);

  // verifica se o aparelho do usuário possuí biometria
  async function biometricSupported() {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    console.log(compatible);
    setHasBiometricSupported(compatible);
  }

  async function handleBiometricAuth() {
    const savedBiometric = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login with Biometric",
      disableDeviceFallback: true,
    });
    console.log(savedBiometric);
    return Alert.alert(`Bem Vindo ${userName}`);
  }
  useEffect(() => {
    biometricSupported();
  }, []);

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
          <TouchableOpacity
            style={styles.fingerButton}
            onPress={handleBiometricAuth}
          >
            <Ionicons name="finger-print-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
}
