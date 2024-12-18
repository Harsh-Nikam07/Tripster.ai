import PropTypes from 'prop-types';
import PlacesesCardItem from './PlacesesCardItem';
// import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from '@/components/ui/button';
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaLocationArrow } from "react-icons/fa6";
const PlacesToVisit = ({trip}) => {
  const getMapsUrl = (placeName, geoCoordinates) => {
    const query = encodeURIComponent(`${placeName}, ${geoCoordinates}`);
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  };
  const handleLocationClick = (placeName, geoCoordinates) => {
    const url = getMapsUrl(placeName, geoCoordinates);
    window.open(url, '_blank'); // Open the map URL in a new tab
  };
  return (
    <div>
      <h2 className="font-bold text-lg md:text-xl text-gray-800 mb-1 mt-5">Places to Visit</h2>
    <div className='w-full grid grid-cols-1 md:grid-cols-1 gap-2 '>
    {
        trip?.tripData?.itinerary.map((item, index) => (
          <div key={index} className='w-full flex justify-start items-start flex-col'>
            <h3 className=' text-sm md:text-lg font-semibold'>Day {item.day}</h3>
            <div className=' flex justify-start items-start flex-row flex-wrap gap-4'>
            {
              item.places.map((plan, index) => (
                <div key={index}  className={item.places.length === 1 ? 'w-full' : 'w-[49%]'}>
                  <div className='w-full flex justify-between items-start md:items-center flex-col md:flex-row md:gap-0 gap-2'>
                    <h3 className='w-[] text-sm md:text-sm font-normal text-red-500'> <span className='text-slate-600'>You can Visit at </span>{plan.timeToVisit}</h3>
                    <div className='pr-3 flex justify-center items-center gap-3 md:gap-1 flex-row-reverse'>
                      <TooltipProvider delayDuration={0}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button 
                                variant="ghost" 
                                className='w-8 h-8  p-1 rounded-full hover:bg-purple-200'
                                onClick={(e) => e.preventDefault()}
                              >
                                <HiBars3BottomRight className='text-purple-900 text-sm'/>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent 
                              side="bottom" 
                              sideOffset={5}
                              className="max-w-[200px] text-sm break-words"
                            >
                              <p>{item.plan}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <Button 
                          className="rounded-full bg-purple-100 hover:bg-purple-200 shadow-none px-3 py-1"
                          onClick={() => handleLocationClick(plan.placeName, plan.geoCoordinates)}
                        >
                          <FaLocationArrow className=' text-purple-900' />
                          <span  className='text-purple-900'>Take a look on maps</span>
                        </Button>
                    </div>
                  </div>
                  <PlacesesCardItem plan={plan} item={item} />
                </div>
              ))
            }
            </div>
          </div>
        ))
      }
    </div>
    </div>
  )
}
PlacesToVisit.propTypes = {
  trip: PropTypes.shape({
    tripData: PropTypes.shape({
      itinerary: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.number,
        places: PropTypes.arrayOf(PropTypes.shape({
          geoCoordinates: PropTypes.string,
          placeDetails: PropTypes.string,
          placeImageURL: PropTypes.string,
          placeName: PropTypes.string,
          rating: PropTypes.string,
          ticketPricing: PropTypes.string,
          timeToVisit: PropTypes.string,
        })),
        plan: PropTypes.string,
        theme: PropTypes.string,
      })),
    }),
  }),
};

export default PlacesToVisit
