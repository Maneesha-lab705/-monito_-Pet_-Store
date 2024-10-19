import React from 'react';

const FilterSidebar = () => {
  return (
    <div className="w-1/4 bg-gray-100 p-4">
      <h3 className="font-bold mb-4">Filter</h3>

      <div className="mb-4">
        <h4 className="font-semibold">Gender</h4>
        <div>
          <label>
            <input type="checkbox" className="mr-2" />
            Male
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" className="mr-2" />
            Female
          </label>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold">Color</h4>
        {['Red', 'Apricot', 'Black', 'Black & White', 'Silver', 'Tan'].map((color) => (
          <div key={color}>
            <label>
              <input type="checkbox" className="mr-2" />
              {color}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h4 className="font-semibold">Price</h4>
        <input type="number" placeholder="Min" className="p-2 border rounded" />
        <input type="number" placeholder="Max" className="p-2 border rounded mt-2" />
      </div>

      <div className="mb-4">
        <h4 className="font-semibold">Breed</h4>
        {['Small', 'Medium', 'Large'].map((breed) => (
          <div key={breed}>
            <label>
              <input type="checkbox" className="mr-2" />
              {breed}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
