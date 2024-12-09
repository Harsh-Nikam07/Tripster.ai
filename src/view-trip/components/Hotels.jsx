import PropTypes from 'prop-types';

const Hotels = ({trip}) => {
  return (
    <div className="mt-3">
      <h2 className="font-bold text-lg md:text-xl text-gray-800">Hotel Recommendations</h2>

    <div>
        {
            trip?.tripData?.hotels?.map((item, index) =>(
              <div key={index}>
                <img src="/placeholder.jpg" alt="place holder image" className='w-1/4 rounded-lg' />
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
