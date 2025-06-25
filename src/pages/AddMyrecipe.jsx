import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AddMyrecipe = () => {
  const { user } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const recipeData = Object.fromEntries(formData.entries());

    // Convert categories from string (only one) to array (multiple selections)
    const categories = formData.getAll('categories');
    recipeData.categories = categories;

    // Ensure proper types
    recipeData.likeCount = parseInt(recipeData.likeCount) || 0;
    recipeData.prepTime = parseInt(recipeData.prepTime);
    recipeData.addedBy = user?.email;

    fetch('https://recipebook-clientside.vercel.app/addrecipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: '🎉 Recipe Added!',
            icon: 'success',
          });
          form.reset();
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form onSubmit={handleClick} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Add a New Recipe</h2>

        {/* Image Upload */}
        <div>
          <label className="block font-semibold mb-1">Image</label>
          <input type="text" name="image" required className="w-full border p-2 rounded" placeholder="Image URL..." />
        </div>

        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input type="text" name="title" required className="w-full border p-2 rounded" placeholder="Recipe title..." />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold mb-1">Ingredients</label>
          <textarea name="ingredients" rows="3" required className="w-full border p-2 rounded" placeholder="List the ingredients..."></textarea>
        </div>

        {/* Instructions */}
        <div>
          <label className="block font-semibold mb-1">Instructions</label>
          <textarea name="instructions" rows="3" required className="w-full border p-2 rounded" placeholder="Write the instructions..."></textarea>
        </div>

        {/* Cuisine Type */}
        <div>
          <label className="block font-semibold mb-1">Cuisine Type</label>
          <select name="cuisine" required className="w-full border p-2 rounded">
            <option value="">--Select--</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Preparation Time */}
        <div>
          <label className="block font-semibold mb-1">Preparation Time (minutes)</label>
          <input type="number" name="prepTime" min="1" required className="w-full border p-2 rounded" />
        </div>

        {/* Categories */}
        <div>
          <label className="block font-semibold mb-2">Categories</label>
          <div className="flex flex-wrap gap-4">
            {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'].map((cat) => (
              <label key={cat} className="inline-flex items-center space-x-2">
                <input type="checkbox" name="categories" value={cat} />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Like Count */}
        <div>
          <label className="block font-semibold mb-1">Like Count</label>
          <input type="number" name="likeCount" value="0" readOnly className="w-full border p-2 rounded bg-gray-100 cursor-not-allowed" />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMyrecipe;
