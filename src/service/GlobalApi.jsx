import axios from "axios";

const BASE_URL = "https://places.googleapis.com/v1/places:searchText";

const config = {
  headers: {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
    'X-Goog-FieldMask':'places.photos'
  },
};

export const GetPlaceDetails = async (data) => {
  if (!data || !data.textQuery) {
    console.error("Invalid payload passed to GetPlaceDetails:", data);
    throw new Error("Invalid API payload: 'textQuery' is missing.");
  }

  console.log("Making API call with data:", data);
  console.log("Using Config:", config);

  return axios
    .post(BASE_URL, data, config)
    .then((response) => {
      console.log("API Response Status:", response.status);
      return response;
    })
    .catch((error) => {
      console.error(
        "Error Response:",
        error.response ? error.response.data : error.message
      );
      throw error;
    });
};


export const PHOTO_REF_URL='https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=2000&maxWidthPx=2000&key='+import.meta.env.VITE_GOOGLE_PLACE_API_KEY