import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { use } from 'react';
import Header from '../Component/Header';

const CardDetails = () => {
    const {user} = use(AuthContext)
    const [value, setValue] = useState([]) // use korte hobe must

 const {id} = useParams()
 console.log(id)

    useEffect(()=>{

        fetch('https://recipebook-clientside.vercel.app/addrecipes')
        .then(res=>res.json())
        .then(data => setValue(data))

    },[])
    console.log(value)
   const findCard = value.find((recipe)=> recipe._id == id)
   console.log (findCard)
      // Show loading or not found message
  if (!findCard) {
    return <div className="text-center mt-10 text-gray-500">Loading recipe details...</div>;
  }

  const {
    image,
    title,
    ingredients,
    instructions,
    cuisine,
    prepTime,
    categories,
    likeCount,
  } = findCard;
  // console.log(typeof likeCount) 
  const isWoner = user?.email === findCard.addedBy
const handleLikes =()=>{
  const updateLikes = parseInt(likeCount) + 1;
 

  const updateValue = value.map((item)=>item._id == id ? { ...item,likeCount : updateLikes} : item)
   setValue(updateValue)

    // Update backend
    fetch(`https://recipebook-clientside.vercel.app/addrecipes/${id}/like`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ likeCount: updateLikes }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Backend like updated with PATCH:', data);
      // ✅ Re-fetch to sync UI with DB
      fetch('https://recipebook-clientside.vercel.app/addrecipes')
        .then((res) => res.json())
        .then((data) => setValue(data));
    });
  };


    


   return (
<>

<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
    <h1 className=' text-2xl bg-blue-500 p-2 rounded-2xl text-white mb-4 animate-bounce'> {likeCount} people interested in this recipe </h1>
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
      Recipe Details
    </h1>

    <div className="max-w-sm w-full rounded-2xl shadow-lg overflow-hidden border p-4 bg-white">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl mb-4" />
      <div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Ingredients:</strong> {ingredients}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Instructions:</strong> {instructions}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Cuisine:</strong> {cuisine || "N/A"}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Preparation Time:</strong> {prepTime || "?"} min
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Categories:</strong>{" "}
          {Array.isArray(categories) ? categories.join(", ") : categories}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-green-600">❤️ {likeCount || 0} Likes</span>
          <button disabled = {isWoner} onClick={handleLikes} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
            Like
          </button>
        </div>
      </div>
    </div>
    <h1 className='mt-20'> Get Back To <Link className=' font-bold   border-b-2 ' to={'/'}> Home</Link></h1>
  </div>
</>
  
);

};

export default CardDetails;