

import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPhotoVideo } from 'react-icons/fa'

import "./CreatePostModal.css"
import { GrEmoji } from 'react-icons/gr'
import { GoLocation } from 'react-icons/go'
import { UploadToCloudinary } from '../../Config/UploadToCloudinary'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../../Redux/Post/PostAction'
import Swal from 'sweetalert2'

function CreatePostModal({isOpen,onClose}) {

    const token = localStorage.getItem("token");

    const [caption, setCaption] = useState("");

    const [location, setLocation] = useState(""); 
    
    const [selectedFile , setSelectedFile] = useState(null);

    const [imageUrl,setImageUrl] = useState("");

    const dispatch = useDispatch();

    const {user} = useSelector(store=>store);

    const handletextAreaChange=(e)=>{
      setCaption(e.target.value)
    }

    const handleLocation=(e)=>{
        setLocation(e.target.value)
      }

      const handleImgChange=async (e)=>{
        const file = e.target.files[0];
         if(file && (file.type.startsWith("image/") || file.type.startsWith("video/"))){
            const imgUrl = await UploadToCloudinary(file);
            setImageUrl(imgUrl);
            console.log("setImageUrl is :")
            console.log(imageUrl);

            setSelectedFile(file);
         }else{
          setSelectedFile(null);
          setImageUrl("");
          alert("Please Choose Any file !!!")
         }
      }

    const [isDragOver,setIsDragOver] = useState(false);

    const handleDragOver =(event)=>{
        event.preventDefault();
        event.dataTransfer.dropEffect="copy";
        setIsDragOver(true);
    }

    const handleDrop= async (event)=>{
      event.preventDefault();
      const dropFile = event.dataTransfer.files[0];
      if(dropFile && (dropFile.type.startsWith("image/") || dropFile.type.startsWith("video/"))){
       
        const imgUrl = await UploadToCloudinary(dropFile);
        setImageUrl(imgUrl);
        console.log("setImageUrl is :")
        console.log(imageUrl);

        setSelectedFile(dropFile);
     }else{
      setSelectedFile(null);
      setImageUrl("");
      alert("Please Choose Any file !!!")
     }
    }

    const handleDragLeave =()=>{
      setIsDragOver(false);
    }


    const handleCreatPost =()=>{
        const data={
          token:token,
          data:{
            caption,
            location,
            image:imageUrl
          }
        }

        const isTrue= dispatch(createPost(data));
        setSelectedFile(null);
        setImageUrl("");

        if(isTrue){
          Swal.fire({
            title: "Post Created Successfull..",
            icon: "success",
            timer: 5000
          }); 
        }

        onClose();
    }

  return (
    <div>
       <Modal size={"4xl"} isCentered isOpen={isOpen} onClose={onClose} >
           <ModalOverlay/>
           <ModalContent>
                <div className='flex py-2 px-10 justify-between items-center'>
                    <p>Create New Post</p>
                    
                    <div className='flex gap-3 items-center'>

                    <Button onClick={handleCreatPost} colorScheme='blue' size={"sm"} variant={"ghost"}>
                        Share
                    </Button>

                    <ModalCloseButton className='ml-4'/>
                    </div>
                </div>

                <hr />

                <ModalBody>
                     <div className='flex h-[70vh]'>

                         <div className='w-[50%]'
                          onDragOver={handleDragOver}
                          onDrop={handleDrop}
                          onDragLeave={handleDragLeave}>

                            {!selectedFile &&
                              <div className='h-full custom-drag-drop'>
                                <div className='flex flex-col  items-center'>
                                    <FaPhotoVideo className='text-4xl'/>
                                    <p className='font-semibold opacity-60'>Drag & Drop Photo or Video Here</p>
                                </div>

                                <label htmlFor="file-upload" className='custom-file-upload'>Select File From Device</label>
                                <input type="file" onChange={handleImgChange} id='file-upload' accept='image/*,video/*' />
                              </div>
                             } 

                             {selectedFile && <img src={URL.createObjectURL(selectedFile)} className='w-full max-h-full' alt='img'/>}
                         </div>

                          <div className=' border border-2 h-full'></div>

                         <div className='w-[50%]'>
                              <div className='flex items-center px-2 space-x-3'>
                                  <img className='w-10 h-10 rounded-full' src={user.reqUser?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="userImg" />

                                  <p className='font-semibold opacity-65'>{user.reqUser?.username}</p>
                              </div>

                              <div>
                                <textarea onChange={handletextAreaChange}
                                placeholder='Write Caption....'
                                className="captionInput px-4"
                                name='caption'
                                rows={8}
                                maxLength={220}
                                >

                                </textarea>
                              </div>

                              <div className='px-3 flex justify-between items-center'>
                                 <GrEmoji className='text-2xl'/>
                                 <p className='opacity-65'> {caption?.length}/220 </p>
                              </div>


                              <div className='flex justify-between items-center p-2 border border-t-2 border-b-2'>
                                 <input type="text" onChange={handleLocation} placeholder='add location...' name="location-input" className='location-input' id="" />
                                 <GoLocation/>
                                
                              </div>
                          </div>

                     </div>
                </ModalBody>

               
           </ModalContent>
       </Modal>
    </div>
  )
}

export default CreatePostModal
