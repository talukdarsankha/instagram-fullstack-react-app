import React from "react";
import { Route, Routes, useLocation } from "react-router";
import Auth from "./Auth/Auth";
import Sidebar from "../Components/Sidebar/Sidebar";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import EditProfile from "./Profile/EditProfile";
import StoryPage from "./Story/StoryPage";

function Router() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/signin" && location.pathname !== "/signup" ? (
        <div className="flex">
           <div className="w-[30%] border border-2">
               <Sidebar/>
           </div>

           <div className="w-full border border-red-700">
                <Routes>
                   <Route path="/" element={<Home/>}></Route>
                   <Route path="/create" element={<Home/>}></Route>
                   <Route path="/:username" element={<Profile/>}></Route>
                   <Route path="/account/edit" element={<EditProfile/>}></Route>
                   <Route path="/post/:postId" element={<Home/>}></Route>
                   <Route path="/story/:userId" element={<StoryPage/>}></Route>
                   
                </Routes>
           </div>

        </div>
      ) : (
        <div>
          <Auth />
        </div>
      )}
    </div>
  );
}

export default Router;
