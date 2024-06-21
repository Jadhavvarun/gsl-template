// import React from 'react';
// import { Link, Element } from 'react-scroll';
// import dashboard from "../assets/dashboard.jpg";

// export default function Home() {
//   return (
//     <>
//   <Element name="section2" className="h-[450px] bg-gradient-to-br from-blue-900 via-brand-200 via-brand-300 via-purple-600 to-indigo-900">
//     <div className="opacity-70"></div>
//         <div className="container mx-auto h-full flex flex-col justify-center items-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
//             The Simplest URL Shortener You Were Waiting For
//           </h2>
//           <p className="text-gray-300 text-lg md:text-xl mb-6 text-center">
//             Shorten your links effortlessly with our easy-to-use tool.
//           </p>
//           <div className="flex gap-4">
//             <input
//               type="text"
//               placeholder="Enter Your Link"
//               className="p-3 border border-white bg-transparent rounded-lg text-white placeholder-gray-300 focus:outline-none "
//             />
//             <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
//               Generate Shortlink
//             </button>
//           </div>
//         </div>
//       </Element>

//       {/* Section 1: Unlock Insights */}
//       <div className="h-screen bg-brand-50 flex items-center justify-center">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center">
//             {/* Left Column: Text Content */}
//             <div className="md:w-1/2 mb-8 md:mb-0">
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
//                 Unlock Insights: Elevate Your URL Experience with Advanced
//                 Analytics
//               </h2>
//               <p className="text-gray-700 text-lg mb-4">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
//                 vel justo sit amet urna congue suscipit eget et lorem. Aliquam
//                 erat volutpat. Sed dignissim odio et purus vulputate, in
//                 lobortis eros ultrices. Sed nec diam id libero fringilla dictum.
//               </p>
//               {/* Use Link from react-scroll for smooth scrolling */}
//               <Link to="section2" smooth={true} duration={500}>
//                 <button className="bg-brand-400 text-white px-8 py-2 font-semibold rounded-lg transition ease-in-out duration-400 delay-150 hover:bg-brand-500">Generate Shortlink Now</button>
//               </Link>
//             </div>

//             {/* Right Column: Image */}
//             <div className="md:w-1/2 flex justify-center">
//               <img
//                 src={dashboard}
//                 alt="Dashboard"
//                 className="max-w-full h-auto md:h-96 rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Section 2: Additional Section (Placeholder) */}
      

//       {/* Section 3: Additional Section (Placeholder) */}
//       <div className="h-screen bg-white">
//       <main class="max-w-6xl mx-auto pt-10 pb-36 px-8">
  
//   <div class="max-w-md mx-auto mb-14 text-center">
//     <h1 class="text-4xl font-semibold mb-6 lg:text-5xl"><span class="text-indigo-600">Flexible</span> Plans</h1>
//     <p class="text-xl text-gray-500 font-medium">Choose a plan that works best for you and your team.</p>
//   </div>
  
//   <div class="flex flex-col justify-between items-center lg:flex-row lg:items-start">
    
//     <div class="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
//       <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
//         <img src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"  alt="" class="rounded-3xl w-20 h-20" />
//         <div class="ml-5">
//           <span class="block text-2xl font-semibold">Basic</span>
//           <span><span class="font-medium text-gray-500 text-xl align-top">$&thinsp;</span><span class="text-3xl font-bold">10 </span></span><span class="text-gray-500 font-medium">/ user</span>
//         </div>
//       </div>
//       <ul class="mb-7 font-medium text-gray-500">
//         <li class="flex text-lg mb-2">
//           <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
//           <span class="ml-3">Get started with <span class="text-black">messaging</span></span>
//         </li>
//         <li class="flex text-lg mb-2">
//           <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
//           <span class="ml-3">Flexible <span class="text-black">team meetings</span></span>
//         </li>
//         <li class="flex text-lg">
//           <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
//           <span class="ml-3"><span class="text-black">5 TB</span> cloud storage</span>
//         </li>
//       </ul>
//       <a href="#/" class="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl">
//         Choose Plan
//         <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" class="ml-2" />
//       </a>
//     </div>
    
