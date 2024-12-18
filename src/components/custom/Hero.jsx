import { Button } from "@/components/ui/button"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <>
    <div className=" w-full h-screen md:h-[90vh] flex items-center justify-center flex-col gap-10 ">
      <div className="flex items-center justify-center flex-col gap-5">
        <span className="md:w-3/4 w-4/5 md:text-7xl text-5xl text-center font-bold">Effortless Trip Planning with Tripster AI</span>
      </div>

    <div className="flex items-center justify-center flex-col md:gap-5 gap-3">
      <div className="md:w-2/4 w-3/4 text-center font-inter font-normal md:text-lg text-base flex items-center justify-center">
        <span>`Discover Your Next Great Adventure with <span className="text-[#6B00EE]">Tripster.ai</span>: Effortlessly Create Personalized Itineraries Tailored to Your Interests`</span>
      </div>

      <Link to={"/create-trip"}>
      <Button className="flex items-center justify-center gap-2 text-sm">Get Started <FaArrowRight /></Button></Link>
    </div>

    </div>

    </>
  )
}

export default Hero
