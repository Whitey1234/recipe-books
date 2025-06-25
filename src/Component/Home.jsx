import React from 'react';
import { Link } from 'react-router';
import ChoosUS from './Extra/ChoosUS ';
import TopRecipe from '../pages/TopRecipe';

const Home = () => {
    return (
        //.........banner ............
        <div>
        <div className="hero min-h-[70vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Delicious food"
        />
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Welcome to Recipe Book</h1>
          <p className="py-6 text-gray-600">
            Discover, cook, and share your favorite recipes with the world. Start your culinary journey today!
          </p>
          <Link to="/allrecipe" className="btn btn-primary">Browse Recipes</Link>
        </div>
      </div>
    </div>


    {/* top section  */}
    <TopRecipe></TopRecipe>

    <ChoosUS></ChoosUS>
    <ChoosUS></ChoosUS>
        </div>
    );
};

export default Home;