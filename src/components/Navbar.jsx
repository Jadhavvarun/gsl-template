// import { useState, useEffect } from 'react';
// import logo from "../assets/gsl-1.png";

// export default function Navbar() {
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollTop = window.scrollY;
//             setIsScrolled(scrollTop > 0);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div className={`bg-white py-3 px-6 border-b sticky top-0 ${isScrolled ? 'bg-opacity-75 shadow-b-xl backdrop-blur-lg' : ''}`}>
//             <div className="flex justify-between items-center">
//                 <div className="flex gap-24 items-center">
//                     {/* logo */}
//                     <img src={logo} alt="logo" className="h-12" />
//                     </div>
//                     <div>
//                         <ul className="flex gap-12 font-semibold text-lg">
//                             <li><a href="#home" className="cursor-pointer">Home</a></li>
//                             <li><a href="#services" className="cursor-pointer">Services</a></li>
//                             <li><a href="#pricing" className="cursor-pointer">Pricing</a></li>
//                             <li><a href="#api" className="cursor-pointer">API</a></li>
//                         </ul>
//                     </div>

//                 <div className="flex gap-6 items-center">
//                     <button className="border border-brand-400 border-gray-400 px-8 py-2 rounded-lg">Sign Up</button>
//                     <button className="bg-brand-400 text-white px-8 py-2 font-semibold rounded-lg transition ease-in-out duration-400 delay-150 hover:bg-brand-500">Sign in</button>
//                 </div>
//             </div>
//         </div>
//     );
// }



import React, { useState } from 'react';
import logo from "../assets/gsl.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-darkblue px-4 sm:px-6 lg:px-8 py-4 z-20 sticky top-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-8 sm:h-10 lg:h-12" />
        </div>
        
        {/* Hamburger menu button for mobile */}
        <button 
          className="lg:hidden text-white"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:items-center">
          <ul className="flex gap-8 font-semibold text-white text-lg">
            <li><a href="#home" className="cursor-pointer">Home</a></li>
            <li><a href="#services" className="cursor-pointer">Services</a></li>
            <li><a href="#pricing" className="cursor-pointer">Pricing</a></li>
            <li><a href="#api" className="cursor-pointer">API</a></li>
          </ul>
        </div>
        
        <div className="hidden lg:flex gap-6 items-center">
          <button className="font-semibold text-white text-lg">Sign in</button>
          <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 font-semibold transition ease-in-out duration-400 delay-150 hover:from-orange-500 hover:to-yellow-500 rounded-md">Sign up</button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
  <div className="lg:hidden mt-4 bg-darkblue-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out">
    <ul className="flex flex-col font-semibold text-white text-lg divide-y divide-gray-700">
      <li><a href="#home" className="block py-3 px-4 hover:bg-darkblue-700 transition duration-200">Home</a></li>
      <li><a href="#services" className="block py-3 px-4 hover:bg-darkblue-700 transition duration-200">Services</a></li>
      <li><a href="#pricing" className="block py-3 px-4 hover:bg-darkblue-700 transition duration-200">Pricing</a></li>
      <li><a href="#api" className="block py-3 px-4 hover:bg-darkblue-700 transition duration-200">API</a></li>
    </ul>
    <div className="p-4 space-y-3">
      <button className="w-full text-center font-semibold text-white text-lg py-2 px-4 rounded-md bg-darkblue-700 hover:bg-darkblue-600 transition duration-200">Sign in</button>
      <button className="w-full text-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 font-semibold rounded-md hover:from-orange-600 hover:to-yellow-600 transition duration-200">Sign up</button>
    </div>
  </div>
)}
    </nav>
  );
}