import { Button, FormControl, FormHelperText, FormLabel, Input, Stack, Textarea, useDisclosure, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ChangeProfileModal from "../../Components/PofileComponent/ChangeProfileModal";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getUserByToken, updateReqUserProfile, updateReqUserProfilePhoto } from "../../Redux/User/Action";
import { BiCheckCircle } from "react-icons/bi";
import { UploadToCloudinary } from "../../Config/UploadToCloudinary";
import { date } from "yup";

function EditProfile() {

  const [initialValue, setInitialValue] = useState({
    username:"",
    email:"",
    phone:"",
    password:"",
    name:"",
    mobile:"",
    website:"",
    gender:"",
    bio:""
  });
   
  const formik = useFormik({
      initialValues:{...initialValue},

      onSubmit:(values)=>{
        console.log(values);

        const data={
          token:token,
          data:{...values, id:user.reqUser?.id}
        }

        dispatch(updateReqUserProfile(data));

        toast({
          title: `Profile Updated Successfully ....`,
          status: 'warning',
          duration: 5000,
          isClosable: true,
        })
        
      }
  });





  const { isOpen, onClose, onOpen } = useDisclosure();


  const token = localStorage.getItem("token");

  const toast = useToast();

  const dispatch = useDispatch();

  const {user} = useSelector(store=>store);

  const [profileImageObjFile, setProfileImageObjFile] = useState(null);

  const [profileImageUrl, setProfileImageUrl] = useState("");





  const handleProfileChange=(e)=>{
     const profileFile = e.target.files[0];
     if(profileFile){

      setProfileImageObjFile(profileFile);

      setProfileImageUrl(URL.createObjectURL(profileFile));
      // after select profile modal will be close
      onClose();
     } else{

      toast({
        title: `Select Valid Photo...`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })

     }
  }


  const updateProfilePhoto= async()=>{ 

    console.log("profileImageObjFile state is");
    console.log(profileImageObjFile);
     const profileUrl = await UploadToCloudinary(profileImageObjFile);
     const data ={
      token:token,
      data :{
        id:user.reqUser?.id,
        image:profileUrl
      }
     }

     dispatch(updateReqUserProfilePhoto(data));

     toast({
      title: `Profile Photo Updated...`,
      status: 'warning',
      duration: 5000,
      isClosable: true,
    })
  }

  const handelProfilePhotoDelete =()=>{
    setProfileImageUrl("");
    setProfileImageObjFile(null);
    onClose();
  }

  useEffect(()=>{
      if(token){
        dispatch(getUserByToken(token));
      }
  },[token]);


  useEffect(()=>{

    const newValues={}

    if(user.reqUser){
      for(let item in initialValue){
        if(user.reqUser && user.reqUser[item]){
          newValues[item]=user.reqUser[item];
        }
      }

      formik.setValues(newValues);
    }

  },[user.reqUser])

  return (
    <div>
      <div className=" px-20 lg:px-40 py-10 items-center">
       <div className="flex pb-10">
          <div className=" w-[20%] flex">
            <img
              className="w-20 h-20 rounded-full"
              src={
                profileImageUrl ||
                user.reqUser?.image ||
                 "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
              alt="profilePhoto"
            />

           
          </div>

          <div className="flex flex-col gap-2 items-start">
            <p className="opacity-65 font-semibold"> Username</p>
            <p
              className="font-bold text-blue-800 cursor-pointer"
              onClick={() => onOpen()}
            >
          
              Change Profile Photo
            </p>

            {profileImageUrl && <Button className="ml-2" onClick={updateProfilePhoto} >Save</Button>}

           
          </div>

          
       </div>

       
      <form onSubmit={formik.handleSubmit}>
          <Stack spacing={6}>
            <FormControl id="name" className="flex">
                <FormLabel className="w-[15%]"> Name</FormLabel>
                <div>
                  <Input type="text" placeholder="Enter Name" className="w-full" 
                    {...formik.getFieldProps("name")}
                    />
                  <FormHelperText className="textsm">
                  Help Pepole discover your account by using the name you're known by: either your full name, nickname, or bussiness name.
                  </FormHelperText>
                </div>
            </FormControl>

            <FormControl id="username" className="flex " >
                  <FormLabel className="w-[15%]">Username</FormLabel>
                  <div>
                  <Input type="text" placeholder="Enter Username" className="w-full"
                   {...formik.getFieldProps("username")} />
                  <FormHelperText className="text-sm">
                  In most case, you'll be able to change your username back to ashok.zarmariya for another 14 days. Learn More
                  </FormHelperText>
                  </div>
            </FormControl>

            <FormControl id="website" className="flex">
              <FormLabel className="w-[15%]">Website</FormLabel>
               <div className="w-full">
                 <Input type="text" className="w-full" placeholder="Website URL"
                  {...formik.getFieldProps("website")}></Input>
                   <FormHelperText className="text-sm">(Optional)</FormHelperText>
               </div>
            </FormControl>

             <FormControl id="bio" className="flex" >
               <FormLabel className="w-[15%]">Bio</FormLabel>
               <div className="w-full">
                 <Textarea type="text" placeholder="Add Bio" className="w-full"
                  {...formik.getFieldProps("bio")}>
                     
                 </Textarea>
               </div>
             </FormControl>

             <div className="py-10">
                <p className="font-bold">Personal information</p>
                <p className="text-sm">Provide your personal information</p>
             </div>


             <FormControl id="email" className="flex">
              <FormLabel className="w-[15%]">Email</FormLabel>
              <div className="w-full">
                <Input type="email" placeholder="Enter Email Address" className="w-full"
                {...formik.getFieldProps("email")}/>
              </div>
             </FormControl>

             <FormControl id="phone" className="flex">
              <FormLabel className="w-[15%]">Phone No:</FormLabel>
              <div className="w-full">
                <Input type="number" placeholder="Enter Phone No" className="w-full"
                {...formik.getFieldProps("phone")}/>
              </div>
             </FormControl>
             

             <FormControl id="password" className="flex">
              <FormLabel className="w-[15%]">Password</FormLabel>
              <div className="w-full">
                <Input type="Password" placeholder="Enter Password" className="w-full"
                {...formik.getFieldProps("password")}/>
              </div>
             </FormControl>

             <FormControl id="gender" className="flex">
              <FormLabel className="w-[15%]">Gender</FormLabel>
              <div className="w-full">
                <Input type="text" placeholder="Gender" className="w-full"
                 {...formik.getFieldProps("gender")}/>
              </div>
             </FormControl>

             <div>
              <Button colorScheme="blue" type="submit">Save</Button>
             </div>

          </Stack>
      </form>

      </div>



      <ChangeProfileModal isopen={isOpen} onclose={onClose} handleProfileChange={handleProfileChange} 
        handelProfilePhotoDelete={handelProfilePhotoDelete} />
    </div>
  );
}

export default EditProfile;
