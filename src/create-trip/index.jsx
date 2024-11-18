// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
const CreateTrip = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-11">
        <div className="md:w-2/3 w-11/12 flex flex-col items-start justify-start gap-3 text-wrap">
          <div>
          <h1 className="md:text-3xl text-xl font-bold">Tell us your Travel Preferences 🏕️🌴</h1>
            <p className="md:text-lg text-sm text-justify text-gray-500 md:p-0 pt-2">Just provide some basic information, and Tripster.ai will create a personalized itinerary based on your preferences</p>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-1">
            <h2 className="md:text-xl text-lg font-medium my-3">What`s your destination?</h2>
            {/* <GooglePlacesAutocomplete/> */}
          </div>
        </div>

      </div>
    </>
  )
}

export default CreateTrip
