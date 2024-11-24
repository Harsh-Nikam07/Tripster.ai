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
  responseMimeType: "text/plain",
};

async function run() {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "\nGenerate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a Cheap budget,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"trip_details\": {\n    \"destination\": \"Las Vegas, NV\",\n    \"duration\": \"3 Days\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Cheap\"\n  },\n  \"hotels\": [\n    {\n      \"HotelName\": \"Circus Circus Hotel and Casino\",\n      \"HotelAddress\": \"2880 Las Vegas Blvd South, Las Vegas, NV 89109\",\n      \"Price\": \"$60-150/night\",\n\t  \"hotelImageURL\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Circus_Circus_Hotel_and_Casino_Las_Vegas.jpg/1280px-Circus_Circus_Hotel_and_Casino_Las_Vegas.jpg\",\n      \"geoCoordinates\": \"36.1117° N, 115.1739° W\",\n      \"rating\": \"3.5\",\n      \"descriptions\": \"This hotel is a classic Vegas experience, with a fun, lively atmosphere.  It's a budget-friendly option with a good central location near the Strip.\"\n    },\n\t\t{\n      \"HotelName\": \"The LINQ Hotel + Experience\",\n      \"HotelAddress\": \"7000 Las Vegas Blvd S, Las Vegas, NV 89193\",\n      \"Price\": \"$90-200/night\",\n\t  \"hotelImageURL\": \"https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_2000,q_75,w_2000/v1/clients/lasvegas/The_LINQ_22022022_00005_e3b174e2-18fa-4d86-a429-e307a95428d7.jpg\",\n      \"geoCoordinates\": \"36.1014° N, 115.1621° W\",\n      \"rating\": \"4.0\",\n      \"descriptions\": \"A bit more upscale than Circus Circus, The LINQ still has good value for its location, offering some great views and proximity to attractions.\"\n    },\n\t\t{\n\t\t\t\"HotelName\": \"South Point Hotel Casino & Spa\",\n      \"HotelAddress\": \"3333 Las Vegas Blvd South, Las Vegas, NV 89109\",\n      \"Price\": \"$80-220/night\",\n\t  \"hotelImageURL\": \"https://www.southpointcasino.com/media/images/3500_600_southpoint_casino.jpg\",\n      \"geoCoordinates\": \"36.1081° N, 115.1689° W\",\n      \"rating\": \"3.7\",\n      \"descriptions\": \"Slightly more expensive, but offering a great option for couples seeking a little more comfort and amenities.\"\n\t\t}\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"theme\": \"Downtown Delights\",\n      \"places\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Vibrant pedestrian mall with lights, music, and entertainment.\",\n          \"placeImageURL\": \"https://www.visitlasvegas.com/images/uploads/2020/04/FremontStreetExperience.jpg\",\n          \"geoCoordinates\": \"36.1061° N, 115.1668° W\",\n          \"ticketPricing\": \"Free entry\",\n          \"timeToTravel\": \"10am-6pm\",\n          \"notes\": \"Visit during the nightly Viva Vision show (check schedule).\"\n        },\n        {\n            \"placeName\": \"Mob Museum\",\n            \"placeDetails\": \"Displays the history of organized crime in Las Vegas.\",\n            \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Mob_Museum_Exterior.jpg/1280px-Mob_Museum_Exterior.jpg\",\n            \"geoCoordinates\": \"36.1040° N, 115.1691° W\",\n            \"ticketPricing\": \"$25-30\",\n            \"timeToTravel\": \"2pm-4pm\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"theme\": \"Strip Sensations\",\n      \"places\": [\n        {\n          \"placeName\": \"The Strip\",\n          \"placeDetails\": \"Walk the famous Las Vegas Strip, admire the hotels, and enjoy the atmosphere.\",\n          \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Las_Vegas_Strip_Night.jpg/1280px-Las_Vegas_Strip_Night.jpg\",\n          \"geoCoordinates\": \"36.1091° N, 115.1666° W\",\n          \"ticketPricing\": \"Free entry (depending on attractions inside)\",\n          \"timeToTravel\": \"10am-7pm\"\n        },\n          {\n          \"placeName\": \"Bellagio Fountains\",\n          \"placeDetails\": \"Witness the mesmerizing water shows at the Bellagio.\",\n          \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bellagio_Fountains.jpg/1280px-Bellagio_Fountains.jpg\",\n          \"geoCoordinates\": \"36.1026° N, 115.1671° W\",\n          \"ticketPricing\": \"Free entry\",\n          \"timeToTravel\": \"6pm-8pm\"\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"theme\": \"Outdoor Adventures & Departure\",\n      \"places\": [\n        {\n            \"placeName\": \"Red Rock Canyon National Conservation Area\",\n            \"placeDetails\": \"Stunning desert landscapes, hiking trails, and breathtaking views.\",\n            \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Red_Rock_Canyon_NV.jpg/1280px-Red_Rock_Canyon_NV.jpg\",\n            \"geoCoordinates\": \"36.0833° N, 115.0833° W\",\n            \"ticketPricing\": \"$15-$20\",\n            \"timeToTravel\": \"9am-4pm\"\n        }\n        \n      ]\n    }\n  ]\n}\n```"},
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  console.log(result.response.text());
}

run();