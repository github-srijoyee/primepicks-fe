import React from 'react';
import {Link} from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2 bg-gray-100">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-wrap">
            <div className="w-7/12">
              <div className="checkout-left-data">
                <h3 className="website-name text-3xl font-bold">PrimePicks.</h3>
                <nav className="flex text-gray-600 mt-5 mb-5" aria-label="Breadcrumb">
                  <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li>
                      <div className="flex items-center">
                        <a href="#" className="text-blue-600 hover:text-blue-800">Home</a>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-gray-400 mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="ml-1 text-gray-500">Information</span>
                      </div>
                    </li>
                    <li aria-current="page">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-gray-400 mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <a href="#" className="ml-1 text-blue-600 hover:text-blue-800">Shipping</a>
                      </div>
                    </li>
                    <li aria-current="page">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-gray-400 mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <a href="#" className="ml-1 text-blue-600 hover:text-blue-800">Payment</a>
                      </div>
                    </li>
                  </ol>
                </nav>
                <h4 className="title text-2xl text-violet-900 font-serif mb-5">Contact Information</h4>
                <p className="user-details text-sm font-semibold mb-5">Srijoyee Bhanja<span className='text-gray-600 mx-1'> (bhanja.srijoyee2003@gmail.com)</span></p>
                <h4 className='text-xl text-violet-700 font-serif mb-3'>Shipping Address</h4>
                <form action="" className="flex flex-wrap gap-5 justify-between">
                  <div className="w-full">
                    <select className="form-control form-select w-[95%] flex border border-gray-200 rounded-lg p-2">
                      <option value="" selected disabled>Selected Country</option>
                    </select>
                  </div>
                  <div className="flex flex-grow">
                    <input type="text" className="form-control w-[95%] border border-gray-200 rounded-lg p-2" placeholder="First Name" />
                  </div>
                  <div className="flex-grow">
                    <input type="text" className="form-control w-[90%] border border-gray-200 rounded-lg p-2" placeholder="Last Name" />
                  </div>
                  <div className="w-full">
                    <input type="text" className="form-control w-[95%] border border-gray-200 rounded-lg p-2" placeholder="Address" />
                  </div>
                  <div className="w-full">
                    <input type="text" className="form-control w-[95%] border border-gray-200 rounded-lg p-2" placeholder="Apartment, Suite, etc" />
                  </div>
                  <div className="flex-grow ">
                    <input type="text" className="form-control w-[100%] border border-gray-200 rounded-lg p-2" placeholder="City" />
                  </div>
                  <div>
                    <select name="" id="" className="form-control form-select w-[100%] border border-gray-200 rounded-lg p-2">
                      <option value="" selected disabled>Select State</option>
                    </select>
                  </div>
                  <div className="flex-grow">
                    <input type="text" className="form-control w-[88%] border border-gray-200 rounded-lg p-2" placeholder="ZipCode" />
                  </div>
                  <div className='w-full mt-2'>
                    <div className='flex justify-between items-center'>
                      <Link to="/cart" className='flex'><BiArrowBack className='mt-1 me-2'/>Return to Cart</Link>
                      <Link to="#" className='button me-9'>Continue to Shipping</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-5/12">
            <div className='border-bottom py-4'>
              <div className='flex gap-4 items-center'>
                <div className='w-24 relative'>
                <span class="bg-gray-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full top-2 right-2">
  1
</span>
                  <img src='watch.png' alt='watch' className='w-full'/>
                </div>
                <div className='w-72'>
                  <h5 className='title'>Watch</h5>
                  <p className='description'>hgjfdrsess</p>
                </div>
                <div className='flex-grow'>
                <h5>Rs. 3000</h5>
                </div>
              </div>
            </div>
            <div className='border-bottom py-4'>
            <div className='flex justify-between items-center'>
              <p>Subtotal</p>
              <p className='text-gray-600'>Rs. 6000</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className="mb-0">Shipping</p>
              <p className="mb-0 text-gray-600">Rs. 60</p>
            </div>
            </div>
            <div className='flex justify-between items-center border-bottom py-4'>
              <h4 className='text-lg font-semibold tracking-wide'>Total</h4>
              <h5 className='text-lg font-bold text-gray-600'>Rs. 6060</h5>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

