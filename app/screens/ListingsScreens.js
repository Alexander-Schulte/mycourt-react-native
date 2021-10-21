import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import Icon from "../components/Icon";
import AppText from "../components/AppText";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={getListingsApi.request} />
        </>
      )}
      <ActivityIndicator animating={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.location}
        renderItem={({ item }) => (
          <View>
            <Icon name="basketball" />
            <Card
              style={styles.card}
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.previewImage}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images}
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
});

export default ListingsScreen;
