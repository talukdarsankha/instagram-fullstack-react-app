
import { Box, Button, FormControl, FormErrorMessage, Input, useToast } from '@chakra-ui/react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as Yup from 'yup'
import { signUpAction } from '../../Redux/Auth/Action'
import { useNavigate } from 'react-router'

const validationSchema = Yup.object().shape({
  email:Yup.string().email("Invalid Email Address").required("This Email Field is Required...."),
  password:Yup.string().min(4,"Min 4").max(8,"max 8").required("This password Field is Required....")
})

function Register() {



  const dispatch = useDispatch();
  const {auth,user} = useSelector(store=>store);
  const navigate = useNavigate();
  const toast = useToast();



  useEffect(()=>{
    if(user.reqUser){
      console.log("user.reqUser is: ")
      console.log(user.reqUser)
      navigate(`/${user.reqUser?.username}`)
    }
  },[user.reqUser])



  const initialValue = {
    email:"",
    username:"",
    name:"",
    password:""
  }

  const handleSubmit= (values,action)=>{
     console.log(values);
   
     dispatch(signUpAction(values));
     
    //  action.setSubmitting(false)
  }

useEffect(()=>{
  if(auth.signUp){
    navigate("/signin");
    toast({
      title:`Account Created ${auth.signUp?.username}`,
      status:"success",
      duration:5000,
      isClosable:true
    })
  }
},[auth.signUp])





  return (
    <div>


      <div className='border border-1'>
          <Box className=" border border-2 flex" p={8} flexDirection={"column"} alignItems={"center"} >
              <img className='mb-3' src="https://i.imgur.com/zqpwkLQ.png" alt="instagram-logo" />

              <Formik
               initialValues={initialValue}
               validationSchema={validationSchema}
               onSubmit={handleSubmit}

              >
                 {(formikProps)=> <Form className='space-y-4' >
                         <Field name="email">
                             {({field,form})=><FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <Input {...field} type="email" className='w-full' placeholder='Enter Email or Phone No' />
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>}
                         </Field>

                         <Field name="username">
                            {({field,form})=>(<FormControl isInvalid={form.errors.username && form.touched.username}>
                                <Input {...field} type='text' placeholder='Enter Username' className='w-full'/>
                                <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                            </FormControl>)}

                         </Field>

                         <Field name="name">
                                {({field,form})=>(
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <Input {...field} type='text' placeholder='Enter Fullname'/>
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                         </Field>

                         <Field name="password">
                              {({field,form})=>(
                                <FormControl isInvalid={form.errors.password && form.touched.password} >
                                    <Input className='w-full' {...field} type='text' placeholder='Enter Password'/>
                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                </FormControl>
                              )}  
                         </Field>

                         <p className='text-sm text-center'>People who use our service may have uploaded your contact information to Instagram. <span className='text-blue-500'>Learn More</span></p>

                         <p className='text-sm text-center'>By signing up, you agree to our Terms , Privacy Policy and <span className='text-blue-500'>Cookies Policy.</span></p>

                         <Button type='submit' colorScheme='blue' className='w-full mt-4' isLoading={formikProps.isSubmitting} >
                          Register
                         </Button>


                    </Form>}
              </Formik>

          </Box>
      </div>

      <div className='w-full mt-5 border border-slate-400'>
         <p className='text-center py-4'>if you already have an account? <span onClick={()=>{navigate("/signin")}} className='ml-2 text-blue-500 cursor-pointer'>SignIn</span> </p>
      </div>

    </div>
  )
}

export default Register


