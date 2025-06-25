import React from 'react';
import "./style.css"
import Header from '../Component/Header';
import { Outlet } from 'react-router';
import { DarkModeProvider } from '@rbnd/react-dark-mode';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
            

            

        <DarkModeProvider>
            <Header></Header>
             <Outlet></Outlet>
             <Footer></Footer>
        </DarkModeProvider>
           

       
           
        </div>
    );
};

export default Root;