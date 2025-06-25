import React from 'react';
import MyComponenet from './MyComponenet';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const ChoosUS  = () => {
    return (
        <div>
          <a
  data-tooltip-id="my-tooltip"
  data-tooltip-content="RecipeBook"
  data-tooltip-place="top"
>
  ◕‿‿◕
</a>
<a data-tooltip-id="my-tooltip" data-tooltip-content=" What you needs ">
  ◕‿‿◕
</a>
          <MyComponenet> </MyComponenet> <div className='w-52 mx-auto'> <Tooltip className='text-center' id="my-tooltip" /> </div>
            <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Why Choose Recipe Book?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-base-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p>Simple interface to browse, add, and manage your recipes with ease.</p>
          </div>
          <div className="p-6 bg-base-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p>Explore recipes shared by food lovers just like you.</p>
          </div>
          <div className="p-6 bg-base-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Save Your Favorites</h3>
            <p>Bookmark recipes and create your personal cookbook.</p>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ChoosUS ;