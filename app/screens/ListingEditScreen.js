// import React from "react";
// import { StyleSheet } from "react-native";

// import * as Yup from "yup";

// import {
//   AppForm,
//   AppFormField,
//   AppFormPicker,
//   SubmitButton,
// } from "../components/forms";
// import colors from "../config/colors";
// import CategoryPickerItem from "../components/CategoryPickerItem";
// import Screen from "../components/Screen";
// import FormImagePicker from "../components/forms/FormImagePicker";
// import listingsApi from "../api/listings";
// import useLocation from "../hooks/useLocation";

// const validationSchema = Yup.object().shape({
//   address: Yup.string().required().min(1).label("Address"),
//   price: Yup.number().required().min(1).max(10000).label("Price"),
//   category: Yup.object().required().nullable().label("Category"),
//   description: Yup.string().label("Description"),
//   images: Yup.array(),
// });

// const categories = [
//   {
//     label: "Basketball",
//     value: 1,
//     backgroundColor: "orange",
//     icon: "basketball",
//   },
//   {
//     label: "Volleyball",
//     value: 2,
//     backgroundColor: colors.secondary,
//     icon: "volleyball",
//   },
//   { label: "Tennis", value: 3, backgroundColor: colors.medium, icon: "tennis" },
//   {
//     label: "Football",
//     value: 4,
//     backgroundColor: "limegreen",
//     icon: "football",
//   },
//   {
//     label: "Badminton",
//     value: 5,
//     backgroundColor: "green",
//     icon: "badminton",
//   },
//   {
//     label: "Soccer",
//     value: 6,
//     backgroundColor: "tomato",
//     icon: "soccer",
//   },
// ];

// function ListingEditScreen() {
//   // const location = useLocation();

//   const handleSubmit = async (listing) => {
//     const result = await listingsApi.addListing(listing);
//     if (!result.ok)
//       return console.log(result.problem), alert("Could not save the listing");
//     alert("Success");
//   };

//   return (
//     <Screen style={styles.container}>
//       <AppForm
//         initialValues={{
//           address: "",
//           price: "",
//           description: "",
//           category: null,
//           images: [],
//         }}
//         onSubmit={handleSubmit}
//         validationSchema={validationSchema}
//       >
//         <FormImagePicker name="images" />
//         <AppFormField maxLength={100} name="address" placeholder="Address" />
//         <AppFormField
//           keyboardType="numeric"
//           maxLength={8}
//           name="price"
//           width={120}
//           placeholder="Price"
//         />
//         <AppFormPicker
//           items={categories}
//           numberOfColumns={3}
//           PickerItemComponent={CategoryPickerItem}
//           name="category"
//           placeholder="Category"
//           width="50%"
//         />
//         <AppFormField
//           maxLength={255}
//           multiline
//           name="description"
//           numberOfLines={3}
//           placeholder="Description"
//         />
//         <SubmitButton title="Post" />
//       </AppForm>
//     </Screen>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//   },
// });
// export default ListingEditScreen;

import React from "react";
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

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function ListingEditScreen() {
  // const location = useLocation();

  const handleSubmit = async (listing) => {
    const result = await listingsApi.addListing(listing);
    if (!result.ok)
      return console.log(result.problem), alert("Could not save the listing");
    alert("Success");
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
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
