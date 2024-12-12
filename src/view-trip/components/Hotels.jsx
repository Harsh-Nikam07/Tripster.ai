import PropTypes from 'prop-types';
// import { TiLocation } from "react-icons/ti";
import { FaMoneyBillWave } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from '@/components/ui/button';
import { FaStar } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";

const Hotels = ({ trip }) => {
  return (
    <div className="mt-3">
      <h2 className="font-bold text-lg md:text-xl text-gray-800 mb-1">Hotel Recommendations</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {
          trip?.tripData?.hotels?.map((hotel, index) => (
            <div key={index} className='flex justify-start items-start flex-col gap-2 hover:scale-105  rounded-lg py-3 px-1 transition-all'>
              <img src="/placeholder.jpg" alt="place holder image" className=' rounded-lg transition-all' />
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
              <div className='flex justify-start items-center flex-row gap-1 md:gap-2 mt-1 '>
                {/* <TiLocation className=' text-red-500'/> */}
                <p className='font-normal text-xs '>📍{hotel.HotelAddress}</p>
              </div>
              <div className='w-full flex justify-between items-center flex-row flex-wrap gap-2 md:gap-0 '>
                <div className=' px-2 py-1 rounded-lg w-fit flex justify-center items-center flex-row gap-2'>
                  <FaMoneyBillWave className='text-black  w-4 h-4'/>
                  <p className='text-sm font-semibold'>{hotel.Price}</p>
                </div>
                <div className='bg-yellow-300 px-2 py-1 rounded-lg  w-fit flex justify-center items-center flex-row gap-1'>
                  <FaStar className='text-black  w-3 h-3'/>
                  <p className='text-sm font-semibold'>{hotel.rating}</p>
                </div>
              </div>
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
