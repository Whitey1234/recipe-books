import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
// import DarkModeToggle from "./DarkModeToggle";
import ThemeToggle from "./Extra/ThemeToggle";

const Header = () => {
    const {user,logout} = use(AuthContext)
    const handleLogoutClick = ()=>{
        logout()
    }
    
  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">All Recipes</Link></li>
            <li><Link to="/">Add Recipe</Link></li>
            <li><Link to="/">My Recipes</Link></li>
          </ul>
        </div>
        <Link to="/" className="text-xl font-bold text-primary">Recipe Book</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link className=" text-blue-700" to="/">Home</Link></li>
          <li><Link className=" text-blue-700" to="/allrecipe">All Recipes</Link></li>
          <li><Link className=" text-blue-700" to="/addmyrecipe">Add My Recipe</Link></li>
          <li><Link className=" text-blue-700" to="/myrecipe">My Recipes</Link></li>
        </ul>
      </div>

      <div className="navbar-end space-x-4">
        <button> <ThemeToggle className=" text-blue-700"></ThemeToggle> </button>
                    {
                      user ? <Link onClick={handleLogoutClick} to={'/'} className="btn btn-outline btn-sm text-blue-700"> Logout </Link> :  <Link to="/login" className="btn btn-outline btn-sm text-blue-700">Login</Link> 
                    }
                    
       {
        user ? "" : <Link to="/register" className="btn btn-outline btn-sm text-blue-700">Register</Link>
       }

       
        {
            user ? <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1"><div className="avatar">
          <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
           
            <img src= {user.photoURL
} alt="Profile" />
          </div>
        </div>  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li>{user.displayName }</li>
    <li>{user.email}</li>
  </ul>
</div>   : ""
        }
       
      </div>
    </div>
  );
};

export default Header;