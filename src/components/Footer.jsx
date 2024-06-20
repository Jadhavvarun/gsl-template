import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsSendFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="h-auto bg-navy-900">
        <div className="px-6 py-14 md:px-16 xl:px-24">
          <div className="flex flex-col md:flex-row md:justify-around">
            <div className="mb-8 md:mb-0">
              <ul className="text-white tracking-widest">
                <li className="font-bold mb-4 text-white ">PRODUCTS</li>
               
                <li className="text-white mb-2">Stickers</li>
            
                
                <li className="text-white mb-2">Tent Cards</li>
                
                <li className="text-white mb-2">3side seal pouches</li>
                
                <li className="text-white mb-2">Letterheads</li>
                
              </ul>
            </div>

            <div className="mb-8 md:mb-0">
              <ul className="text-white tracking-widest">
                <li className="font-bold mb-4 text-white uppercase">
                  Customer service
                </li>
                
                  <li className="text-white mb-2">My Account</li>
                
                  <li className="text-white mb-2">Privacy Policy</li>
                
                  <li className="text-white mb-2">Shipping Policy</li>
                
                  <li className="text-white mb-2">Returns & Refund</li>
                
                  <li className="text-white mb-2">Terms & Conditions</li>
                
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <ul className="text-white tracking-widest">
                <li className="font-bold mb-4 text-white uppercase">company</li>
                
                  <li className="text-white mb-2">About</li>
                
                  <li className="text-white mb-2">Infrastructure</li>
                
              </ul>
            </div>

            <div>
              {/* Newsletter input */}
              <div className="">
                <h3 className="font-bold text-white mr-3 mb-4 tracking-widest">
                  SUBSCRIBE
                </h3>
                <p className="text-white mb-4 tracking-wider">
                  Do you want to get notified ?
                  <br /> Sign up for our newsletter
                  <br /> and you will be among the
                  <br /> first to find out about
                  <br /> new features & offers.
                </p>
                <form className="flex items-center justify-between bg-white rounded-md overflow-hidden">
                  <span className="text-blue-3 px-4 py-2">
                    <FiMail size={20} />
                  </span>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-2 md:px-2 py-2 md:py-2 border-0 focus:outline-none text-black text-sm md:text-base flex-grow"
                  />
                  <button className="bg-red-1 text-white mr-1 rounded-md px-2 md:px-6 py-2 hover:bg-red-900 focus:outline-none text-sm md:text-base">
                    <BsSendFill />
                  </button>
                </form>
              </div>
              <div className="text-white">
                <h3 className="font-bold py-4 tracking-widest">FOLLOW US</h3>
                <div className="flex  gap-x-7">
                  {/* Replace the links with your actual social media profiles */}
                  <a href="#" className="text-black cursor-pointer">
                    <FaFacebook size={25} color="#FFFFFF" />
                  </a>
                  <a href="#" className="text-black cursor-pointer">
                    <FaLinkedin size={25} color="#FFFFFF" />
                  </a>
                  <a href="#" className="text-black cursor-pointer">
                    <FaInstagram size={25} color="#FFFFFF" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Copyright section */}
          <div className="text-start mt-10 text-gray-300 px-14 cursor-pointer">
            <p>&#169; 2024 gsl Pvt Ltd, All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;