import { React, useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import Icon from "../components/Icon";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    setListings(response.data);
  };
  useEffect(() => {
    loadListings;
  }, []);

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
              imageUrl={item.images[0].url}
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
