


import React from 'react'

function SearchComponentCard({obj}) {
  return (
    <div className='mx-1 my-2 p-2 border-2 rounded-md'>
        <div className='flex items-center justify-start space-x-3'>
            <div>
                <img className='w-10 h-10 rounded-full' src={obj?.image || "https://images.pexels.com/photos/1212693/pexels-photo-1212693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="serch user" />
            </div>

            <div>
                <p>{obj?.name}</p>
                <p>{obj?.username}</p>
            </div>
        </div>
    </div>
  )
}

export default SearchComponentCard
