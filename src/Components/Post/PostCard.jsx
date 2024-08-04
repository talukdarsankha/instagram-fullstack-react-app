


import React, { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineComment, AiOutlineHeart, AiOutlinePaperClip } from 'react-icons/ai';
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import { GiAirplaneDeparture } from 'react-icons/gi';
import { RiSendPlaneLine } from 'react-icons/ri';

import "./PostCard.css"
import CommentModal from '../CommentModal/CommentModal';
import { useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { isPostLiked, isPostSaved, timeDifferendde } from '../../Config/Logis';
import { likePost, unlikePost } from '../../Redux/Post/PostAction';
import { savePost, unsavePost } from '../../Redux/User/Action';

function PostCard({postObj}) {

    const [like, setLike] = useState(false);
    const [bookmark, setBookmark] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const dispatch = useDispatch();

    const {user,post} = useSelector(store=>store);

    const token = localStorage.getItem("token");

    const data = {
       token:token,
       postId:postObj?.id
    }

    const handleCommentModalOpen=()=>{
        navigate(`/post/${postObj?.id}`)
        onOpen()
    }

    const handlePostLike=()=>{

       dispatch(likePost(data));
    
       
    }

    const handlePostUnLike=()=>{
        dispatch(unlikePost(data));
    }

    const handlePostSave=()=>{
        // setBookmark(true);
       dispatch(savePost(data));
    }

    const handlePostUnsave=()=>{
        dispatch(unsavePost(data));

    }

    const { isOpen, onOpen, onClose } = useDisclosure();

    const navigate = useNavigate();

    

    useEffect(()=>{
      if(postObj && user.reqUser){
        setLike(isPostLiked(user?.reqUser?.id, postObj))
        setBookmark(isPostSaved(user?.reqUser,postObj?.id))
      }
    },[postObj, user.reqUser, user.savePostUser, user.unsavePostUser])

  return (
    <div className='w-full mb-6 shadow-md'>
       <div className='border rounded-md w-full'>
       
        <div className='flex justify-between items-center w-full py-4 px-5'>
            <div className='flex justify-center items-center'>
                <div>
                    <img className='w-10 h-10 rounded-full' src={postObj.user?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="user" />
                </div>
                <div className='ml-2'>
                   <p className='text-sm font-semibold'>{postObj.user?.name}</p>
                   <p className='text-sm opacity-80 font-medium '>{timeDifferendde(postObj?.createdAt)}</p>
                </div>
            </div>

            <div className='dropdown'>
               <BsThreeDots onClick={()=>{setShowDropdown(!showDropdown)}} className='dots'/>
                 <div className='dropdownContent'>
                     {showDropdown && <p className='bg-black rounded-md p-2 text-white cursor-pointer'>Delete</p>
                     }
                 </div>
            </div>
        </div>

        <div className='flex justify-start items-center px-6 py-3'>
            {postObj?.caption}
        </div>

       {postObj.image && 
        <div className='w-full'>
           {/* <img className='w-full h-full' src={postObj.image || "https://via.placeholder.com/150"} alt="postImg" /> */}

           <img className='w-full h-full' src={postObj.image} alt="postImg" />
        </div>
        }

        <div className='flex justify-between items-center w-full p-4'>
            <div className='flex space-x-2 items-center p-3'>
                 {like ? <AiFillHeart onClick={handlePostUnLike} className='text-2xl text-red-600'/>: <AiOutlineHeart onClick={handlePostLike} className='text-2xl'/>}

                 <AiOutlineComment onClick={handleCommentModalOpen} className='text-2xl'/>
                 <RiSendPlaneLine className='text-2xl' />
                
            </div>

            <div>
                {bookmark?<BsBookmarkFill onClick={handlePostUnsave} className='text-2xl'/>:<BsBookmark onClick={handlePostSave} className='text-2xl'/>}
            </div>
        </div>


        <div className='flex space-x-3 items-center w-full pb-3 px-4'>
            <p className='font-medium'>{postObj?.likedUsers.length}  Likes</p>
            <p className='font-medium'>{postObj?.postComment.length}  Comments</p>
        </div>

        <div className='flex items-center w-full p-4 space-x-3'>
            <BsEmojiSmile className='text-2xl'/>
            <input onClick={()=>onOpen()} type="text" className='commentInput w-auto' placeholder='Create a Comment .......' />
        </div>
         
       </div>


       <CommentModal isopen={isOpen} onclose={onClose} postObj={postObj} handlelike={handlePostLike}
       handleunlike={handlePostUnLike} islikepost={like} handlesave={handlePostSave} handleunsave={handlePostUnsave} issaved={bookmark} />
    </div>
  )
} 

export default PostCard

