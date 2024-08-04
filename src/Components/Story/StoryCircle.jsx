

import React from 'react'

import "./Scrollbar.css"
import { useNavigate } from 'react-router'

function StoryCircle() {

  const navigate = useNavigate();

  return (
    <div onClick={()=>{navigate(`story/${1}`)}} className='flex flex-col items-center cursor-pointer'>
         <img className='w-16 h-16 rounded-full' src="https://img.freepik.com/free-photo/graceful-long-haired-ginger-girl-looking-shoulder-laughing-pretty-woman-beret-enjoying-walk_197531-11739.jpg?t=st=1718121896~exp=1718125496~hmac=1a3f652d16e1f609afda7070e9c578762454f3c89ce06410b0a6f5b576f91469&w=826" alt="story" />
         <p className='text-sm opacity-70 font-semibold'>Username</p>
    </div>
  )
}

export default StoryCircle
