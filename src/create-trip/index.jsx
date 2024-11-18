import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

const CreateTrip = () => {
  const [place, setPlace] = useState(null);

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-11 ">
        <div className="md:w-2/3 w-11/12 flex flex-col items-start justify-start gap-3 text-wrap ">
          <div>
          <h1 className="md:text-3xl text-xl font-bold">Tell us your Travel Preferences 🏕️🌴</h1>
            <p className="md:text-lg text-sm text-justify text-gray-500 md:p-0 pt-2">Just provide some basic information, and Tripster.ai will create a personalized itinerary based on your preferences</p>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-1  ">
            <h2 className="md:text-xl text-lg font-medium my-3">What`s your destination?</h2>
            <div className='w-full'>
            <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              className='w-full'
              selectProps={{
                place,
                onChange:(v) => {setPlace(v);console.log(v)}
              }}
            />
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-1  ">
            <h2 className="md:text-xl text-lg font-medium my-3">How many days are you planning for?</h2>
            <div className='w-full'>
              <Input placeholder='Ex. 5' type='number' max={20} min={1} maxLength={2} onInput={(e) => e.target.value = e.target.value.slice(0,2)}/>
            </div>
          </div>

          <div className="w-full flex flex-col items-start justify-start gap-1  ">
            <h2 className="md:text-xl text-lg font-medium my-3">What is Your Budget?</h2>
             
          </div>

        </div>

      </div>
    </>
  )
}

export default CreateTrip
