import React from 'react';


    import {
  createBrowserRouter,
  
} from "react-router";
import Home from '../Component/Home';
import Root from '../pages/Root';
import Register from '../pages/Register';
import Login from '../pages/Login';
import AuthProvider from '../AuthProvider/AuthProvider';
import Allrecipe from '../pages/Allrecipe';
import PrivateRoute from '../AuthProvider/PrivateRoute';
import AddMyrecipe from '../pages/AddMyrecipe';
import CardDetails from '../pages/CardDetails';
import MyRecipe from '../pages/MyRecipe';
import Notfound from '../pages/Notfound';


 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, Component : Home },
      { path: "/register", Component:Register  },
      {
        path: "/login",
        Component : Login,
      },
      
      {
        path: "/addmyrecipe",
        element : <PrivateRoute><AddMyrecipe></AddMyrecipe></PrivateRoute> 
      },
      {
        path:"/allrecipe",
        loader: async () => {
    return fetch("https://recipebook-clientside.vercel.app/addrecipes")
      .then(res => res.json());
  },
        element: <Allrecipe></Allrecipe>

      },
      {
    path: "/recipedetails/:id",
    element: <PrivateRoute> <CardDetails></CardDetails></PrivateRoute>
  },
  {
    path:"/myrecipe",
    element: <PrivateRoute> <MyRecipe></MyRecipe> </PrivateRoute> 
  }
    ]},
  
  {
    path:'/*',
    element :<Notfound></Notfound>
  }
]);


