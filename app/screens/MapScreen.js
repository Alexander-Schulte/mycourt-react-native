import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Dimensions, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  location: Yup.string().required().min(1).label("Location"),
});

function MapScreen() {
  const location = useLocation();
  console.log(location);

  return (
    <Screen style={styles.container}>
      {/* <View style={styles.form}>
        <AppForm
          initialValues={{
            location: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            maxLength={100}
            name="location"
            placeholder="Search for location..."
          />
          <SubmitButton title="Go" />
        </AppForm>
      </View> */}
      <MapView
        showsCompass={true}
        showsUserLocation={true}
        followsUserLocation={true}
        style={styles.map}
      />
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
