

import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { BiCamera } from 'react-icons/bi'
import { FcAddImage, FcRemoveImage } from 'react-icons/fc'
import { MdAddAPhoto } from 'react-icons/md'
import { RxCrossCircled } from 'react-icons/rx'

function ChangeProfileModal({isopen,onclose, handleProfileChange, handelProfilePhotoDelete}) {
  return (
    <div>
       <Modal isOpen={isopen} onClose={onclose} isCentered>
          <ModalOverlay/>
          <ModalContent>

             <ModalHeader>
             
             </ModalHeader>
             <ModalBody>
                    <div className='text-blue-500  text-sm font-bold text-center cursor-pointer py-2'>
                        <label htmlFor="editProfilePicture" className='flex items-center justify-center gap-1'> Upload Photo  </label>
                        <input onChange={handleProfileChange} type="file" accept='image/*' id='editProfilePicture' name='editProfilePicture' hidden />
                        
                    </div>

                    <hr />

                    <p onClick={handelProfilePhotoDelete} className='text-red-600  font-bold text-center cursor-pointer py-2'>
                      <span>Remove Photo</span> 
                    </p>

                    <hr />

                    <p className='text-gray-700 font-semibold text-center cursor-pointer py-2' onClick={onclose}>
                      <span>Cancle </span> 
                    </p>
             </ModalBody>
          </ModalContent>
       </Modal>
    </div>
  )
}

export default ChangeProfileModal
