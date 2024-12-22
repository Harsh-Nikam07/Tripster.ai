import PropTypes from 'prop-types';

const UserGeneratedTripsCardItem = ({trip}) => {
  return (
    <div>
      <img src="/placeholder.jpg" alt={trip.tripData.trip_details.destination} />
      <div>
        <h3>{trip.tripData.trip_details.destination}</h3>
        <p>Duration: {trip.tripData.trip_details.duration}</p>
        <p>Budget: {trip.userSelection.Budget}</p>
        <p>Travelers: {trip.userSelection.People}</p>
      </div>
    </div>
  )
}

UserGeneratedTripsCardItem.propTypes = {
  trip: PropTypes.shape({
    tripData: PropTypes.shape({
      trip_details: PropTypes.shape({
        destination: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        budget: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    userSelection: PropTypes.shape({
      Budget: PropTypes.string.isRequired,
      People: PropTypes.number.isRequired, // Changed from objectOf(PropTypes.number) to PropTypes.number
    }).isRequired,
  }).isRequired,
};

export default UserGeneratedTripsCardItem
