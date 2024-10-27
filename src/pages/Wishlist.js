import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Wishlist = () => {
  return (
    <>
     <Meta title={"Wishlist"}/>
     <BreadCrumb title="Wishlist"/> 
     <div className='wishlist-wrapper home-wrapper-2 py-5 bg-gray-100'>
        <div className='max-w-screen-xl mx-auto'>
<div className='flex flex-wrap gap-4'>
    <div className='w-1/4'>
    <div className='wishlist-card bg-white rounded-md relative'>
        <img src='cross.svg' alt='cross' className='absolute cross w-full'/>
        <div className='wishlist-card-image'>
<img src='watch.png' alt='watch' className='w-full'/>
        </div>
        <div className='px-3 py-3'>
<h5 className='title'>Titan Sonata Watch</h5>
<h6 className='price'>Rs 3000</h6>
        </div>
    </div>
    </div>
    <div className='w-1/4'>
    <div className='wishlist-card bg-white rounded-md relative'>
        <img src='cross.svg' alt='cross' className='absolute cross w-full'/>
        <div className='wishlist-card-image'>
<img src='watch.png' alt='watch' className='w-full'/>
        </div>
        <div className='px-3 py-3'>
<h5 className='title'>Titan Sonata Watch</h5>
<h6 className='price'>Rs 3000</h6>
        </div>
    </div>
    </div>
    <div className='w-1/4'>
    <div className='wishlist-card bg-white rounded-md relative'>
        <img src='cross.svg' alt='cross' className='absolute cross w-full'/>
        <div className='wishlist-card-image'>
<img src='watch.png' alt='watch' className='w-full'/>
        </div>
        <div className='px-3 py-3'>
<h5 className='title'>Titan Sonata Watch</h5>
<h6 className='price'>Rs 3000</h6>
        </div>
    </div>
    </div>
</div>
        </div>
     </div>
    </>
  )
}

export default Wishlist
