import React from "react";

const PetCard = ({ pet }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-72 h-80mb-5">
      <div className="flex justify-center items-center">
        <img src={pet.image} alt={pet.name} className="w-64 h-52 object-cover rounded-[10px]" />
      </div>

  
      <div className="p-4">
      <h2 className="text-lg font-bold">{pet.name}</h2> 
<p className="text-sm text-gray-500">Age: {pet.age} months</p> 
<p className="text-sm text-gray-500">Price: {pet.price} VND</p>

      </div>
    </div>
  );
};

export default PetCard;
