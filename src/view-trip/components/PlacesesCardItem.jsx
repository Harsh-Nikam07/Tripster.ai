import PropTypes from 'prop-types';
import { IoTicketSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
// import { FaLocationArrow } from "react-icons/fa6";
// import { Button } from '@/components/ui/button';

const PlacesesCardItem = ({plan}) => {

    const getMapsUrl = (placeName, HotelGeoCoordinates) => {
        const query = encodeURIComponent(`${placeName}, ${HotelGeoCoordinates}`);
        return `https://www.google.com/maps/search/?api=1&query=${query}`;
      }

      

  return (
    <Link
        to={getMapsUrl(plan.placeName, plan.geoCoordinates)}
        target='_blank' 
        rel='noopener noreferrer'
    >
        <div className='relative w-full md:w-[97%] flex justify-start items-start flex-row gap-4 border-[1px] border-slate-400 p-3 my-2 rounded-2xl hover:scale-[101%] transition-all hover:sha'>
            <img src="/placeholder.jpg" alt="placeholder" className="w-[150px] h-[150px] object-cover rounded-xl" />
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
