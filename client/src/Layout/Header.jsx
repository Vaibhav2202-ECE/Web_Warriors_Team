import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <div className="relative pt-20 text-white bg-primary">
      {/* creating the bottom part of drawer */}
      {/* if user is not logged in */}
      {!isLoggedIn && (
        <div className="flex justify-end bottom-6 absolute text-white w-[20%] right-0">
          <div className="w-full text-white flex items-center justify-center ">
          <button className="px-4 py-1 font-semibold rounded-md w-full bg-white text-black">
         <Link to={"/login"}>Login</Link>
         </button>
            <button className="px-2"></button> {/* Space */}
            <button className="px-4 py-1 font-semibold rounded-md w-full bg-white text-black ">
              <Link to={"/signup"}>Signup</Link>
            </button>
          </div>
        </div>
      )}

      {/* if user is logged in */}
      {isLoggedIn && (
        <div className="absolute bottom-4 right-3.5">
          <div className="flex items-center justify-center">
            <button className="btn-primary px-4 py-0.5 font-semibold rounded-md">
              <Link to={"/user/profile"}>Profile</Link>
            </button>
            <button className="btn-secondary px-4 py-0.5 font-semibold rounded-md ml-4">
              <Link onClick={handleLogout}>Logout</Link>
            </button>
          </div>
        </div>
      )}
   </div>
  );
}

export default Navbar;
