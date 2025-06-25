import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import './tootstyle.css';


const MyComponent = () => {
  return (
    <div>
      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Hello world!"
        data-tooltip-place="top"
      >
        ◕‿‿◕
      </a>
      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Hello to you too!"
      >
        ◕‿‿◕
      </a>

      <div className="App text-2xl py-4 text-center">
        <Typewriter words={['Awesome ', 'Platform', 'Book', 'Recipe!']} />
       <Tooltip
  id="my-tooltip"
  variant="light" // Optional: use preset variants
  style={{
    backgroundColor: '#0f172a',        // Tailwind slate-900
    color: '#f1f5f9',                  // Tailwind slate-100
    padding: '10px 12px',
    borderRadius: '0.5rem',
    fontWeight: '500',
    zIndex: 9999
  }}
/>
      </div>
    </div>
  );
};

export default MyComponent;
