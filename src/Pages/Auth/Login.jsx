



import { Box, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router'

import * as Yup from 'yup'
import { signInAction } from '../../Redux/Auth/Action';
import { getUserByToken } from '../../Redux/User/Action';


const validationschema = Yup.object().shape({
  email:Yup.string().email("Invalid Email").required("Email id is required..."),
  password:Yup.string().min(4,"Min 4").max(8,"max 8").required("Password is required....")
})




function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {auth,user} = useSelector(store=>store);


  const jwt = localStorage.getItem("token");

  useEffect(()=>{
    if(jwt){
      dispatch(getUserByToken(jwt));
      console.log(jwt);
    }
  },[jwt])

  useEffect(()=>{
    if(user.reqUser){
      console.log(user.reqUser)
      navigate(`/${user.reqUser?.username}`) 
          
    }
  },[user.reqUser])


  const handleSubmit= (values,action)=>{
    console.log(values);
    dispatch(signInAction(values));
  }

  const initialValues={
    email:"",
    password:""
  }




  return (
    <div>
       <div className='border border-2'>
          <Box p={8} className='w-full' display={"flex"} flexDirection={"column"} alignItems={"center"}>

           <img className='mb-4' src="https://i.imgur.com/zqpwkLQ.png" alt="instagramclone"/>

             <Formik
             initialValues={initialValues}
             validationSchema={validationschema}
             onSubmit={handleSubmit}
             >
                {(formikProps)=>(
                  <Form className='space-y-6 w-full'> 
                       <Field name="email">
                          {({field,form})=>(
                            <FormControl isInvalid={form.errors.email && form.touched.email}>
                              <Input className='w-full' {...field} type="email" placeholder="Enter email" />
                              <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                            </FormControl>
                          )}
                       </Field>
                       
                       <Field name="password">
                            {({field,form})=>(
                              <FormControl isInvalid={form.errors.password && form.touched.password}>
                                <Input className='w-full' {...field} type='password' placeholder='Enter Password'/>
                                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                              </FormControl>
                            )}
                       </Field>

                       <p className='text-sm text-center' >People who use our service may have uploaded your contact
                       information to Instagram. Learn More</p>

                       <p className='text-sm text-center' >By signing up, you agree to our Terms , Privacy Policy and
                       Cookies Policy .</p>


                       <Button className="w-full"
                        mt={4}
                        colorScheme='blue'
                        type='submit'
                        isLoading={formikProps.isSubmitting}>
                        Signin
                       </Button>

                       <p className='text-sm text-center'>Forgot Password?</p>

                  </Form>
                )}
             </Formik>
          </Box>
       </div>

       <div className='mt-4 py-4 border w-full border-slate-500'>
              <p className='text-sm text-center'>if you don't have an account? 
                <span onClick={()=>{navigate("/signup")}} className='ml-2 text-blue-600 cursor-pointer'> signup
                </span></p>
       </div>
    </div>
  )
}

export default Login




// import { Box, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
// import { Field, Form, Formik } from 'formik'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router'
// import * as Yup from 'yup';
// import { signInAction } from '../../Redux/Auth/Action'
// import { getUserByToken } from '../../Redux/User/Action'

// const validationSchema=Yup.object().shape({
//   email:Yup.string().email("invalid email address").required("email is required"),
//   password:Yup.string().min(4,"password must be atleast 4 characters").required("password is required")
// })

// const Login = () => {
//   const navigate=useNavigate();
//   const dispatch=useDispatch();
//   const {user} =useSelector(selector=>selector);

//   const navigateRegister=()=>{
//     navigate("/signup");
//   }
  
//   const jwt=localStorage.getItem("token");
//   useEffect(()=>{
//     if(jwt){
//      dispatch(getUserByToken(jwt));
//      console.log("get user from token");
    
//      console.log(user.reqUser);


//     }
//   },[jwt])

//   useEffect(()=>{
//     if(user.reqUser){
//       navigate(`/${user.reqUser?.username}`);
//     }
//   },[jwt,user.reqUser])

//   const initialValues={
//     email:"",
//     password:""
//   }

//   const handleSubmit=(values,action)=>{
//     console.log(values);
//     dispatch(signInAction(values));
//     action.setSubmitting(false);
//   }

//   return (
//     <div>
//       <div className='border border-slate-300'>
//         <Box p={8} display={'flex'} flexDirection={'column'} alignItems={'center'}>
//           <img
//            className='mb-5'
//            src="https://i.imgur.com/zqpwkLQ.png" 
//            alt='intagram'
//           />
//           <Formik
//            initialValues={initialValues}
//            validationSchema={validationSchema}
//            onSubmit={handleSubmit}
//           >
//             {(formikProps)=>
//              <Form className='space-y-8'>
//               <Field name="email">
//                 {({field,form})=>(
//                   <FormControl
//                    isInvalid={form.errors.email && form.touched.email}
//                   >
//                     <Input className='w-full' {...field} placeholder='enter registered email'/>
//                     <FormErrorMessage>{form.errors.email}</FormErrorMessage>
//                   </FormControl>
//                 )}
//               </Field>

//               <Field name="password">
//                 {({field,form})=>(
//                   <FormControl isInvalid={form.errors.password && form.touched.password}>
//                     <Input className='w-full' {...field} placeholder='enter registered password'/>
//                     <FormErrorMessage>{form.errors.password}</FormErrorMessage>
//                   </FormControl>
//                 )}
//               </Field>
//               <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, maxime?</p>
//               <Button
//                className='w-full'
//                mt={4}
//                colorScheme='blue'
//                type='submit'
//                isLoading={formikProps.isSubmitting}
//               >
//                 Login
//               </Button>
//              </Form>
//             }
//           </Formik>
//         </Box>
//       </div>
//       <div className="border border-slate-400 mt-5">
//         <p className="w-full py-2 text-center text-sm">Don't have an account <span onClick={navigateRegister} className='ml-2 text-blue-400 cursor-pointer'>Register</span></p>
//       </div>
//     </div>
//   )
// }

// export default Login