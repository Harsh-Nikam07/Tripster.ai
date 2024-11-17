import Phill from "./phill"
import { Button } from "@/components/ui/button"
import { FaArrowRight } from "react-icons/fa";


const Hero = () => {
  return (
    <>
    <div className="flex items-center justify-center flex-col gap-10 mt-11 ">
      <div className="flex items-center justify-center flex-col gap-5">
        <Phill leftText="Tripster.ai" rightText="Memorable Trips" />
        <span className="md:w-3/4 w-4/5 md:text-7xl text-5xl text-center font-bold">Effortless Trip Planning with Tripster AI</span>
      </div>

    <div className="flex items-center justify-center flex-col md:gap-5 gap-3">
      <div className="md:w-2/4 w-3/4 text-center font-inter font-normal md:text-lg text-base flex items-center justify-center">
        <span>`Discover Your Next Great Adventure with <span className="text-[#6B00EE]">Tripster.ai</span>: Effortlessly Create Personalized Itineraries Tailored to Your Interests`</span>
      </div>

      <Button className="flex items-center justify-center gap-2 text-sm">Get Started <FaArrowRight /></Button>
    </div>

    </div>

    </>
  )
}

export default Hero
