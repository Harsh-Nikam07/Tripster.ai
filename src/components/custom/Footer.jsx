import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (  
    <div className="w-full flex justify-between items-center flex-row gap-2 border-t-2 border-black mt-3">
        <div className="w-1/2 flex justify-start items-center flex-col gap-2">
            <a href="/">
                <img src="/tripster-main-logo.svg" alt="tripster.ai"  className="w-40"/>
            </a>
            <div>
                <p>Plan your dream trip with Tripster, your ultimate travel companion. Explore destinations, book hotels, and discover new experiences all in one place.</p>
            </div>
        </div>
        <div className="w-1/2 flex justify-start items-center flex-row gap-2">
            <a href="/">
                <FaInstagram/>
            </a>

            <a href="/">
                <FaInstagram/>
            </a>

            <a href="/">
                <FaInstagram/>
            </a>
        </div>
    </div>
  );
};

export default Footer;
