import React, { useEffect, useState } from "react";
import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { RiVideoAddLine } from "react-icons/ri";
import RequestUserPostCard from "./RequestUserPostCard";
import { useDispatch, useSelector } from "react-redux";
import { getProfileUserAllPosts } from "../../Redux/Post/PostAction";

function RequestUserPostSetion({userObj}) {
  const tabs = [
    {
      tab: "Posts",
      icon: <AiOutlineTable />,
    },
    {
      tab: "Reels",
      icon: <RiVideoAddLine />,
    },
    {
      tab: "Taged",
      icon: <AiOutlineUser />,
    },
    {
      tab: "Saved",
      icon: <BiBookmark />,
    },
  ];

  const [activeTab, setActiveTab] = useState("Posts");

  const handleTab = (item) => {
    setActiveTab(item.tab);
  };

  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  const {post} = useSelector(store=>store);

  useEffect(()=>{
    if(userObj){
      const data={
        token:token,
        profileId:userObj?.id
      }

      dispatch(getProfileUserAllPosts(data))
    }
  },[userObj])

  return (
    <div>
      <div className="relative flex space-x-7 justify-start text-sm">
        {tabs.map((item, i) => (
          <div
            onClick={() => handleTab(item)}
            key={i}
            className={`${
              activeTab === item.tab
                ? "bg-gray-200 border-t-2 border-t-black font-semibold rounded-b-md"
                : "opacity-75"
            } cursor-pointer py-2 flex space-x-2 items-center  px-4`}
          >
            <p>{item.icon}</p>
            <p>{item.tab}</p>
          </div>
        ))}
      </div>

      
     {
      activeTab === "Posts"?(<div className="flex flex-wrap w-full">
        {post?.profileUserAllPosts.length>0 && post?.profileUserAllPosts.map((item,i)=>(<RequestUserPostCard key={i} postObj={item}/>))}
      </div>):(
        <div className="flex items-center justify-center h-20">
          <p className="text-2xl font-bold opacity-70 text-gray-500">No Content Found!!!</p>
        </div>
      )
     }




    </div>
  );
}

export default RequestUserPostSetion;
