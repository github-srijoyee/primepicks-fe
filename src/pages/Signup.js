import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/user/userSlice';

const signUpSchema = yup.object({
    firstname: yup.string().defined("First Name is required"),
    lastname: yup.string().required("Last Name is required"),
    email: yup.string().email("Email should be valid").required("Oops! We require your Email"),
    mobile:yup.string().required("Mobile No is required"),
    password:yup.string().required("Password is required"),
  });

const Signup = () => {
    const dispatch=useDispatch();
    const formik = useFormik({
        initialValues: {
          firstname: '',
          lastname: '',
          email: '',
          mobile:'',
          password:'',
        },
        validationSchema:signUpSchema,
        onSubmit: (values) => {
          dispatch(registerUser(values));
        },
      });
  return (
    <>
      <Meta title={"Sign Up"}/>
      <BreadCrumb title="Sign Up"/> 
      <div className='login-wrapper py-5 home-wrapper-2 bg-gray-100'>
            <div className='flex flex-wrap'>
                <div className='w-full'>
                    <div className='auth-card'>
                        <h3 className='text-center font-serif text-2xl mb-3'>Sign Up</h3>
                        <form action="" onSubmit={formik.handleSubmit}>
                        <div>
                                
                                <input type='text' name='firstname' placeholder='First Name' className='form-control w-full my-2 p-2 rounded-lg bg-gray-100' value={formik.values.firstname} onChange={formik.handleChange("firstname")} onBlur={formik.handleBlur("firstname")}/>
                               <div className='error text-red-500 text-xs'>{formik.touched.firstname && formik.errors.firstname}</div>
                            </div>
                            <div>
                                
                                <input type='text' name='lastname' placeholder='Last Name' className='form-control w-full my-2 p-2 rounded-lg bg-gray-100' value={formik.values.lastname} onChange={formik.handleChange("lastname")} onBlur={formik.handleBlur("lastname")}/>
                               <div className='error text-red-500 text-xs'>{formik.touched.lastname && formik.errors.lastname}</div>
                            
                               
                            </div>
                            <div>
                                
                                <input type='email' name='email' placeholder='Email' className='form-control w-full my-2 p-2 rounded-lg bg-gray-100' value={formik.values.email} onChange={formik.handleChange("email")} onBlur={formik.handleBlur("email")}/>
                               <div className='error text-red-500 text-xs'>{formik.touched.email && formik.errors.email}</div>
                          
                               
                            </div>
                            <div>
                                
                                <input type='password' name='password' placeholder='Password' className='form-control w-full my-2 p-2 rounded-lg bg-gray-100' value={formik.values.password} onChange={formik.handleChange("password")} onBlur={formik.handleBlur("password")}/>
                               <div className='error text-red-500 text-xs'>{formik.touched.password && formik.errors.password}</div>
                           
                            </div>
                            <div>
                                
                                <input type='tel' name='mobile' placeholder='Mobile Number' className='form-control w-full my-2 p-2 rounded-lg bg-gray-100' value={formik.values.mobile} onChange={formik.handleChange("mobile")} onBlur={formik.handleBlur("mobile")}/>
                               <div className='error text-red-500 text-xs'>{formik.touched.mobile && formik.errors.mobile}</div>
                           
                               
                            </div>
                            <div className='flex justify-center gap-3 items-start'>
                                <button className='button border-0 h-10 mt-3'>Sign Up</button>
                               
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         </div>
    </>
  )
}

export default Signup
