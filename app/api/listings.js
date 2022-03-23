import client from "./client";

const getEndpoint = "/service.php";
const postEndpoint = "/PostCourt.php";

const getListings = () => client.get(getEndpoint);

export const addListing = (listing, onUploadProgress) => {
  console.log(listing);
  var previewImage = listing.images[0];
  previewImage =
    "https://find-my-court.com/uploads/" +
    previewImage.substring(previewImage.lastIndexOf("/") + 1);
  var latitude = listing.location[0];
  var longitude = listing.location[1];

  var dbImages = "";

  listing.images.forEach(
    (image) =>
      (dbImages =
        dbImages +
        "https://find-my-court.com/uploads/" +
        image.substring(image.lastIndexOf("/") + 1) +
        "|")
  );
  dbImages = dbImages.substr(0, dbImages.length - 1);

  var dbPhotos = [];

  const data = new FormData();
  data.append("title", listing.title);
  data.append("rating", listing.rating);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);
  data.append("images", dbImages);
  data.append("latitude", latitude);
  data.append("longitude", longitude);
  data.append("previewImage", previewImage);

  listing.images.forEach((image, index) =>
    data.append("photo" + index, {
      name: image.substring(image.lastIndexOf("/") + 1),
      type: '"image/jpeg"',
      uri: image,
    })
  );

  console.log(data);
  return client.post(postEndpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addListing,
  getListings,
};
