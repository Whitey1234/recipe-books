import React from 'react';
import Lotties from './Lotties';

const JoinUS = () => {
    return (
        <div>
          <Lotties></Lotties>
               <section className="py-16 bg-primary text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Recipe Community</h2>
        <p className="mb-6 text-lg">
          Share your cooking ideas, explore new dishes, and connect with fellow food lovers.
        </p>
        <button className="btn btn-accent">Get Started</button>
      </div>
    </section>
        </div>
    );
};

export default JoinUS;