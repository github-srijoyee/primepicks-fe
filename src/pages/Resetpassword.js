import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Resetpassword = () => {
  return (
    <>
      <Meta title={"Reset Password"}/>
      <BreadCrumb title="Reset Password"/> 
      <div className='login-wrapper py-5 home-wrapper-2 bg-gray-100'>
            <div className='flex flex-wrap'>
                <div className='w-full'>
                    <div className='auth-card'>
                        <h3 className='text-center font-serif text-2xl mb-3'>Reset Password</h3>
                        <form action="">
                       
                            <div>
                                
                                <input type='password' name='password' placeholder='Password' className='form-control w-full my-2 p-2 rounded-lg bg-gray-100'/>
                               
                            </div>
                            <div>
                                
                                <input type='password' name='confpassword' placeholder='Confirm Password' className='form-control w-full my-2 p-2 rounded-lg bg-gray-100'/>
                               
                            </div>
                            <div className='flex justify-center gap-3 items-start'>
                                <button className='button border-0 h-10 mt-3'>Ok</button>
                               
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         </div>
    </>
  )
}

export default Resetpassword
