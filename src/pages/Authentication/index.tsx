import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";
import { formatDate } from "../../utils/date";
import { styles } from "./styles";
import logo from "../../assets/logo.png";

export function Authentication() {
  const navigation = useNavigation();
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
    navigation.navigate("Home");
  }
  React.useEffect(() => {
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
