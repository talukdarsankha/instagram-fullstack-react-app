import { useEffect } from "react";
import Router from "./Pages/Router";
import { useDispatch, useSelector } from "react-redux";
import { getUserByToken } from "./Redux/User/Action";
import { useNavigate } from "react-router";



function App() {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const jwt = localStorage.getItem("token");

  const {user,post} = useSelector(store=>store);

  useEffect(()=>{
    if(jwt){
      dispatch(getUserByToken(jwt));
    }else{
      navigate("/signin");
    }
  },[jwt, user.savePostUser, user.unsavePostUser])

  return (
    <div>
       <Router/>
    </div>
  );
}

export default App;
