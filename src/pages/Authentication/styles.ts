import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#111",
    position: "relative",
  },

  header: {
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 180,
    height: 50,
    resizeMode: "contain",
  },

  main: {
    alignItems: "center",
    justifyContent: "center",
  },

  greetings: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "Inter_400Regular",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  userName: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "Inter_400Regular",
  },

  footer: {
    width: "100%",
    height: 80,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },

  fingerButton: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ffffffe6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
