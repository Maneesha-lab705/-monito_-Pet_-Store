import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Base Swiper styles
import 'swiper/css/pagination';  // If you are using pagination
import 'swiper/css/navigation';  // If you are using navigation
import './mySlider.css';
import image from './img/image.png'; 
import PetGallery from './component/PetGallery';

function MySlider() {
  return (
    <div className='mainCntainer'>
    <div id='hero_banner' className=" overflow-y-hidden h-screen flex flex-col ">
      {/* <div id='rectangle' className='h-4'>

      </div> */}
    <header className="w-full  py-4 px-20 flex items-center justify-between">
  {/* Logo */}
  <div className="text-2xl font-bold text-blue-900">Monito</div>

  {/* Navigation Links */}
  <nav className="space-x-10">
    <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
    <a href="/" className="text-gray-700 hover:text-blue-600">Category</a>
    <a href="/" className="text-gray-700 hover:text-blue-600">About</a>
    <a href="/" className="text-gray-700 hover:text-blue-600">Contact</a>
  </nav>
{/* /////////////////////////// */}
  {/* Search bar and buttons */}
  <div className="flex items-center space-x-4">
    {/* Search bar */}
    <div className="flex items-center bg-white border rounded-full shadow-md p-2 w-72">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search something here!"
        className="ml-2 w-full bg-transparent focus:outline-none text-gray-600 placeholder-gray-400"
      />
    </div>

    {/* Action Buttons */}
    <button className="bg-blue-600 text-white py-2 px-4 rounded-full">
      Join the community
    </button>
    <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full">
      VND
    </button>
  </div>
</header>

<div id='mainImage' clas>
      <img src={image} alt="Main" className=" mainImage mt-1 sm:w-32 md:w-20 md:h-12 " />
    </div>
    <div className="flex flex-col  mt-16  w-96 mainFot" >
      <h1 className="text-4xl font-bold text-blue-900 mb-4">One More Friend, Thousands More Fun!</h1>
      <p className="">
        Having a pet means you have more joy, one new friend, a happy person who will always be with you to have fun.
        We have 200+ different pets that can meet your needs!
      </p>
      </div>
      <div className='flex space-x-3'>
      <div className="flex space-x-4 ml-28 mt-6">
      <button className="bg-transparent text-black py-2 px-6 rounded-full border-2 border-blue-900">View Intro</button>
        <button className="bg-blue-900 text-gray-50	 py-2 px-6 rounded-full">Explore Now</button>
      </div>
    </div>
  </div>
  <div>
  

  <button className="  absolute mt-16  right-40 bg-transparent border-2 border-blue-900 text-gray-700 mb-16 px-2 h-9 rounded-full ">
  View more</button>
  </div>
  < div className=' mt-42 absolute m-0  ' > 
        <h1 className='  text-sm font-bold text-blue-900 ml-28  mt-10 '>whats new?</h1>
        <h1 className='  font-bold text-blue-900  ml-28  text-2xl'>Tacke A  Look At Some Of Our Pets</h1>
  </div>
  <div className='flex-auto ml-10 mt-28'>
    
          <PetGallery/>
        </div>
  </div>
  // petSection
  );
}

export default MySlider;
