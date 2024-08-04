


import React, { useEffect } from 'react'
import ProfileDetails from '../../Components/PofileComponent/ProfileDetails'
import RequestUserPostSetion from '../../Components/PofileComponent/RequestUserPostSetion'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByUsername } from '../../Redux/User/Action';
import { isReqUserCheck } from '../../Config/Logis';

function Profile() {

  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  const {user} = useSelector(store=>store)

  const {username} = useParams();



  useEffect(()=>{
    if(username){
      const data={
        token:token,
        username:username
      }
      
      dispatch(getUserByUsername(data));
    }
  },[username])


  const isLoginUser = isReqUserCheck(user?.reqUser?.id, user?.getUserByUsername?.id) 

  return (
    <div className='px-12'>
        <div>
             <ProfileDetails userObj={isLoginUser?user.reqUser:user.getUserByUsername}/>
        </div>
       
        <div>
            <RequestUserPostSetion userObj={isLoginUser?user.reqUser:user.getUserByUsername} />
        </div>
    </div>
  )
}

export default Profile
