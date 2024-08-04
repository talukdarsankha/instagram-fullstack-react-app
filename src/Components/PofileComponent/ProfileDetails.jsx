

import React from 'react'
import { TbCircleDashed } from 'react-icons/tb'
import { TiRssOutline } from 'react-icons/ti'
import { useNavigate } from 'react-router'
import { isFollowedByReqUser, isReqUserCheck } from '../../Config/Logis';
import { useSelector } from 'react-redux';
import { Button } from '@chakra-ui/react';

function ProfileDetails({userObj}) {

  const navigate = useNavigate();

  const {user} = useSelector(store=>store);

  const isLoginUser = isReqUserCheck(user.reqUser?.id, userObj?.id)
  
  return (
    <div className='py-7 px-3 mt-3 flex  w-full border border-2 rounded-md'>
        <div className='w-[25%]'>
            <img className='w-36 h-36 rounded-full' src={userObj?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="" />
        </div>

        <div className='w-full space-y-4 px-3 py-1'>
            <div className='flex items-center space-x-3 pl-6'>
                 <p className='font-semibold opacity-70'>{userObj?.username}</p>
                 
                 {isLoginUser && <p className='font-semibold cursor-pointer' onClick={()=>(navigate("/account/edit"))}>Edit Profile</p>}
                
                 {isFollowedByReqUser(user?.reqUser,userObj?.id) && <Button>Following</Button>}

                 <TbCircleDashed className='text-2xl' />
            </div>

            <div className='flex space-x-4 items-center'>
                <div className='font-semibold'>
                  <span className='mr-1'>10</span>
                  <span >Posts</span>
                </div> 

                <div className='font-semibold'>
                  <span className='mr-1'>{userObj?.followings?.length}</span>
                  <span >{userObj?.followings?.length>0?"Followings":"Following"}</span>
                </div> 


                <div className='font-semibold'>
                  <span className='mr-1'>{userObj?.followers?.length}</span>
                  <span >{userObj?.followers?.length>0?"Followers":"Follower"}</span>
                </div> 
            </div>

            <div className='space-y-1 text-start'>
                 <p className='font-semibold'>{userObj?.name}</p>
                 <p className='opacity-75'>{userObj?.username}</p>
                 <p className='font-thin'>
                  {userObj?.bio}
                 </p>
            </div>   
        </div>
    </div>
  )
}

export default ProfileDetails


