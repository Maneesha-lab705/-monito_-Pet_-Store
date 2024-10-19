import React from 'react';
import facebook from '../img/facebook.png';
import twiter from '../img/twiter (1).png';
import youtube from '../img/youtube.png';
import inster from '../img/inster.png';

const Footer = () => {
  return (
    <footer className="bg-beige bg-orange-100 text-gray-700">
      <div className="flex flex-col items-start ml-40 mr-40 mt-20"> {/* Wrapper for alignment */}
  <div className="bg-blue-900 text-white py-6 rounded-[10px] mt-10 w-full"> {/* Set width to full for better alignment */}
    <div className="container mx-auto flex justify-between items-center px-10 ">
      <h3 className="text-xl font-bold">
        Register Now So You Don't Miss <br /> Our Programs
      </h3>
      <div className="bg-white p-4 rounded-lg"> {/* Outer div for border */}
        <div className="flex"> {/* Inner div for flex layout with border */}
          <input
            type="email"
            placeholder="Enter your Email"
            className="p-3 w-96 mr-2 rounded-lg text-gray-700 focus:outline-none border border-black" // Width set to 96
          />
          <button className="bg-blue-700 px-6 py-3 rounded-lg text-white hover:bg-blue-600 border border-black">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="py-4 w-full flex justify-between"> {/* Flex container for left and right alignment */}
  <div className="container mx-auto flex justify-start space-x-10"> {/* Left-aligned navigation */}
    <a href="#" className="hover:underline">Home</a>
    <a href="#" className="hover:underline">Category</a>
    <a href="#" className="hover:underline">About</a>
    <a href="#" className="hover:underline">Contact</a>
  </div>
  <div className="flex space-x-4"> {/* Right-aligned social media icons */}
    <a href="#" aria-label="Facebook">
      <img src={facebook} alt="Facebook" className="w-10 h-6" />
    </a>
    <a href="#" aria-label="Twitter">
      <img src={twiter} alt="Twitter" className="w-10 h-6" />
    </a>
    <a href="#" aria-label="Instagram">
      <img src={inster}  alt="Instagram" className="w-10 h-6" />
    </a>
    <a href="#" aria-label="YouTube">
      <img src={youtube}  alt="YouTube" className="w-10 h-6" />
    </a>
  </div>
</div>
</div>

<hr className='bg-black'></hr>

      <div className="py-6 bg-beige text-center">
        <div className="container mx-auto">
          <p className="font-bold text-xl">Monitö</p>
          <p className="text-sm">Pets is Best</p>
          <div className="flex justify-between items-center mt-4">
  <p className="text-sm">© 2024 Monitö. All rights reserved.</p>
  <div className="flex space-x-4 text-sm">
    <a href="#" className="hover:underline">Terms of Service</a>
    <a href="#" className="hover:underline">Privacy Policy</a>
  </div>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
