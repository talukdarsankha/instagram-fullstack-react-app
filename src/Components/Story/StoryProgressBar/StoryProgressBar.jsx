

import React, { useEffect, useState } from 'react';

import "./StoryProgressBar.css"

function StoryProgressBar({activeindex, index, duration}) {


    const [progress, setProgress ] = useState(0);

    const isActive = activeindex === index;

    useEffect(()=>{
      
      const interval = setInterval(()=>{
          setProgress((prevProgress)=>{
            if(prevProgress < 100){
              return prevProgress+1;
            }
            clearInterval(interval);
            return prevProgress;
          })
      },[duration/100])
      
      return ()=>clearInterval(interval);

    },[duration,activeindex])

    useEffect(()=>{
      setProgress(0);
    },[activeindex])

  return (
    <div className={`progressBar-container ${isActive?"active":""}`}>
        <div className={`${isActive?"pregress-bar":""}`} style={{width:`${progress}%`}}>

        </div>
      
    </div>
  )
}

export default StoryProgressBar
