import PropTypes from 'prop-types';

const PlacesToVisit = ({trip}) => {
  return (
    <div>
      <h2 className="font-bold text-lg md:text-xl text-gray-800 mb-1">Places to Visit</h2>

      {
        trip?.tripData?.itinerary.map((item, index) => (
          <div key={index}>
            <h3 className=''>Day {item.day}</h3>
          </div>
        ))
      }
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
