import { Link } from 'react-router-dom';
import { FaStar, FaMoneyBillWave } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from '@/components/ui/button';
import PropTypes from 'prop-types';
import { GetPlaceDetails } from '@/service/GlobalApi';
import { PHOTO_REF_URL } from '@/service/GlobalApi';
import { useEffect, useState } from 'react';

const HotelCardItem = ({ hotel }) => {

    const getMapsUrl = (hotelName, HotelAddress) => {
        const query = encodeURIComponent(`${hotelName}, ${HotelAddress}`);
        return `https://www.google.com/maps/search/?api=1&query=${query}`;
      }

      
  const [PhotoUrl, setPhotoUrl] = useState();

  // useEffect hook to fetch place photos when the trip prop changes
  // This hook is used to fetch photos for the trip location when the trip prop is updated
  useEffect(() => {
    console.log("hotel prop:", hotel);
    if (hotel) GetPlacePhotos();
  }, [hotel]);
  

  // Function to fetch photos for the trip location
  // This function is used to fetch photos for the trip location using the Google Places API
  const GetPlacePhotos = async () => {
    // Get the location label from the trip prop
    const locationLabel = hotel.HotelName;
  
    // Check if location label is defined and not empty
    // If the location label is not defined or empty, log an error and return
    if (!locationLabel) {
      console.error("Location label is undefined or empty.");
      return;
    }
  
    // Prepare data for the API call
    // Create a data object with the textQuery property set to the location label
    const data = {
      textQuery: locationLabel, // Corrected key
    };
  
    console.log("Request Data for GetPlacePhotos:", data);
  
    try {
      // Call the API to fetch place details
      // Use the GetPlaceDetails function to fetch place details for the trip location
      const resp = await GetPlaceDetails(data);
      console.log("Full API Response:", resp); // Log the entire API response
  
      // Extract the places array from the response
      // Get the places array from the API response
      const places = resp.data.places; // Store the places array
  
      // Check if places are found in the API response
      // If no places are found, log an error and return
      if (!places || places.length === 0) {
        console.error("No places found in the API response.");
        return;
      }
  
      // Access the photos array correctly
      // Get the photos array from the first place in the places array
      const photos = places[0].photos; // Corrected to access 'photos' instead of 'photo'
      console.log("Photos received from API:", photos); // Log the entire photos array
  
      // Check if there are enough photos
      // If there are more than 3 photos, construct the photo URL and log it
      if (photos && photos.length > 3) { 
        console.log("API Response:", photos[3].name);
        // Construct the photo URL using the PHOTO_REF_URL template
        const photoURL = PHOTO_REF_URL.replace('{NAME}', photos[3].name);
        console.log(photoURL);
        setPhotoUrl(photoURL);
      } else {
        console.error("Not enough photos available. Available photos count:", photos ? photos.length : 0);
      }
    } catch (error) {
      console.error("Error fetching place details:", error.response ? error.response.data : error.message);
      console.error("Full error object:", error);
    }

    
  };


  return (
    <Link to={
      getMapsUrl(hotel.HotelName, hotel.HotelAddress)
    } target='_blank' rel='noopener noreferrer'>
      <div className='relative flex justify-start items-start flex-col gap-2 hover:scale-105 hover:bg-purple-50 rounded-lg py-3 px-1 transition-all'>
        <div className='bg-purple-200 absolute left-2/3 md:left-3/4 top-5 px-2 py-[2px] rounded-xl w-fit flex justify-center items-center flex-row gap-1'>
          <FaStar className='text-purple-900 w-3 h-3'/>
          <p className='text-xs md:text-sm font-semibold text-purple-900'>{hotel.rating}</p>
        </div>
        <img src={!PhotoUrl ? "/placeholder.jpg" : PhotoUrl} alt={hotel.HotelName} className='rounded-lg transition-all w-[300px] h-[180px] object-cover' />
        <div className='w-full flex justify-between items-start flex-row'>
          <h2 className='w-4/5 font-semibold text-xs md:text-base text-ellipsis overflow-hidden'>{hotel.HotelName}</h2>
          <div>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className='w-8 h-8 bg-purple-100 p-1 rounded-full hover:bg-purple-200'
                    onClick={(e) => e.preventDefault()}
                  >
                    <CgDetailsMore className='text-purple-900 text-sm'/>
                  </Button>
                </TooltipTrigger>
                <TooltipContent 
                  side="bottom" 
                  sideOffset={5}
                  className="max-w-[200px] text-sm break-words"
                >
                  <p>{hotel.descriptions}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className='flex justify-start items-center flex-row gap-1 md:gap-2 mt-1'>
          <p className='font-normal text-xs'>📍{hotel.HotelAddress}</p>
        </div>
        <div className='w-full flex justify-between items-center flex-row flex-wrap gap-2 md:gap-0'>
          <div className='px-2 py-1 rounded-lg w-fit flex justify-center items-center flex-row gap-2'>
            <FaMoneyBillWave className='text-black w-4 h-4'/>
            <p className='text-sm font-semibold'>{hotel.Price}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

HotelCardItem.propTypes = {
  hotel: PropTypes.shape({
    HotelName: PropTypes.string,
    HotelAddress: PropTypes.string,
    rating: PropTypes.string,
    descriptions: PropTypes.string,
    Price: PropTypes.string,
  }),
};

export default HotelCardItem
