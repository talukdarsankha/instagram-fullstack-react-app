
const initialState = {
    searchUser:[]
}


export const SearchReducer =(state=initialState, {type,payload})=> {
    if(type==="SEARCH_USER"){
        console.log("SEARCH_USER is :");
        console.log(payload);

        return {...state,searchUser:payload};
    }
    return state;
}


