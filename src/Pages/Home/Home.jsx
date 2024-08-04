

import React, { useEffect, useState } from 'react'
import StoryCircle from '../../Components/Story/StoryCircle'
import PostCard from '../../Components/Post/PostCard'
import HomeRight from '../../Components/HomeRight/HomeRight'
import { useDispatch, useSelector } from 'react-redux';
import { allFollowedUsers, getUserByToken } from '../../Redux/User/Action';
import { getAllFollowingUserPosts } from '../../Redux/Post/PostAction';

function Home() {

  const jwt = localStorage.getItem("token");
   
  const [userIdList,setUserIdList] = useState([]);

  const dispatch = useDispatch();
  const {user,post} = useSelector(store=>store);

  useEffect(()=>{
      if(jwt){
        dispatch(getUserByToken(jwt))
      }
  },[jwt, user.savePostUser, user.unsavePostUser])

   useEffect(()=>{
      if(user.reqUser){
         const newIdList = user.reqUser?.followings?.map((item)=>item.id) || [];
         setUserIdList([user.reqUser?.id, ...newIdList]);
      }
   },[user.reqUser, post.likePost, post.unLikePost]);


   useEffect(()=>{
      if(userIdList.length>0 && jwt){

        const data = {
          token:jwt,
          userIdList
        }
         dispatch(getAllFollowingUserPosts(data));
      }
   },[userIdList,post.createPost, post.likePost, post.unLikePost, post.getPostById])



  return (
    <div className='flex w-full justify-center py-10 '>
 

            <div className='w-[50%]'>

                <div className='flex space-x-3  p-4 px-5 overflow-x-scroll rounded-md justify-start border border-gray-600 rounded-md shadow-md'>
                        {[1,1,1,1,1,1,1,1].map(()=><StoryCircle/>)}
                </div>

                <div className=' py-3'>
                    {post.allFollwingUserPost.length>0 && post.allFollwingUserPost.map((item ,i)=>
                    <PostCard key={i} postObj={item}/>)}
                </div>
            </div>



       <div className='w-[35%] ml-5 p-5 border border-2 rounded-md max-h-[70vh] overflow-y-scroll'>
         <HomeRight/>
       </div>
       
    </div>
  )
}

export default Home

