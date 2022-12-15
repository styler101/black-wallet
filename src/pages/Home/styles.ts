import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
  },

  header: {
    paddingHorizontal: 32,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 180,
    height: 50,
  },

  main: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  cardImage: {
    width: 320,
    height: 280,
    resizeMode: "contain",
  },

  cardText: {
    color: "#ffffffa9",
    width: 240,
    textAlign: "center",
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
  button: {
    marginBottom: 50,
    width: 250,
    height: 42,
    backgroundColor: "#F4AE64",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },

  buttonText: {
    color: "#fff",
  },
});
