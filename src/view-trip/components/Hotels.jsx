import PropTypes from 'prop-types';
// import { TiLocation } from "react-icons/ti";
// import { FaMoneyBillWave } from "react-icons/fa";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
// import { Button } from '@/components/ui/button';
// import { FaStar } from "react-icons/fa6";
// import { CgDetailsMore } from "react-icons/cg";
// import { Link } from 'react-router-dom';
import HotelCardItem from './HotelCardItem';
// import { FaLocationArrow } from "react-icons/fa6";

const Hotels = ({ trip }) => {



  return (
    <div className="mt-3">
      <h2 className="font-bold text-lg md:text-xl text-gray-800 mb-1">Hotel Recommendations</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {
          trip?.tripData?.hotels?.map((hotel, index) => (
            <div key={index}>
              <HotelCardItem hotel={hotel}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

Hotels.propTypes = {
  trip: PropTypes.shape({
    tripData: PropTypes.shape({
      hotels: PropTypes.arrayOf(PropTypes.shape({
        // Define the shape of each hotel item here if needed
      })),
    }),
  }),
};

export default Hotels
