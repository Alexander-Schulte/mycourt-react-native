import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";

import Screen from "../components/Screen";

function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        placeholder="Email"
        keyBoardType="email-address"
        onChangeText={(text) => setEmail(text)}
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default LoginScreen;
