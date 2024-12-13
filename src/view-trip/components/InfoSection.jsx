import { Button } from '@/components/ui/button';
import PropTypes from 'prop-types';
import { IoShareSocialSharp } from "react-icons/io5";
// import { toast } from 'sonner';



const InfoSection = ({ trip }) => {
  // const shareDetails = () => {
  //   const details = `
  //     Trip Location: ${trip?.userSelection?.location?.label}
  //     Number of Days: ${trip?.userSelection?.noOfDays}
  //     Budget: ${trip?.userSelection?.Budget}
  //     People: ${trip?.userSelection?.People} ${trip?.userSelection?.People > 1 ? 'Travelers' : 'Traveler'}
  //     Link: ${window.location.href}
  //   `;
    
  //   navigator.clipboard.writeText(details).then(() => {
  //     toast('Trip details copied to clipboard!');
  //   }).catch(err => {
  //     toast.error('Failed to copy: ', err);
  //   });
  // };


  return (
    <div className='flex justify-center items-start flex-col gap-1'>
      <img src="/placeholder.jpg" alt="placeholder image" className="w-full h-[300px] object-cover rounded-lg" />
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
