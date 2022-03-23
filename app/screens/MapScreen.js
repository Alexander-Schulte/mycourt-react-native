import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Dimensions, View } from "react-native";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import routes from "../navigation/routes";
import useLocation from "../hooks/useLocation";
import courtLocationIcon from "../assets/courtLocationIcon.png";

// const validationSchema = Yup.object().shape({
//   location: Yup.string().required().min(1).label("Location"),
// });

function MapScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);
  var courtData = getListingsApi.data;

  return (
    <Screen style={styles.container}>
      <MapView
        showsCompass={true}
        showsUserLocation={true}
        followsUserLocation={true}
        style={styles.map}
      >
        {courtData.map((court) => {
          console.log(court);
          return (
            <Marker
              key={court.images}
              coordinate={{
                latitude: Number(court.latitude),
                longitude: Number(court.longitude),
              }}
              image={courtLocationIcon}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, court)}
            />
          );
        })}
      </MapView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  form: {
    position: "absolute",
    top: 20,
    left: 0,
    width: "50%",
    zIndex: 1,
  },
});

export default MapScreen;
