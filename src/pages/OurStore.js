import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import {Helmet} from "react-helmet";
import ReactStars from "react-rating-stars-component";
import Meta from '../components/Meta';
import ProductCard from "../components/ProductCard"
import Color from '../components/Color';

const OurStore = () => {
  const [grid,setGrid]=useState(4);
  
  return (
    <>
   <Meta title={"Our Store"}/>
      <BreadCrumb title="Our Store"/>
      <div className='bg-gray-200'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='flex flex-wrap'>
            <div className='w-1/4 mt-6'>
            <div className='filter-card mb-3 bg-white'><h3 className='filter-title'>Shop by categories</h3>
            <div>
              <ul className='ps-0'>
                <li>Garments</li>
                <li>Electonics</li>
                <li>Accessories</li>
                <li>Furnitures</li>
              </ul>
            </div>
            </div>
            <div className='filter-card mb-3 bg-white'><h3 className='filter-title'>Filter By</h3>
            <div>
              <h5 className='sub-title'>Availability</h5>
             <div>
              <div class="flex flex-row">
              <input type="checkbox" class="border-gray-300 rounded h-4 w-4" />
             
        <h1 class="font-medium leading-none ps-2 mb-3 text-xs text-gray-600">In Stock(1)</h1>
        </div>
        <div class="flex flex-row">
              <input type="checkbox" class="border-gray-300 rounded h-4 w-4" />
             
        <h1 class="text-gray-600 font-medium leading-none ps-2 text-xs">Out of Stock</h1>
        </div>
        </div>
        <h5 className='sub-title'>Price</h5>
        <div className='flex items-center gap-2'>
        <div class="relative">
    <input type="text" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
    <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">From</label>
</div>
<div class="relative">
    <input type="text" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
    <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">To</label>
</div>
</div>
<h5 className='sub-title'>Colors</h5>
<div>
  <Color/>
</div>
            </div>
            <h5 className='sub-title'>Size</h5>
            <div>
              <div class="flex flex-row">
              <input type="checkbox" class="border-gray-300 rounded h-4 w-4" />
             
        <h1 class="font-medium leading-none ps-2 mb-3 text-xs text-gray-600">S(2)</h1>
        </div>
        <div class="flex flex-row">
              <input type="checkbox" class="border-gray-300 rounded h-4 w-4" />
             
        <h1 class="text-gray-600 font-medium leading-none ps-2 text-xs">M(2)</h1>
        </div>
        </div>
            </div>
            <div className='filter-card mb-3 bg-white'><h3 className='filter-title'>Product Tags</h3>
            <div className='product-tags flex flex-wrap items-center gap-2'>
              <span className='inline-block bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'>
                Men's Clothes
              </span>
              <span className='inline-block bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'>
                Women's Clothes
              </span>
              <span className='inline-block bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'>
                Mobiles
              </span>
              <span className='inline-block bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'>
                Cameras
              </span>
              <span className='inline-block bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'>
                Headphones
              </span>
              <span className='inline-block bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'>
                Laptops
              </span>
              <span className='inline-block bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'>
                Footwears
              </span>
            </div>
            </div>
            <div className='filter-card mb-3 bg-white'><h3 className='filter-title'>Random Product</h3>
            <div>
              <div className='random-products mb-3 flex'>
                <div className='w-1/2'>
                  <img src='camera1.png' className='w-full'></img>
                </div>
                <div className='w-75'>
                  <h5 className='font-bold'>
                    DSLR Camera
                  </h5>
                  <ReactStars
                  count={5}
                  size={24}
                  value={4}
                  edit={false}
                  activeColor="#ffd700"
                  />
                  <b>Rs. 3000</b>
                </div>
              </div>
              <div className='random-products flex'>
                <div className='w-1/2'>
                  <img src='camera1.png' className='w-full'></img>
                </div>
                <div className='w-75'>
                  <h5 className='font-bold'>
                    DSLR Camera
                  </h5>
                  <ReactStars
                  count={5}
                  size={24}
                  value={4}
                  edit={false}
                  activeColor="#ffd700"
                  />
                  <b>Rs. 3000</b>
                </div>
              </div>
            </div>
            </div>
            </div>
            <div className='w-3/4'>
            <div className='filter-sort-grid'>
              <div className='flex justify-between items-center gap-2'>
              <div className='flex items-center gap-2'>
                <p className='mb-0 block w-20'>Sort By:</p>
                <select id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={"Default"}>
                  <option value="Default" >Best selling</option>
    <option value="title-ascending">Alphabetically, A-Z</option>
    <option value="title-descending">Alphabetically, Z-A</option>
    <option value="price-ascending">Price, low to high</option>
    <option value="price-descending">Price, high to low</option>
    <option value="created-ascending">Date,old to new</option>
    <option value="created-descending">Date,new to old</option>
  </select>     
              </div>
              <div className='flex items-center gap-2'>
                <p className='totalproducts mb-0'>
                  21 Products
                </p>
                <div className='flex gap-2 items-center'>
                  <div className='bg-[#f2f2f2] p-2 rounded-md'>
                  <img src='gr4.svg' onClick={()=>{setGrid(3);}} className='block  h-3 w-3 cursor-pointer' alt=''/>
                  </div>
                  <div className='bg-[#f2f2f2] p-2 rounded-md'>
                  <img src='gr3.svg' onClick={()=>{setGrid(4);}} className='block h-3 w-3 cursor-pointer' alt=''/>
                  </div>
                  <div className='bg-[#f2f2f2] p-2 rounded-md'>
                  <img src='gr2.svg' onClick={()=>{setGrid(6);}} className='block h-3 w-3 cursor-pointer' alt=''/>
                  </div>
                  <div className='bg-[#f2f2f2] p-2 rounded-md'>
                  <img src='gr.svg' onClick={()=>{setGrid(12);}} className='block h-3 w-3 cursor-pointer' alt=''/>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className='products-list pb-5'>
<div className='flex gap-1 flex-wrap'>
<ProductCard grid={grid}/>
</div>
              </div>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default OurStore
