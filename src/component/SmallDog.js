import React from 'react';
import image from '../img/customer04.png'

const products = [
  {
    id: 'M0502',
    breed: 'Poodle Tiny Yellow',
    gender: 'Female',
    age: '02 months',
    price: '3,900,000 VND',
    imageUrl: image,
  },
  {
    id: 'M0102',
    breed: 'Poodle Tiny Sepia',
    gender: 'Male',
    age: '02 months',
    price: '4,000,000 VND',
    imageUrl: image,
  },
  {
    id: 'M0512',
    breed: 'Alaskan Malamute Grey',
    gender: 'Male',
    age: '02 months',
    price: '8,900,000 VND',
    imageUrl: image,
  },
  {
    id: 'M0502',
    breed: 'Poodle Tiny Yellow',
    gender: 'Female',
    age: '02 months',
    price: '3,900,000 VND',
    imageUrl: image,
  },
  {
    id: 'M0102',
    breed: 'Poodle Tiny Sepia',
    gender: 'Male',
    age: '02 months',
    price: '4,000,000 VND',
    imageUrl: image,
  },
  {
    id: 'M0512',
    breed: 'Alaskan Malamute Grey',
    gender: 'Male',
    age: '02 months',
    price: '8,900,000 VND',
    imageUrl: image,
  },
  {
    id: 'M0502',
    breed: 'Poodle Tiny Yellow',
    gender: 'Female',
    age: '02 months',
    price: '3,900,000 VND',
    imageUrl: image,
  },
  {
    id: 'M0102',
    breed: 'Poodle Tiny Sepia',
    gender: 'Male',
    age: '02 months',
    price: '4,000,000 VND',
    imageUrl: image,
  },
  {
    id: 'M0512',
    breed: 'Alaskan Malamute Grey',
    gender: 'Male',
    age: '02 months',
    price: '8,900,000 VND',
    imageUrl: image,
  },
  {
    id: 'M0502',
    breed: 'Poodle Tiny Yellow',
    gender: 'Female',
    age: '02 months',
    price: '3,900,000 VND',
    imageUrl: image,
  },
  {
    id: 'M0102',
    breed: 'Poodle Tiny Sepia',
    gender: 'Male',
    age: '02 months',
    price: '4,000,000 VND',
    imageUrl: image,
  },
  {
    id: 'M0512',
    breed: 'Alaskan Malamute Grey',
    gender: 'Male',
    age: '02 months',
    price: '8,900,000 VND',
    imageUrl: image,
  },
  {
    id: 'M0502',
    breed: 'Poodle Tiny Yellow',
    gender: 'Female',
    age: '02 months',
    price: '3,900,000 VND',
    imageUrl: image,
  },
  {
    id: 'M0102',
    breed: 'Poodle Tiny Sepia',
    gender: 'Male',
    age: '02 months',
    price: '4,000,000 VND',
    imageUrl: image,
  },
  {
    id: 'M0512',
    breed: 'Alaskan Malamute Grey',
    gender: 'Male',
    age: '02 months',
    price: '8,900,000 VND',
    imageUrl: image,
  },
];

const SmallDog = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Small Dog - {products.length} puppies</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg">
            <img src={product.imageUrl} alt={product.breed} className="w-full h-40 object-cover rounded-md" />
            <h4 className="font-semibold mt-2">{product.breed}</h4>
            <p className="text-gray-600">Gender: {product.gender}</p>
            <p className="text-gray-600">Age: {product.age}</p>
            <p className="font-bold text-blue-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallDog;
