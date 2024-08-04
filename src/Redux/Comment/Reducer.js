

const initialState={
    createPostComment:null,
    likeComment:null,
    unlikeComment:null
}

export const CommentReducer =(state=initialState, {type,payload})=>{
    if(type==="CREATE_POST_COMMENT"){
        console.log("CREATE_POST_COMMENT is : ")
        console.log(payload);

        return {...state,createPostComment:payload};
    }
    else if(type==="LIKE_COMMENT"){
        console.log("LIKE_COMMENT is : ")
        console.log(payload);

        return {...state,likeComment:payload};
    }
    else if(type==="UNLIKE_COMMENT"){
        console.log("UNLIKE_COMMENT is : ")
        console.log(payload);

        return {...state,unlikeComment:payload};
    }
    return state;
}

