import React from "react";

const PetCard = ({ pet }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-60"> {/* Adjust width here */}
    <img src={pet.image} alt={pet.name} className="w-full h-32 object-cover"/> {/* Adjust height here */}
    <div className="p-4"> {/* Optional: Adjust padding here */}
      <h2 className="text-sm font-bold">{pet.name}</h2> {/* Optional: Adjust text size */}
      <p className="text-xs text-gray-500">Age: {pet.age} months</p> {/* Optional: Adjust text size */}
      <p className="text-xs text-gray-500">Price: {pet.price} VND</p> {/* Optional: Adjust text size */}
    </div>
  </div>
  
  );
};

export default PetCard;