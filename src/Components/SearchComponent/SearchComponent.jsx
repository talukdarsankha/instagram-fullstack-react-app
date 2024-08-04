
import React from 'react'
import SearchComponentCard from './SearchComponentCard'

import "./SearchComponent.css"
import { searchUserAction } from '../../Redux/Search/Action';
import { useDispatch, useSelector } from 'react-redux';

function SearchComponent() {

  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  const {search} = useSelector(store=>store)

  const handleSearch =(e)=>{
     const searchQuery = e.target.value;
     const data = {
        token:token,
        searchQuery:searchQuery
     } 
 
     dispatch(searchUserAction(data));

  }

  return (
    <div className='searchContainer overflow-scroll border-l-2 w-full'>
       <div className='px-3 py-5'>
           <h1 className='text-xl font-bold mb-3'>Search</h1>

           <input onChange={(e)=> handleSearch(e)} className='searchInput' type="text" placeholder='Search here.....' />
       </div>
       <hr />


       <div className='px-3 py-5'>
         {search?.searchUser?.map((item, i)=>(<SearchComponentCard key={i} obj={item} />))}
         {search?.searchUser?.length<=0 && <p className='text-gray-400 opacity-70'>No search Item Found...</p>}
       </div>
    </div>
  )
}

export default SearchComponent
