

import React, { useState } from 'react'
import { IoReorderFour } from 'react-icons/io5'
import { SidebarMenu } from './SidebarValues'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux';
import SearchComponent from '../SearchComponent/SearchComponent';
import CreatePostModal from '../Post/CreatePostModal';
import { useDisclosure } from '@chakra-ui/react';

function Sidebar() {

  const navigate = useNavigate();
  const [activeTab,setActiveTab] = useState("");
  const {user} = useSelector(store=>store)

  const [isSearchVisible,setisSearchVisible] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleActiveTab=(item)=>{
    setActiveTab(item.title);

    if(item.title==="Home"){
      navigate("/");
    }else if(item.title==="Profile"){
      navigate(`/${user.reqUser?.username}`)
    } else if(item.title==="Create"){
      navigate(`${item.title}`)
      onOpen();
    }
    else{
      navigate(`${item.title}`)
    }

    if(item.title==="Search"){
       setisSearchVisible(true);
    }else{
      setisSearchVisible(false);
    }

  }

  return (
    <div className='sticky top-0 h-[100vh] flex '>

      <div className={`flex flex-col justify-between h-full ${activeTab==="Search"?"px-3":"px-10"} ` }>
            <div>
              
              {activeTab !="Search" && 
                (
                  <div className='pt-5'>
                  <img src="https://i.imgur.com/zqpwkLQ.png" alt="instagram logo" />
                </div>
                )
              }

               <div className='mt-5'>
                 {SidebarMenu.map((item)=>(
                  <div className={`flex items-center space-x-3 mb-5 cursor-pointer`}
                  onClick={()=>handleActiveTab(item)}
                  >
                        <div className='text-2xl'>
                          {activeTab===item.title? item.activeIcon: item.Icon}
                        </div>
                        
                        {activeTab != "Search" &&  (
                          <p className={activeTab===item.title?"font-bold text-xl": "font-semibold"}>{item.title}</p>
                        )}

                  </div>

                 ))}
               </div>
            </div>

            <div className='flex items-center cursor-pointer py-4 space-x-2'>
                <IoReorderFour className='text-2xl' />
               {activeTab !="Search" && ( <p>More</p>)}
            </div>

      </div>


      {isSearchVisible && <SearchComponent/>} 


      <CreatePostModal isOpen={isOpen} onClose={onClose}/>
      
    </div>
  )
}

export default Sidebar
