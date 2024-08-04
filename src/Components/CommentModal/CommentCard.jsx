import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { likeComment, unlikeComment } from "../../Redux/Comment/Action";
import { isCommentLikeByReqUser } from "../../Config/Logis";

function CommentCard({commentObj}) {

  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  const {comment, user} = useSelector(store=>store);

  const data = {
    token,
    commentId:commentObj?.id
  }

  const handleCommentLike =()=>{
    setIsCommentLike(true)
    dispatch(likeComment(data));
  }

  const handleCommentUnlike =()=>{
     dispatch(unlikeComment(data))
  }
  
  const [isCommentLike, setIsCommentLike] = useState(false);

  useEffect(()=>{

    if(commentObj && user.reqUser){
      setIsCommentLike(isCommentLikeByReqUser(user?.reqUser?.id, commentObj))
    }
  },[commentObj, user.reqUser]) // now need to rerender mapping of comment in comment modal


  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center space-x-1">
        <div>
          <img
            className="h-8 w-8 rounded-full"
            src={commentObj?.commentedUser?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
            alt="user"
          />
        </div>

        <div className="ml-3">
          <p>
            <span className="opacity-70">{commentObj?.commentedUser?.username}</span>
            <span className="ml-3 font-medium">{commentObj?.content}</span>
          </p>

          <div className="flex items-center space-x-3 pt-2 text-sm opacity-70">
            <span>Created At</span>
            <span>10 Likes</span>
          </div>
        </div>
      </div>

      <div className="text-red-600 text-sm cursor-pointer hover:opacity-50">
        {isCommentLike? <AiFillHeart onClick={handleCommentUnlike}/> :<AiOutlineHeart onClick={handleCommentLike}/>}
      </div>
    </div>
  );
}

export default CommentCard;
