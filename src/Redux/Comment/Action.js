import { BASE_URL } from "../../Config/util"
import { CREATE_POST_COMMENT, LIKE_COMMENT, UNLIKE_COMMENT } from "./ActionType";


export const createPostComment=(data)=> async (dispatch)=>{
    try {
        const res = await fetch(`${BASE_URL}/api/comment/post/${data.postId}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer "+data.token
            },
            body:JSON.stringify(data.data)
        })

        const comment = await res.json();
        dispatch({type:CREATE_POST_COMMENT,payload:comment});
        
    } catch (error) {
        console.log(error)
    }
}

export const likeComment =(data)=> async (dispatch)=> {
   try {
    const res = await fetch(`${BASE_URL}/api/comment/like/${data.commentId}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            Authorization:"Bearer "+data.token
        }
    })

    const comment = await res.json();

    dispatch({type:LIKE_COMMENT,payload:comment});

   } catch (error) {
    console.log(error);
   }
}

export const unlikeComment =(data)=> async (dispatch)=> {
    try {
     const res = await fetch(`${BASE_URL}/api/comment/unlike/${data.commentId}`,{
         method:"PUT",
         headers:{
             "Content-Type":"application/json",
             Authorization:"Bearer "+data.token
         }
     })
 
     const comment = await res.json();
 
     dispatch({type:UNLIKE_COMMENT,payload:comment});
 
    } catch (error) {
     console.log(error);
    }
 }

