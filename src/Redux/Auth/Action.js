import { type } from "@testing-library/user-event/dist/type";
import { SIGN_IN, SIGN_UP } from "./ActionType";


export const signUpAction=(data)=>async (dispatch)=>{
    try {
        const res = await fetch("http://localhost:8080/signUp",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })

        const user = await res.json();
        dispatch({type:SIGN_UP,payload:user});
        
    } catch (error) {
        console.log(error);
    }
}




 export const signInAction =(data)=> async (dispatch)=>{

    try {
        const res = await fetch("http://localhost:8080/signin",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization: "Basic "+btoa(data.email+":"+data.password)
            }
        })

        const token = res.headers.get("Authorization");
        localStorage.setItem("token",token);

        const user = await res.json();
        dispatch({type:SIGN_IN,payload:user});


        
    } catch (error) {
        console.log(error);
    }

 }





