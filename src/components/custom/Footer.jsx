import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className=" flex flex-col justify-center items-center md:flex-row p-2 my-6 gap-2 md:px-8">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start items-start flex-col gap-2">
          <a href="/">
            <img
              src="/tripster-main-logo.svg"
              alt="tripster.ai"
              className="w-[120px]"
            />
          </a>
          {/* <div>
            <p>
              Plan your dream trip with Tripster, your ultimate travel companion.
              Explore destinations, book hotels, and discover new experiences
              all in one place.
            </p>
          </div> */}
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center gap-4">
        <a href="" >
            <div className="group bg-black w-8 h-8 rounded-sm  flex justify-start items-center overflow-hidden relative hover:scale-110 ">
                <span className="text-white font-semibold text-xs absolute left-[11px] opacity-100 group-hover:opacity-0 group-hover:translate-x-[50px] transition-all duration-300 ease-in-out">
                    IG
                </span>
                <FaInstagram className="text-white absolute right-2 translate-x-[50px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
            </div>
          </a>


          <a href="" >
            <div className="group bg-black w-8 h-8 rounded-sm flex justify-start items-center overflow-hidden relative hover:scale-110">
                <span className="text-white font-semibold text-xs absolute left-[8px] opacity-100 group-hover:opacity-0 group-hover:translate-x-[50px] transition-all duration-300 ease-in-out">
                    TW
                </span>
                <FaXTwitter className="text-white absolute right-2 translate-x-[50px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
            </div>
          </a>


          <a href="" >
            <div className="group bg-black w-8 h-8 rounded-sm flex justify-start items-center overflow-hidden relative hover:scale-110">
                <span className="text-white font-semibold text-xs absolute left-[9px] opacity-100 group-hover:opacity-0 group-hover:translate-x-[50px] transition-all duration-300 ease-in-out">
                    FB
                </span>
                <FaFacebookF className="text-white absolute right-2 translate-x-[50px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
            </div>
          </a>

          <a href="" >
            <div className="group bg-black w-8 h-8 rounded-sm flex justify-start items-center overflow-hidden relative hover:scale-110">
                <span className="text-white font-semibold text-xs absolute left-[9px] opacity-100 group-hover:opacity-0 group-hover:translate-x-[50px] transition-all duration-300 ease-in-out">
                    LN
                </span>
                <FaLinkedinIn className="text-white absolute right-2 translate-x-[50px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
            </div>
          </a>

          <a href="" >
            <div className="group bg-black w-8 h-8 rounded-sm flex justify-start items-center overflow-hidden relative hover:scale-110">
                <span className="text-white font-semibold text-xs absolute left-[9px] opacity-100 group-hover:opacity-0 group-hover:translate-x-[50px] transition-all duration-300 ease-in-out">
                    YT
                </span>
                <IoLogoYoutube className="text-white absolute right-2 translate-x-[50px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
            </div>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
