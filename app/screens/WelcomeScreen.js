import React from "react";
import colors from "../config/colors";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={4}
      style={styles.background}
      source={require("../assets/Background.jpg")}
    >
      {/* <Image source={require("../assets/icon.png")} /> */}
      <View style={styles.logoContainer}>
        <Ionicons style={styles.logo} name="basketball-outline" size={60} />
        <Text style={styles.tagline}>Find your next court</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 15,
  },
  buttonsContainer: {
    padding: 20,
    marginBottom: 10,
    width: "100%",
  },

  text: {
    color: "#fff",
  },
});

export default WelcomeScreen;
