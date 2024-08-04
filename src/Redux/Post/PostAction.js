import { type } from "@testing-library/user-event/dist/type";
import { BASE_URL } from "../../Config/util"
import { CREATE_NEW_POST, GET_ALL_FOLLOING_USERPOST, GET_POST, GET_POST_BY_ID, LIKE_POST, PROFILE_USER_ALL_POSTS, UNLIKE_POST } from "./ActionType";



export const createPost=(data)=> async (dispatch)=>{

    try {
         const res = await fetch(`${BASE_URL}/api/post/create`,{
            method:"POST",
            headers:({
                "Content-Type":"application/json",
                Authorization:"Bearer "+data.token
            }),
            body:JSON.stringify(data.data)
         })

         if(res){
            const user = await res.json();
            dispatch({type:CREATE_NEW_POST,payload:user});
            return true;
         }
         return false;

    } catch (error) {
        console.log(error)
    }


}




export const getAllFollowingUserPosts =(data)=> async (dispatch)=>{
       try {
          const res = await fetch(`${BASE_URL}/api/post/followUserPost/${data.userIdList}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer "+data.token
            }
          })

          const allPosts = await res.json();
          dispatch({type:GET_ALL_FOLLOING_USERPOST,payload:allPosts});

       } catch (error) {
          console.log(error);
       }
}


export const getProfileUserAllPosts=(data)=> async (dispatch)=>{
    try {
        const res = await fetch(`${BASE_URL}/api/post/profileUserPosts/${data.profileId}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer "+data.token
            }
        })

        const allPosts = await res.json();

        dispatch({type:"PROFILE_USER_ALL_POSTS",payload:allPosts});

    } catch (error) {
        console.log(error);
    }
}


export const likePost=(data)=> async (dispatch)=>{
  try {
    const res = await fetch(`${BASE_URL}/api/post/like/${data.postId}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            Authorization:"Bearer "+data.token
        }
    })

    const post = await res.json();
    
    dispatch({type:LIKE_POST,payload:post});

  } catch (error) {
    console.log(error);
  }
}


export const unlikePost=(data)=> async (dispatch)=>{
    try {
      const res = await fetch(`${BASE_URL}/api/post/unlike/${data.postId}`,{
          method:"PUT",
          headers:{
              "Content-Type":"application/json",
              Authorization:"Bearer "+data.token
          }
      })
  
      const post = await res.json();
      
      dispatch({type:UNLIKE_POST,payload:post});
  
    } catch (error) {
      console.log(error);
    }
  }



  export const getPostById =(data)=>async (dispatch)=>{
     try {
        const res = await fetch(`${BASE_URL}/api/post/getPost/${data.postId}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer "+data.token
            }
        })

        const post = await res.json();

        dispatch({type:GET_POST_BY_ID,payload:post});


     } catch (error) {
        console.log(error);
     }
  }
