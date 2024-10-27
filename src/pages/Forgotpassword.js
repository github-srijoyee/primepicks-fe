import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

const Forgotpassword = () => {
  return (
    <>
             <Meta title={"Forgot Password"}/>
             <BreadCrumb title="Forgot Password"/>  
             <div className='login-wrapper py-5 home-wrapper-2 bg-gray-100'>
            <div className='flex flex-wrap'>
                <div className='w-full'>
                    <div className='auth-card'>
                        <h3 className='text-center font-serif text-2xl mb-3'>Reset Your Password</h3>
                        <p className='text-center mt-2 text-sm mb-3 text-gray-500'>Check your email to reset your password</p>
                        <form action="">
                            <div>
                                
                                <input type='email' name='email' placeholder='Email' className='form-control w-full my-2 p-2 rounded-lg bg-gray-100'/>
                               
                            </div>
                            <div className='flex justify-center gap-3 items-center flex-col'>
                                <button className='button border-0 h-10 mt-4' type='submit'>Submit</button>
                                <Link to='/login' className='text-blue-700 text-xs text-underline'>Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         </div>
    </>
  )
}

export default Forgotpassword
