import React from 'react';
import { Link } from 'react-router';

const   AllCard = ({cardData}) => {
    console.log(cardData)
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  {/* Image Section */}
  <figure className="px-10 pt-10">
    <img 
      src={cardData.image} 
      alt={cardData.title || "Recipe image"} 
      className="rounded-xl w-full h-48 object-cover" 
    />
  </figure>

  {/* Content Section */}
  <div className="card-body items-center text-center space-y-2">
    {/* Title */}
    <h2 className="card-title text-lg font-bold">
      {cardData.title}
    </h2>
    
    {/* Categories */}
    <div className="flex flex-wrap justify-center gap-2">
      <span className="badge badge-primary">
        {cardData.categories}
      </span>
      <span className="badge badge-secondary">
        {cardData.cuisine}
      </span>
    </div>
    
    {/* Metadata */}
    <div className="text-sm text-gray-600">
      <p className=' font-bold text-green-600 text-xl'> Like: {cardData.likeCount}</p>
    </div>
    
    {/* Action Button */}
    <div className="card-actions mt-4">
        <Link to={`/recipedetails/${cardData._id}`}>
      <button className="btn btn-primary btn-sm">
        See Details
      </button>
        </Link>
     
    </div>
  </div>
</div>
    );
};

export default AllCard;