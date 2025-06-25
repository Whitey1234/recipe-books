import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const TopRecipe = () => {
    const [topRecipe,setTopRecipe] = useState([])
    useEffect(()=>{
  fetch('https://recipebook-clientside.vercel.app/top-recipe')
  .then(res => res.json())
  .then(data =>setTopRecipe(data)  )


    },[])
    //console.log(topRecipe)
    return (
        <>
        <h1 className=' text-center text-4xl font-bold my-8  p-2 mx-6 text-blue-700 border-b-2  '> {topRecipe.length}  Top Recipes </h1>

         <div className='grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>

           {
            
            topRecipe.map((item)=>(
                <div className=''>
                     <div key={item._id} className="card bg-base-100 w-96 shadow-sm">
  {/* Image Section */}
  <figure className="px-10 pt-10">
    <img 
      src={item.image} 
      alt={item.title || "Recipe image"} 
      className="rounded-xl w-full h-48 object-cover" 
    />
  </figure>

  {/* Content Section */}
  <div className="card-body items-center text-center space-y-2">
    {/* Title */}
    <h2 className="card-title text-lg font-bold">
      {item.title}
    </h2>
    
    {/* Categories */}
    <div className="flex flex-wrap justify-center gap-2">
      <span className="badge badge-primary">
        {item.categories}
      </span>
      <span className="badge badge-secondary">
        {item.cuisine}
      </span>
    </div>
    
    {/* Metadata */}
    <div className="text-sm text-gray-600">
      <p className=' font-bold text-green-600 text-xl'> Like: {item.likeCount}</p>
    </div>
    
    {/* Action Button */}
    <div className="card-actions mt-4">
        <Link to={`/recipedetails/${item._id}`}>
      <button className="btn btn-primary btn-sm">
        See Details
      </button>
        </Link>
     
    </div>
  </div>
</div>
                </div>
                
            ))
           }

        </div>

     <div className='flex justify-center mt-8'>
        <Link to={'/allrecipe'}>
        <button className='btn  bg-blue-700  text-white'> See All</button>
        </Link>

 
     </div>
       
        
        </>
    
       
        
    );
};

export default TopRecipe;