

import { type } from "@testing-library/user-event/dist/type";
import { BASE_URL } from "../../Config/util";
import { ALL_FOLLOWED_USERS, GET_USER_BY_USEENAME, REQ_USER, REQ_USER_PROFILE_PHOTO_UPDATE, REQ_USER_PROFILE_UPDATE, SAVE_POST } from "./ActionType";

export const getUserByToken = (jwt) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:8080/api/user/req", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwt,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const user = await res.json();
    dispatch({ type: REQ_USER, payload: user });
  } catch (error) {
    console.error("Failed to fetch user by token:", error);
  }
};


export  const updateReqUserProfilePhoto =(data)=> async (dispatch)=>{
    try {
      const res = await fetch(`${BASE_URL}/api/user/account/edit`,{
        method:"PUT",
        headers:{
          "Content-Type": "application/json",
          Authorization:"Bearer "+data.token
        },
        body:JSON.stringify(data.data)
      })

      const user = await res.json();
       
      dispatch({type:REQ_USER_PROFILE_PHOTO_UPDATE,payload:user});

    } catch (error) {
      console.log(error);
    }
}


export const updateReqUserProfile =(data)=> async (dispatch)=>{
  try {
    const res = await fetch(`${BASE_URL}/api/user/account/edit`,{
      method:"PUT",
      headers:{
        "Content-Type": "application/json",
        Authorization:"Bearer "+data.token
      },
      body:JSON.stringify(data.data)
    })

    const user = await res.json();
     
    dispatch({type:REQ_USER_PROFILE_UPDATE,payload:user});

  } catch (error) {
    console.log(error);
  }
}


export const getUserByUsername =(data)=> async (dispatch)=>{
   try {
     const res = await fetch(`${BASE_URL}/api/user/getUser/${data.username}`,{
      method:"GET",
      headers:{
        "Content-Type": "application/json",
        Authorization:"Bearer "+data.token
      }
     })

     const user = await res.json();

     dispatch({type:GET_USER_BY_USEENAME,payload:user});

   } catch (error) {
    console.log(error);
   }
}


export const savePost=(data)=> async (dispatch)=>{
  try {
      const res = await fetch(`${BASE_URL}/api/user/savepost/${data.postId}`,{
        method:"PUT",
        headers:{
          "Content-Type": "application/json",
          Authorization:"Bearer "+data.token
        }
      })

      const user = await res.json();

      dispatch({type:SAVE_POST,payload:user});

  } catch (error) {
      console.log(error);
  }
}


export const unsavePost=(data)=> async (dispatch)=>{
  try {
      const res = await fetch(`${BASE_URL}/api/user/unsavepost/${data.postId}`,{
        method:"PUT",
        headers:{
          "Content-Type": "application/json",
          Authorization:"Bearer "+data.token
        }
      })

      const user = await res.json();

      dispatch({type:SAVE_POST,payload:user});

  } catch (error) {
      console.log(error);
  }
}