//     <div class="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
//       <div class="mb-8 pb-8 flex items-center border-b border-gray-600">
//         <img src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"  alt="" class="rounded-3xl w-20 h-20" />
//         <div class="ml-5">
//           <span class="block text-3xl font-semibold text-white">Startup</span>
//           <span><span class="font-medium text-xl align-top">$&thinsp;</span><span class="text-3xl font-bold text-white">24 </span></span><span class="font-medium">/ user</span>
//         </div>
//       </div>
//       <ul class="mb-10 font-medium text-xl">
//         <li class="flex mb-6">
//           <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
//           <span class="ml-3">All features in <span class="text-white">Basic</span></span>
//         </li>
//         <li class="flex mb-6">
//           <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
//           <span class="ml-3">Flexible <span class="text-white">call scheduling</span></span>
//         </li>
//         <li class="flex">
//           <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
//           <span class="ml-3"><span class="text-white">15 TB</span> cloud storage</span>
//         </li>
//       </ul>
//       <a href="#/" class="flex justify-center items-center bg-indigo-600 rounded-xl py-6 px-4 text-center text-white text-2xl">
//         Choose Plan
//         <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" class="ml-2" />
//       </a>
//     </div>
    
//     <div class="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
//       <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
//         <img src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"  alt="" class="rounded-3xl w-20 h-20" />
//         <div class="ml-5">
//           <span class="block text-2xl font-semibold">Enterprise</span>
//           <span><span class="font-medium text-gray-500 text-xl align-top">$&thinsp;</span><span class="text-3xl font-bold">35 </span></span><span class="text-gray-500 font-medium">/ user</span>
//         </div>
//       </div>
//       <ul class="mb-7 font-medium text-gray-500">
//         <li class="flex text-lg mb-2">
//           <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
//           <span class="ml-3">All features in <span class="text-black">Startup</span></span>
//         </li>
//         <li class="flex text-lg mb-2">
//           <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
//           <span class="ml-3">Growth <span class="text-black">oriented</span></span>
//         </li>
//         <li class="flex text-lg">
//           <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
//           <span class="ml-3"><span class="text-black">Unlimited</span> cloud storage</span>
//         </li>
//       </ul>
//       <a href="#/" class="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl">
//         Choose Plan
//         <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" class="ml-2" />
//       </a>
//     </div>
    
//   </div>
  
// </main>
//       </div>
//     </>
//   );
// }


import React from 'react';
import { Link, Element } from 'react-scroll';
import dashboard from "../assets/dashboard.jpg";

