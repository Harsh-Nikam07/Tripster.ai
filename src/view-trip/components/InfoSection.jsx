// Import necessary components and libraries
import { Button } from '@/components/ui/button';
import { GetPlaceDetails } from '@/service/GlobalApi';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { IoShareSocialSharp } from "react-icons/io5";
import { PHOTO_REF_URL } from '@/service/GlobalApi';

// import { toast } from 'sonner';

// Define the URL for Google Places API to fetch photos
// This URL is used to construct the photo URL for the trip location



// Define the InfoSection component
const InfoSection = ({ trip }) => {


  const [PhotoUrl, setPhotoUrl] = useState();

  // useEffect hook to fetch place photos when the trip prop changes
  // This hook is used to fetch photos for the trip location when the trip prop is updated
  useEffect(() => {
    console.log("Trip prop:", trip);
    if (trip) GetPlacePhotos();
  }, [trip]);
  

  // Function to fetch photos for the trip location
  // This function is used to fetch photos for the trip location using the Google Places API
  const GetPlacePhotos = async () => {
    // Get the location label from the trip prop
    const locationLabel = trip?.userSelection?.location?.label;
  
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
    // Render the InfoSection component
    <div className='flex justify-center items-start flex-col gap-1'>
      <div className='w-full overflow-hidden rounded-lg'>
      <img src={PhotoUrl} alt={trip?.userSelection?.location?.label} className="w-full h-[350px] rounded-lg object-cover hover:scale-[110%] transition-all " />
      </div>
      <div className='w-full flex justify-between items-center flex-row'>
      <div className='flex justify-center items-start flex-col gap-3 my-2'>
        <h2 className='font-medium text-lg md:text-2xl text-gray-800'>{trip?.userSelection?.location?.label}</h2>
        
        <div className='flex justify-start items-start flex-row gap-2'>
          <div className='w-fit flex justify-start items-center gap-2 bg-purple-200  px-3 pb-1 text-purple-900 rounded-full'>
            
            <span className="font-bold text-sm md:text-base ">{trip?.userSelection?.noOfDays} Days</span>
          </div>

          <div className='w-fit flex justify-start items-center gap-2 bg-purple-200  px-3 pb-1 text-purple-900 rounded-full'>
           
            <span className="font-bold text-sm md:text-base">{trip?.userSelection?.Budget} </span>
          </div>


          <div className='w-fit flex justify-start items-center gap-2 bg-purple-200  px-3 pb-1 text-purple-900 rounded-full'>
          
            <span className="font-bold text-sm md:text-base">{trip?.userSelection?.People} {trip?.userSelection?.People > 1 ? 'Travelers' : 'Traveler'} </span>
          </div>
        </div>
      </div>

      <div>

        {/* <Button onClick={shareDetails} ><IoShareSocialSharp/></Button> */}
        <Button ><IoShareSocialSharp/></Button>
      </div>
      </div>
    </div>
  )
}

// Define the propTypes for the InfoSection component
InfoSection.propTypes = {
  trip: PropTypes.shape({
    userSelection: PropTypes.shape({
      location: PropTypes.shape({
        label: PropTypes.string,
      }),
      noOfDays: PropTypes.number,
      Budget: PropTypes.number,
      People: PropTypes.number,
    }),
  }),
};

export default InfoSection;
