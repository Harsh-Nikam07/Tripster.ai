import { Button } from "@/components/ui/button"
// import { FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
    <div className=" flex justify-between items-center p-2 px-4 shadow-sm sticky top-0 bg-gray-00 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 z-10">
        <a href="/">
        <img className="w-40" src="/tripster-main-logo.svg" alt="Tripster Logo" />
        </a>
        <div>
        <Button>Sign up</Button>

        {/* <Link to={"/create-trip"}>
          <Button className="flex items-center justify-center gap-2 text-sm">Get Started <FaArrowRight /></Button>
        </Link> */}
        </div>
    </div>
    </>
  )
}

export default Header
