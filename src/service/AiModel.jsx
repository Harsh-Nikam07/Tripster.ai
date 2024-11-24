import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


export const chatSession = model.startChat({
  generationConfig,
  history: [

      {
        role: "user",
        parts: [
          {text: "Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a Cheap budget,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"trip_details\": {\n    \"destination\": \"Las Vegas, NV\",\n    \"duration\": \"3 Days\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Cheap\"\n  },\n  \"hotels\": [\n    {\n      \"HotelName\": \"Circus Circus Hotel and Casino\",\n      \"HotelAddress\": \"2880 Las Vegas Blvd South, Las Vegas, NV 89109\",\n      \"Price\": \"$60-120/night\",\n      \"hotelImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Circus_Circus_Hotel_and_Casino_Las_Vegas.jpg/1280px-Circus_Circus_Hotel_and_Casino_Las_Vegas.jpg\",\n      \"geoCoordinates\": \"36.1117° N, 115.1739° W\",\n      \"rating\": \"3.5\",\n      \"descriptions\": \"A classic Vegas experience with a lively atmosphere.  Good central location near the Strip, budget-friendly.\"\n    },\n    {\n      \"HotelName\": \"The Westin, Las Vegas\",\n      \"HotelAddress\": \"3333 Las Vegas Blvd South, Las Vegas, NV 89109\",\n      \"Price\": \"$90-180/night\",\n      \"hotelImageURL\": \"https://www.westin.com/content/dam/westin/images/properties/las-vegas/las-vegas-exterior.jpg.image.650.650.jpg\",\n\t  \"geoCoordinates\": \"36.1081° N, 115.1689° W\",\n\t  \"rating\": \"4.0\",\n      \"descriptions\": \"A little more upscale, offering a good value option compared to luxury hotels, located within the Strip, offering decent value.\"\n    },\n\t\t{\n      \"HotelName\": \"Downtown Grand Hotel & Casino\",\n      \"HotelAddress\": \"300 Fremont Street, Las Vegas, NV 89101\",\n      \"Price\": \"$70-150/night\",\n      \"hotelImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Downtown_Grand_Hotel_Las_Vegas.jpg/1280px-Downtown_Grand_Hotel_Las_Vegas.jpg\",\n\t  \"geoCoordinates\": \"36.1041° N, 115.1654° W\",\n\t  \"rating\": \"3.7\",\n      \"descriptions\": \"Located in the heart of Downtown Las Vegas, close to attractions in the area, providing great options for a budget-friendly trip.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"theme\": \"Downtown Delights\",\n      \"plan\": \"Explore the vibrant Fremont Street Experience, enjoy the Viva Vision light show, and visit the Mob Museum. Consider a casual dinner at a local eatery.\",\n      \"places\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Pedestrian mall with light show and entertainment.\",\n          \"placeImageURL\": \"https://www.visitlasvegas.com/images/uploads/2020/04/FremontStreetExperience.jpg\",\n          \"geoCoordinates\": \"36.1061° N, 115.1668° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"4.5\",\n          \"timeToVisit\": \"6:00 PM - 9:00 PM\"\n        },\n        {\n          \"placeName\": \"Mob Museum\",\n          \"placeDetails\": \"History of organized crime in Las Vegas.\",\n          \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Mob_Museum_Exterior.jpg/1280px-Mob_Museum_Exterior.jpg\",\n          \"geoCoordinates\": \"36.1040° N, 115.1691° W\",\n          \"ticketPricing\": \"$25\",\n          \"rating\": \"4.2\",\n          \"timeToVisit\": \"11:00 AM - 2:00 PM\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"theme\": \"Strip Sensations\",\n      \"plan\": \"Walk the Las Vegas Strip, visit the Bellagio fountains (timing for show), and enjoy the sights and atmosphere. Consider a budget-friendly lunch or dinner on the Strip.\",\n      \"places\": [\n        {\n          \"placeName\": \"The Strip\",\n          \"placeDetails\": \"Walk the famous Las Vegas Strip.\",\n          \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Las_Vegas_Strip_Night.jpg/1280px-Las_Vegas_Strip_Night.jpg\",\n          \"geoCoordinates\": \"36.1091° N, 115.1666° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"4.0\",\n          \"timeToVisit\": \"10:00 AM - 6:00 PM\"\n        },\n\t\t\t\t{\n          \"placeName\": \"Bellagio Fountains\",\n          \"placeDetails\": \"Watch the amazing water shows.\",\n          \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bellagio_Fountains.jpg/1280px-Bellagio_Fountains.jpg\",\n          \"geoCoordinates\": \"36.1026° N, 115.1671° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"4.8\",\n          \"timeToVisit\": \"7:00 PM\"\n        }\n      ]\n    },\n\t{\n      \"day\": 3,\n      \"theme\": \"Desert Escape & Departure\",\n      \"plan\": \"Explore Red Rock Canyon National Conservation Area for stunning desert views and hikes. Have a casual lunch in the area before heading to the airport.\",\n      \"places\": [\n        {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\": \"Hiking, stunning views.\",\n          \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Red_Rock_Canyon_NV.jpg/1280px-Red_Rock_Canyon_NV.jpg\",\n          \"geoCoordinates\": \"36.0833° N, 115.0833° W\",\n          \"ticketPricing\": \"$15\",\n          \"rating\": \"4.7\",\n          \"timeToVisit\": \"9:00 AM - 4:00 PM\"\n        }\n      ]\n    }\n  ]\n}\n```"},
        ],
      },
    ],
  });



