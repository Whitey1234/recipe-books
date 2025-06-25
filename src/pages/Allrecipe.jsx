import React, { useState, useMemo } from 'react';
import { useLoaderData } from 'react-router';
import AllCard from '../Component/AllCard';

const Allrecipe = () => {
  const data = useLoaderData();
  const [selectedCuisine, setSelectedCuisine] = useState('All');

  // Extract unique cuisine types
  const cuisineOptions = useMemo(() => {
    const allCuisines = data.map(item => item.cuisine).filter(Boolean);
    const unique = Array.from(new Set(allCuisines));
    return ['All', ...unique];
  }, [data]);

  // Filter recipes based on selected cuisine
  const filteredRecipes = useMemo(() => {
    if (selectedCuisine === 'All') return data;
    return data.filter(recipe => recipe.cuisine === selectedCuisine);
  }, [data, selectedCuisine]);

  return (
    <div className="px-4">
      
      <div className="my-4">
        <label className="font-semibold mr-2">Filter by Cuisine Type:</label>
        <select
          className="border p-2 rounded"
          value={selectedCuisine}
          onChange={e => setSelectedCuisine(e.target.value)}
        >
          {cuisineOptions.map((cuisine, idx) => (
            <option key={idx} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>

      
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {filteredRecipes.map(cardData => (
          <AllCard cardData={cardData} key={cardData._id} />
        ))}
      </div>
    </div>
  );
};

export default Allrecipe;
