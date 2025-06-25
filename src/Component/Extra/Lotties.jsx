import React from 'react';
//import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";

const Lotties = () => {
    
    return (
        <div>
            <Lottie animationData={groovyWalkAnimation} loop={true} />;
        </div>
    );
};

export default Lotties;