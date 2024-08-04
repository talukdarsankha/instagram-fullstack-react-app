import { Input, Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from "react-icons/bs";

// style for scroll bar

import "../Story/Scrollbar.css";

import "./CommentModal.css";
import CommentCard from "./CommentCard";
import { RiSendPlaneLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createPostComment } from "../../Redux/Comment/Action";
import { getPostById } from "../../Redux/Post/PostAction";
import { useParams } from "react-router";




function CommentModal({ isopen, onclose, postObj, handlelike, handleunlike, islikepost, handlesave, handleunsave, issaved}) {

  const dispatch = useDispatch();

  const {user,post, comment} = useSelector(store=>store);

  const token = localStorage.getItem("token");

  const {postId} = useParams();

  useEffect(()=>{
     if(postId){
      const data={
        token,
        postId
      }
      dispatch(getPostById(data))
     }
  },[postId, comment.createPostComment])

  return (
    <div>
      <Modal size={"4xl"} isOpen={isopen} onClose={onclose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="h-[85vh] flex rounded-md">
              <div className="h-full w-[45%] flex items-center overflow-hidden">
                <img
                  className="w-full  max-h-full"
                  src={postObj?.image || "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg"}
                />
              </div>

              <div className="pl-10 w-[55%] relative">
                <div className="flex justify-between items-center py-3">
                  <div className="flex space-x-2">
                    <div>
                      <img
                        className="h-11 w-11 rounded-full"
                        src={postObj.user.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                        alt="user"
                      />
                    </div>

                    <div className="flex flex-col justify-center">
                      <p className="font-medium">{postObj.user.name}</p>
                      <p className="font-thin opacity-70">{postObj.user.username}</p>
                    </div>
                  </div>

                  <BsThreeDots />
                </div>

                <hr />

                <div className="comment">
                  {post?.getPostById?.postComment?.length>0 && post?.getPostById?.postComment?.map((item,i) => (
                    <CommentCard key={i} commentObj={item} />
                  ))}
                </div>

                <div className="absolute bottom-0  px-3 py-2 w-[88%]">
                  <div className="flex text-2xl justify-between items-center">
                    <div className="flex space-x-3 items-center">
                      <div className="text-red-600">
                        {islikepost ? <AiFillHeart  onClick={handleunlike}/> : <AiOutlineHeart onClick={handlelike} />}
                      </div>
                      <AiOutlineComment />
                      <RiSendPlaneLine />
                    </div>
                    {issaved ? <BsBookmarkFill onClick={handleunsave} /> : <BsBookmark onClick={handlesave} />}
                  </div>

                  <div className="w-full p-3 border-t-2 mt-2">
                    <div className="flex items-center space-x-2">
                      <p className="font-semibold">{postObj?.likedUsers.length} Likes</p>
                      <p className="font-semibold">{postObj?.postComment.length} Comments</p>
                    </div>
                    <p className="text-sm opacity-70">Created at</p>
                  </div>


                  <div className="flex space-x-2 items-center w-full py-2">
                     <BsEmojiSmile className="text-2xl"/>

                     <input onKeyPress={(e)=>{
                       if(e.target.value && e.key==="Enter"){
                        console.log(e.target.value);
                        
                        const data={
                          token,
                          postId:postObj?.id,
                          data:{
                            content:e.target.value
                          }
                        }

                        dispatch(createPostComment(data))
                        e.target.value="";
                       }
                     }} 
                     className="w-full border-none outline-none border border-b-2"
                     type="text"
                     placeholder="add a comment..."
                     
                     />
                  </div>


                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default CommentModal;
