import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
         <Meta title={"Login"}/>
         <BreadCrumb title="Login"/>
         <div className='login-wrapper py-5 home-wrapper-2 bg-gray-100'>
            <div className='flex flex-wrap'>
                <div className='w-full'>
                    <div className='auth-card'>
                        <h3 className='text-center font-serif text-2xl mb-3'>Login</h3>
                        <form action="">
                            <div>
                                
                                <input type='email' name='email' placeholder='Email' className='form-control w-full my-2 p-2 rounded-lg bg-gray-100'/>
                               
                            </div>
                            <div>
                                
                                <input type='password' name='password' placeholder='Password' className='form-control w-full my-2 p-2 rounded-lg bg-gray-100'/>
                               
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
