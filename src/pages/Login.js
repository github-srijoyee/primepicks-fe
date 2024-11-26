import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userSlice';

const loginSchema = yup.object({
    email: yup.string().email("Email should be valid").required("Please provide your registered Email"),
    password:yup.string().required("Password is required"),
  });

const Login = () => {
    const dispatch=useDispatch();
    const formik = useFormik({
        initialValues: {
          email: '',
          password:'',
        },
        validationSchema:loginSchema,
        onSubmit: (values) => {
        dispatch(loginUser(values))
        },
      });
  return (
    <>
         <Meta title={"Login"}/>
         <BreadCrumb title="Login"/>
         <div className='login-wrapper py-5 home-wrapper-2 bg-gray-100'>
            <div className='flex flex-wrap'>
                <div className='w-full'>
                    <div className='auth-card'>
                        <h3 className='text-center font-serif text-2xl mb-3'>Login</h3>
                        <form action="" onSubmit={formik.handleSubmit}>
                            <div>
                                
                                <input type='email' name='email' placeholder='Email' className='form-control w-full my-2 p-2 rounded-lg bg-gray-100' value={formik.values.email} onChange={formik.handleChange("email")} onBlur={formik.handleBlur("email")}/>
                               <div className='error text-red-500 text-xs'>{formik.touched.email && formik.errors.email}</div>

                               
                            </div>
                            <div>
                                
                                <input type='password' name='password' placeholder='Password' className='form-control w-full my-2 p-2 rounded-lg bg-gray-100' value={formik.values.password} onChange={formik.handleChange("password")} onBlur={formik.handleBlur("password")}/>
                               <div className='error text-red-500 text-xs'>{formik.touched.password && formik.errors.password}</div>
                            
                               
                            </div>
                            <Link to='/forgot-password' className='text-blue-700 text-xs text-underline'>Forgot Password?</Link>
                            <div className='flex justify-center gap-3 items-start mt-4'>
                                <button className='button border-0 h-10' type='submit'>Login</button>
                                <Link to="/signup" className='button signup'>Signup</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         </div>
    </>
  )
}

export default Login
