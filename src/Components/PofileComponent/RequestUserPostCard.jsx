


import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'

import "./RequestUserPostCard.css"


function RequestUserPostCard({postObj}) {
  return (
    <div className='p-0.5'>
        <div className='w-64 h-64 post'>
            <img className='cursor-pointer' src={ postObj?.image || "https://img.freepik.com/premium-photo/green-trees-lake-nature-background-realistic-photography-ai-generated-picture_856480-3535.jpg?w=740"} alt="postImg" />

           <div className='overlay flex justify-center items-center'>
              <div className='overflow-text w-[35%] flex space-x-1 justify-between items-center'>
                  <div> <AiFillHeart/><span>{postObj?.likedUsers.length}</span></div>
                  <div> <FaComment/> <span>{postObj?.postComment.length}</span></div>
              </div>
           </div>

        </div>
    </div>
  )
}

export default RequestUserPostCard


