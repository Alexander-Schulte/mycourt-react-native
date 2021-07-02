import React from "react";
import colors from "../config/colors";
import { ImageBackground, StyleSheet, View, Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/Background.jpg")}
    >
      {/* <Image source={require("../assets/icon.png")} /> */}
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.seccondary,
  },
});

export default WelcomeScreen;
