import { getUserByUsername } from "./Action";
import { REQ_USER, REQ_USER_PROFILE_PHOTO_UPDATE } from "./ActionType"



const initialState={
    reqUser:null,
    updatedProfilePhoto:null,
    updateProfile:null,
    getUserByUsername:null,
    savePostUser:null,  // in this user all save post present
    unsavePostUser:null,
}

export const UserReducer =(state=initialState, {type,payload})=>{
        if(type==="REQ_USER"){
            console.log("reqUser payload ");
            console.log(payload);

            return {...state,reqUser:payload};
        }else if(type==="REQ_USER_PROFILE_PHOTO_UPDATE"){
            console.log("REQ_USER_PROFILE_PHOTO_UPDATE is: ");
            console.log(payload);

            return {...state,updatedProfilePhoto:payload};
        }
        else if(type==="REQ_USER_PROFILE_UPDATE"){
            console.log("REQ_USER_PROFILE_UPDATE is: ");
            console.log(payload);

            return {...state,updateProfile:payload};
        }
        else if(type==="GET_USER_BY_USEENAME"){
            console.log("GET_USER_BY_USEENAME is: ");
            console.log(payload);

            return {...state,getUserByUsername:payload};
        }
        else if(type==="SAVE_POST"){
            console.log("SAVE_POST user is: ");
            console.log(payload);

            return {...state,savePostUser:payload};
        }
        else if(type==="UNSAVE_POST"){
            console.log("UNSAVE_POST user is: ");
            console.log(payload);

            return {...state,unsavePostUser:payload};
        }
        else{
            return state;
        }
}

