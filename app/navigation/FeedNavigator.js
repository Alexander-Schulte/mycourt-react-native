import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreens";
import ListingDetailsScreen from "../screens/ListingDetailScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingDetailScreen" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
