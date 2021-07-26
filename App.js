import React from "react";

import Screen from "./app/components/Screen";
import MapScreen from "./app/screens/MapScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return <MapScreen />;
  // (
  //   <NavigationContainer theme={navigationTheme}>
  //     <AppNavigator />
  //   </NavigationContainer>
  // );
}
