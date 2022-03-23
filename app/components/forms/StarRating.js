import { AirbnbRating as Rating } from "react-native-ratings";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import React from "react";

function StarRating() {
  const { setFieldValue } = useFormikContext();

  return (
    <>
      <Rating
        style={styles.container}
        onFinishRating={(rating) => setFieldValue(`${rating}`)}
        count={5}
        reviews={["Terrible", "Bad", "OK", "Good", "Very Good"]}
        unSelectedColor="#c8c7c8"
        selectedColor="#976950"
        reviewColor="#6e6969"
        reviewSize={15}
        defaultRating={3}
        size={25}
      />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
export default StarRating;
