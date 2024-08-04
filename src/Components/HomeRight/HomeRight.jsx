

import React from 'react'
import HomeRightSuggestionCard from './HomeRightSuggestionCard'
import { useSelector } from 'react-redux'

function HomeRight() {

  const {user} = useSelector(store=>store);


  return (
    <div>
        <div className='h-full'>
              <div className='flex justify-between items-center p-3 border-b-4'>
                   <div className='flex space-x-2 items-center'>
                       <div>
                       <img className='w-14 h-14 rounded-full' src={ user.reqUser?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="profileImg" />
                       </div>

                       <div>
                         <p className='font-bold'>{user.reqUser?.name}</p>
                         <p className='font-thin font-semibold opacity-75'>{user.reqUser?.username}</p>
                       </div>

                    </div> 

                    <div className='p-3 shadow-lg border-2 rounded-full cursor-pointer'>
                        <p>Switch</p>
                    </div>
              </div>


              <div className='space-y-4 my-3 overflow-y-scroll'>
                {user?.reqUser?.followings.length>0 && user?.reqUser?.followings.map((item,i)=>(<HomeRightSuggestionCard key={i} userOgj={item}/>))}

              </div>
        </div>
    </div>
  )
}

export default HomeRight
