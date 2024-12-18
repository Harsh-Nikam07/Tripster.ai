import PropTypes from 'prop-types';
import { IoTicketSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
// import { FaLocationArrow } from "react-icons/fa6";
// import { Button } from '@/components/ui/button';
import { GetPlaceDetails } from '@/service/GlobalApi';
import { PHOTO_REF_URL } from '@/service/GlobalApi';
import { useEffect, useState } from 'react';

const PlacesesCardItem = ({plan}) => {

    const getMapsUrl = (placeName, HotelGeoCoordinates) => {
        const query = encodeURIComponent(`${placeName}, ${HotelGeoCoordinates}`);
        return `https://www.google.com/maps/search/?api=1&query=${query}`;
      }

      const [PhotoUrl, setPhotoUrl] = useState();

      // useEffect hook to fetch place photos when the trip prop changes
      // This hook is used to fetch photos for the trip location when the trip prop is updated
      useEffect(() => {
        console.log("plan prop:", plan);
        if (plan) GetPlacePhotos();
      }, [plan]);
      
    
      // Function to fetch photos for the trip location
      // This function is used to fetch photos for the trip location using the Google Places API
      const GetPlacePhotos = async () => {
        // Get the location label from the trip prop
        const locationLabel = plan.placeName;
      
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
    <Link
        to={getMapsUrl(plan.placeName, plan.geoCoordinates)}
        target='_blank' 
        rel='noopener noreferrer'
    >
        <div className=' w-full flex justify-start items-start flex-row gap-4 border-[1px] border-slate-400 p-3 my-2 rounded-2xl hover:scale-[101%] transition-all '>
            <img src={!PhotoUrl ? "/placeholder.jpg" : PhotoUrl} alt={plan.placeName} className="w-[150px] h-[150px] object-cover rounded-xl" />
            <div className='h-full flex flex-col justify-end items-start'>
                <div>
                    <h2 className='font-semibold text-sm md:text-base'>{plan.placeName}</h2>
                    <h2 className='font-normal text-xs  md:text-sm text-slate-500 '>{plan.placeDetails}</h2>
                    
                </div>



                <div>
                    <div className=' pt-1 mt-1 rounded-lg w-fit flex justify-center items-center flex-row gap-1'>
                        <IoTicketSharp className='text-red-500  w-4 h-4'/>
                        <p className='text-sm font-semibold'>{plan.ticketPricing}</p>
                    </div>

                    <div className='bg-purple-200 px-2 py-[3px] rounded-lg  w-fit flex justify-center items-center flex-row gap-1 mt-2'>
                        <FaStar className='text-purple-900  w-4 h-4'/>
                        <p className='text-sm font-semibold'>{plan.rating ? plan.rating : <span className='text-[13px]'>No Ratings found</span>}</p>
                    </div>
                </div>

            </div>

            {/* <div className='absolute top-[75%] left-[87%]'>

                <Button className="rounded-full bg-purple-200 hover:bg-purple-300">
                    <FaLocationArrow className='w-[30px] h-[30px] text-purple-900' />
                </Button>

            </div> */}
        </div>
    
    </Link>
  )
}

PlacesesCardItem.propTypes = {
  plan: PropTypes.shape({
    placeName: PropTypes.string,
    geoCoordinates: PropTypes.string,
    placeDetails: PropTypes.string,
    placeImageURL: PropTypes.string,
    rating: PropTypes.string,
    ticketPricing: PropTypes.string,
    
  }).isRequired,
  item: PropTypes.shape({
    plan: PropTypes.string,
  }).isRequired,
};

export default PlacesesCardItem
