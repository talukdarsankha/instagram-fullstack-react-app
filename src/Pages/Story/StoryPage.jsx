

import React from 'react'
import StoryViewer from '../../Components/Story/StoryViewer'


const stories = [
    {image:"http://res.cloudinary.com/doa7jctor/image/upload/v1721555713/j5iez9hicsslzqitkulr.jpg"},
    {image:"http://res.cloudinary.com/doa7jctor/image/upload/v1721553719/z2mjfssofo7gr8pqfomq.avif"},
    {image:"http://res.cloudinary.com/doa7jctor/image/upload/v1721553417/caedt6y1i92cuc0xk2f6.jpg"},
    {image:"http://res.cloudinary.com/doa7jctor/image/upload/v1721552969/vqh2xko45l5ajwwzbqia.jpg"},
    {image:"https://images.stockcake.com/public/e/6/b/e6b86e0c-0075-4b34-b56d-f4f8735d051e_large/crystal-light-prism-stockcake.jpg"}
]

function StoryPage() {
    
  return (
    <div>
        <StoryViewer userStories={stories} />
    </div>
  )
}

export default StoryPage
