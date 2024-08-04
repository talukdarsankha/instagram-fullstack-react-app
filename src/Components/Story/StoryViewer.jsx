


import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import StoryProgressBar from './StoryProgressBar/StoryProgressBar'


const StoryViewerContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: rgb(0 0 0);
`

const StoryImage = styled.img`
 max-height:90vh;
 object-fit:contain;
`

function StoryViewer({userStories}) {
    
    const [currentStoryIndex,setCurrentStoryIndex] = useState(0);
    const [activeIndex,setActiveIndex] = useState(0);


    const handleNextStory = ()=>{
        if(currentStoryIndex<userStories?.length-1){
            setCurrentStoryIndex(currentStoryIndex+1);
            setActiveIndex(activeIndex+1);
        }else{
            setCurrentStoryIndex(0);
            setActiveIndex(0);
        }
    }

    useEffect(()=>{
       const interval = setInterval(()=>{handleNextStory()},3000);
       return ()=>clearInterval(interval);
    },[currentStoryIndex])


  return (
    <div className=' relative w-full h-full'>
       <StoryViewerContainer>
           <StoryImage src={userStories[currentStoryIndex].image} />
       </StoryViewerContainer>

       <div className='flex w-full absolute top-0'>
          {userStories?.length>0 && userStories.map((item,i)=>(<StoryProgressBar activeindex={activeIndex} index={i} duration={3000} key={i}/>))}
       </div>
    </div>
  )
}

export default StoryViewer
