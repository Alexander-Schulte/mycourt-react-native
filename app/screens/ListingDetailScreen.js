import React from "react";
import { View, StyleSheet } from "react-native";

import { SliderBox } from "react-native-image-slider-box";

import colors from "../config/colors";

import AppText from "../components/AppText";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  const courtImages = listing.images.split("|");
  console.log(courtImages);

  return (
    <View>
      {/* <Image
        style={styles.image}
        tint="light"
        preview={{ uri: listing.images[0].thumbnailUrl }}
        uri={listing.images}
      /> */}

      {/* <ScrollView ref={scrollView} horizontal>
        {courtImages.map((uri) => (
          <View key={uri} style={styles.image}>
            <Image
              style={styles.image}
              tint="light"
              preview={{ uri: listing.images[0].thumbnailUrl }}
              uri={uri}
            />
          </View>
        ))}
      </ScrollView> */}

      <SliderBox
        images={courtImages}
        sliderBoxHeight={250}
        circleLoop={true}
        imageLoadingColor={"#976950"}
      />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          {/* <ListItem title="Mosh Hamedani" subTitle="5 Listings" /> */}
          <AppText>{listing.description}</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
