import { BASE_URL } from "../../Config/util";
import { SEARCH_USER } from "./ActionType";



export const searchUserAction =(data)=> async (dispatch)=>{
  try {
    const res = await fetch(`${BASE_URL}/api/user/search?query=${data.searchQuery}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization:"Bearer "+data.token
        }
    })

    const searchUser = await res.json();

    dispatch({type:"SEARCH_USER", payload:searchUser});
    
  } catch (error) {
    console.log(error);
  }
}

