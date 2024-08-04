


import { AiFillBell, AiFillCompass, AiFillGift, AiFillHome, AiFillMessage, AiFillNotification, AiFillPlusCircle, AiOutlineBell, AiOutlineCompass, AiOutlineHome, AiOutlineMessage, AiOutlineNotification, AiOutlinePlusCircle, AiOutlineSearch } from "react-icons/ai";
import { BiUser, BiUserCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaCircleUser } from "react-icons/fa6";
import { RiVideoAddFill, RiVideoAddLine } from "react-icons/ri";


export const SidebarMenu = [
     {
        title:"Home",
        Icon:<AiOutlineHome/>,
        activeIcon:<AiFillHome/>

     },
     {
        title:"Search",
        Icon:<AiOutlineSearch/>,
        activeIcon:<AiOutlineSearch/>
     },
     {
        title:"Explore",
        Icon:<AiOutlineCompass/>,
        activeIcon:<AiFillCompass/>
     },
     {
        title:"Reels",
        Icon:<RiVideoAddLine/>,
        activeIcon:<RiVideoAddFill/>
     },
     {
        title:"Message",
        Icon:<AiOutlineMessage/>,
        activeIcon:<AiFillMessage/>

     },
     {
        title:"Notifications",
        Icon:<AiOutlineBell/>,
        activeIcon:<AiFillBell/>

     },
     {
        title:"Create",
        Icon:<AiOutlinePlusCircle/>,
        activeIcon:<AiFillPlusCircle/>
     },
     {
        title:"Profile",
        Icon:<CgProfile/>,
        activeIcon:<FaCircleUser/>
     }

]

