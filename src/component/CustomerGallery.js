import React from 'react';
import image from '../img/customer04.png'; // Ensure this path is correct
import image3 from '../img/image3.png';
import image4 from '../img/image4.png';
import image5 from '../img/image5.png';

const CustomerGallery = () => {
  const customers = [
    {
      img: image,
      alt: 'Customer with a Shiba Inu',
    },
    {
      img: image3,
      alt: 'Customer with a Shiba Inu',
    },
    {
      img: image4,
      alt: 'Customer with a Shiba Inu',
    },
    {
      img: image5,
      alt: 'Main customer with a Shiba Inu',
    },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 ml-5">Our lovely customer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {customers.map((customer, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={customer.img}
              alt={customer.alt}
              className="rounded-lg object-cover w-full h-60 md:h-72 lg:h-80"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerGallery;
