import apiClient from "./client";

const endpoint = "/listings";

const getListings = () => apiClient.get(endpoint);

const addListing = (listing) => {
  const data = new FormData();
  data.append("address", listing.address);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);
  data.append("location", JSON.stringify(listing.address));
  data.append("userLocation", JSON.stringify(listing.location));

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );
  return apiClient.post(endpoint, data);
};

export default {
  addListing,
  getListings,
};
