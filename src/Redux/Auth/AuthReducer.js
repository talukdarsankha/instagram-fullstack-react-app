import { GrReturn } from "react-icons/gr"



const initialValue={
  signUp:null,
  signin:null
}


export const AuthReducer=(state=initialValue, {type,payload})=>{
   if(type==="SIGN_UP"){
      console.log("Payload user "+payload);
      console.log(payload);
         return {...state,signUp:payload} ;

   }else if(type==="SIGN_IN"){
      console.log("signin payload ");
      console.log(payload);
      
      return {...state , signin:payload}

   }
   else{
    return state;
   }

   
}




