import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
import Booking from './Pages/Booking'; 
import Rev from './Pages/Rev'; 
import Admin from './Pages/Admin'

import Signup from "./Pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/signup" element={<Signup />} />
         
         <Route path="/booking" element={<Booking />} />
        {/* Use the Rev component */}
        
        <Route path="/rev" element={<Rev />} />
        
        <Route path="/admin" element={<Admin />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
