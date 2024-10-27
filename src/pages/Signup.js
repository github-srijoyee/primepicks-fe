import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"}/>
      <BreadCrumb title="Sign Up"/> 
      <div className='login-wrapper py-5 home-wrapper-2 bg-gray-100'>
            <div className='flex flex-wrap'>
                <div className='w-full'>
                    <div className='auth-card'>
                        <h3 className='text-center font-serif text-2xl mb-3'>Sign Up</h3>
                        <form action="">
                        <div>
                                
                                <input type='text' name='name' placeholder='Name' className='form-control w-full my-2 p-2 rounded-lg bg-gray-100'/>
                               
                            </div>
                            <div>
                                
                                <input type='email' name='email' placeholder='Email' className='form-control w-full my-2 p-2 rounded-lg bg-gray-100'/>
                               
                            </div>
                            <div>
                                
                                <input type='password' name='password' placeholder='Password' className='form-control w-full my-2 p-2 rounded-lg bg-gray-100'/>
                               
                            </div>
                            <div>
                                
                                <input type='tel' name='mobile' placeholder='Mobile Number' className='form-control w-full my-2 p-2 rounded-lg bg-gray-100'/>
                               
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
