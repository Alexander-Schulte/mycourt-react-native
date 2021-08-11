import React, { useState } from "react";
import { StyleSheet } from "react-native";

import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import colors from "../config/colors";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";
import listingsApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  address: Yup.string().required().min(1).label("Address"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
  images: Yup.array(),
});

const categories = [
  {
    label: "Basketball",
    value: 1,
    backgroundColor: "orange",
    icon: "basketball",
  },
  {
    label: "Volleyball",
    value: 2,
    backgroundColor: colors.secondary,
    icon: "volleyball",
  },
  { label: "Tennis", value: 3, backgroundColor: colors.medium, icon: "tennis" },
  {
    label: "Football",
    value: 4,
    backgroundColor: "limegreen",
    icon: "football",
  },
  {
    label: "Badminton",
    value: 5,
    backgroundColor: "green",
    icon: "badminton",
  },
  {
    label: "Soccer",
    value: 6,
    backgroundColor: "tomato",
    icon: "soccer",
  },
];

function ListingEditScreen() {
  // const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(listing, (progress) =>
      setProgress(progress)
    );
    setUploadVisible(false);

    if (!result.ok)
      return console.log(result.problem), alert("Could not save the listing");
    alert("Success");
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen progress={progress} visible={uploadVisible} />
      <AppForm
        initialValues={{
          address: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={100} name="address" placeholder="Address" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          width={120}
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          name="category"
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