export default function Home() {
  return (
    <>
  <Element name="section2" className="h-[450px] bg-darkblue">
  <div className="absolute inset-0 bg-gradient-to-b from-brand-500 opacity-20"></div>
    <div className="opacity-70"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            The Simplest URL Shortener You Were Waiting For
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-6 text-center">
            Shorten your links effortlessly with our easy-to-use tool.
          </p>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter Your Link"
              className="p-3 border border-white bg-transparent rounded-lg text-white placeholder-gray-300 focus:outline-none "
            />
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
              Generate Shortlink
            </button>
          </div>
        </div>
      </Element>

      {/* Section 1: Unlock Insights */}
      <div className="h-screen bg-brand-50 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Column: Text Content */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
                Unlock Insights: Elevate Your URL Experience with Advanced
                Analytics
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                vel justo sit amet urna congue suscipit eget et lorem. Aliquam
                erat volutpat. Sed dignissim odio et purus vulputate, in
                lobortis eros ultrices. Sed nec diam id libero fringilla dictum.
              </p>
              {/* Use Link from react-scroll for smooth scrolling */}
              <Link to="section2" smooth={true} duration={500}>
                <button className="bg-brand-400 text-white px-8 py-2 font-semibold rounded-lg transition ease-in-out duration-400 delay-150 hover:bg-brand-500">Generate Shortlink Now</button>
              </Link>
            </div>

            {/* Right Column: Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={dashboard}
                alt="Dashboard"
                className="max-w-full h-auto md:h-96 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Additional Section (Placeholder) */}
      

      {/* Section 3: Additional Section (Placeholder) */}
      <div className="h-screen bg-white">
      <main class="max-w-6xl mx-auto pt-10 pb-36 px-8">
  
  <div class="max-w-md mx-auto mb-14 text-center">
    <h1 class="text-4xl font-semibold mb-6 lg:text-5xl"><span class="text-indigo-600">Flexible</span> Plans</h1>
    <p class="text-xl text-gray-500 font-medium">Choose a plan that works best for you and your team.</p>
  </div>
  
  <div class="flex flex-col justify-between items-center lg:flex-row lg:items-start">
    
    <div class="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
      <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
        <img src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"  alt="" class="rounded-3xl w-20 h-20" />
        <div class="ml-5">
          <span class="block text-2xl font-semibold">Basic</span>
          <span><span class="font-medium text-gray-500 text-xl align-top">$&thinsp;</span><span class="text-3xl font-bold">10 </span></span><span class="text-gray-500 font-medium">/ user</span>
        </div>
      </div>
      <ul class="mb-7 font-medium text-gray-500">
        <li class="flex text-lg mb-2">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span class="ml-3">Get started with <span class="text-black">messaging</span></span>
        </li>
        <li class="flex text-lg mb-2">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span class="ml-3">Flexible <span class="text-black">team meetings</span></span>
        </li>
        <li class="flex text-lg">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span class="ml-3"><span class="text-black">5 TB</span> cloud storage</span>
        </li>
      </ul>
      <a href="#/" class="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl">
        Choose Plan
        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" class="ml-2" />
      </a>
    </div>
    
    <div class="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
      <div class="mb-8 pb-8 flex items-center border-b border-gray-600">
        <img src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"  alt="" class="rounded-3xl w-20 h-20" />
        <div class="ml-5">
          <span class="block text-3xl font-semibold text-white">Startup</span>
          <span><span class="font-medium text-xl align-top">$&thinsp;</span><span class="text-3xl font-bold text-white">24 </span></span><span class="font-medium">/ user</span>
        </div>
      </div>
      <ul class="mb-10 font-medium text-xl">
        <li class="flex mb-6">
          <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
          <span class="ml-3">All features in <span class="text-white">Basic</span></span>
        </li>
        <li class="flex mb-6">
          <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
          <span class="ml-3">Flexible <span class="text-white">call scheduling</span></span>
        </li>
        <li class="flex">
          <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
          <span class="ml-3"><span class="text-white">15 TB</span> cloud storage</span>
        </li>
      </ul>
      <a href="#/" class="flex justify-center items-center bg-indigo-600 rounded-xl py-6 px-4 text-center text-white text-2xl">
        Choose Plan
        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" class="ml-2" />
      </a>
    </div>
    
    <div class="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
      <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
        <img src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"  alt="" class="rounded-3xl w-20 h-20" />
        <div class="ml-5">
          <span class="block text-2xl font-semibold">Enterprise</span>
          <span><span class="font-medium text-gray-500 text-xl align-top">$&thinsp;</span><span class="text-3xl font-bold">35 </span></span><span class="text-gray-500 font-medium">/ user</span>
        </div>
      </div>
      <ul class="mb-7 font-medium text-gray-500">
        <li class="flex text-lg mb-2">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span class="ml-3">All features in <span class="text-black">Startup</span></span>
        </li>
        <li class="flex text-lg mb-2">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span class="ml-3">Growth <span class="text-black">oriented</span></span>
        </li>
        <li class="flex text-lg">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span class="ml-3"><span class="text-black">Unlimited</span> cloud storage</span>
        </li>
      </ul>
      <a href="#/" class="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl">
        Choose Plan
        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" class="ml-2" />
      </a>
    </div>
    
  </div>
  
</main>
      </div>
    </>
  );
}
