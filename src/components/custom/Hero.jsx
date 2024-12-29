import { Button } from "@/components/ui/button"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // const containerVariants = {
  //   hidden: {},
  //   visible: {
  //     transition: {
  //       staggerChildren: 0.1
  //     }
  //   }
  // };

  // const skillVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: { opacity: 1, y: 0 }
  // };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
    <div className="w-full h-full flex items-center justify-center flex-col gap-10 mt-20">
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

    <div className="flex items-center justify-center flex-col md:gap-5 gap-3 mb-11" ref={ref}>
      <motion.img src="/hero-support-section-1.jpg" className="w-4/5 md:w-2/3" alt="" variants={imageVariants} initial="hidden" animate={inView ? "visible" : "hidden"} />
    </div>

    {/* <div className="flex items-center justify-center flex-col md:gap-5 gap-3 mb-11" ref={ref}>
      <motion.img src="/hero-support-section-2.jpg" className="w-4/5 md:w-2/3" alt="" variants={imageVariants} initial="hidden" animate={inView ? "visible" : "hidden"} />
    </div> */}

    </div>

    

    </>
  )
}

export default Hero
