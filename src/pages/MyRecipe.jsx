import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router';

const MyRecipe = () => {
  const { user } = useContext(AuthContext); // ✅ useContext instead of use()
  const [recipe, setRecipe] = useState([]);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    fetch('https://recipebook-clientside.vercel.app/addrecipes')
      .then(res => res.json())
      .then(data => {
        setRecipe(data);
      });
  }, []);

  const handleDelete = async (id) => {
    await fetch(`https://recipebook-clientside.vercel.app/addrecipes/${id}`, {
      method: 'DELETE'
    });
    setRecipe(prev => prev.filter((item) => item._id !== id));
  };

  const handleUpdate = async () => {
    if (!editData) return;

    // Ensure we keep all original fields like likeCount and addedBy
    const fullData = {
      ...editData,
      likeCount: editData.likeCount || 0,
      addedBy: editData.addedBy || user.email,
    };

    const res = await fetch(`https://recipebook-clientside.vercel.app/addrecipes/${editData._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fullData),
    });

    const data = await res.json();
    if (data.modifiedCount > 0) {
      setRecipe(prev =>
        prev.map(r => (r._id === editData._id ? { ...r, ...fullData } : r))
      );
      setEditData(null);
    }
  };

  const myCard = recipe.filter((item) => item.addedBy === user?.email);

  return (
    <div>
      {myCard.map((mineCard) => (
        <div
          key={mineCard._id}
          className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4"
        >
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            <span className="bg-red-400 p-1 rounded-3xl">{user.displayName}</span> Recipe
          </h1>

          <div className="max-w-sm w-full rounded-2xl shadow-lg overflow-hidden border p-4 bg-white">
            <img
              src={mineCard.image}
              alt={mineCard.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <div>
              <h2 className="text-xl font-semibold mb-2">{mineCard.title}</h2>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Ingredients:</strong> {mineCard.ingredients}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Instructions:</strong> {mineCard.instructions}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Cuisine:</strong> {mineCard.cuisine || "N/A"}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Preparation Time:</strong> {mineCard.prepTime || "?"} min
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Categories:</strong>{" "}
                {Array.isArray(mineCard.categories)
                  ? mineCard.categories.join(", ")
                  : mineCard.categories}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-green-600">
                  ❤️ {mineCard.likeCount || 0} Likes
                </span>
                <button
                  onClick={() => setEditData(mineCard)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(mineCard._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>

          {editData && editData._id === mineCard._id && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
              <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md">
                <h2 className="text-lg font-bold mb-4">Update Recipe</h2>
                <input
                  value={editData.title}
                  onChange={(e) =>
                    setEditData({ ...editData, title: e.target.value })
                  }
                  placeholder="Title"
                  className="w-full p-2 border mb-2 rounded"
                />
                <textarea
                  value={editData.ingredients}
                  onChange={(e) =>
                    setEditData({ ...editData, ingredients: e.target.value })
                  }
                  placeholder="Ingredients"
                  className="w-full p-2 border mb-2 rounded"
                />
                <textarea
                  value={editData.instructions}
                  onChange={(e) =>
                    setEditData({ ...editData, instructions: e.target.value })
                  }
                  placeholder="Instructions"
                  className="w-full p-2 border mb-2 rounded"
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={handleUpdate}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() =>setEditData(null)}
                    className="bg-gray-400 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
          <h1 className="mt-20">
            Get Back To{" "}
            <Link className="font-bold border-b-2 text-blue-600" to="/">
              Home
            </Link>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default MyRecipe;
