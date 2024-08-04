import React from "react";
import { Route, Routes, useLocation } from "react-router";

import "./auth.css";
import Login from "./Login";
import Register from "./Register";

function Auth() {
  const location = useLocation();

  return (
    <div>
      <div className="flex items-center justify-center h-[100vh] space-x-5">
        <div className="my-4 relative hidden lg:block">
          <div className="h-[35.3rem] w-[23rem]">
            <img
              className="w-full h-full"
              src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones-2x.png?__makehaste_cache_breaker=73SVAexZgBW"
              alt="instragram"
            />
          </div>

          <div className="mobile-wallpaper rounded-md h-[39rem] w-[13.1rem] absolute top-7 right-10"></div>
        </div>

        <div className="w-[70vw] lg:w-[30vw]">
          {location.pathname === "/signin" ? <Login /> : <Register />}

          {/* <Routes>
               <Route path="/signin"  />
             </Routes> */}
        </div>

        
      </div>
    </div>
  );
}

export default Auth;
