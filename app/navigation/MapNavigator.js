import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MapScreen from "../screens/MapScreen";
import ListingDetailsScreen from "../screens/ListingDetailScreen";

const Stack = createStackNavigator();

const MapNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Map" component={MapScreen} />
    <Stack.Screen name="ListingDetailScreen" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default MapNavigator;
