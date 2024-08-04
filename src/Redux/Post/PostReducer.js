import { GET_ALL_FOLLOING_USERPOST } from "./ActionType"
import { likePost } from "./PostAction"


const initialState = {
    createPost:null,
    allFollwingUserPost:[],
    profileUserAllPosts:[],
    likePost:null,
    unLikePost:null,
    getPostById:null
}

export const PostReducer =(state=initialState, {type,payload})=>{
    if(type==="CREATE_NEW_POST"){

        console.log("Post Created")
        console.log(payload)
        return {...state,createPost:payload}
        
    }else if(type==="GET_ALL_FOLLOING_USERPOST"){
        console.log("All following User posts :");
        console.log(payload);

        return {...state,allFollwingUserPost:payload}
    }
    else if(type==="PROFILE_USER_ALL_POSTS"){
        console.log("PROFILE_USER_ALL_POSTS is :");
        console.log(payload);

        return {...state,profileUserAllPosts:payload}
    }
    else if(type==="LIKE_POST"){
        console.log("LIKE_POST is :");
        console.log(payload);

        return {...state,likePost:payload}
    }

    else if(type==="UNLIKE_POST"){
        console.log("UNLIKE_POST is :");
        console.log(payload);

        return {...state,unLikePost:payload}
    }
    else if(type==="GET_POST_BY_ID"){
        console.log("GET_POST_BY_ID is :");
        console.log(payload);

        return {...state,getPostById:payload}
    }
    else{
        return state;
    }
}