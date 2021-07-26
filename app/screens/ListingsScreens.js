import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import Icon from "../components/Icon";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Icon style={styles.icon} name={item.categories} />
            <Card
              title={"Hi"}
              subTitle={"$" + item.price}
              // image={item.image}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          </View>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  icon: {
    marginTop: 50,
  },
});

export default ListingsScreen;
