import PropTypes from 'prop-types';
import { TiLocation } from "react-icons/ti";
import { GiMoneyStack } from "react-icons/gi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from '@/components/ui/button';
import { FaStar } from "react-icons/fa6";

import { CgDetailsMore } from "react-icons/cg";

const Hotels = ({trip}) => {
  return (
    <div className="mt-3">
      <h2 className="font-bold text-lg md:text-xl text-gray-800 mb-3">Hotel Recommendations</h2>

    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {
            trip?.tripData?.hotels?.map((hotel, index) =>(
              <div key={index} className=' flex justify-start items-start flex-col gap-2 px-1' >
                <img src="/placeholder.jpg" alt="place holder image" className='relative rounded-lg' />
                <h2 className='font-semibold text-sm md:text-base h-6 text-ellipsis'>{hotel.HotelName}</h2>
                
                
                <div className='flex justify-start items-start flex-row gap-1 h-4'>
                  <TiLocation className='w-4 h-4'/>
                  <p className='font-normal text-xs'>{hotel.HotelAddress}</p>
                </div>

                <div className='w-full flex justify-between items-start flex-row'>
                  <div>
                    <div>
                      <GiMoneyStack/>
                      <p>{hotel.Price}</p>
                    </div>

                    <div>
                      <FaStar/>
                      <p>{hotel.rating}</p>
                    </div>
                  </div>

                  <div>
                    <TooltipProvider delayDuration={0} >
                        <Tooltip >
                          <TooltipTrigger asChild>
                            <Button 
                              variant="ghost" 
                              className='w-8 h-8 bg-purple-200 p-1 rounded-full hover:bg-purple-400'
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
