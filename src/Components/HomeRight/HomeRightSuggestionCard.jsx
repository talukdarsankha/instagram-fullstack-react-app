import React from "react";

function HomeRightSuggestionCard({userOgj}) {
  return (
    <div className="w-full p-3 flex justify-between items-center border -border-1 rounded-md shadow-md">
      <div className="flex space-x-3">
        <div>
          <img
            className="w-12 h-12 rounded-full"
            src={userOgj?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
            alt="userImg"
          />
        </div>

        <div>
          <p className="font-semibold">{userOgj?.name}</p>
          <p className="font-thin font-semibold opacity-75">{userOgj?.username}</p>
        </div>
      </div>

      <p className="text-blue-600 font-semibold cursor-pointer">Follow</p>
    </div>
  );
}

export default HomeRightSuggestionCard;
